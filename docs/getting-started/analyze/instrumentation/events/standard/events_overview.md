# Events Overview

## Introduction

In SaaS applications, tracking events is crucial for understanding user behavior, optimizing features, and driving growth. This guide outlines essential events, including both pre-built and custom events, along with their impact on various reports.

![](/events_overview.png)

<hr/>

## Event Objects and Their Influence

| Event Object | Event Name                                                                                                            | Included   | Purpose                                              | Influenced Reports               |
| ------------ | --------------------------------------------------------------------------------------------------------------------- | ---------- | ---------------------------------------------------- | -------------------------------- |
| User         | [signed_up](/getting-started/analyze/instrumentation/events/standard/signed_up)                                       | Self Serve | Successful user registration or sign-up              | Acquisition, Retention, Virality |
| User         | [user_enriched](/getting-started/analyze/instrumentation/events/standard/user_enriched)                               | Self Serve | Additional data enrichment for user profiles         | N/A                              |
| Account      | [account_created](/getting-started/analyze/instrumentation/events/standard/account_created)                           | Self Serve | New account or organization creation                 | Acquisition                      |
| Account      | [group_enriched](/getting-started/analyze/instrumentation/events/standard/group_enriched)                             | Self Serve | Data enrichment for groups or teams                  | N/A                              |
| Account      | [account_added_user](/getting-started/analyze/instrumentation/events/standard/account_added_user)                     | Self Serve | User added to an account or organization             | Acquisition                      |
| User         | [user_waitlisted](/getting-started/analyze/instrumentation/events/standard/user_waitlisted)                           | Self Serve | Users on waitlist for specific features or services  | Acquisition                      |
| Account      | [tenant_waitlisted](/getting-started/analyze/instrumentation/events/standard/tenant_waitlisted)                       | Self Serve | Tenant/organization-level waitlisting                | Acquisition                      |
| User         | [signed_in](/getting-started/analyze/instrumentation/events/standard/signed_in)                                       | Self Serve | User login events                                    | Retention                        |
| User         | [invite_sent](/getting-started/analyze/instrumentation/events/standard/invite_sent)                                   | Self Serve | Invitation events (e.g., team collaboration invites) | Virality                         |
| Custom       | [subscription_upgraded](/getting-started/analyze/instrumentation/events/standard/custom_events) | Custom     | User subscription upgrades                           | Activation, Revenue              |
| Custom       | [feature_used](/getting-started/analyze/instrumentation/events/standard/custom_events)                   | Custom     | Utilization of specific features                     | Activation, Product Development  |

<hr/>

## How to Send These Events

API used for sending these events: [Track API](/getting-started/analyze/instrumentation/events/event-tracking)
>**Note:** Every event expects different properties based on the nature of the event, which you can find on the individual event page along with a sample CURL.

### Field Overview

| Parameter(Field)   | Type   | Description                                           | Example |
|-------------|--------|-------------------------------------------------------|-----------------
| event_name  | String | The name of the event being tracked.                  | "signed_up" |
| properties  | Object | Additional properties associated with the event.       | ```{"email": "JoeDao@acme.com"}```|
| user_id     | String | The unique identifier of the user triggering the event. | "31bfa753-d39f-43e9-b081-8ce6d2f40dc6" |
| timestamp   | Date   | Date the user’s account was first created. Recommends using ISO-8601 date strings. | "2023-12-14T16:07:33.571125Z" |
| context  | Object | Context is a dictionary of extra information that provides useful context about a datapoint. | ```{"group_id" : "3db920b6-d98b-4e9b-bda3-d23b925e0759"}``` |
| group_id  | Object | The unique identifier of the group. Can be Account, Team, Workspace. | "3db920b6-d98b-4e9b-bda3-d23b925e0759" |
| traits  | Object | Additional properties associated with the event. | ```{"email": "JoeDao@acme.com"}```|

<hr/>

## Key Takeaways

### Event Influence on Reports:

- Different events impact various reports (e.g., Acquisition, Retention, Virality, Activation, Revenue).
- Understanding these influences helps optimize product features and user engagement.

### Pre-built Events vs. Custom Events:

- **Pre-built Events:** Already included in self-serve—no coding effort required.
- **Custom Events:** Focus on implementing these; they provide flexibility tailored to your application.
