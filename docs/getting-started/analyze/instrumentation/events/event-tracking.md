# Track

## Introduction

The Track API is designed to capture and log key interactions and system events for B2B products. By tracking these events, businesses can gain detailed insights into how their users interact with the platform, understand usage patterns, and monitor performance metrics. This data plays a critical role in enhancing customer acquisition, retention, and virality, allowing product teams to make data-driven decisions and optimize the overall user experience.

This API provides a standardized way to collect telemetry events such as user actions, feature usage, system behaviors, and custom events across your product ecosystem. These events can then be analyzed to assess user engagement, detect bottlenecks, or identify opportunities for product improvement.

<!-- ![Track Flowchart](/img/docs/analyze/apis/track-flowchart.png) -->

**URL:** `https://api.app.thrivestack.ai/api/track`

**Method:** `POST`

<hr/>

## Request Headers

| Header Name | Description | Example Value |
| --- | --- | --- |
| `Authorization` | Bearer token for authentication | `Bearer <token>` |
| `Content-Type` | Media type of request body | application/json |

<hr/>

## Request Body

> **Note:** A maximum of **1,000 events or 2 MB of data**, whichever is smaller, can be sent in a single API request. Alternatively, if **100 events** are being tracked, they can be batched into one request. Exceeding either the event or size limit will result in a `400 Bad Request` response.

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `user_id` | String | Yes | The unique identifier of the user triggering the event |
| `event_name` | String | Yes | The name of the event being tracked |
| `timestamp` | Date | Yes | The event timestamp in UTC using the ISO 8601 format. |
| `properties` | Object | No | A map containing event-specific details. Mandatory fields depend on the event type |
| `context` | Object | No | A map containing additional context related to the event |


### JSON Example

```json
[
    {
        "event_name": "signed_up",
        "properties": {
            "email": "testUser@acme.com",
            "name": "testUser"
        },
        "user_id": "7408c7fe-1b2f-48d0-9759-0ae09e285832",
        "timestamp": "2024-10-20T15:51:35.059000Z"
    }
]
```

<hr/>

## Response Body

### Fields

| Field Name | Type | Description |
| --- | --- | --- |
| `success` | Bool | Indicates if the event was successfully tracked |
| `response_id` | String | A unique identifier for the response |
| `message` | String | Any additional information about the request status |

### JSON Example

```json
{
  "success": true,
  "response_id": "7e51e59e-abf7-4610-858c-d759dd2d1a06",
  "message": "Event tracked successfully"
}
```

### Response Codes

| Code | Description |
| --- | --- |
| `200` | Event successfully tracked |
| `400` | Bad Request, invalid input data |
| `401` | Access token missing or invalid |
| `500` | Internal Server Error, a generic error occurred on the server |

<hr/>

## Example cURL

```bash
curl --location 'https://api.app.thrivestack.ai/api/track' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsImlkIjoiNWZiY2E4YmUtNzk0OC00ZGQ3LTgxZGItZDZiMTFjNjhlYjgwIiwidHlwIjoiSldUIn0.eyJhdWQiOiJ0ZWxlbWV0cnlfYXBpcyIsImV4cCI6MTcyOTU5MDg1NiwianRpIjoiNWZiY2E4YmUtNzk0OC00ZGQ3LTgxZGItZDZiMTFjNjhlYjgwIiwiaWF0IjoxNzI5NTEyODU2LCJpc3MiOiJUaHJpdmVTdGFjayJ9.RAImwOdWQUsK9ZPilxZe87SyNmWjvbC8YmbVc2GhLcH4g0hfQbxpeN7HUHk9cNdSw6PDQuNY3rpAKlCGeRBECUFVgAwCW5xSfNIc4_qlNeys9Sy0aQGeZ_9bhZFiDADOsVaspQnXI0MiE54UAlHnz4rU21YiDOgt5OQbdhmX9v8vW6AGRdwIS8WGADbCjdu8uFmaCEJqK4EsKTvJrxgyBGc_JC_A7ssYUbPmKpOuat6Vanlumw_kq32lYn7fSdL7gMXLYJykd6jV8uLUJsKQQd3w8L0DQFt40YPJmRm-68XhmBCDwQf0aUFuhbkOotZw-7-OJ4kuNoa6e6p62O_KqQ' \
--data-raw '[
    {
        "event_name": "signed_up",
        "properties": {
            "email": "testUser@acme.com",
            "name": "testUser"
        },
        "user_id": "7408c7fe-1b2f-48d0-9759-0ae09e285832",
        "timestamp": "2024-10-20T15:51:35.059000Z"
    }
]'
```
<hr/>

## Authorization scopes

Requires one of the following OAuth scopes:

- `telemetry_apis`
- `track_api`
