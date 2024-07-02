# Identify

## 1. Introduction

The Identify call is a method that allows you to associate a user with their actions and record traits about them.

![User Identify Flowchart](/img/docs/analyze/apis/identify-flowchart.png)

## 1.1. Identify API

The `/identify` call is used to identify users and associate traits with their profiles. It allows you to store and update user information for personalized experiences.

## 1.2. Identify Parameters

You need to provide three pieces of information: a unique identifier for the user, additional traits associated with the user, and a timestamp.

| Parameter       | Type   | Description                                                      |
|-----------------|--------|------------------------------------------------------------------|
| `user_id`       | String | The unique identifier of the user triggering the event.          |
| `user_traits`   | Object | Additional traits associated with the user.                      |
| `timestamp`     | Date   | Date the user’s account was first created.                       |
| `context` (optional) | Object | Context is a dictionary of extra information that provides useful context about a datapoint |

## 1.3. User Traits

The following traits described as a traits:

| Traits          | Type   | Description                                                      |
|-----------------|--------|------------------------------------------------------------------|
| `address`       | Object | Street address of a user optionally containing city, country, postal_code, state, or street |
| `age`           | Number | Age of a user                                                    |
| `avatar`        | String | URL to an avatar image for the user                              |
| `birthday`      | Date   | User’s birthday                                                  |
| `company`       | Object | Company the user represents, optionally containing name (String), id (String or Number), industry (String), employee_count (Number) or plan (String) |
| `description`   | String | Description of the user                                          |
| `first_name`    | String | First name of a user                                             |
| `gender`        | String | Gender of a user                                                 |
| `last_name`     | String | Last name of a user                                              |
| `name`          | String | Full name of a user. If you only pass a first and last name. We automatically fill in the full name for you. |
| `phone`         | String | Phone number of a user                                           |
| `title`         | String | Title of a user, usually related to their position at a specific company. Example: “VP of Engineering” |
| `username`      | String | User’s username. This should be unique to each user, like the usernames of Twitter or GitHub. |
| `website`       | String | Website of a user                                                |

## 1.4. Sample

A JSON object with the required Identify Object fields and any additional traits associated with user.

```json
{
  "user_id": "user123",
  "traits": {
    "name": "FirstName LastName",
    "email": "firstname.lastname@example.com"
  },
  "timestamp": "20-11-23T22:28:55.111Z"
}
```
