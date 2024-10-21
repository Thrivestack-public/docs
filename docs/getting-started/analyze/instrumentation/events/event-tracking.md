# Track

## Introduction

The Track API is designed to capture and log key interactions and system events for B2B products. By tracking these events, businesses can gain detailed insights into how their users interact with the platform, understand usage patterns, and monitor performance metrics. This data plays a critical role in enhancing customer acquisition, retention, and virality, allowing product teams to make data-driven decisions and optimize the overall user experience.

This API provides a standardized way to collect telemetry events such as user actions, feature usage, system behaviors, and custom events across your product ecosystem. These events can then be analyzed to assess user engagement, detect bottlenecks, or identify opportunities for product improvement.

<!-- ![Track Flowchart](/img/docs/analyze/apis/track-flowchart.png) -->

**URL:** `https://api.app.thrivestack.ai/api/track`

**Method:** `POST`

## Request Headers:

| Header Name | Description | Example Value |
| --- | --- | --- |
| `Authorization` | Bearer token for authentication | Bearer <token> |
| `Content-Type` | Media type of request body | application/json |

## Request Body

> **Note:** A maximum of **1,000 events or 2 MB of data**, whichever is smaller, can be sent in a single API request. Alternatively, if **100 events** are being tracked, they can be batched into one request. Exceeding either the event or size limit will result in a `400 Bad Request` response.

### Fields:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `user_id` | String | Yes | The unique identifier of the user triggering the event |
| `event_name` | String | Yes | The name of the event being tracked |
| `timestamp` | Date | Yes | The event timestamp in UTC using the ISO 8601 format. |
| `properties` | Object | No | A map containing event-specific details. Mandatory fields depend on the event type |
| `context` | Object | No | A map containing additional context related to the event |

### JSON Example:

```json
[
	{
	    "event_name": "signed_up",
	    "properties": {
	      "email": "JohnDoe@acmelabs.com",
	      "name": "John Doe",
	      "first name": "John",
	      "last name": "Doe"
	    },
	    "user_id": "3e474abe-5943-41fd-8b7b-4c87ad95b0c7",
	    "timestamp": "20-11-23T22:28:55.111Z",
	    "context": {
		    "group_id": "55444abe-41fd-5943-d95b-4c87ad95b674"
	    }
	}
]
```

## Response Body

### Fields:

| Field Name | Type | Description |
| --- | --- | --- |
| `success` | Bool | Indicates if the event was successfully tracked |
| `response_id` | String | A unique identifier for the response |
| `message` | String | Any additional information about the request status |

### JSON Example:

```json
{
  "success": true,
  "response_id": "7e51e59e-abf7-4610-858c-d759dd2d1a06",
  "message": "Event tracked successfully"
}
```

### Response Codes:

| Code | Description |
| --- | --- |
| `200` | Event successfully tracked |
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
    "event_name": "signed_up",
    "properties": {
      "email": "JohnDoe@acmelabs.com",
      "name": "John Doe",
      "first name": "John",
      "last name": "Doe"
    },
    "user_id": "3e474abe-5943-41fd-8b7b-4c87ad95b0c7",
    "timestamp": "20-11-23T22:28:55.111Z",
    "context": {
	    "group_id": "55444abe-41fd-5943-d95b-4c87ad95b674"
    }
}]'
```

## Authorization scopes

Requires one of the following OAuth scopes:

- `telemetry_apis`
- `track_api`