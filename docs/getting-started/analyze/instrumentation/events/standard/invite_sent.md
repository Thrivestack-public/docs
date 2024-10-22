# Invite Sent

## Overview
The objective is to generate an 'invite_sent' event, enabling you, the SaaS builder, to track when users invite other users.

:::tip
**Built-In Invitation Tracking with ThriveStack's Invitation API**

API integrations aren't necessary for tracking the 'Invite Sent' event if you use ThriveStack's Self-Serve [Invitation API](/getting-started/self-serve/apis/invitation)
:::

<!-- ![Invite Sent Event Flowchart](/img/docs/events/invite_sent.png) -->

> To send the "invite_sent" event, the _Track API_ is used. For more details, refer to the [Track API](/getting-started/analyze/instrumentation/events/event-tracking)

<hr/>

## Event Details for Track API
### Request Field
When sending the invite_sent event, the following parameters are required:

| Parameter   | Type   | Description                                                  |
|-------------|--------|--------------------------------------------------------------|
| `event_name`| String | The name of the event being tracked. Use `"invite_sent"`.              |
| `properties`| Object |  Additional properties that provide more details about the invitee         |
| `user_id`   | String | The unique identifier of the user who is inviting |
| `timestamp` | Date   | The time when the user invites another user, in ISO-8601 format.                    |
| `context`| Object | Additional metadata to provide more context (e.g., device, location, etc.).        |

### Event Properties
The `properties` field contains additional data about the account and user being added. These are the expected fields within the properties object:

| Property          | Type   | Description                                            |
|-------------------|--------|--------------------------------------------------------|
| `invitee_email`   | String | The email address of the person receiving the invite.  |
| `invitee_first_name` | String | The first name of the person receiving the invite.    |
| `invitee_last_name` | String | The last name of the person receiving the invite.     |
| `invitee_role`    | String | The permission group for the person receiving the invite. |
| `feature_name`    | String | A particular feature of the product from where the invitation has triggered |

### Event Context

The `context` field provides additional metadata that gives more context for the event.

| Context Property   | Type   | Description                                                               |
|--------------------|--------|---------------------------------------------------------------------------|
| group_id           | String | A unique identifier for the account to which the user is being invited     |

### Example JSON Payload
```json 
[
  {
    "event_name": "invite_sent",
    "properties": {
      "invitee_email": "amy@achme.com",
      "invitee_first_name": "Amy",
      "invitee_last_name": "Frank",
      "invitee_role": "Developer",
      "feature_name": "CUSTOMER_JOURNEY"
    },
    "user_id": "766b3aef-5904-46fe-af05-a293fee8h345",
    "timestamp": "2024-10-20T15:51:35.059000Z",
    "context": {
      "group_id": "bp497d1a-0159-4009-9454-8a1b0e7c0a60"
    }
  }
]
```
<hr/>

##  Sample cURL

```bash
curl --location 'https://api.app.thrivestack.ai/api/track' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <your_auth_token>' \
--data-raw '[
    {
      "event_name": "invite_sent",
      "properties": {
        "feature_name": "CUSTOMER_JOURNEY",
        "invitee_email": "amy@achme.com",
        "invitee_first_name": "Amy",
        "invitee_last_name": "Frank",
        "invitee_role": "Developer"
      },
      "user_id": "766b3aef-5904-46fe-af05-a293fee8h345",
      "timestamp": "2024-10-20T15:51:35.059000Z",
      "context": {
        "group_id": "bp497d1a-0159-4009-9454-8a1b0e7c0a60"
      }
  }
]
'
```


<!-- ### 1.2.3. Explore Use Cases

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
[
    {
        "event_name": "invite_sent",
        "properties": {
            "feature_name": "CUSTOMER_JOURNEY",
            "invitee_email": "shawnankunding@opportunityspace,inc..com",
            "invitee_first_name": "Shawn",
            "invitee_last_name": "Ankunding",
            "invitee_role": "Editor"
        },
        "user_id": "3e474abe-5943-41fd-8b7b-4c87ad95b0c7",
        "timestamp": "20-11-23T22:28:55.111Z",
        "context": {
            "group_id": "55444abe-41fd-5943-d95b-4c87ad95b674"
        }
    }
]
``` -->
<!-- 
### 1.2.5. Sample cURL

Experience the APIs firsthand by using the [Try Out](/integrate/public_apis/track) feature in your web browser. For assistance on navigating the 'Try Out' functionality, consult the [Guide](/getting-started/apis-non-gen/using-the-try-out-options).

```bash
curl --location 'https://api.app.thrivestack.ai/api/track' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsImlkIjoiZjk5OTI4MmMtYjZjZi00YjQ4LTliMWEtOTAyMWVlM2Q3NmI0IiwidHlwIjoiSldUIn0.eyJhdWQiOiJ1c2VyX21hbmFnZW1lbnQiLCJleHAiOjE3MjUwMTQwOTcsImp0aSI6ImY5OTkyODJjLWI2Y2YtNGI0OC05YjFhLTkwMjFlZTNkNzZiNCIsImlhdCI6MTcyNDkzNjA5NywiaXNzIjoiVGhyaXZlU3RhY2sifQ.dCfke26t69Xd9mKbvVH9GPCueMxnSRrL5qJwUm02giXVO1Ne8jTBH5oSAo2nisE3h6ri8FpCEfTn7qTfkBYmXyCwRGUFBkqCwZAtYWrp8ugmAlp2exsuCzFLGF5UQiwHi5qcOzsDEUa7s7UODNl7nThNwArlqTwkJp-XEc9BXCjw2mX3_9Hc0H_ozbg8pWjXIcBqLjuXjVI-VIT3P46wd3_PVJve8Hm-rOuoMkwprihJCbYavihecNff_lE2f2KIzUruIJyLeXqohd1XkVxG3xSrviDqXEbsVBA-o3rHoLZqEHC2lSm99S1Ot7DsVR19Vo5INgV4cvdsmYMfdsyXDw' \
--data-raw '[
    {
        "event_name": "invite_sent",
        "properties": {
            "feature_name": "CUSTOMER_JOURNEY",
            "invitee_email": "shawnankunding@opportunityspace,inc..com",
            "invitee_first_name": "Shawn",
            "invitee_last_name": "Ankunding",
            "invitee_role": "Editor"
        },
        "user_id": "3e474abe-5943-41fd-8b7b-4c87ad95b0c7",
        "timestamp": "20-11-23T22:28:55.111Z",
        "context": {
            "group_id": "55444abe-41fd-5943-d95b-4c87ad95b674"
        }
    }
]'
``` -->
