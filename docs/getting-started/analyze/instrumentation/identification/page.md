# Page

## Overview

The Page API call allows you to track page views and other interactions on your website or application. This call is useful for understanding user behavior and measuring engagement.
In a Page call, there are two key identifiers:

- **`user_id`**: Refers to the individual user.
- **`session_id`**: Refers to the particular session.

You can send either a `session_id` or a `user_id`, but both cannot be included together. At least one of them must be provided.


**URL:** `https://api.app.thrivestack.ai/api/page`

**Method:** `POST`

<hr/>

## Request Headers

| Header Name     | Description                                       | Example Value           |
|-----------------|---------------------------------------------------|-------------------------|
| `x-api-key` | API Key for authentication | `7MQF6Y6xZ5yxusbsnvl4rcf76zjSMeothmKdm/c80u0=`        |
| `Content-Type`  | Media type of request body                        | `application/json`      |

<hr/>

## Request Body 
> **Note:** A maximum of **1,000 page events or 2 MB of data**, whichever is smaller, can be sent in a single API request. Exceeding either the event or size limit will result in a `400 Bad Request` response.

### Fields
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `session_id` | String | Conditional | The unique identifier of the session. Either session_id or user_id must be provided, but not both. |
| `user_id` | String | Conditional | The unique identifier of the user visiting the page. Either session_id or user_id must be provided, but not both. |
| `timestamp` | Date | Yes | The event timestamp in UTC using the ISO 8601 format |
| `properties` | Object | No | A map containing pageevent-specific details|
| `context` | Object | No | A map containing additional context related to the event |

### JSON Example
```json
[
	{
    "session_id": "1rwttH3IN",
    "properties": {
      "page_name": "Homepage",
      "page_url": "https://example.com/homepage"
    },
    "context": {
      "browser": "Chrome",
      "os": "Windows"
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
| `success` | Bool | Indicates if page was successfully tracked |
| `response_id` | String | A unique identifier for the response |
| `message` | String | Any additional information about the request status |
| `warnings` | Array | Warnings about the request status |
| `documentation` | String | Documentation about the request status |

### JSON Example
```json
{
  "success": true,
  "response_id": "8e51e59e-abf7-4610-858c-d759dd2d1a06",
  "message": "Page(s) tracked successfully",
  "documentation" : "https://docs.app.thrivestack.ai/getting-started/analyze/instrumentation/identification/page"
}
```


### Response Codes

| Code | Description |
| --- | --- |
| `200` | Page(s) tracked successfully |
| `400` | Bad Request, invalid input data |
| `401` | API key missing or invalid |
| `500` | Internal Server Error, a generic error occurred on the server |

<hr/>

## Example cURL


```bash
curl --location 'https://api.app.thrivestack.ai/api/page' \
--header 'Content-Type: application/json' \
--header 'x-api-key: 7MQF6Y6xZ5yxusbsnvl4rcf76zjSMeothmKdm/c80u0=' \
--data '[
    {
    "user_id": "0rwtoH3IN",
    "properties": {
      "page_name": "Homepage",
      "page_url": "https://example.com/homepage"
      },
    "context": {
      "browser": "Chrome",
      "os": "Windows"
    },
    "timestamp": "2024-10-20T15:51:35.059000Z"
   }
]'
```

<hr/>

## Authorization scopes
Requires one of the following API Key scopes:
- `telemetry_apis`
- `page_api`