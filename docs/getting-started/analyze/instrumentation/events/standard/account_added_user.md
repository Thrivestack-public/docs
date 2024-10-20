# Account Added User

# 1. Introduction

The aim is to generate an ‘account added user’ event that enables SaaS builders to track when a user is added to the account.

![](/img/docs/events/account_added_user.png)

## 1.2. Track API

The `/track` endpoint is used to track events or actions performed by users. It allows you to associate and update event information as property.

### 1.2.1. Event Parameters

To complete this step, you need to provide five pieces of information: the first is the event name, the second is the user ID, the third is the group ID, the fourth is additional properties associated with the event, and the fifth is the timestamp.

| Parameter   | Type   | Description                                           |
|-------------|--------|-------------------------------------------------------|
| event_name  | String | The name of the event being tracked.                  |
| properties  | Object | Additional properties associated with the event.       |
| user_id     | String | The unique identifier of the user triggering the event. |
| group_id    | String | The unique identifier of the account triggering the event. |
| timestamp   | Date   | Date the user’s account was first created. Recommends using ISO-8601 date strings. |
| context (optional) | Object | Context is a dictionary of extra information that provides useful context about a datapoint. |

### 1.2.2. Event Properties

The following properties of how an event is described by a schema:

| Property          | Type   | Description                                  |
|-------------------|--------|----------------------------------------------|
| user_role         | String | The permission group for this user in this account. |
| context.group_id  | String | The id of the account the user is being added to. |

### 1.2.3. Sample

A JSON object with the required Event Object fields and any additional event properties.

```json
[
    {
    "event_name": "account_added_user",
    "properties": {
    "user_name": "JoeDao",
    "user_email": "JoeDao@acmelabs.com",
    "user_role": "Developer"
    },
    "user_id": "2520abb7-e6d4-45ec-8bc5-9a5c13ba06ca",
    "timestamp": "2023-12-14T16:07:33.571125Z",
    "context": {
        "group_id": "25c972d3-685d-4106-a862-4fc37da0eca4"
    }
}]
```

### 1.2.4. Sample cURL

```bash
curl --location 'https://api.app.thrivestack.ai/api/track' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsImlkIjoiNWZiY2E4YmUtNzk0OC00ZGQ3LTgxZGItZDZiMTFjNjhlYjgwIiwidHlwIjoiSldUIn0.eyJhdWQiOiJ0ZWxlbWV0cnlfYXBpcyIsImV4cCI6MTcyOTQ5MzkyOCwianRpIjoiNWZiY2E4YmUtNzk0OC00ZGQ3LTgxZGItZDZiMTFjNjhlYjgwIiwiaWF0IjoxNzI5NDE1OTI4LCJpc3MiOiJUaHJpdmVTdGFjayJ9.a34Mo3gGJfL_n6ls9Y3KP3IIpHJdqEOchZyAZF0hov-VujecPLJblZ-8WXs7KzZEwyo7DVVeIAygPUz0Xs9a56tA2ZW_6GxRWpw6zS-LLh8FNI1Ekk33hsoloW4WeGOAG8xybghJJH3w6R_H59jubrVNFnaz8YqBbiYou9klowTAjZBg-6IH5eGovGs0xzmaEFpC_0PphZ11wQKC0ZiMI3qz83GnC01VZZe5KjOmEON--B1qtN04pBNnEeCjuNFhBS1uhzAd_7FlRMiiUU29QOve8OXFHCXskvsFIHuUnSE3ZqDduFpKTMnK74VxuevjGsI8X7kIkz1SYnS72sFtUg' \
--data-raw '[
    {
    "event_name": "account_added_user",
    "properties": {
    "user_name": "ankitGupta",
    "user_email": "ankitGupta@acmelabs.com",
    "user_role": "Developer"
    },
    "user_id": "2520abb7-e6d4-45ec-8bc5-9a5c13ba06ca",
    "timestamp": "2023-12-14T16:07:33.571125Z",
    "context": {
        "group_id": "25c972d3-685d-4106-a862-4fc37da0eca4"
    }
}]
'
```
