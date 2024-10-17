# Authentication

## Importance of Authentication

Authentication is crucial in ensuring that only authorized users and applications can access your APIs. It helps protect sensitive data, prevent unauthorized access, and maintain the integrity of your system. By implementing robust authentication mechanisms, you can safeguard your application from potential security threats.

## Thrivestack's Authentication Method

Thrivestack uses OAuth 2.0 for authentication, which is more secure compared to traditional API keys and normal JWT tokens. OAuth 2.0 provides enhanced security features, including token expiration, scope limitations, and secure token storage, making it a reliable choice for modern applications.

![ThriveStack Authentication Flowchart](/img/docs/analyze/apis/api-auth-flowchart.png)

## Steps to Generate an Access Token

### 1. Create an API Key
If an API key is not created already, then create one by following the steps below:

1. Navigate to [API Key Page](https://dev.app.thrivestack.ai/build/api-keys)
2. Click on **Create New API Key**.
3. Enter a name for your API key.
4. Select an expiry date.
5. Set the appropriate rotation frequency.
6. Click on **Create**.

You will receive a private RSA key along with key details. **Copy it and paste it somewhere safe or download the JSON file**.

### 2. Generate an Access Token Via Token API
This API endpoint is used to generate OAuth 2.0 token which will be used to authenticate other Thrivestack APIs.

**URL:** `https://api.dev.app.thrivestack.ai/api/token`  

**Method:** `POST`

#### Request Headers:

| Header Name     | Description                      | Example Value           |
|-----------------|----------------------------------|-------------------------|
| `Authorization` | Bearer token for authentication  | `Bearer <token>`        |
| `Content-Type`  | Media type of request body       | `application/json`      |

#### Request Body 

##### Fields:

| Field Name   | Type   | Required | Description                                                                                           |
|--------------|--------|----------|-------------------------------------------------------------------------------------------------------|
| `key_id`     | String | Yes      | The unique identifier of the API key                                                                  |
| `private_key`| String | Yes      | The private RSA key given to you while creating the API key                                           |
| `scopes`     | String | Yes      | The authorization for particular APIs. Find more [Scopes and Permissions](#scopes-and-permissions)    |
| `expiry`     | Int    | No       | The expiry of the token in minutes, which cannot be more than one day. (Default: 60)                  |

##### JSON Example:

```json
{
    "key_id":"f999282c-b6cf-4b48-9b1a-9021ee3d76b4",
    "private_key": "-----BEGIN RSA PRIVATE KEY-----\nMIIEpQIBAAKCAQEAni6CpVBjaDxHctYJFNypsQalOOWMRnVX8sebckq43c1RdTTB\nCiwdMFq6mRbjcAcgsyLlKlVEhzSWi7LYwupHH80tD0YwAWay5HPczqmriqMGSvQh\nzKViij24nU9hYbmUuOreEcT9kKNAwNTrQGpnc0ez39IXaAZGAAzKya/wx4ZJM7v/\n282+ORm/3rdw7Xq2L6adQ2IoFSS68GkWKzMkCpJ+E0s97pwMnL53E/gt9rRVqT1U\n2XUxNMmHcnGwyJVFc/ZUml/DjBCrswqsdw6fdEDiVYDoEo7b+o9rtoLLqsGa5OuMqK3\nq5MXrj+9esAByurSVNxRCsuu1xyWbb41Q+E0KwIDAQABAoIBAEjK4IZQ4x4ht0OK\naa13CoQTqc7wG8iE0Y9A+jDzX/V6OcU1HKygtmH9Lqeql8mDDjJBmdwefszJKBv\nEj9Ibqic0+KWixrp9uMYyoE0JWPsN8YgaLlzVlCFrMJ/uDGvpFgghUcqHwIDjpXu\npcAD901ertEOLoVJdccqG9wKokQ+t3dnLTDN0Do/p8IckejnmI0mUlJQsyZKvdxH\nM7CcmeqgdM9186iIk7dKR1DrFoOhVKYVYm3+CD29w25GCH6gegvEk1N09sIgEMr4\nP4dA23ac5iMv35BL965AMBuNQdaeG10VrJVQMYMZZix0QmniOvqDWs0NATsioOvq\nVk2cr2ECgYEAwjamGus+YVeLHoNxMYoVZlIQToh+fVCtGaOuXKRki4JUgpdfbhE6\n27LZf7p83dyxe/nFa/zLQKLKdOC1MYA4AxeDpzNg4esoEDKl42JrURuVYEm3MnyB\nPpn6TeQv8InlnFlyuQDYJhuucfXIMCfCsjpz9aPjL2STWgZtVbi6yfsCgYEA0IFR\n6ziib5STzLI90Vl+ed45j1RVPLdUCYLO4FY+Iv39QUjQmOpj6ejmvDFNjG5AM6Qy\nEldgO8MRRSR8xMeWfYxcARJY7rD8rqot6tyL2JRwdZF7vrxb1MhCYSKboo0tz5y5\nhG0mMgN4x0FYoS0YaiYvx5DGPIqET+4+lDfp15ECgYEAvhFRmoKjOAy/AAvPWZYz\nv0GM5+65K9cqsS75U30nUUkpf+y43jVKjvyH03MlBNQZdqVIyphKKmWnEZ9gdKNx\nLcVzeMzVdewd335Rzyjgsi32kJdUDLrAmg2DY3twV039QnhfyCLFZvYsUSci1c3z\nww1lsv7DNfyOIMqtcfkqBMUCgYEAlzGfWIVZ7LV9s4pwnzVZLEAD1zZdFMkPrFHp\nd+2x4yfwlH2bnbchuoWDg2XxCOsNrSTclkY75zoddNjvjLX6H5I/SRun13YJ1RJc\nd5lz4xpIrkhPxlDJ+nM5BzzURLxBQvIv6KJJdyzjUQHGpiGQObD1Jq6JwW7kYR2u\nzUX6ULECgYEAjNbvug/g/T5h+hLeilC2/kUGyKi28wCqYumfNYlNEr5TAfL17giL\n6+tv5i/te480E8xQdbqiF7TCxBvkFf8xRoKbYosWfeZb4MXOvv/IHD0/Vhjh7GXG\nSrn/RiUh83YrJQa+2InBEprt6UIpvkkEysMoGg45VeU8JylxlrxM3i8=\n-----END RSA PRIVATE KEY-----\n",
    "scopes": ["telemetry_apis"],
    "expiry": 1300
}
```
#### Response Body 
##### Fields:

| Field Name   | Type   | Description                                                                          |
|--------------|--------|--------------------------------------------------------------------------------------|
| `token`      | String | The authentication token for the session.                                            |
| `response_id`| String | A unique identifier for the response.                                                |
##### JSON Example:
```json
{
    "token": "eyJhbGciOiJSUzI1NiIsImlkIjoiZjk5OTI4MmMtYjZjZi00YjQ4LTliMWEtOTAyMWVlM2Q3NmI0IiwidHlwIjoiSldUIn0.eyJhdWQiOiJ1c2VyX21hbmFnZW1lbnQiLCJleHAiOjE3MjUwMTQwOTcsImp0aSI6ImY5OTkyODJjLWI2Y2YtNGI0OC05YjFhLTkwMjFlZTNkNzZiNCIsImlhdCI6MTcyNDkzNjA5NywiaXNzIjoiVGhyaXZlU3RhY2sifQ.dCfke26t69Xd9mKbvVH9GPCueMxnSRrL5qJwUm02giXVO1Ne8jTBH5oSAo2nisE3h6ri8FpCEfTn7qTfkBYmXyCwRGUFBkqCwZAtYWrp8ugmAlp2exsuCzFLGF5UQiwHi5qcOzsDEUa7s7UODNl7nThNwArlqTwkJp-XEc9BXCjw2mX3_9Hc0H_ozbg8pWjXIcBqLjuXjVI-VIT3P46wd3_PVJve8Hm-rOuoMkwprihJCbYavihecNff_lE2f2KIzUruIJyLeXqohd1XkVxG3xSrviDqXEbsVBA-o3rHoLZqEHC2lSm99S1Ot7DsVR19Vo5INgV4cvdsmYMfdsyXDw",
    "response_id": "7e51e59e-abf7-4610-858c-d759dd2d1a06"
}
```
#### Response Codes:

| Code  | Description                                                   |
|-------|---------------------------------------------------------------|
| `200` | OK, login successful                                          |
| `400` | Bad Request, invalid input data                               |
| `500` | Internal Server Error, a generic error occurred on the server |

#### Example cURL

```bash
curl 'https://api.dev.app.thrivestack.ai/api/token'
  -H 'Content-Type: application/json'
  --data-raw '{
    "key_id":"f999282c-b6cf-4b48-9b1a-9021ee3d76b4","private_key": "-----BEGIN RSA PRIVATE KEY-----\nMIIEpQIBAAKCAQEAni6CpVBjaDxHctYJFNypsQalOOWMRnVX8sebckq43c1RdTTB\nCiwdMFq6mRbjcAcgsyLlKlVEhzSWi7LYwupHH80tD0YwAWay5HPczqmriqMGSvQh\nzKViij24nU9hYbmUuOreEcT9kKNAwNTrQGpnc0ez39IXaAZGAAzKya/wx4ZJM7v/\n282+ORm/3rdw7Xq2L6adQ2IoFSS68GkWKzMkCpJ+E0s97pwMnL53E/gt9rRVqT1U\n2XUxNMmHcnGwyJVFc/ZUml/DjBCrswqsdw6fdEDiVYDoEo7b+o9rtoLLqsGa5OuMqK3\nq5MXrj+9esAByurSVNxRCsuu1xyWbb41Q+E0KwIDAQABAoIBAEjK4IZQ4x4ht0OK\naa13CoQTqc7wG8iE0Y9A+jDzX/V6OcU1HKygtmH9Lqeql8mDDjJBmdwefszJKBv\nEj9Ibqic0+KWixrp9uMYyoE0JWPsN8YgaLlzVlCFrMJ/uDGvpFgghUcqHwIDjpXu\npcAD901ertEOLoVJdccqG9wKokQ+t3dnLTDN0Do/p8IckejnmI0mUlJQsyZKvdxH\nM7CcmeqgdM9186iIk7dKR1DrFoOhVKYVYm3+CD29w25GCH6gegvEk1N09sIgEMr4\nP4dA23ac5iMv35BL965AMBuNQdaeG10VrJVQMYMZZix0QmniOvqDWs0NATsioOvq\nVk2cr2ECgYEAwjamGus+YVeLHoNxMYoVZlIQToh+fVCtGaOuXKRki4JUgpdfbhE6\n27LZf7p83dyxe/nFa/zLQKLKdOC1MYA4AxeDpzNg4esoEDKl42JrURuVYEm3MnyB\nPpn6TeQv8InlnFlyuQDYJhuucfXIMCfCsjpz9aPjL2STWgZtVbi6yfsCgYEA0IFR\n6ziib5STzLI90Vl+ed45j1RVPLdUCYLO4FY+Iv39QUjQmOpj6ejmvDFNjG5AM6Qy\nEldgO8MRRSR8xMeWfYxcARJY7rD8rqot6tyL2JRwdZF7vrxb1MhCYSKboo0tz5y5\nhG0mMgN4x0FYoS0YaiYvx5DGPIqET+4+lDfp15ECgYEAvhFRmoKjOAy/AAvPWZYz\nv0GM5+65K9cqsS75U30nUUkpf+y43jVKjvyH03MlBNQZdqVIyphKKmWnEZ9gdKNx\nLcVzeMzVdewd335Rzyjgsi32kJdUDLrAmg2DY3twV039QnhfyCLFZvYsUSci1c3z\nww1lsv7DNfyOIMqtcfkqBMUCgYEAlzGfWIVZ7LV9s4pwnzVZLEAD1zZdFMkPrFHp\nd+2x4yfwlH2bnbchuoWDg2XxCOsNrSTclkY75zoddNjvjLX6H5I/SRun13YJ1RJc\nd5lz4xpIrkhPxlDJ+nM5BzzURLxBQvIv6KJJdyzjUQHGpiGQObD1Jq6JwW7kYR2u\nzUX6ULECgYEAjNbvug/g/T5h+hLeilC2/kUGyKi28wCqYumfNYlNEr5TAfL17giL\n6+tv5i/te480E8xQdbqiF7TCxBvkFf8xRoKbYosWfeZb4MXOvv/IHD0/Vhjh7GXG\nSrn/RiUh83YrJQa+2InBEprt6UIpvkkEysMoGg45VeU8JylxlrxM3i8=\n-----END RSA PRIVATE KEY-----\n","scopes": ["telemetry_apis"],"expiry": 1300
}'
```

#### Notes
Ensure that the **key_id** must be a valid identifier of the API Key along with proper **private_key** and defined **scope**

#### Scopes and Permissions

| Scope ID               | Name                              | Description                                                       |
|------------------------|-----------------------------------|-------------------------------------------------------------------|
| `telemetry_apis`       | Telemetry APIs                    | Authorises all telemetry APIs, `/track`, `/identify`, and `/group`|
| `track_api`            | Telemetry:Track API               | Authorised only for `/track` API                                  |
| `identify_api`         | Telemetry:Identify API            | Authorised only for `/identify` API                               |
| `group_api`            | Telemetry:Group API               | Authorised only for `/group` API                                  |
| `user_management`      | User Management API               | Authorises all APIs related to user management                    |
