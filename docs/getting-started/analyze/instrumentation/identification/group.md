# Group

## Overview
The Group API call allows you to associate an individual user with a specific group, such as a company, organization, account, project, or team.

This call enables you to identify the account or organization to which your users belong. There are two key identifiers in a Group call:

- **`userId`**: Refers to the individual user.
- **`groupId`**: Refers to the specific group or organization.

A user can be associated with multiple groups, each represented by a different `groupId`, but will have only one `userId` linked to each of those groups. Note that not all platforms support multiple group associations for a single user.

In addition to the `groupId`, the Group API accepts traits specific to the group, such as industry or number of employees, which pertain to that particular account. Similar to the traits in an Identify call, you can update these traits by calling the same attribute with a new value.

<!-- ![Group Identify Flowchart](/img/docs/analyze/apis/group-flowchart.png) -->

**URL:** `https://api.app.thrivestack.ai/api/group`

**Method:** `POST`


<hr/>

## Request Headers

| Header Name     | Description                                       | Example Value           |
|-----------------|---------------------------------------------------|-------------------------|
| `Authorization` | Bearer token for authentication | `Bearer <token>`        |
| `Content-Type`  | Media type of request body                        | `application/json`      |


<hr/>

## Request Body 
> **Note:** A maximum of **1,000 group events or 2 MB of data**, whichever is smaller, can be sent in a single API request. Alternatively, if **100 groups** are being updated, they can be batched into one request. Exceeding either the event or size limit will result in a `400 Bad Request` response.

### Fields
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `group_id` | String | Yes | The unique identifier of the group associated with the user. |
| `user_id` | String | Yes | The unique identifier of the user triggering the event |
| `timestamp` | Date | Yes | The event timestamp in UTC using the ISO 8601 format |
| `traits` | Object | No | A map storing traits about the user. Refer Group Traits Section |
| `context` | Object | No | A map containing additional context related to the event |

### Group Traits
Group traits are used to build a detailed profile of a group. The following traits are accepted as part of the request, it is mandate to send `group_type`

| Trait | Type | Description |
| --- | --- | --- |
| `group_type` | string (Required) | Type of the group, such as Account, Team |
| `name` | string  | Name of the group |
| `planName` | string | Pricing plan of that group, if applicable |
| `domain` | string | domain of the account, if applicable |
| `enrichment_name` | string | Name of the group, used in general communication. |
| `enrichment_legal_name` | string | This is the group’s official name as registered with legal authorities. |
| `enrichment_domain` | string | The primary web domain associated with the group (e.g., example.com). |
| `enrichment_domain_aliases` | Array[string] | A list of alternative domain names that point to the group's website. |
| `enrichment_phone_numbers` | Array[string] | Contact numbers of the group. |
| `enrichment_email_addresses` | Array[string] | Email addresses of the group. |
| `enrichment_sector` | string | The broad sector in which the group operates, such as technology, healthcare, finance, etc. |
| `enrichment_industry_group` | string | A more specific grouping within the broader sector (e.g., software or hardware in technology). |
| `enrichment_industry` | string | A more detailed classification of the group’s business activities within the industry group. |
| `enrichment_sub_industry` | string | An even more specific classification within the industry, providing finer granularity (e.g., enterprise software). |
| `enrichment_tags` | Array[string] | A list of keywords or labels that describe various aspects of the group, such as products, services, or characteristics. |
| `enrichment_description` | string | A textual description of the group, providing an overview of what it does, its mission, products, or services. |
| `enrichment_founder_year` | int | The year the group was established. |
| `enrichment_location` | string | A general description of where the group is based, which may include the city, state, or region. |
| `enrichment_time_zone` | string | The time zone in which the group's primary operations are based. |
| `enrichment_street_number` | string | The street number where the group is located. |
| `enrichment_street_name` | string | Name of the street to which the group belongs. |
| `enrichment_street_address` | string | Address of the street where the group is located. |
| `enrichment_city` | string | The city the group belongs to. |
| `enrichment_postal_code` | string | The postal code of the group's location. |
| `enrichment_state` | string | The group's state of residence. |
| `enrichment_state_code` | string | The state's code where the group is located. |
| `enrichment_country` | string | The group's country of residence. |
| `enrichment_country_code` | string | The country's code where the group is located. |
| `enrichment_logo` | string | The URL or file path to the group's logo image. |
| `enrichment_linkedin_handle` | string | LinkedIn profile link of the group. |
| `enrichment_facebook_handle` | string | Facebook profile link of the group. |
| `enrichment_twitter_handle` | string | Twitter profile link of the group. |
| `enrichment_crunchbase_handle` | string | Crunchbase profile link of the group. |
| `enrichment_email_provider` | string | The provider of the group's email services. |
| `enrichment_type` | string | The type or category of the group, indicating its business model or structure (e.g., private, public, non-profit). |
| `enrichment_phone` | string | Phone number of the group. |
| `enrichment_traffic_rank` | string | A ranking indicating the group’s website traffic relative to other websites. |
| `enrichment_employees` | int | Number of employees in the group. |
| `enrichment_employees_range` | string | A range or estimate of the number of employees, often used when exact numbers are not available. |
| `enrichment_market_cap` | string | The market capitalization of the group, which is the total value of its outstanding shares of stock. |
| `enrichment_raised` | string | The total amount of funding or investment the group has raised, relevant for startups and private companies. |
| `enrichment_annual_revenue` | string | Annual revenue of the group. |
| `enrichment_tech` | string | The technologies or technical platforms the group uses or specializes in. |
| `enrichment_tech_categories` | Array[string] | A list of categories or types of technology that the group is involved in or provides (e.g., cloud computing, cybersecurity). |

### JSON Example
```json
[
	{
    "user_id": "1820abb7-e6d4-45ec-8bc5-9a5c13ba06ca",
    "traits": {
      "group_type": "Team",
      "industry": "Telecommunications",
      "name": "Acme",
      "domain": "acme.com",
      "planName": "Basic"
	  },
    "context": {
      "group_id": "7cc972d3-685d-4106-a862-4fc37da0eca4"
    },
    "timestamp": "2023-12-14T16:07:33.571125Z"
    }
]
```

<hr/>

## Response Body 
### Fields

| Field Name | Type | Description |
| --- | --- | --- |
| `success` | Bool | Indicates if user was successfully identified |
| `response_id` | String | A unique identifier for the response |
| `message` | String | Any additional information about the request status |
### JSON Example
```json
{
  "success": true,
  "response_id": "7e51e59e-abf7-4610-858c-d759dd2d1a06",
  "message": "Group(s) updated successfully"
}
```

### Response Codes

| Code | Description |
| --- | --- |
| `200` | Group(s) updated successfully |
| `400` | Bad Request, invalid input data |
| `401` | Access token missing or invalid |
| `500` | Internal Server Error, a generic error occurred on the server |

<hr/>

## Example cURL


```bash
curl --location 'https://api.app.thrivestack.ai/api/group' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsImlkIjoiNWZiY2E4YmUtNzk0OC00ZGQ3LTgxZGItZDZiMTFjNjhlYjgwIiwidHlwIjoiSldUIn0.eyJhdWQiOiJ0ZWxlbWV0cnlfYXBpcyIsImV4cCI6MTcyOTQ5MzkyOCwianRpIjoiNWZiY2E4YmUtNzk0OC00ZGQ3LTgxZGItZDZiMTFjNjhlYjgwIiwiaWF0IjoxNzI5NDE1OTI4LCJpc3MiOiJUaHJpdmVTdGFjayJ9.a34Mo3gGJfL_n6ls9Y3KP3IIpHJdqEOchZyAZF0hov-VujecPLJblZ-8WXs7KzZEwyo7DVVeIAygPUz0Xs9a56tA2ZW_6GxRWpw6zS-LLh8FNI1Ekk33hsoloW4WeGOAG8xybghJJH3w6R_H59jubrVNFnaz8YqBbiYou9klowTAjZBg-6IH5eGovGs0xzmaEFpC_0PphZ11wQKC0ZiMI3qz83GnC01VZZe5KjOmEON--B1qtN04pBNnEeCjuNFhBS1uhzAd_7FlRMiiUU29QOve8OXFHCXskvsFIHuUnSE3ZqDduFpKTMnK74VxuevjGsI8X7kIkz1SYnS72sFtUg' \
--data '[
    {
    "user_id": "2520abb7-e6d4-45ec-8bc5-9a5c13ba06ca",
    "group_id": "25c972d3-685d-4106-a862-4fc37da0eca4",
    "traits": {
      "group_type": "Team",
      "industry": "Telecommunications",
      "name": "Acme",
      "domain": "acme.com",
      "planName": "Basic"
      },
    "context": {
      
    },
    "timestamp": "2023-12-14T16:07:33.571125Z"
   }
]'
```

<hr/>

## Authorization scopes
Requires one of the following OAuth scopes:
- `telemetry_apis`
- `group_api`