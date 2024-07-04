# Group Enriched

## 1. Introduction

The goal is to generate a 'Group Enriched' event that enables SaaS builders to track when a group's information has been enriched with additional data in their product.

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

```md
| Property                       | Type    | Description                                     |
| ------------------------------ | ------- | ----------------------------------------------- |
| `enrichment_annual_revenue`    | String  | The annual revenue of the group.                |
| `enrichment_city`              | String  | The city where the group is located.            |
| `enrichment_country`           | String  | The country where the group is located.         |
| `enrichment_country_code`      | String  | The country code of the group's location.       |
| `enrichment_crunchbase_handle` | String  | The Crunchbase handle of the group.             |
| `enrichment_description`       | String  | The description of the group.                   |
| `enrichment_domain`            | String  | The domain of the group.                        |
| `enrichment_domain_aliases`    | Object  | The domain aliases of the group.                |
| `enrichment_email_addresses`   | Array   | The email addresses of the group.               |
| `enrichment_email_provider`    | String  | The email provider of the group.                |
| `enrichment_employees`         | Integer | The number of employees in the group.           |
| `enrichment_employees_range`   | String  | The range of employees in the group.            |
| `enrichment_facebook_handle`   | String  | The Facebook handle of the group.               |
| `enrichment_founder_year`      | Integer | The year the group was founded.                 |
| `enrichment_industry`          | String  | The industry the group operates in.             |
| `enrichment_industry_group`    | String  | The industry group the group belongs to.        |
| `enrichment_legal_name`        | String  | The legal name of the group.                    |
| `enrichment_location`          | String  | The location of the group.                      |
| `enrichment_logo`              | String  | The URL of the group's logo.                    |
| `enrichment_market_cap`        | String  | The market capitalization of the group.         |
| `enrichment_name`              | String  | The name of the group.                          |
| `enrichment_phone`             | String  | The primary phone number of the group.          |
| `enrichment_phone_numbers`     | Array   | The phone numbers of the group.                 |
| `enrichment_postal_code`       | String  | The postal code of the group's location.        |
| `enrichment_raised`            | String  | The amount of money raised by the group.        |
| `enrichment_sector`            | String  | The sector the group operates in.               |
| `enrichment_state`             | String  | The state where the group is located.           |
| `enrichment_state_code`        | String  | The state code of the group's location.         |
| `enrichment_street_address`    | String  | The street address of the group.                |
| `enrichment_street_name`       | String  | The street name where the group is located.     |
| `enrichment_street_number`     | String  | The street number of the group's location.      |
| `enrichment_sub_industry`      | String  | The sub-industry the group operates in.         |
| `enrichment_tags`              | Array   | The tags associated with the group.             |
| `enrichment_tech`              | String  | The technologies used by the group.             |
| `enrichment_tech_categories`   | Array   | The technology categories the group belongs to. |
| `enrichment_time_zone`         | String  | The time zone of the group's location.          |
| `enrichment_traffic_rank`      | String  | The traffic rank of the group's website.        |
| `enrichment_twitter_handle`    | String  | The Twitter handle of the group.                |
| `enrichment_type`              | String  | The type of the group.                          |
| `group_type`                   | String  | The type of the group.                          |
| `name`                         | String  | The name of the group.                          |
| `planId`                       | String  | The ID of the group's plan.                     |
| `planName`                     | String  | The name of the group's plan.                   |
```

### 1.2.3. Sample

A JSON object with the required Event Object fields and any additional event properties.

```json
{
  "user_id": "user_123",
  "event": "group_enriched",
  "properties": {
    "enrichment_annual_revenue": "0",
    "enrichment_city": "Sammamish",
    "enrichment_country": "United States",
    "enrichment_country_code": "",
    "enrichment_crunchbase_handle": "",
    "enrichment_description": "ThriveStack enables SaaS builders to build and operate products to be self-served.\nImagine users to signup, try, engage and buy your product. We are the platform powering all of that. \nNow imagine one more thing - your GTM teams use our platform to  understand who these users are, how many, from where, and what they are doing with your product, nudge them to engage better and upsell them.  \n\nNow, why shouldn't you realize this today?",
    "enrichment_domain": "thrivestack.ai",
    "enrichment_domain_aliases": null,
    "enrichment_email_addresses": [],
    "enrichment_email_provider": "",
    "enrichment_employees": 11,
    "enrichment_employees_range": "11",
    "enrichment_facebook_handle": "",
    "enrichment_founder_year": 2023,
    "enrichment_industry": "",
    "enrichment_industry_group": "",
    "enrichment_legal_name": "ThriveStack",
    "enrichment_location": "2747 204th Ln NE, Sammamish, Washington 98074, US",
    "enrichment_logo": "https://zenprospect-production.s3.amazonaws.com/uploads/pictures/666be5b425e13f000148395b/picture",
    "enrichment_market_cap": "",
    "enrichment_name": "ThriveStack",
    "enrichment_phone": "",
    "enrichment_phone_numbers": [""],
    "enrichment_postal_code": "98074-4363",
    "enrichment_raised": "",
    "enrichment_sector": "",
    "enrichment_state": "Washington",
    "enrichment_state_code": "",
    "enrichment_street_address": "",
    "enrichment_street_name": "2747 204th Ln NE",
    "enrichment_street_number": "2747 204th Ln NE",
    "enrichment_sub_industry": "",
    "enrichment_tags": [],
    "enrichment_tech": "",
    "enrichment_tech_categories": [
      "AI",
      "Amazon AWS",
      "Android",
      "Circle",
      "Datadog",
      "DoubleClick",
      "DoubleClick Conversion",
      "Google Dynamic Remarketing",
      "Google Font API",
      "Google Tag Manager",
      "Hubspot",
      "Mixpanel",
      "Mobile Friendly",
      "Outlook",
      "SharePoint",
      "Stripe",
      "Webflow"
    ],
    "enrichment_time_zone": "",
    "enrichment_traffic_rank": "0",
    "enrichment_twitter_handle": "",
    "enrichment_type": "",
    "group_type": "Product",
    "name": "Earth!",
    "planId": "eb4e38a5-9d5e-4f19-b2ce-ffb711c4f75e",
    "planName": "Free Trial"
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
    "enrichment_annual_revenue": "0",
    "enrichment_city": "Sammamish",
    "enrichment_country": "United States",
    "enrichment_country_code": "",
    "enrichment_crunchbase_handle": "",
    "enrichment_description": "ThriveStack enables SaaS builders to build and operate products to be self-served.\nImagine users to signup, try, engage and buy your product. We are the platform powering all of that. \nNow imagine one more thing - your GTM teams use our platform to  understand who these users are, how many, from where, and what they are doing with your product, nudge them to engage better and upsell them.  \n\nNow, why shouldn't you realize this today?",
    "enrichment_domain": "thrivestack.ai",
    "enrichment_domain_aliases": null,
    "enrichment_email_addresses": [],
    "enrichment_email_provider": "",
    "enrichment_employees": 11,
    "enrichment_employees_range": "11",
    "enrichment_facebook_handle": "",
    "enrichment_founder_year": 2023,
    "enrichment_industry": "",
    "enrichment_industry_group": "",
    "enrichment_legal_name": "ThriveStack",
    "enrichment_location": "2747 204th Ln NE, Sammamish, Washington 98074, US",
    "enrichment_logo": "https://zenprospect-production.s3.amazonaws.com/uploads/pictures/666be5b425e13f000148395b/picture",
    "enrichment_market_cap": "",
    "enrichment_name": "ThriveStack",
    "enrichment_phone": "",
    "enrichment_phone_numbers": [""],
    "enrichment_postal_code": "98074-4363",
    "enrichment_raised": "",
    "enrichment_sector": "",
    "enrichment_state": "Washington",
    "enrichment_state_code": "",
    "enrichment_street_address": "",
    "enrichment_street_name": "2747 204th Ln NE",
    "enrichment_street_number": "2747 204th Ln NE",
    "enrichment_sub_industry": "",
    "enrichment_tags": [],
    "enrichment_tech": "",
    "enrichment_tech_categories": [
      "AI",
      "Amazon AWS",
      "Android",
      "Circle",
      "Datadog",
      "DoubleClick",
      "DoubleClick Conversion",
      "Google Dynamic Remarketing",
      "Google Font API",
      "Google Tag Manager",
      "Hubspot",
      "Mixpanel",
      "Mobile Friendly",
      "Outlook",
      "SharePoint",
      "Stripe",
      "Webflow"
    ],
    "enrichment_time_zone": "",
    "enrichment_traffic_rank": "0",
    "enrichment_twitter_handle": "",
    "enrichment_type": "",
    "group_type": "Product",
    "name": "Earth!",
    "planId": "eb4e38a5-9d5e-4f19-b2ce-ffb711c4f75e",
    "planName": "Free Trial"
  },
  "context": {
    "group_id": "47464e5b-4727-11ee-aeb6-fefbf8354ds3"
  },
  "timestamp": "2023-11-02T00:30:08.276Z"
}
```