# Teams API

The Team API provides a set of endpoints for managing teams related to account within the application. These endpoints allow developers to perform various operations such as retrieving and updating teams attached to an account.

# Teams List API

This API endpoint is used to retrieve the teams associated with a specific account in the application. The request requires the account ID to be included in the request body.

## Endpoint

**URL:** `https://api.app.thrivestack.ai/api/team/list`
**Method:** `POST`

## Headers

- `Authorization: Bearer <token>`: Replace `<token>` with a valid Thrivestack Management token to validate request. (Ref: [Token API](https://docs.app.thrivestack.ai/getting-started/analyze/authentication)) (Valid Scope: `user_management`)
- `Content-Type: application/json`: Indicates that the request body is in JSON format.

## Request Body

The request body should be in JSON format and contains the following parameter:

- `tenant_id` (string): The unique identifier of the account for which the teams are being requested.

### Example Request Body

```json
{
  "tenant_id": "137e6fc0-46e0-4997-8ef5-6c8c14c1fab4"
}
```

### Example cURL

```bash
curl '
https://api.app.thrivestack.ai/api/team/list'
  -H 'Authorization: Bearer <token>'
  -H 'Content-Type: application/json'
  --data-raw '{"tenant_id":"137e6fc0-46e0-4997-8ef5-6c8c14c1fab4"}'
```

### Example Response

```json
{
  "teams": [
    {
      "id": "1f23a5f0-042b-4906-8351-182942ad83e7",
      "name": "Dev Team"
    },
    {
      "id": "57073fb3-d66d-4165-9cdc-86db4f73930e",
      "name": "Sales Team"
    }
  ],
  "status": true
}
```

### Notes

Ensure that the **tenant_id** provided is valid and corresponds to an existing account in the system.
The response includes a **list of teams** associated with the specified account.
The **status: true** field in the response indicates that the request was successful.

# Teams Update API

This API endpoint is used to update team details for given tenant_id. The request requires authentication via a Bearer token and includes team details in the request body.

## Endpoint

**URL:** `https://api.app.thrivestack.ai/api/team/update`
**Method:** `POST`

## Headers

- `Authorization: Bearer <token>`: Replace `<token>` with a valid Thrivestack Management token to validate request. (Ref: [Token API](https://docs.app.thrivestack.ai/getting-started/analyze/authentication)) (Valid Scope: `user_management`)
- `Content-Type: application/json`: Indicates that the request body is in JSON format.

## Request Body

The request body should be in JSON format and contains the following parameters:

- `tenant_id` (string): The unique identifier of the account for which the teams are being updated.
- `team` (array): An array of team objects representing the teams assigned to the user.
  - `id` (string): The unique identifier of the team.
  - `name` (string): The name of the team.

### Example Request Body

```json
{
  "tenant_id": "f0162f13-2930-4eab-9ad5-2c5ac8e3fa97",
  "team": [
    {
      "id": "1f23a5f0-042b-4906-8351-182942ad83e7",
      "name": "Dev Team"
    },
    {
      "id": "57073fb3-d66d-4165-9cdc-86db4f73930e",
      "name": "Sales Team"
    }
  ]
}
```

### Example cURL

```bash
curl 'https://api.app.thrivestack.ai/api/user/update'
  -H 'Authorization: Bearer <token>'
  -H 'Content-Type: application/json'
  --data-raw '{
  "tenant_id": "f0162f13-2930-4eab-9ad5-2c5ac8e3fa97",
  "team": [
    {
      "id": "1f23a5f0-042b-4906-8351-182942ad83e7",
      "name": "Dev Team"
    },
    {
      "id": "57073fb3-d66d-4165-9cdc-86db4f73930e",
      "name": "Sales Team"
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
