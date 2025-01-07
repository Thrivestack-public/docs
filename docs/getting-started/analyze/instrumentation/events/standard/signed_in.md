# Signed In

## Overview
The purpose of the "signed_in" event is to help SaaS builders track user sign-ins to their product, providing insight into user activity and engagement.

> To track a "signed_in" event, use the _Track API_ to capture and transmit user activity. For more details, refer to the [Track API](/getting-started/analyze/instrumentation/events/event-tracking).

<hr/>

## Event Details for Track API

### Request Fields

When sending the "signed_in" event, the following parameters are required:

| Parameter   | Type   | Description                                                                |
|-------------|--------|----------------------------------------------------------------------------|
| `event_name`| String | The name of the event being tracked. Use `"signed_in"`.                      |
| `user_id`   | String | A unique identifier for the user who is signing in.                         |
| `properties`| Object | Additional properties that provide more details about the user and the event.|
| `timestamp` | Date   | The time when the user signed in, formatted in ISO-8601 format.              |
| `context` | Object | Metadata providing additional context for the event (e.g., location, device). |

### Event Properties

The `properties` field provides details about the user and the event, with the following expected fields:

| Property            | Type   | Description                                       |
|---------------------|--------|---------------------------------------------------|
| `user_email`        | String | The email address of the user signing in.         |
| `user_name`         | String | The username of the user.                         |

### Event Context

The `context` field provides additional metadata that gives more context for the event.

| Context Property   | Type   | Description                                                             |
|--------------------|--------|-------------------------------------------------------------------------|
| `group_id`         | String | A unique identifier of the account associated with the user signing in. |
| `product_id`         | String | A unique identifier of the product associated with the user signing in. |
| `enviornment_id`         | String | A unique identifier of the enviornment associated with the user signing in. |

### Example JSON Payload

```json
[
	{
    "event_name": "signed_in",
    "properties": {
      "user_email": "JohnDoe@acmelabs.com",
      "user_name": "John Doe"
    },
    "user_id": "0rwtoH3IN",
    "timestamp": "2024-10-20T15:51:35.059000Z",
    "context": {
	      "environment_id": "0d8WgtOPE",
        "group_id": "ng6SrfNCx",
        "product_id": "E7Mswu8T6"
    }
}]
```

<hr/>

## Sample cURL

```bash
curl --location 'https://api.app.thrivestack.ai/api/track' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <your_auth_token>' \
--data-raw '[
	{
    "event_name": "signed_in",
    "properties": {
      "user_email": "JohnDoe@acmelabs.com",
      "user_name": "John Doe"
    },
    "user_id": "0rwtoH3IN",
    "timestamp": "2024-10-20T15:51:35.059000Z",
    "context": {
	     "environment_id": "0d8WgtOPE",
        "group_id": "ng6SrfNCx",
        "product_id": "E7Mswu8T6"
    }
}]'
```
