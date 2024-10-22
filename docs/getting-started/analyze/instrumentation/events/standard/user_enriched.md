# User Enriched

## Overview

Tracking the "user_enriched" event helps SaaS builders monitor when a user's information has been enriched with additional data in their product. This event provides insights into user data enhancements and account profiling.

<!-- ![](/img/docs/events/user_enriched.png) -->

> To send the "user_enriched" event, the _Track API_ is used. For more details, refer to the [Track API](/getting-started/analyze/instrumentation/events/event-tracking).

<hr/>

## Event Details for Track API

### Request Fields

When sending the "user_enriched" event, the following parameters are required:

| Parameter   | Type   | Description                                                                                     |
|-------------|--------|-------------------------------------------------------------------------------------------------|
| event_name  | String | The name of the event being tracked. Use `"user_enriched"`.                                   |
| user_id     | String | A unique identifier of the user whose information is being enriched.                           |
| properties   | Object | Additional properties that provide more details about the user's enrichment.                   |
| timestamp   | Date   | The time when the user's information was enriched, in ISO-8601 format.                        |
| context     | Object | Additional metadata to provide more context (e.g., device, location, etc.).                    |

### Event Properties

The `properties` field contains additional data about the user being enriched. These are the expected fields within the properties object:

| Property                          | Type   | Description                                          |
| --------------------------------- | ------ | ---------------------------------------------------- |
| enrichment_active_at              | String | The timestamp when the enrichment became active.     |
| enrichment_avatar                 | String | The URL of the user's avatar.                        |
| enrichment_city                   | String | The city where the user is located.                  |
| enrichment_country                | String | The country where the user is located.               |
| enrichment_country_code           | String | The country code of the user's location.             |
| enrichment_email_provider         | String | The email provider of the user.                      |
| enrichment_employment_domain      | String | The domain of the user's employment.                 |
| enrichment_employment_name        | String | The name of the user's employer.                     |
| enrichment_employment_role        | String | The role of the user in their employment.            |
| enrichment_employment_seniority   | String | The seniority level of the user in their employment. |
| enrichment_employment_sub_role    | String | The sub-role of the user in their employment.        |
| enrichment_employment_title       | String | The job title of the user.                           |
| enrichment_facebook_handle        | String | The Facebook handle of the user.                     |
| enrichment_first_name             | String | The first name of the user.                          |
| enrichment_full_name              | String | The full name of the user.                           |
| enrichment_github_handle          | String | The GitHub handle of the user.                       |
| enrichment_inactive_at            | String | The timestamp when the enrichment became inactive.   |
| enrichment_last_name              | String | The last name of the user.                           |
| enrichment_linkedin_handle        | String | The LinkedIn handle of the user.                     |
| enrichment_location               | String | The location of the user.                            |
| enrichment_phone                  | Array  | The phone numbers of the user.                       |
| enrichment_state                  | String | The state where the user is located.                 |
| enrichment_state_code             | String | The state code of the user's location.               |
| enrichment_time_zone              | String | The time zone of the user's location.                |
| enrichment_twitter_handle         | String | The Twitter handle of the user.                      |
             |

### Event Context

The `context` field provides additional metadata that gives more context for the event.

| Context Property   | Type   | Description                                                               |
|--------------------|--------|---------------------------------------------------------------------------|
| group_id           | String | A unique identifier for the account to which the user is being mapped.     |


### Example JSON Payload
```json
[
  {
    "event_name": "user_enriched",
    "user_id": "abc123-def456-ghi789-jkl012",
    "properties": {
      "enrichment_active_at": "2024-10-21T12:00:00Z",
      "enrichment_avatar": "https://example.com/avatar123.jpg",
      "enrichment_city": "Los Angeles",
      "enrichment_country": "United States",
      "enrichment_country_code": "US",
      "enrichment_email_provider": "Gmail",
      "enrichment_employment_domain": "examplecompany.com",
      "enrichment_employment_name": "Example Company",
      "enrichment_employment_role": "Software Engineer",
      "enrichment_employment_seniority": "Mid-level",
      "enrichment_employment_sub_role": "Backend Developer",
      "enrichment_employment_title": "Senior Software Engineer",
      "enrichment_facebook_handle": "exampleuser.fb",
      "enrichment_first_name": "John",
      "enrichment_full_name": "John Doe",
      "enrichment_github_handle": "johndoe123",
      "enrichment_inactive_at": "",
      "enrichment_last_name": "Doe",
      "enrichment_linkedin_handle": "http://www.linkedin.com/in/johndoe",
      "enrichment_location": "California, USA",
      "enrichment_phone": ["+1-555-123-4567"],
      "enrichment_state": "California",
      "enrichment_state_code": "CA",
      "enrichment_time_zone": "America/Los_Angeles",
      "enrichment_twitter_handle": "@johndoe"
    },
    "context": {
      "group_id": "xyz789-uvw456-tuv123-abc987"
    },
    "timestamp": "2024-10-21T12:30:08.276Z"
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
    "event_name": "user_enriched",
    "user_id": "abc123-def456-ghi789-jkl012",
    "properties": {
      "enrichment_active_at": "2024-10-21T12:00:00Z",
      "enrichment_avatar": "https://example.com/avatar123.jpg",
      "enrichment_city": "Los Angeles",
      "enrichment_country": "United States",
      "enrichment_country_code": "US",
      "enrichment_email_provider": "Gmail",
      "enrichment_employment_domain": "examplecompany.com",
      "enrichment_employment_name": "Example Company",
      "enrichment_employment_role": "Software Engineer",
      "enrichment_employment_seniority": "Mid-level",
      "enrichment_employment_sub_role": "Backend Developer",
      "enrichment_employment_title": "Senior Software Engineer",
      "enrichment_facebook_handle": "exampleuser.fb",
      "enrichment_first_name": "John",
      "enrichment_full_name": "John Doe",
      "enrichment_github_handle": "johndoe123",
      "enrichment_inactive_at": "",
      "enrichment_last_name": "Doe",
      "enrichment_linkedin_handle": "http://www.linkedin.com/in/johndoe",
      "enrichment_location": "California, USA",
      "enrichment_phone": ["+1-555-123-4567"],
      "enrichment_state": "California",
      "enrichment_state_code": "CA",
      "enrichment_time_zone": "America/Los_Angeles",
      "enrichment_twitter_handle": "@johndoe"
    },
    "context": {
      "group_id": "xyz789-uvw456-tuv123-abc987"
    },
    "timestamp": "2024-10-21T12:30:08.276Z"
  }
]
'
```
