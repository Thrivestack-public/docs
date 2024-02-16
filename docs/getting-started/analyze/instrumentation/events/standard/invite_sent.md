# Invite Sent

# 1. Introduction

The objective is to generate an ‘invite sent’ event that enables SaaS builders to track when users invite other users.

![Invite Sent Event Flowchart](/img/docs/events/invite_sent.png)

## 1.1. Concept – Fundamental understanding about invitation

When users send an invite to their team to join and collaborate on the platform, it allows SaaS builders to track these invitations. This tracking occurs when users invite other users.

## 1.2. Track API

The `/track` endpoint is used to track events or actions performed by users. It allows you to associate and update event information as property.

### 1.2.1. Event Parameters

To complete this step, you need to provide four pieces of information: the first is the event name, the second is the user ID, the third is additional properties associated with the event, and the fourth is the timestamp.

| Parameter   | Type   | Description                                                  |
|-------------|--------|--------------------------------------------------------------|
| `event_name`| String | The name of the event being tracked.                         |
| `properties`| Object | Additional properties associated with the event.             |
| `user_id`   | String | The unique identifier of the user triggering the event.      |
| `timestamp` | Date   | Date the user’s account was first created. Recommends using ISO-8601 date strings. |
| `context` (optional) | Object | Context is a dictionary of extra information that provides useful context about a datapoint |

### 1.2.2. Event Properties

The following properties of how an event is described by a schema:

| Property          | Type   | Description                                            |
|-------------------|--------|--------------------------------------------------------|
| `invitee_email`   | String | The email address of the person receiving the invite.  |
| `invitee_first_name` | String | The first name of the person receiving the invite.    |
| `invitee_last_name` | String | The last name of the person receiving the invite.     |
| `invitee_role`    | String | The permission group for the person receiving the invite. |

### 1.2.3. Sample

A JSON object with the required Event Object fields and any additional event properties.

```json
{
  "event": "event_name",
  "properties": {
    "property1": "value1",
    "property2": "value2"
  },
  "user_id": "user123",
  "timestamp": "20-11-23T22:28:55.111Z"
}
```

### 1.2.4. [Try Out!](../../../../../integrate/public_apis/track)


```json
{
  "event": "invite_sent",
  "properties": {
    "invitee_email": "mark.wood@example.com",
    "invitee_first_name": "Mark",
    "invitee_last_name": "Wood",
    "invitee_role": "Developer"
  },
  "user_id": "766b3aef-5904-46fe-af05-a293fee8h345",
  "timestamp": "20-11-23T22:28:55.111Z"
}
```
