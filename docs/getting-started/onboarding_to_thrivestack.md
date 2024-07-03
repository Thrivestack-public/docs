# Onboarding to ThriveStack

This document will guide you through the onboarding process on the ThriveStack platform, assisting you in creating and integrating 
ThriveStack Self-Serve workflows into your application. You will learn the basics of 'Customizing Self-Serve', 'Configuring Core Options',
'Triggering & Testing', and more.


<details>

<summary>

## 1. Customize Self-Serve _(2 mins)_

</summary>

After successfully signing up for ThriveStack and entering your basic details, you will land on the 'Customize' screen. 
This step aims to understand who will be using your product and whether you have user authentication set up in your product. 
Additionally, you can choose from pre-made self-serve templates, which we will discuss shortly.

Things you will address in this step:

**A. Business Type:** Who will be using your product? Are you targeting businesses (B2B) or consumers (B2C)?

**B. Authentication Type:** Is user authentication already implemented in your application? If not, ThriveStack will assist you in setting up authentication.

**C. Self Serve Templates:** Since every SaaS product serves its customers uniquely, self-serve workflows can vary. Templates provide an easy starting point. Here is a brief description of each template:
  - **[Prosumer](https://resources.thrivestack.ai/i/143920594/prosumer-templates-templates):** In this template, tenants typically start as individual users and eventually transition to a team or enterprise plan.

  - **[COGS Efficient](https://resources.thrivestack.ai/i/143920594/cogs-efficiency-templates-templates):** In this model, every customer receives a dedicated backend. Your teams deploy it manually through interactions between sales and customers, or you deploy infrastructure components selectively based on the features customers choose.

  - **[Traditional SaaS](https://resources.thrivestack.ai/i/143920594/traditional-saas-templates-templates):** Best suited for SaaS companies with a sales-led organizational structure. Your teams, having recently started exploring Product-Led Growth (PLG), are building a stronger commitment to self-serve strategies.

  Read more about the templates [here](https://resources.thrivestack.ai/p/announcing-self-serve-templates).

</details>

<details>

<summary>

## 2. Configure Core Options _(2-3 mins)_

</summary>

After completing the customization step, you will be directed to the 'Integrate' screen. This step facilitates the integration of ThriveStack with your application. 
The integration process includes multiple checklist items to refine your setup. However, in this section, we will focus only on the core integration options that are 
essential for triggering & testing the self-serve workflow.

#### Configuration Variable

Before we explore the core options, let's briefly review 'Creating Configuration Variables' within ThriveStack. The integration checklist includes various steps necessary for integrating ThriveStack with a user's SaaS application. Each checklist item represents a specific configuration task, allowing you to save and name multiple configurations, with only one active at a time.

For example:
- **Custom Domain:** You can save different domains like `acme-labs.com` and `your-domain.ai`, and switch between them as needed.
- **Success Redirection Page:** This is where ThriveStack redirects the end user after the workflow completes. You might have one configuration for `/home` and another for `/dashboard`, with the ability to switch between them.

This flexibility in managing configurations enhances testing efficiency and integration customization.

**A. Creating New Configuration Variable**

1. **Initiate Creation:**
   - Navigate to the configuration variable dropdown and select '+ Create variable'.

2. **Naming the Configuration:**
   - In the modal that appears, enter the name for your configuration. We automatically prepend semantic prefixes to enhance clarity. For instance, if you name an 'application domain' configuration `test`, it becomes `Application_Domain_Development_test`. This full name will be displayed before you finalize creation.

3. **Create the Variable:**
   - Click on 'Create' to establish the configuration variable `Application_Domain_Development_test`.

4. **Enter Configuration Data:**
   - Add the actual configuration data for the checklist item. For an 'Application Domain', this might be something like `your-domain.com` or `acme.com`.

5. **Save Changes:**
   - Once all mandatory fields are filled, the 'Save changes' button will activate. Click it to save your configuration variable.

**B. Switching Configuration Variable**

If you have multiple configurations saved for an integration checklist item, you can easily switch between them. Follow these steps:

1. **Access the Dropdown:**
   - Click on the configuration variable dropdown menu.

2. **Select a Configuration:**
   - Choose the configuration variable you wish to apply. Once selected, the new configuration data will appear in the checklist item.

3. **Save Changes:**
   - Click on 'Save changes' to apply the new configuration to the checklist item.

:::note
ThriveStack includes 'Default Configurations' out of the box, which are pre-applied to the integration checklist when you access it for 
the first time. These default configurations are designed to help you quickly trigger, test, and experience the self-serve workflows.

**Please Note:** Default Configurations are not editable. If you wish to modify the values in the integration checklist, you must create 
a new configuration variable.
:::

### A. Application Domain

In this configuration step, you need to specify your 'Application Domain'—the domain where your application is hosted, such as `acme.com`, `acme-labs.com`, or `localhost:9000`
for local testing. This domain is crucial for configuring the subsequent steps.

### B. Onboarding Redirects

This setting specifies the endpoint that directs users to your onboarding page, such as `/onboarding` or `/on-board`. ThriveStack will redirect users to the page you 
configure, allowing them to complete the onboarding process. This URL will be prefixed with one of the application domains configured in the previous step. 
Depending on your chosen template, you may need to redirect users back to ThriveStack, passing the 'redirect_url' in the URL parameters.

### C. On-Success Redirects

This setting determines the landing page where users will arrive once they complete the entire workflow. Common endpoints include `/dashboard` or `/home`. 
This URL will also be prefixed with one of the application domains you configured previously.

</details>

<details>

<summary>

## 3. Trigger & Test _(5 mins)_

</summary>

Once the core options are correctly configured, you can test the self-serve workflows by triggering them. Click on the 'Preview Icon' to access the trigger start page. The content of this page depends on the 'Authentication' type you selected during the 'Customize' step.

### A. ThriveStack Assisted Authentication

If you opted for ThriveStack Assisted Authentication, you will be directed to the Signup/Login page specifically created for your product. To trigger the workflow, follow these steps:

  1. Enter a valid email address. A magic verification link will be sent to this email. Click on the link to proceed with the workflow.

### B. Authentication Implemented by You

If your application handles user authentication, the workflow will be triggered once a user is authenticated by your system. ThriveStack provides a mechanism to simulate the workflow post-authentication:

  1. Enter a valid email, userId, and userToken (unique identifier and token maintained by your application).

  2. Retrieve your security credentials from the [Developer Dashboard](https://app.thrivestack.ai/build/api-keys) and input them into the form.

  3. Click on the 'Trigger workflow now' button to initiate the workflow.

Users, Accounts, Enrichment Data, and other metrics related to this signup/login are readily available in ThriveStack's [Drive](#drive) and [Analyze](#analyze) sections. 
All standard events in the workflow are automatically instrumented, requiring no additional setup from you. For more details about these events, please read [here](/getting-started/analyze/instrumentation/events/standard/events_overview).

</details>

In just 10 minutes, we've customized, configured core options, and triggered workflows. This quick exercise provided a basic understanding 
of ThriveStack's self-serve workflows and how you can personalize them according to your preferences.

In the following sections, we'll delve deeper into the extensive capabilities of ThriveStack, giving you a high-level overview of what more 
you can achieve with the platform.


<details>

<summary>

## Integrate with your Development Environment _(30-45 mins)_

</summary>

With just the core integration options configured, you were able to trigger and test the self-serve workflows, view metrics, user and account enrichment data, and log standard events.

Below are the detailed integration steps for a deeper and more personalized integration with your application.

### Custom Domain

Configuring a custom domain allows ThriveStack to host self-serve workflow pages on your designated domain, such as `ts.your-domain.com` or `ts.acme.com`.

1. Navigate to the 'Setup Custom Domain' section within the integration checklist and create a new configuration variable.

2. Enter your Custom Domain (e.g., `acme-labs.com` or `your-domain.ai`) and proceed to verify its DNS settings.

3. After verification, the 'Sub Domain' field will be automatically filled (e.g., `ts.your-domain.ai`). Select 'Create DNS Records' 
and Create DNS (CNAME, TXT) records with your domain provider (e.g., GoDaddy).

4. Save your configurations. The subdomain will then be mapped to ThriveStack, finalizing the setup.

### Frontend Integration

#### Triggering Self-Serve Workflow Post User Authentication (For Applications Implementing Their Own Authentication)

When implementing your own authentication, it is crucial to manage the user flow after authentication. ThriveStack facilitates this with JavaScript SDKs and Web APIs designed to trigger workflows post-authentication.

Here are the essential steps:

1. Authenticate the user attempting to log in or sign up.

2. Obtain a ThriveStack token via a proxy web API, which you need to implement. ThriveStack provides a 'Dummy' endpoint for testing purposes until your actual web API is operational.

3. Use this token to initiate the ThriveStack self-serve workflows.

For a comprehensive guide, refer to the 'Frontend Integration' section in the integration checklist.

### Backend Integration

#### A. Tenant Acknowledgement Webhook

Effective orchestration of multiple components is often necessary for successful tenant provisioning, which may range from simply adding a new entry in your database to more complex tasks like creating multiple pods/services in your cluster. To accommodate the diverse tenant provisioning needs of SaaS builders, ThriveStack facilitates the following:

1. Sends tenant creation or join data to a webhook at your application's backend, which you need to implement.
2. Provisions the tenant within your application.
3. Once the tenant is provisioned, you must send an acknowledgment message to us via a Web API provided by ThriveStack.

For further details, refer to the 'Backend Integration' checklist item.

#### B. Secure Backend Endpoint to Get ThriveStack Token

This endpoint is critical for securely obtaining the ThriveStack token using your secret key. Once in production, the `tokenEndpoint` specified in the ThriveStack constructor should point to this custom endpoint. The implementation of this endpoint ensures the ThriveStack secret key remains protected and is not exposed in the frontend:

- Implement an API endpoint on your server that accepts an optional authentication token from your user session.
- This endpoint should communicate securely with ThriveStack's API using your secret key and return the ThriveStack token to the frontend.
- Ensure this endpoint is accessible only to authenticated users to prevent unauthorized access.

For more information, review the 'Backend Integration' checklist item.

</details>

<details>

<summary>

## Analyze

</summary>

When using ThriveStack's self-serve, the platform automatically generates and logs essential telemetry events. These events are pivotal for creating detailed reports, such as:

### Acquisition Report:
This report tracks new users who sign up or join your platform during a specific period. Metrics include the number of registrations, referral sources (e.g., organic search, social media), and the effectiveness of marketing campaigns. It aims to gauge the success of your user acquisition strategies.
- **Events expected:** `['signed_up', 'account_created', 'account_added_user']`

### Retention Report:
Retention focuses on the continuity of user engagement over time. Metrics include daily, weekly, or monthly active users (DAU, WAU, MAU) and churn rates, providing insights into user satisfaction, product stickiness, and the impact of feature changes.
- **Events expected:** `['signed_up', 'signed_in']`

### Virality Report

This report provides a comprehensive analysis of your product's virality over a selected time period. It aims to address three critical questions:

1. **How Viral is Your Product?** - Measures the extent to which your product is being shared and recommended within user networks.
2. **Causes of Virality:** - Identifies key drivers of virality, including influential users and features that encourage sharing.
3. **Challenges to Enhancing Virality:** - Examines obstacles that might be hindering the product's viral growth and suggests actionable strategies for improvement.

ThriveStack’s internal management of these events provides a hassle-free experience for developers. There is no need for manual 
instrumentation or event logging configuration—it is all handled transparently. This seamless integration allows you to focus on 
developing excellent features while ThriveStack takes care of collecting and analyzing valuable telemetry data for impactful reporting. 
For more information about Event Tracking, read [here](/getting-started/analyze/instrumentation/events/standard/events_overview).

</details>

<details>

<summary>

## Drive

</summary>

When using ThriveStack’s self-serve platform, the system automatically generates dashboards and widgets based on various events. These dashboards support the Go-to-Market (GTM) team by generating sales leads and informing sales strategies through actionable signals. The GTM team can leverage numerous filters to derive a broad spectrum of insights from these dashboards.

Following are the key functionalities available in the ThriveStack Drive section:

### Overall Dashboards
These dashboards provide comprehensive widgets related to accounts and users, featuring various filters for detailed analysis:
- **Time Range:** Filter data based on specific time periods.
- **Account Status:** Filter accounts by their current status.
- **Pricing Plan Applied:** Filter accounts based on applied pricing plans.
- **Country:** Filter data by the country of the accounts.
- **Additional Filters:** Employ further filters for in-depth analysis as needed.

### Account List
The Account List offers a detailed compilation of all accounts added to the product, with features such as:
- **Account Details:** Displays account domain, account country, and the pricing plans applied to each account.
- **Filtering Options:** Provides the ability to filter accounts based on various criteria, assisting in targeted analysis and strategy formulation.

### User List
The User List encompasses all users added to the product, providing:
- **User Contact Details:** Information on how to contact each user.
- **Employment Details:** Information about the user's employment, including company and designation.
- **User's Account Information:** Details about the account associated with each user.

</details>
