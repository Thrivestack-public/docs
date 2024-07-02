# Onboarding to ThriveStack

This document will guide you through the onboarding process on the ThriveStack platform, assisting you in creating and integrating 
ThriveStack Self-Serve workflows into your application. You will learn the basics of 'Customizing Self-Serve', 'Configuring Core Options',
'Triggering & Testing', and more.

## Customize Self-Serve _(2 mins)_

After successfully signing up for ThriveStack and entering your basic details, you will land on the 'Customize' screen. 
This step aims to understand who will be using your product and whether you have user authentication set up in your product. 
Additionally, you can choose from pre-made self-serve templates, which we will discuss shortly.

Things you will address in this step:

- **Business Type:** Who will be using your product? Are you targeting businesses (B2B) or consumers (B2C)?

- **Authentication Type:** Is user authentication already implemented in your application? If not, ThriveStack will assist you in setting up authentication.

- **Self Serve Templates:** Since every SaaS product serves its customers uniquely, self-serve workflows can vary. Templates provide an easy starting point. Here is a brief description of each template:
  - **Prosumer:** In this template, tenants typically start as individual users and eventually transition to a team or enterprise plan.

  - **COGS Efficient:** In this model, every customer receives a dedicated backend. Your teams deploy it manually through interactions between sales and customers, or you deploy infrastructure components selectively based on the features customers choose.

  - **Traditional SaaS:** Best suited for SaaS companies with a sales-led organizational structure. Your teams, having recently started exploring Product-Led Growth (PLG), are building a stronger commitment to self-serve strategies.

  Read more about the templates [here](https://resources.thrivestack.ai/p/announcing-self-serve-templates).

## Configure Core Options _(2-3 mins)_

After completing the customization step, you will be directed to the 'Integrate' screen. This step facilitates the integration of ThriveStack with your application. 
The integration process includes multiple checklist items to refine your setup. However, in this section, we will focus only on the core integration options that are 
essential for triggering & testing the self-serve workflow.

### Application Domain

In this configuration step, you need to specify your 'Application Domain'—the domain where your application is hosted, such as `miro.com`, `jira.com`, or `localhost:9000`
for local testing. This domain is crucial for configuring the subsequent steps.

### Onboarding Redirects

This setting specifies the endpoint that directs users to your onboarding page, such as `/onboarding` or `/on-board`. ThriveStack will redirect users to the page you 
configure, allowing them to complete the onboarding process. This URL will be prefixed with one of the application domains configured in the previous step. 
Depending on your chosen template, you may need to redirect users back to ThriveStack, passing the 'redirect_url' in the URL parameters.

### On-Success Redirects

This setting determines the landing page where users will arrive once they complete the entire workflow. Common endpoints include `/dashboard` or `/home`. 
This URL will also be prefixed with one of the application domains you configured previously.

## Trigger & Test _(5 mins)_

Once the core options are correctly configured, you can test the self-serve workflows by triggering them. Click on the 'Preview Icon' to access the trigger start page. The content of this page depends on the 'Authentication' type you selected during the 'Customize' step.

### A. ThriveStack Assisted Authentication

If you opted for ThriveStack Assisted Authentication, you will be directed to the Signup/Login page specifically created for your product. To trigger the workflow, follow these steps:

  1. Enter a valid email address. A magic verification link will be sent to this email. Click on the link to proceed with the workflow.

### B. Authentication Implemented by You

If your application handles user authentication, the workflow will be triggered once a user is authenticated by your system. ThriveStack provides a mechanism to simulate the workflow post-authentication:

  1. Enter a valid email, userId, and userToken (unique identifier and token maintained by your application).

  2. Retrieve your security credentials from the [Developer Dashboard](https://app.thrivestack.ai/build/api-keys) and input them into the form.

  3. Click on the 'Trigger workflow now' button to initiate the workflow.

Users, Accounts, Enrichment Data, and other metrics related to this signup/login using the workflow can be found in ThriveStack's [Drive](#drive) and [Analyze](#analyze) sections.

## Integrate with your Development Environment _(30-45 mins)_

### Custom Domain

### Frontend Integration

### Backend Integration

## Review

## Analyze

## Drive
