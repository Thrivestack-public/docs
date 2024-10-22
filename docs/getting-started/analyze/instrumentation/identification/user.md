# Identify

## Overview
The Identify call lets you tie a user to their actions and record traits about them. It includes a unique User ID and any optional traits you know about the user, like their email, name, and more.

Thrivestack recommends that you make an Identify call:
- After a user first registers
- After a user joins a workspace/account
- When a user updates their info (for example, they change or add a new address)

<!-- ![User Identify Flowchart](/img/docs/analyze/apis/identify-flowchart.png) -->

**URL:** `https://api.app.thrivestack.ai/api/identify`

**Method:** `POST`

<hr/>

## Request Headers

| Header Name     | Description                                       | Example Value           |
|-----------------|---------------------------------------------------|-------------------------|
| `Authorization` | Bearer token for authentication | `Bearer <token>`        |
| `Content-Type`  | Media type of request body                        | `application/json`      |

<hr/>

## Request Body 
> **Note:** A maximum of **1,000 identify events or 2 MB of data**, whichever is smaller, can be sent in a single API request. Alternatively, if **100 users** are being identified, they can be batched into one request. Exceeding either the event or size limit will result in a `400 Bad Request` response.

### Fields
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `user_id` | String | Yes | The unique identifier of the user triggering the event |
| `timestamp` | Date | Yes | The event timestamp in UTC using the ISO 8601 format |
| `traits` | Object | No | A map storing traits about the user. Refer User Traits Section |
| `context` | Object | No | A map containing additional context related to the event |

### User Traits
User traits are used to build a detailed profile of the user. The following traits are accepted as part of the request

| Trait Key | Type | Description |
| --- | --- | --- |
| `enrichment_first_name` | string | User's first name. |
| `enrichment_last_name` | string | User's last name. |
| `enrichment_full_name` | string | The complete name of the user, typically a combination of their first and last name. |
| `enrichment_avatar` | string | The URL or file path to the user’s profile picture or avatar. |
| `enrichment_email_provider` | string | The provider of the user's email service (e.g., Gmail, Outlook, custom domain). |
| `enrichment_phone` | Array[string] | A list of phone numbers associated with the user. |
| `enrichment_city` | string | The city where the user is located. |
| `enrichment_state` | string | The state or province where the user is located. |
| `enrichment_state_code` | string | The abbreviated code for the state. |
| `enrichment_time_zone` | string | The time zone in which the user is located. |
| `enrichment_location` | string | A general description of where the user is based, which might include city, state, or region. |
| `enrichment_country` | string | The country where the user is located. |
| `enrichment_country_code` | string | The ISO code for the country. |
| `enrichment_employment_domain` | string | The domain of the company where the user is employed, typically the company's website domain. |
| `enrichment_employment_name` | string | The name of the company where the user is employed. |
| `enrichment_employment_role` | string | The user's role within their company (e.g., Developer, Marketing Manager). |
| `enrichment_employment_seniority` | string | The level of seniority of the user’s role (e.g., Junior, Senior, Executive). |
| `enrichment_employment_sub_role` | string | More detailed or specific role of the user. |
| `enrichment_employment_title` | string | The official job title of the user (e.g., Chief Technology Officer). |
| `enrichment_facebook_handle` | string | The Facebook profile or page handle of the user. |
| `enrichment_github_handle` | string | The GitHub profile handle of the user, if they have one. |
| `enrichment_linkedin_handle` | string | The LinkedIn profile handle of the user. |
| `enrichment_twitter_handle` | string | The Twitter profile handle of the user. |
| `enrichment_inactive_at` | string | The date or timestamp when the user became inactive. |
| `enrichment_active_at` | string | The date or timestamp when the user became active. |

### JSON Example
```json
[
    {
        "user_id": "7408c7fe-1b2f-48d0-9759-0ae09e285832",
        "traits": {
            "email":"testUser@acme.com",
            "name": "testUser"
        },
        "timestamp": "2024-10-20T15:51:35.059000Z"
    }
]
```
<hr/>

## Response Body 
### Fields

| Field Name | Type | Description |
| --- | --- | --- |
| `success` | Bool | Indicates if user was successfully identified |
| `response_id` | String | A unique identifier for the response |
| `message` | String | Any additional information about the request status |

### JSON Example
```json
{
  "success": true,
  "response_id": "7e51e59e-abf7-4610-858c-d759dd2d1a06",
  "message": "User(s) identified successfully"
}
```

### Response Codes

| Code | Description |
| --- | --- |
| `200` | User(s) identified successfully |
| `400` | Bad Request, invalid input data |
| `401` | Access token missing or invalid |
| `500` | Internal Server Error, a generic error occurred on the server |

<hr/>

## Example cURL

```bash
curl --location 'https://api.app.thrivestack.ai/api/identify' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsImlkIjoiNWZiY2E4YmUtNzk0OC00ZGQ3LTgxZGItZDZiMTFjNjhlYjgwIiwidHlwIjoiSldUIn0.eyJhdWQiOiJ0ZWxlbWV0cnlfYXBpcyIsImV4cCI6MTcyOTU5MDg1NiwianRpIjoiNWZiY2E4YmUtNzk0OC00ZGQ3LTgxZGItZDZiMTFjNjhlYjgwIiwiaWF0IjoxNzI5NTEyODU2LCJpc3MiOiJUaHJpdmVTdGFjayJ9.RAImwOdWQUsK9ZPilxZe87SyNmWjvbC8YmbVc2GhLcH4g0hfQbxpeN7HUHk9cNdSw6PDQuNY3rpAKlCGeRBECUFVgAwCW5xSfNIc4_qlNeys9Sy0aQGeZ_9bhZFiDADOsVaspQnXI0MiE54UAlHnz4rU21YiDOgt5OQbdhmX9v8vW6AGRdwIS8WGADbCjdu8uFmaCEJqK4EsKTvJrxgyBGc_JC_A7ssYUbPmKpOuat6Vanlumw_kq32lYn7fSdL7gMXLYJykd6jV8uLUJsKQQd3w8L0DQFt40YPJmRm-68XhmBCDwQf0aUFuhbkOotZw-7-OJ4kuNoa6e6p62O_KqQ' \
--data-raw '[
    {
        "user_id": "7408c7fe-1b2f-48d0-9759-0ae09e285832",
        "traits": {
            "email": "testUser@acme.com",
            "name": "testUser"
        },
        "timestamp": "2024-10-20T15:51:35.059000Z"
    }
]'
```

<hr/>

## Authorization scopes
Requires one of the following OAuth scopes:
- `telemetry_apis`
- `identify_api`
