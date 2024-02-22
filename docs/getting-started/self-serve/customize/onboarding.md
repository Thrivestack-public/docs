# Onboarding

## Objective:
Onboarding introduces new users to the service after signup. It's a vital step for users to provide additional information and establish their initial preferences.

## Configuration:
- In the workflow builder, select the 'Onboarding' node to access its settings in the right pane.
- Include a URL for redirecting users to a system where they can complete onboarding details.
- Return the data to our system using either:
    1. **AWS SQS**: Transmit data through a queue message.
    2. **Callback URL**: Send data via a request body to the callback URL.
