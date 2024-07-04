# Events Overview

## Introduction

In SaaS applications, tracking events is crucial for understanding user behavior, optimizing features, and driving growth. This guide outlines essential events, including both pre-built and custom events, along with their impact on various reports.

## Event Objects and Their Influence

| Event Object | Event Name                                                                                                            | Included   | Purpose                                              | Influenced Reports               |
| ------------ | --------------------------------------------------------------------------------------------------------------------- | ---------- | ---------------------------------------------------- | -------------------------------- |
| User         | [signed_up](/getting-started/analyze/instrumentation/events/standard/signed_up)                                       | Self Serve | Successful user registration or sign-up              | Acquisition, Retention, Virality |
| User         | [signed_in](/getting-started/analyze/instrumentation/events/standard/signed_in)                                       | Self Serve | User login events                                    | Retention                        |
| User         | [user_waitlisted](/getting-started/analyze/instrumentation/events/standard/user_waitlisted)                           | Self Serve | Users on waitlist for specific features or services  | Acquisition                      |
| User         | [user_enriched](/getting-started/analyze/instrumentation/events/standard/user_enriched)                               | Self Serve | Additional data enrichment for user profiles         | N/A                              |
| User         | [invite_sent](/getting-started/analyze/instrumentation/events/standard/invite_sent)                                   | Self Serve | Invitation events (e.g., team collaboration invites) | Virality                         |
| Account      | [account_created](/getting-started/analyze/instrumentation/events/standard/account_created)                           | Self Serve | New account or organization creation                 | Acquisition                      |
| Account      | [account_added_user](/getting-started/analyze/instrumentation/events/standard/account_added_user)                     | Self Serve | User added to an account or organization             | Acquisition                      |
| Account      | [tenant_waitlisted](/getting-started/analyze/instrumentation/events/standard/tenant_waitlisted)                       | Self Serve | Tenant/organization-level waitlisting                | Acquisition                      |
| Account      | [group_enriched](/getting-started/analyze/instrumentation/events/standard/group_enriched)                             | Self Serve | Data enrichment for groups or teams                  | N/A                              |
| Custom       | [subscription_upgraded](/getting-started/analyze/instrumentation/events/standard/custom_events) | Custom     | User subscription upgrades                           | Activation, Revenue              |
| Custom       | [feature_used](/getting-started/analyze/instrumentation/events/standard/custom_events)                   | Custom     | Utilization of specific features                     | Activation, Product Development  |

## Key Takeaways

### Event Influence on Reports:

- Different events impact various reports (e.g., Acquisition, Retention, Virality, Activation, Revenue).
- Understanding these influences helps optimize product features and user engagement.

### Pre-built Events vs. Custom Events:

- **Pre-built Events:** Already included in self-serve—no coding effort required.
- **Custom Events:** Focus on implementing these; they provide flexibility tailored to your application.
