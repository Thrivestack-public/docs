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

## Request Headers:

| Header Name     | Description                                       | Example Value           |
|-----------------|---------------------------------------------------|-------------------------|
| `Authorization` | Bearer token for authentication | `Bearer <token>`        |
| `Content-Type`  | Media type of request body                        | `application/json`      |

## Request Body 
> **Note:** A maximum of **1,000 identify events or 2 MB of data**, whichever is smaller, can be sent in a single API request. Alternatively, if **100 users** are being identified, they can be batched into one request. Exceeding either the event or size limit will result in a `400 Bad Request` response.
>
### Fields:
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `user_id` | String | Yes | The unique identifier of the user triggering the event |
| `timestamp` | Date | Yes | The event timestamp in UTC using the ISO 8601 format |
| `traits` | Object | No | A map storing traits about the user. Refer User Traits Section |
| `context` | Object | No | A map containing additional context related to the event |

### User Traits
User traits are used to build a detailed profile of the user. The following traits are accepted as part of the request:
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

### JSON Example:
```json
[
	{
    "user_id": "1820abb7-e6d4-45ec-8bc5-9a5c13ba06ca",
    "traits": {
	    "enrichment_avatar": "https://example.com/avatar.jpg",
	    "enrichment_first_name": "John",
	    "enrichment_last_name": "Doe",
	    "email": "JohnDoe@acmelabs.com",
	    "enrichment_employment_title": "Chief Technology Officer",
	    "enrichment_phone": ["+1234567890", "+0987654321"],
	    "enrichment_github_handle": "johndoe",
	    "enrichment_linkedin_handle": "johndoe",
	    "enrichment_twitter_handle": "johndoe",
	    "enrichment_location": "San Francisco, CA",
	    "enrichment_employment_name": "Acme Labs",
	    "enrichment_employment_domain": "acmelabs.com"
	  },
    "context": {
      "group_id": "7cc972d3-685d-4106-a862-4fc37da0eca4",
      "browser": "Mozilla/5.0 (Windows CE) AppleWebKit/5342 (KHTML, like Gecko) Chrome/39.0.800.0 Mobile Safari/5342",
      "ip": "239.247.115.212"
    },
    "timestamp": "2023-12-14T16:07:33.571125Z"
    }
]
```

## Response Body 
### Fields:

| Field Name | Type | Description |
| --- | --- | --- |
| `success` | Bool | Indicates if user was successfully identified |
| `response_id` | String | A unique identifier for the response |
| `message` | String | Any additional information about the request status |                                            |
### JSON Example:
```json
{
  "success": true,
  "response_id": "7e51e59e-abf7-4610-858c-d759dd2d1a06",
  "message": "User(s) identified successfully"
}
```

### Response Codes:

| Code | Description |
| --- | --- |
| `200` | User(s) identified successfully |
| `400` | Bad Request, invalid input data |
| `401` | Access token missing or invalid |
| `500` | Internal Server Error, a generic error occurred on the server |


## Example cURL

```bash
curl --location 'https://api.app.thrivestack.ai/api/track' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsImlkIjoiZjk5OTI4MmMtYjZjZi00YjQ4LTliMWEtOTAyMWVlM2Q3NmI0IiwidHlwIjoiSldUIn0.eyJhdWQiOiJ1c2VyX21hbmFnZW1lbnQiLCJleHAiOjE3MjUwMTQwOTcsImp0aSI6ImY5OTkyODJjLWI2Y2YtNGI0OC05YjFhLTkwMjFlZTNkNzZiNCIsImlhdCI6MTcyNDkzNjA5NywiaXNzIjoiVGhyaXZlU3RhY2sifQ.dCfke26t69Xd9mKbvVH9GPCueMxnSRrL5qJwUm02giXVO1Ne8jTBH5oSAo2nisE3h6ri8FpCEfTn7qTfkBYmXyCwRGUFBkqCwZAtYWrp8ugmAlp2exsuCzFLGF5UQiwHi5qcOzsDEUa7s7UODNl7nThNwArlqTwkJp-XEc9BXCjw2mX3_9Hc0H_ozbg8pWjXIcBqLjuXjVI-VIT3P46wd3_PVJve8Hm-rOuoMkwprihJCbYavihecNff_lE2f2KIzUruIJyLeXqohd1XkVxG3xSrviDqXEbsVBA-o3rHoLZqEHC2lSm99S1Ot7DsVR19Vo5INgV4cvdsmYMfdsyXDw' \
--data-raw '[
	{
    "user_id": "1820abb7-e6d4-45ec-8bc5-9a5c13ba06ca",
    "traits": {
	    "enrichment_avatar": "https://example.com/avatar.jpg",
	    "enrichment_first_name": "John",
	    "enrichment_last_name": "Doe",
	    "email": "JohnDoe@acmelabs.com",
	    "enrichment_employment_title": "Chief Technology Officer",
	    "enrichment_phone": ["+1234567890", "+0987654321"],
	    "enrichment_github_handle": "johndoe",
	    "enrichment_linkedin_handle": "johndoe",
	    "enrichment_twitter_handle": "johndoe",
	    "enrichment_location": "San Francisco, CA",
	    "enrichment_employment_name": "Acme Labs",
	    "enrichment_employment_domain": "acmelabs.com"
	  },
    "context": {
      "group_id": "7cc972d3-685d-4106-a862-4fc37da0eca4",
      "browser": "Mozilla/5.0 (Windows CE) AppleWebKit/5342 (KHTML, like Gecko) Chrome/39.0.800.0 Mobile Safari/5342",
      "ip": "239.247.115.212"
    },
    "timestamp": "2023-12-14T16:07:33.571125Z"
    }
}]'
```

## Authorization scopes
Requires one of the following OAuth scopes:
- `telemetry_apis`
- `identify_api`