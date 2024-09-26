# Role

The Role API provides a set of endpoints for managing roles related to users within the application. These endpoints allow developers to perform various operations such as retrieving and updating roles attached to users.

# Roles List API

This API endpoint is used to retrieve the roles associated with a specific account in the application. The request requires the account ID to be included in the request body.

## Endpoint

**URL:** `https://api.dev.app.thrivestack.ai/api/role/list`
**Method:** `POST`

## Headers

- `Authorization: Bearer <token>`: Replace `<token>` with a valid Thrivestack Management token to validate request. (Ref: [Token API](https://docs.app.thrivestack.ai/getting-started/analyze/authentication)) (Valid Scope: `user_management`)
- `Content-Type: application/json`: Indicates that the request body is in JSON format.

## Request Body

The request body should be in JSON format and contains the following parameter:

- `account_id` (string): The unique identifier of the account for which the roles are being requested.

### Example Request Body

```json
{
  "account_id": "137e6fc0-46e0-4997-8ef5-6c8c14c1fab4"
}
```

### Example cURL

```bash
curl '
https://api.dev.app.thrivestack.ai/api/role/list'
  -H 'Authorization: Bearer <token>'
  -H 'Content-Type: application/json'
  --data-raw '{"account_id":"137e6fc0-46e0-4997-8ef5-6c8c14c1fab4"}'
```

### Example Response

```json
{
  "roles": [
    {
      "id": "1f23a5f0-042b-4906-8351-182942ad83e7",
      "name": "editor"
    },
    {
      "id": "57073fb3-d66d-4165-9cdc-86db4f73930e",
      "name": "admin"
    },
    {
      "id": "6c4a4869-1d02-4db7-ab79-a7e8cfcfe325",
      "name": "viewer"
    }
  ],
  "status": true
}
```

### Notes

Ensure that the **account_id** provided is valid and corresponds to an existing account in the system.
The response includes a **list of roles** associated with the specified account.
The **status: true** field in the response indicates that the request was successful.

# Role Update API

This API endpoint is used to update role details for given account_id. The request requires authentication via a Bearer token and includes role details in the request body.

## Endpoint

**URL:** `https://api.dev.app.thrivestack.ai/api/role/update`
**Method:** `POST`

## Headers

- `Authorization: Bearer <token>`: Replace `<token>` with a valid Thrivestack Management token to validate request. (Ref: [Token API](https://docs.app.thrivestack.ai/getting-started/analyze/authentication)) (Valid Scope: `user_management`)
- `Content-Type: application/json`: Indicates that the request body is in JSON format.

## Request Body

The request body should be in JSON format and contains the following parameters:

- `tenant_id` (string): The unique identifier of the account for which the roles are being updated.
- `role` (array): An array of role objects representing the roles assigned to the user.
  - `id` (string): The unique identifier of the role.
  - `name` (string): The name of the role.

### Example Request Body

```json
{
  "tenant_id": "f0162f13-2930-4eab-9ad5-2c5ac8e3fa97",
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
  ]
}
```

### Example cURL

```bash
curl 'https://api.dev.app.thrivestack.ai/api/user/update'
  -H 'Authorization: Bearer <token>'
  -H 'Content-Type: application/json'
  --data-raw '{
  "tenant_id": "f0162f13-2930-4eab-9ad5-2c5ac8e3fa97",
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
  ]
}'
```

### Example response

```bash
{
    "status": true
}
```

### Notes

Ensure that the **Authorization** header contains a valid Bearer token.
The **tenant_id** must be a valid identifier of the user in the system.
Adjust the **Role** details according to the desired update operation.
