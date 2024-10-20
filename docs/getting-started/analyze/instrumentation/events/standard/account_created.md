# Account Created

# 1. Introduction

![](/img/docs/events/account_created.png)

The goal is to generate an ‘account created’ event that enables SaaS builders to track when an account is created in their product.

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
| account_name      | String | The name of the account.                    |
| context.group_id  | String | The id of the account being created.        |

### 1.2.3. Sample

A JSON object with the required Event Object fields and any additional event properties.

```json
[
    {
        "event_name": "account_created",
        "properties": {
            "account_domain": "acme.com",
            "account_id": "7149d9cb-416a-4cd7-bf4c-dcd7f71421b8",
            "account_name": "acme.com"
        },
        "user_id": "5p442d0e-11b8-43d2-a933-04f62bb832e1",
        "timestamp": "2024-10-20T15:51:36.088000Z",
        "context": {
            "group_id": "7149d9cb-416a-4cd7-bf4c-dcd7f71421b8"
        }
    }
]
```

### 1.2.4. Sample cURL

```bash
curl --location 'https://api.app.thrivestack.ai/api/track' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsImlkIjoiNWZiY2E4YmUtNzk0OC00ZGQ3LTgxZGItZDZiMTFjNjhlYjgwIiwidHlwIjoiSldUIn0.eyJhdWQiOiJ0ZWxlbWV0cnlfYXBpcyIsImV4cCI6MTcyOTQ5MzkyOCwianRpIjoiNWZiY2E4YmUtNzk0OC00ZGQ3LTgxZGItZDZiMTFjNjhlYjgwIiwiaWF0IjoxNzI5NDE1OTI4LCJpc3MiOiJUaHJpdmVTdGFjayJ9.a34Mo3gGJfL_n6ls9Y3KP3IIpHJdqEOchZyAZF0hov-VujecPLJblZ-8WXs7KzZEwyo7DVVeIAygPUz0Xs9a56tA2ZW_6GxRWpw6zS-LLh8FNI1Ekk33hsoloW4WeGOAG8xybghJJH3w6R_H59jubrVNFnaz8YqBbiYou9klowTAjZBg-6IH5eGovGs0xzmaEFpC_0PphZ11wQKC0ZiMI3qz83GnC01VZZe5KjOmEON--B1qtN04pBNnEeCjuNFhBS1uhzAd_7FlRMiiUU29QOve8OXFHCXskvsFIHuUnSE3ZqDduFpKTMnK74VxuevjGsI8X7kIkz1SYnS72sFtUg' \
--data '[
    {
        "event_name": "account_created",
        "properties": {
            "account_domain": "acme.com",
            "account_id": "7149d9cb-416a-4cd7-bf4c-dcd7f71421b8",
            "account_name": "acme.com"
        },
        "user_id": "5p442d0e-11b8-43d2-a933-04f62bb832e1",
        "timestamp": "2024-10-20T15:51:36.088000Z",
        "context": {
            "group_id": "7149d9cb-416a-4cd7-bf4c-dcd7f71421b8"
        }
    }
]
'
```
