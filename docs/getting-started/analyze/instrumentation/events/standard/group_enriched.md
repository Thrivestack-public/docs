# Group Enriched

## Overview

Tracking the "group_enriched" event helps SaaS builders monitor when a group's information has been enriched with additional data in their product. This event provides insights into group data enhancements and account profiling.

> To send this event, the _Track API_ is used. For more details, [click here](/getting-started/analyze/instrumentation/events/event-tracking).
<hr/>

## Event Details for Track API

### Request Fields

When sending the "group_enriched" event, the following parameters are required:

| Parameter   | Type   | Description                                                                                     |
|-------------|--------|-------------------------------------------------------------------------------------------------|
| event_name  | String | The name of the event being tracked. Use `"group_enriched"`.                                   |
| user_id     | String | A unique identifier of the user who triggered the event.                                       |
| properties   | Object | Additional properties that provide more details about the group's enrichment.                   |
| timestamp   | Date   | The time when the group's information was enriched, in ISO-8601 format.                        |
| context     | Object | Additional metadata to provide more context (e.g., device, location, etc.).                    |

### Event Properties

The `properties` field contains additional data about the group being enriched. These are the expected fields within the properties object:

| Property                          | Type    | Description                                          |
| --------------------------------- | ------- | ---------------------------------------------------- |
| enrichment_annual_revenue         | String  | The annual revenue of the group.                    |
| enrichment_city                   | String  | The city where the group is located.                 |
| enrichment_country                | String  | The country where the group is located.              |
| enrichment_country_code           | String  | The country code of the group's location.            |
| enrichment_crunchbase_handle      | String  | The Crunchbase handle of the group.                  |
| enrichment_description             | String  | The description of the group.                        |
| enrichment_domain                  | String  | The domain of the group.                             |
| enrichment_domain_aliases          | Object  | The domain aliases of the group.                     |
| enrichment_email_addresses         | Array   | The email addresses of the group.                    |
| enrichment_email_provider          | String  | The email provider of the group.                     |
| enrichment_employees               | Integer | The number of employees in the group.                |
| enrichment_employees_range         | String  | The range of employees in the group.                 |
| enrichment_facebook_handle         | String  | The Facebook handle of the group.                    |
| enrichment_founder_year            | Integer | The year the group was founded.                      |
| enrichment_industry                | String  | The industry the group operates in.                  |
| enrichment_industry_group          | String  | The industry group the group belongs to.             |
| enrichment_legal_name              | String  | The legal name of the group.                         |
| enrichment_location                | String  | The location of the group.                           |
| enrichment_logo                    | String  | The URL of the group's logo.                         |
| enrichment_market_cap              | String  | The market capitalization of the group.              |
| enrichment_name                    | String  | The name of the group.                               |
| enrichment_phone                   | String  | The primary phone number of the group.               |
| enrichment_phone_numbers           | Array   | The phone numbers of the group.                      |
| enrichment_postal_code             | String  | The postal code of the group's location.             |
| enrichment_raised                  | String  | The amount of money raised by the group.             |
| enrichment_sector                  | String  | The sector the group operates in.                    |
| enrichment_state                   | String  | The state where the group is located.                |
| enrichment_state_code              | String  | The state code of the group's location.              |
| enrichment_street_address          | String  | The street address of the group.                     |
| enrichment_street_name             | String  | The street name where the group is located.          |
| enrichment_street_number           | String  | The street number of the group's location.           |
| enrichment_sub_industry            | String  | The sub-industry the group operates in.              |
| enrichment_tags                    | Array   | The tags associated with the group.                  |
| enrichment_tech                    | String  | The technologies used by the group.                  |
| enrichment_tech_categories         | Array   | The technology categories the group belongs to.      |
| enrichment_time_zone               | String  | The time zone of the group's location.               |
| enrichment_traffic_rank            | String  | The traffic rank of the group's website.             |
| enrichment_twitter_handle          | String  | The Twitter handle of the group.                     |
| enrichment_type                    | String  | The type of the group.                               |
| group_type                         | String  | The type of the group.                               |
| name                               | String  | The name of the group.                               |
| planId                             | String  | The ID of the group's plan.                          |
| planName                           | String  | The name of the group's plan.                        |

### Event Context

The `context` field provides additional metadata that gives more context for the event.

| Context Property   | Type   | Description                                                               |
|--------------------|--------|---------------------------------------------------------------------------|
| group_id           | String | A unique identifier for the group whose information is being enriched.     |


### Example JSON Payload
```json
[
  {
    "user_id": "d4e8f7a2-6789-4abc-bc03-12cd345ef678",
    "event_name": "group_enriched",
    "properties": {
      "enrichment_annual_revenue": "500000",
      "enrichment_city": "Austin",
      "enrichment_country": "United States",
      "enrichment_country_code": "US",
      "enrichment_crunchbase_handle": "example-company",
      "enrichment_description": "Innovative solutions for a digital world, specializing in cloud services and analytics.",
      "enrichment_domain": "examplecompany.com",
      "enrichment_domain_aliases": null,
      "enrichment_email_addresses": ["info@examplecompany.com"],
      "enrichment_email_provider": "Gmail",
      "enrichment_employees": 50,
      "enrichment_employees_range": "51-100",
      "enrichment_facebook_handle": "exampleco.fb",
      "enrichment_founder_year": 2018,
      "enrichment_industry": "Technology",
      "enrichment_industry_group": "Software",
      "enrichment_legal_name": "Example Company LLC",
      "enrichment_location": "123 Tech Lane, Austin, Texas 78701, US",
      "enrichment_logo": "https://example.com/logo.png",
      "enrichment_market_cap": "3000000",
      "enrichment_name": "Example Company",
      "enrichment_phone": "+1-512-555-0199",
      "enrichment_phone_numbers": ["+1-512-555-0199"],
      "enrichment_postal_code": "78701",
      "enrichment_raised": "1500000",
      "enrichment_sector": "Tech Services",
      "enrichment_state": "Texas",
      "enrichment_state_code": "TX",
      "enrichment_street_address": "123 Tech Lane",
      "enrichment_street_name": "Tech Lane",
      "enrichment_street_number": "123",
      "enrichment_sub_industry": "Cloud Computing",
      "enrichment_tags": ["SaaS", "Cloud", "Analytics"],
      "enrichment_tech": "AWS, Azure",
      "enrichment_tech_categories": ["Cloud Computing", "Data Analytics"],
      "enrichment_time_zone": "America/Chicago",
      "enrichment_traffic_rank": "50000",
      "enrichment_twitter_handle": "@exampleco",
      "enrichment_type": "Private",
      "group_type": "Product",
      "name": "Tech Innovators Group",
      "planId": "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",
      "planName": "Enterprise Plan"
    },
    "context": {
      "group_id": "group_456"
    },
    "timestamp": "2024-10-20T15:51:35.059000Z"
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
    "user_id": "d4e8f7a2-6789-4abc-bc03-12cd345ef678",
    "event_name": "group_enriched",
    "properties": {
      "enrichment_annual_revenue": "500000",
      "enrichment_city": "Austin",
      "enrichment_country": "United States",
      "enrichment_country_code": "US",
      "enrichment_crunchbase_handle": "example-company",
      "enrichment_description": "Innovative solutions for a digital world, specializing in cloud services and analytics.",
      "enrichment_domain": "examplecompany.com",
      "enrichment_domain_aliases": null,
      "enrichment_email_addresses": ["info@examplecompany.com"],
      "enrichment_email_provider": "Gmail",
      "enrichment_employees": 50,
      "enrichment_employees_range": "51-100",
      "enrichment_facebook_handle": "exampleco.fb",
      "enrichment_founder_year": 2018,
      "enrichment_industry": "Technology",
      "enrichment_industry_group": "Software",
      "enrichment_legal_name": "Example Company LLC",
      "enrichment_location": "123 Tech Lane, Austin, Texas 78701, US",
      "enrichment_logo": "https://example.com/logo.png",
      "enrichment_market_cap": "3000000",
      "enrichment_name": "Example Company",
      "enrichment_phone": "+1-512-555-0199",
      "enrichment_phone_numbers": ["+1-512-555-0199"],
      "enrichment_postal_code": "78701",
      "enrichment_raised": "1500000",
      "enrichment_sector": "Tech Services",
      "enrichment_state": "Texas",
      "enrichment_state_code": "TX",
      "enrichment_street_address": "123 Tech Lane",
      "enrichment_street_name": "Tech Lane",
      "enrichment_street_number": "123",
      "enrichment_sub_industry": "Cloud Computing",
      "enrichment_tags": ["SaaS", "Cloud", "Analytics"],
      "enrichment_tech": "AWS, Azure",
      "enrichment_tech_categories": ["Cloud Computing", "Data Analytics"],
      "enrichment_time_zone": "America/Chicago",
      "enrichment_traffic_rank": "50000",
      "enrichment_twitter_handle": "@exampleco",
      "enrichment_type": "Private",
      "group_type": "Product",
      "name": "Tech Innovators Group",
      "planId": "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",
      "planName": "Enterprise Plan"
    },
    "context": {
      "group_id": "group_456"
    },
    "timestamp": "2024-10-20T15:51:35.059000Z"
  }
]
'
```
