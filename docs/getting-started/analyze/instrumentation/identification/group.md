# Group

## 1.Introduction
The Group API call is a method used to associate an individual user with a group entity, such as a company, organization, account, project, or team. This call allows you to assign users to specific groups, manage group memberships, and update or retrieve information related to these associations. 

![Group Identify Flowchart](/img/docs/analyze/apis/group-flowchart.png)

### 1.1 Group API
A Group API typically refers to a set of API endpoints or functions designed to manage and interact with groups, companies, or teams.
- The `/group` endpoint is used to associate users with specific groups, allowing you to create, update, and retrieve group information for better organization and personalized experiences.

### 1.2 Group Parameters
Group parameters are the attributes or data fields used when interacting with a Group API to define, manage, or retrieve information about groups.
You need to provide four pieces of information:
1. Unique identifier of the user
2. Unique identifier of the account
3. Additional traits associated with the account
4. A Timestamp.

| Parameter  | Type   | Description                                                         |
|------------|--------|---------------------------------------------------------------------|
| `group_id`| String | The unique identifier of the group. |
| `user_id` | String | The unique identifier of the user.  |
| `traits`  | Object | Additional traits associated with the group. |
| `timestamp`| Date  | The date and time when the event was created, recommended in ISO-8601 format.|
| `context` (optional) | Object | Context is a dictionary of extra information that provides useful context about a datapoint |

### 1.3 Group Traits

Traits are the additional attributes or characteristics associated with a group. 
The following traits described as a traits:

| Traits      | Type   | Description                                                                 |
|-------------|--------|-----------------------------------------------------------------------------|
| `enrichment_name`                     | string    | Name of the group,used in general communication.  |
| `enrichment_legal_name`               | string    | This is the group’s official name as registered with legal authorities.  |
| `enrichment_domain`                   | string    | The primary web domain associated with the group (e.g., `example.com`).   |
| `enrichment_domain_aliases`           | Array[string]  | A list of alternative domain names that point to the groups's website.  |
| `enrichment_phone_numbers`            | Array[string]  | Contact number of the group.|
| `enrichment_email_addresses`          | Array[string]  | Email Address of the group. |
| `enrichment_sector`                   | string    | The broad sector in which the group operates, such as technology, healthcare, finance, etc  |
| `enrichment_industry_group`           | string    | A more specific grouping within the broader sector. For example, within the technology sector, industry groups might include software or hardware. |
| `enrichment_industry`                 | string    | A more detailed classification of the group’s business activities within the industry group.   |
| `enrichment_sub_industry`             | string    | An even more specific classification within the industry, providing finer granularity. For example, within the software industry, this could be enterprise software or consumer software.    |
| `enrichment_tags`                     | Array[string]  | A list of keywords or labels that describe various aspects of the group, such as products, services, or characteristics.  |
| `enrichment_description`              | string    | A textual description of the group, providing an overview of what it does, its mission, products, or services.  |
| `enrichment_founder_year`             | int       | the year the group was established |
| `enrichment_location`                 | string    | A general description of where the group is based, which may include the city, state, or region  |
| `enrichment_time_zone`                | string    | The time zone in which the groups's primary operations are based.  |
| `enrichment_street_number`            | string    | The street number where the group is located   |
| `enrichment_street_name`              | string    | Name of the street to which the group is belonged |
| `enrichment_street_address`           | string    | Address of the street where the group is located |
| `enrichment_city`                     | string    | The city the group belongs to |
| `enrichment_postal_code`              | string    | The postal code of the group's location |
| `enrichment_state`                    | string    | The group's state of residence  |
| `enrichment_state_code`               | string    | The state's code where the group is located  |
| `enrichment_country`                  | string    | The group's Country  of residence  |
| `enrichment_country_code`             | string    | The Country's code where the group is located |
| `enrichment_logo`                     | string    | The URL or file path to the groups’s logo image   |
| `enrichment_linkedin_handle`          | string    | Linkedin profile link  of the group |
| `enrichment_facebook_handle`          | string    | Github profile link of the group  |
| `enrichment_twitter_handle`           | string    | Twitter profile link of the group  |
| `enrichment_crunchbase_handle`        | string    | Crunch base profile link of the group |
| `enrichment_email_provider`           | string    | The provider of the groups’s email services  |
| `enrichment_type`                     | string    | The type or category of the group, which could indicate its business model or structure (e.g., private, public, non-profit). |
| `enrichment_phone`                    | string    | Phone number of the group  |
| `enrichment_traffic_rank`             | string    | A ranking indicating the group’s website traffic relative to other websites.    |
| `enrichment_employees`                | int       | Number of employees in the group  |
| `enrichment_employees_range`          | string    | A range or estimate of the number of employees, often used when exact numbers are not available   |
| `enrichment_market_cap`               | string    | The market capitalization of the group, which is the total value of its outstanding shares of stock. |
| `enrichment_raised`                   | string    | The total amount of funding or investment the group has raised. This is particularly relevant for startups and private companies. |
| `enrichment_annual_revenue`           | string    | Annual Revenue of the group |
| `enrichment_tech`                     | string    | The technologies or technical platforms the group uses or specializes in. |
| `enrichment_tech_categories`          | Array[string]  | A list of categories or types of technology that the group is involved in or provides (e.g., cloud computing, cybersecurity).  |

### 1.4 End points
URL :`https://api.dev.app.thrivestack.ai/api/group` 
Method:`POST`

### 1.5 Headers
- `Authorization: Bearer <token>` Replace <token> with a valid Thrivestack Management token to validate request. (Ref: [Token API Documentation](https://docs.app.thrivestack.ai/getting-started/analyze/authentication)) (Valid Scopes: group_api, telemetry_apis)
- `Content-Type: application/json` Indicates that the request body is in the JSON format.

### 1.6 Sample

A JSON object with the required Identify Object fields and any additional traits associated with account. [Try Out](../../../../integrate/public_apis/group)

#### Sample JSON request
```json
{
  "user_id": "user123",
  "group_id": "account123",
  "traits": {
    "enrichment_name": "Acma labs",
    "industry": "IT services",
    "plan": "free plan",
    "employees": "100"
  },
  "timestamp": "20-11-23T22:28:55.111Z"
}
```
#### Sample response
#### 1.Successful Response
```json
{
  "status": "success",
  "message": "Group updated successfully",
  "data": {
    "user_id": "user123",
    "group_id": "account123",
    "traits": {
      "name": "Acma labs",
      "industry": "IT  services",
      "plan": "Free plan",
      "employees": "100"
    },
    "timestamp": "20-11-23T22:28:55.111Z"
} 
}
```
#### 2.Error Response
In some cases, if there was an issue with the request (such as missing parameters or invalid data), the response might look like this:
```json
{
  "status": "error",
  "message": "Invalid group ID or missing fields",
  "error_code": "INVALID_REQUEST"
}
``` 