# User Management

The User Management API provides a set of endpoints for managing users within the application. These endpoints allow developers to perform various operations such as creating, updating, retrieving, and deleting user accounts, as well as managing user roles and permissions.

# User List API

This API endpoint retrieves a list of users for given Account. The API allows filtering of users based on specific criteria and supports pagination.

## Endpoint

**URL:** `https://api.dev.app.thrivestack.ai/api/user/list`
**Method:** `POST`

## Headers

- `Authorization: Bearer <token>`: Replace `<token>` with a valid Thrivestack Management token to validate request. (Ref: [Token API](https://docs.app.thrivestack.ai/getting-started/analyze/authentication)) (Valid Scope: `user_management`)
- `Content-Type: application/json`: Indicates that the request body is in JSON format.

## Request Body

The request body should be in JSON format and contains the following parameters:

- `account_id` (string): The ID of the account for which the user list is requested.
- `filters` (array): An array of filter objects to filter the user list.
  - `key` (string): The field on which to apply the filter. In this example, the filter is applied on the `name` field.
  - `operator` (string): The operator to use for filtering. In this example, the operator is `contains`, which checks if the field contains a certain value.
  - `value` (string): The value to search for in the specified field.
- `page_size` (integer): The number of users to return per page. In this example, it is set to 10.
- `page_no` (integer): The page number to return. In this example, it is set to 0 (first page).

### Example Request Body

```json
{
  "account_id": "137e6fc0-46e0-4997-8ef5-6c8c14c1fab4",
  "filters": [
    {
      "key": "status",
      "operator": "contains",
      "value": "Deleted"
    }
  ],
  "page_size": 10,
  "page_no": 0
}
```

### Example Request

```bash
curl 'https://api.dev.app.thrivestack.ai/api/user/list' \
  -H 'Content-Type: application/json' \
  --data-raw '{"account_id":"137e6fc0-46e0-4997-8ef5-6c8c14c1fab4","filters":[{"key":"status","operator":"contains","value":"Deleted"}],"page_size":10000,"page_no":0}'
```

### Example response
 
```bash
{
    "users": [
        {
            "user_id": "f0162f13-2930-4eab-9ad5-2c5ac8e3fa97",
            "email_id": "najete4016@luvnish.com",
            "name": "user1",
            "role": [
                {
                    "id": "1f23a5f0-042b-4906-8351-182942ad83e7",
                    "name": "editor"
                },
                {
                    "id": "57073fb3-d66d-4165-9cdc-86db4f73930e",
                    "name": "admin"
                }
            ],
            "status": "Deleted",
            "invited_date": null,
            "member_since": "2024-08-12T06:51:31.561289Z",
            "last_active_at": "2024-08-12T06:51:31.561289Z"
        }
    ],
    "status": true
}
```

### Notes

Ensure that the **account_id** is correct and valid for the user list you wish to retrieve.
The **filters** can be adjusted to match different fields and operators based on the API’s capabilities.
The pagination parameters (page_size and page_no) should be set according to the needs of the data retrieval process.


# User Update API

This API endpoint is used to update user details in account for given user_id. The request requires authentication via a Bearer token and includes various user details in the request body.

## Endpoint

**URL:** `https://api.dev.app.thrivestack.ai/api/user/update`
**Method:** `POST`

## Headers

- `Authorization: Bearer <token>`: Replace `<token>` with a valid Thrivestack Management token to validate request. (Ref: [Token API](https://docs.app.thrivestack.ai/getting-started/analyze/authentication)) (Valid Scope: `user_management`)
- `Content-Type: application/json`: Indicates that the request body is in JSON format.

## Request Body

The request body should be in JSON format and contains the following parameters:

- `user_id` (string): The unique identifier of the user to be updated.
- `name` (string): The new name of the user.
- `role` (array): An array of role objects representing the roles assigned to the user.
  - `id` (string): The unique identifier of the role.
  - `name` (string): The name of the role.
- `status` (string): The new status of the user (e.g., "Active", "Inactive", "Deleted").

### Example Request Body

```json
{
  "user_id": "f0162f13-2930-4eab-9ad5-2c5ac8e3fa97",
  "name": "Joe D",
  "role": [
    {
      "id": "2223a5f0-042b-4906-8351-182942ad83e7",
      "name": "editor"
    },
    {
      "id": "43073fb3-d66d-4165-9cdc-86db4f73930e",
      "name": "admin"
    },
    {
      "id": "5b4a4869-1d02-4db7-ab79-a7e8cfcfe325",
      "name": "viewer"
    }
  ],
  "status": "Deleted"
}
```

### Example request

```bash
curl 'https://api.dev.app.thrivestack.ai/api/user/update' \

  -H 'Authorization: Bearer <token>' \
  -H 'Content-Type: application/json' \
  --data-raw '{"user_id":"f0162f13-2930-4eab-9ad5-2c5ac8e3fa97","name":"SQT","Role":[{"id":"2223a5f0-042b-4906-8351-182942ad83e7","name":"editor"},{"id":"43073fb3-d66d-4165-9cdc-86db4f73930e","name":"admin"},{"id":"5b4a4869-1d02-4db7-ab79-a7e8cfcfe325","name":"viewer"}],"status":"Deleted"}'
```

### Example response

```bash
{
"status": true
}
```

### Notes

Ensure that the **Authorization** header contains a valid Bearer token.
The **user_id** must be a valid identifier of the user in the system.
Adjust the **Role** and **Status** fields according to the desired update operation.
