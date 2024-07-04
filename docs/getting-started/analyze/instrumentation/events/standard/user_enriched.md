# User Enriched

## 1. Introduction

The goal is to generate a 'User Enriched' event that enables SaaS builders to track when a user's information has been enriched with additional data in their product.

## 1.2. Track API

The `/track` endpoint is used to track events or actions performed by users. It allows you to associate and update event information as a property.

### 1.2.1. Event Parameters

To complete this step, you need to provide five pieces of information: the event name, the user ID, the group ID, additional properties associated with the event, and the timestamp.

| Parameter            | Type   | Description                                                                        |
| -------------------- | ------ | ---------------------------------------------------------------------------------- |
| `event_name`         | String | The name of the event being tracked.                                               |
| `properties`         | Object | Additional properties associated with the event.                                   |
| `user_id`            | String | The unique identifier of the user triggering the event.                            |
| `group_id`           | String | The unique identifier of the account triggering the event.                         |
| `timestamp`          | Date   | The date and time the event occurred, recommended to use ISO-8601 date strings.    |
| `context` (optional) | Object | A dictionary of extra information that provides useful context about a data point. |

### 1.2.2. Event Properties

The following properties describe how an event is defined by a schema:

| Property                          | Type   | Description                                          |
| --------------------------------- | ------ | ---------------------------------------------------- |
| `enrichment_active_at`            | String | The timestamp when the enrichment became active.     |
| `enrichment_avatar`               | String | The URL of the user's avatar.                        |
| `enrichment_city`                 | String | The city where the user is located.                  |
| `enrichment_country`              | String | The country where the user is located.               |
| `enrichment_country_code`         | String | The country code of the user's location.             |
| `enrichment_email_provider`       | String | The email provider of the user.                      |
| `enrichment_employment_domain`    | String | The domain of the user's employment.                 |
| `enrichment_employment_name`      | String | The name of the user's employer.                     |
| `enrichment_employment_role`      | String | The role of the user in their employment.            |
| `enrichment_employment_seniority` | String | The seniority level of the user in their employment. |
| `enrichment_employment_sub_role`  | String | The sub-role of the user in their employment.        |
| `enrichment_employment_title`     | String | The job title of the user.                           |
| `enrichment_facebook_handle`      | String | The Facebook handle of the user.                     |
| `enrichment_first_name`           | String | The first name of the user.                          |
| `enrichment_full_name`            | String | The full name of the user.                           |
| `enrichment_github_handle`        | String | The GitHub handle of the user.                       |
| `enrichment_inactive_at`          | String | The timestamp when the enrichment became inactive.   |
| `enrichment_last_name`            | String | The last name of the user.                           |
| `enrichment_linkedin_handle`      | String | The LinkedIn handle of the user.                     |
| `enrichment_location`             | String | The location of the user.                            |
| `enrichment_phone`                | Array  | The phone numbers of the user.                       |
| `enrichment_state`                | String | The state where the user is located.                 |
| `enrichment_state_code`           | String | The state code of the user's location.               |
| `enrichment_time_zone`            | String | The time zone of the user's location.                |
| `enrichment_twitter_handle`       | String | The Twitter handle of the user.                      |

### 1.2.3. Sample

A JSON object with the required Event Object fields and any additional event properties.

```json
{
  "user_id": "user_123",
  "event": "user_enriched",
  "properties": {
    "enrichment_active_at": "",
    "enrichment_avatar": "https://static.licdn.com/aero-v1/sc/h/9c8pery4andzj6ohjkjp54ma2",
    "enrichment_city": "Pune",
    "enrichment_country": "India",
    "enrichment_country_code": "In",
    "enrichment_email_provider": "Apollo",
    "enrichment_employment_domain": "thrivestack.ai",
    "enrichment_employment_name": "ThriveStack",
    "enrichment_employment_role": "",
    "enrichment_employment_seniority": "",
    "enrichment_employment_sub_role": "",
    "enrichment_employment_title": "",
    "enrichment_facebook_handle": "",
    "enrichment_first_name": "Santosh",
    "enrichment_full_name": "Santosh Yadav",
    "enrichment_github_handle": "",
    "enrichment_inactive_at": "",
    "enrichment_last_name": "Yadav",
    "enrichment_linkedin_handle": "http://www.linkedin.com/in/santosh-yadav-7a803a54",
    "enrichment_location": "India",
    "enrichment_phone": [],
    "enrichment_state": "Maharashtra",
    "enrichment_state_code": "",
    "enrichment_time_zone": "",
    "enrichment_twitter_handle": ""
  },
  "context": {
    "group_id": "account_123"
  },
  "timestamp": "2023-11-02T00:30:08.276Z"
}
```

### 1.2.4. [Try Out!](../../../../../integrate/public_apis/track)

```json
{
  "user_id": "766b3aef-5904-46fe-af05-a293fee8h345",
  "event": "user_enriched",
  "properties": {
    "enrichment_active_at": "",
    "enrichment_avatar": "https://static.licdn.com/aero-v1/sc/h/9c8pery4andzj6ohjkjp54ma2",
    "enrichment_city": "Pune",
    "enrichment_country": "India",
    "enrichment_country_code": "In",
    "enrichment_email_provider": "Apollo",
    "enrichment_employment_domain": "thrivestack.ai",
    "enrichment_employment_name": "ThriveStack",
    "enrichment_employment_role": "",
    "enrichment_employment_seniority": "",
    "enrichment_employment_sub_role": "",
    "enrichment_employment_title": "",
    "enrichment_facebook_handle": "",
    "enrichment_first_name": "Santosh",
    "enrichment_full_name": "Santosh Yadav",
    "enrichment_github_handle": "",
    "enrichment_inactive_at": "",
    "enrichment_last_name": "Yadav",
    "enrichment_linkedin_handle": "http://www.linkedin.com/in/santosh-yadav-7a803a54",
    "enrichment_location": "India",
    "enrichment_phone": [],
    "enrichment_state": "Maharashtra",
    "enrichment_state_code": "",
    "enrichment_time_zone": "",
    "enrichment_twitter_handle": ""
  },
  "context": {
    "group_id": "47464e5b-4727-11ee-aeb6-fefbf8354ds3"
  },
  "timestamp": "2023-11-02T00:30:08.276Z"
}
```
