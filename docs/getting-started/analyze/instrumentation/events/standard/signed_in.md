# Signed In

# 1. Introduction

The goal is to generate a ‘signed in’ event that enables SaaS builders to track when a user signs in to their product.

![Signed In Event Flowchart](/img/docs/events/signed_in.png)

## 1.2. Track API

The `/track` endpoint is used to track events or actions performed by users. It allows you to associate and update event information as property.

### 1.2.1. Event Parameters

To complete this step, you need to provide five pieces of information: the first is the event name, the second is the user ID, the third is the group ID, the fourth is additional properties associated with the event, and the fifth is the timestamp.

| Parameter   | Type   | Description                                                  |
|-------------|--------|--------------------------------------------------------------|
| `event_name`| String | The name of the event being tracked.                         |
| `properties`| Object | Additional properties associated with the event.             |
| `user_id`   | String | The unique identifier of the user triggering the event.      |
| `group_id`  | String | The unique identifier of the account triggering the event.   |
| `timestamp` | Date   | Date the user’s account was first created. Recommends using ISO-8601 date strings. |
| `context` (optional) | Object | Context is a dictionary of extra information that provides useful context about a datapoint |

### 1.2.2. Event Properties

The following properties of how an event is described by a schema:

| Property          | Type   | Description                                        |
|-------------------|--------|----------------------------------------------------|
| `User_name`       | String | The username of the user signing in.               |
| `context.group_id`| String | The id of the account associated with the user signing in. |

### 1.2.3. Sample

A JSON object with the required Event Object fields and any additional event properties. [Try Out!](../../../../../integrate/public_apis/track)

```json
[
	{
    "event": "signed_in",
    "properties": {
      "email": "JohnDoe@acmelabs.com",
      "user_name": "John Doe"
    },
    "user_id": "3e474abe-5943-41fd-8b7b-4c87ad95b0c7",
    "timestamp": "20-11-23T22:28:55.111Z",
    "context": {
	    "group_id": "55444abe-41fd-5943-d95b-4c87ad95b674"
    }
}]
```

### 1.2.4. Sample cURL


```bash
curl --location 'https://api.app.thrivestack.ai/api/track' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsImlkIjoiZjk5OTI4MmMtYjZjZi00YjQ4LTliMWEtOTAyMWVlM2Q3NmI0IiwidHlwIjoiSldUIn0.eyJhdWQiOiJ1c2VyX21hbmFnZW1lbnQiLCJleHAiOjE3MjUwMTQwOTcsImp0aSI6ImY5OTkyODJjLWI2Y2YtNGI0OC05YjFhLTkwMjFlZTNkNzZiNCIsImlhdCI6MTcyNDkzNjA5NywiaXNzIjoiVGhyaXZlU3RhY2sifQ.dCfke26t69Xd9mKbvVH9GPCueMxnSRrL5qJwUm02giXVO1Ne8jTBH5oSAo2nisE3h6ri8FpCEfTn7qTfkBYmXyCwRGUFBkqCwZAtYWrp8ugmAlp2exsuCzFLGF5UQiwHi5qcOzsDEUa7s7UODNl7nThNwArlqTwkJp-XEc9BXCjw2mX3_9Hc0H_ozbg8pWjXIcBqLjuXjVI-VIT3P46wd3_PVJve8Hm-rOuoMkwprihJCbYavihecNff_lE2f2KIzUruIJyLeXqohd1XkVxG3xSrviDqXEbsVBA-o3rHoLZqEHC2lSm99S1Ot7DsVR19Vo5INgV4cvdsmYMfdsyXDw' \
--data-raw '[
	{
    "event": "signed_in",
    "properties": {
      "email": "JohnDoe@acmelabs.com",
      "user_name": "John Doe"
    },
    "user_id": "3e474abe-5943-41fd-8b7b-4c87ad95b0c7",
    "timestamp": "20-11-23T22:28:55.111Z",
    "context": {
	    "group_id": "55444abe-41fd-5943-d95b-4c87ad95b674"
    }
}]'
```
