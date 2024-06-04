---
toc_max_heading_level: 4
---
# Invite Sent

# 1. Introduction

The objective is to generate an 'invite sent' event, enabling you, the SaaS builder, to track when users invite other users.

:::tip
**Built-In Invitation Tracking with ThriveStack's Invitation API**

API integrations aren't necessary for tracking the 'Invite Sent' event if you use ThriveStack's Self-Serve [Invitation API](/getting-started/self-serve/apis/invitation)
:::

![Invite Sent Event Flowchart](/img/docs/events/invite_sent.png)

## 1.1. Concept – Fundamental understanding about invitation

When users send an invite to their team to join and collaborate on the platform, it enables you to track these invitations. This tracking occurs when users invite other users.

## 1.2. Track API

The "/track" endpoint is utilized for tracking events or actions executed by users. It facilitates the association and updating of event information as properties.

### 1.2.1. Event Parameters

To complete this step, you need to provide four pieces of information: the first is the event name, the second is the user ID, the third is additional properties associated with the event, and the fourth is the timestamp.

| Parameter   | Type   | Description                                                  |
|-------------|--------|--------------------------------------------------------------|
| `event_name`| String | The name of the event being tracked.                         |
| `properties`| Object | Additional properties associated with the event.             |
| `user_id`   | String | The unique identifier of the user triggering the event.      |
| `timestamp` | Date   | Date the user’s account was first created. Recommends using ISO-8601 date strings. |
| `context` (optional) | Object | Context is a dictionary of extra information that provides useful context about a datapoint |

<br/>

### 1.2.2. Event Properties

The following properties of how an event is described by a schema:

| Property          | Type   | Description                                            |
|-------------------|--------|--------------------------------------------------------|
| `invitee_email`   | String | The email address of the person receiving the invite.  |
| `invitee_first_name` | String | The first name of the person receiving the invite.    |
| `invitee_last_name` | String | The last name of the person receiving the invite.     |
| `invitee_role`    | String | The permission group for the person receiving the invite. |


<br/>

### 1.2.3. Explore Use Cases

#### Track Invitation when a single user is invited
![Invite Sent Use Case 1](/img/docs/events/invite_sent/usecase1.png)

The diagram visualizes the tracking of invitation events in your SaaS Product. In the first step, 'John,' an existing user, invites 'Amy,' initiating the user engagement process. This step occurs within your product and is already implemented on your end.

In the second step, you need to call ThriveStack's Track API to track the invitation event. Below, you'll find a detailed JSON payload for the 'Invite Sent' event of the Track API, showing the captured properties.

```json 
{
  "event": "invite_sent",
  "properties": {
    "invitee_email": "amy@achme.com",
    "invitee_first_name": "Amy",
    "invitee_last_name": "Frank",
    "invitee_role": "Developer"
  },
  "user_id": "766b3aef-5904-46fe-af05-a293fee8h345",
  "timestamp": "20-11-23T22:28:55.111Z"
}
```

<br/>

#### Track Invitation when multiple users are invited
![Invite Sent Use Case 2](/img/docs/events/invite_sent/usecase2.png)
The diagram illustrates the process of inviting multiple users in your SaaS Product. 'John,' an existing user, extends invitations to 'Tom' and 'Amy,' prospective users. This step occurs within your product and is already implemented on your end.

In the next step, you need to call ThriveStack's Track API to track the invitation event. Presented below, the JSON array delineates the structure for the 'Invite Sent' event for the Track API, enabling the inclusion of several invitations within a singular API call.

```json
[
  {
    "event": "invite_sent",
    "properties": {
      "invitee_email": "amy@achme.com",
      "invitee_first_name": "Tom",
      "invitee_last_name": "Stone",
      "invitee_role": "Developer"
    },
    "user_id": "766b3aef-5904-46fe-af05-a293fee8h345",
    "timestamp": "20-11-23T22:28:55.111Z"
  },
  {
    "event": "invite_sent",
    "properties": {
      "invitee_email": "amy@achme.com",
      "invitee_first_name": "Amy",
      "invitee_last_name": "Frank",
      "invitee_role": "Developer"
    },
    "user_id": "766b3aef-5904-46fe-af05-a293fee8h345",
    "timestamp": "20-11-23T22:28:55.111Z"
  }
]
```

<br/>

#### Track Invitation when a user is invited into an existing tenant
![Invite Sent Use Case 3](/img/docs/events/invite_sent/usecase3.png)
The diagram outlines the process of inviting a user to an existing tenant within your SaaS Product. 'John,' an established user of an existing tenant, extends an invitation to 'Amy,' a prospective user, to join the same tenant space.

In the second step, you'll need to call ThriveStack's Track API to track the invitation event. Below, you'll find a detailed JSON payload for the 'Invite Sent' event of the Track API, displaying the captured properties.

In the request body provided below, a tenant ID should be sent in the 'group_id' property, which is included within the 'context' object.

```json
{
  "event": "invite_sent",
  "properties": {
    "invitee_email": "amy@achme.com",
    "invitee_first_name": "Amy",
    "invitee_last_name": "Frank",
    "invitee_role": "Developer"
  },
  "context": {
    "group_id": "f6e456dd-9e6b-41e5-8ccf-7539af9c735e", // ID of the existing tenant
  },
  "user_id": "766b3aef-5904-46fe-af05-a293fee8h345",
  "timestamp": "20-11-23T22:28:55.111Z"
}
```

<br/>

#### Track Invitation when a user is invited to a specific team

![Invite Sent Use Case 4](/img/docs/events/invite_sent/usecase4.png)

The diagram outlines the process of inviting a user to an existing team within your SaaS Product. 'John,' an established user of an existing team, extends an invitation to 'Amy,' a prospective user, to join the same team.

In the second step, you'll need to call ThriveStack's Track API to track the invitation event. Below, you'll find a detailed JSON payload for the 'Invite Sent' event of the Track API, displaying the captured properties.

The name of the team should be sent in the "team_name" property.
```json 
{
  "event": "invite_sent",
  "properties": {
    "invitee_email": "amy@achme.com",
    "invitee_first_name": "Amy",
    "invitee_last_name": "Frank",
    "invitee_role": "Developer",
    "team_name": "platform"
  },
  "user_id": "766b3aef-5904-46fe-af05-a293fee8h345",
  "timestamp": "20-11-23T22:28:55.111Z"
}
```

### 1.2.5. Try Out the APIs

Experience the APIs firsthand by using the [Try Out](/integrate/public_apis/track) feature in your web browser. For assistance on navigating the 'Try Out' functionality, consult the [Guide](/getting-started/apis-non-gen/using-the-try-out-options).

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
