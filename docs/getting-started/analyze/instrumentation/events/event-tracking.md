# Track

## 1. Introduction

The Track API records and analyzes user interactions in an application, logging user actions and their related features for event tracking and analytics.The actions your users execute, and the features that describe those actions, can be recorded with the Track API call.

![Track Flowchart](/img/docs/analyze/apis/track-flowchart.png)

## 1.1 Track API

- The `/track` endpoint is used to track events or actions performed by users. It allows you to associate and update event information as property.

### 1.2 Event Parameters

You need to provide four pieces of information: 
1. Event name
2. User ID
3. Additional properties associated with the event
4. Timestamp.

| Parameter     | Type   | Description                                               |
|---------------|--------|-----------------------------------------------------------|
| `event_name`  | String | The name of the event being tracked.                      |
| `properties`  | Object | Additional properties associated with the event.          |
| `user_id`     | String | The unique identifier of the user triggering the event.   |
| `timestamp`   | Date   | Date and time when the user’s account was first created. Recommends using ISO-8601 date strings. |
| `context` (optional) | Object | Context is a dictionary of extra information that provides useful context about a datapoint |

### 1.3 Event Properties
These are the properties you commonly used for tracking user-related information

The following properties of how an event is described by:

| Property     | Type   | Description                 |
|--------------|--------|-----------------------------|
| `email`      | String | The email of the user.      |
| `name`       | String | The name of the user.       |
| `first_name` | String | The first name of the user. |
| `last_name`  | String | The last name of the user.  |

### 1.4 End point

URL: `https://api.dev.app.thrivestack.ai/api/track`
Method: `POST`

### 1.5 Headers
- `Authorization: Bearer <token>`  Replace `<token>` with a valid Thrivestack Management token to validate request. (Ref: [Token API Documentation](https://docs.app.thrivestack.ai/getting-started/analyze/authentication)) (Valid Scopes: track_api, telemetry_apis) 
- `Content-Type: application/json` indicates that the request body is in the JSON format.

#### 1.6 Sample

A JSON object with the required Event Object fields and any additional event properties.

#### Sample cURL
```bash
curl --location 'https://api.app.thrivestack.ai/api/track' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsImlkIjoiNWZiY2E4YmUtNzk0OC00ZGQ3LTgxZGItZDZiMTFjNjhlYjgwIiwidHlwIjoiSldUIn0.eyJhdWQiOiJ0ZWxlbWV0cnlfYXBpcyIsImV4cCI6MTcyOTQ5MzkyOCwianRpIjoiNWZiY2E4YmUtNzk0OC00ZGQ3LTgxZGItZDZiMTFjNjhlYjgwIiwiaWF0IjoxNzI5NDE1OTI4LCJpc3MiOiJUaHJpdmVTdGFjayJ9.a34Mo3gGJfL_n6ls9Y3KP3IIpHJdqEOchZyAZF0hov-VujecPLJblZ-8WXs7KzZEwyo7DVVeIAygPUz0Xs9a56tA2ZW_6GxRWpw6zS-LLh8FNI1Ekk33hsoloW4WeGOAG8xybghJJH3w6R_H59jubrVNFnaz8YqBbiYou9klowTAjZBg-6IH5eGovGs0xzmaEFpC_0PphZ11wQKC0ZiMI3qz83GnC01VZZe5KjOmEON--B1qtN04pBNnEeCjuNFhBS1uhzAd_7FlRMiiUU29QOve8OXFHCXskvsFIHuUnSE3ZqDduFpKTMnK74VxuevjGsI8X7kIkz1SYnS72sFtUg' \
--data-raw '[
    {
    "event_name": "signed_up",
    "properties": {
      "email": "JohnDoe@acmelabs.com",
      "name": "John Doe",
      "first name": "John",
      "last name": "Doe"
    },
    "user_id": "2520abb7-e6d4-45ec-8bc5-9a5c13ba06ca",
    "timestamp": "2023-12-14T16:07:33.571125Z",
    "context": {
        "group_id": "25c972d3-685d-4106-a862-4fc37da0eca4"
    }
}]'
```
#### Sample JSON Response
#### 1.Successful Response
`Status code`: `200`
```json
{
    "success": true,
    "message": "Event(s) tracked successfully",
    "response_id": "db78083b-efda-4618-bd97-9a37afca4860"
}
```
#### 2.Error Response
An error can occur for various reasons. The `status code` returned may be `400`, `401`, `403`, or `500` depending on the type of error.
```json
{
    "success": false,
    "message": "Failed to track the event(s) due to an error.",
    "response_id": "db78083b-efda-4618-bd97-9a37afca4860"
}
```
