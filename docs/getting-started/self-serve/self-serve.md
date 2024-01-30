---
sidebar_position: 2
---

# Self Serve

To configure workflows, pricing plans, and more, navigate to the **'Enable Self Serve'** section on the **'Get Started'** page. This will direct you to the **'Configure Self Serve'** page. Select **'Build'** from the menu.

This leads you to ThriveStack's **'Workflow Builder'**. The **'Workflow Builder'** empowers you to create a tailored user workflow according to your business requirements.

The **'Workflow Builder'** comprises the following steps:

1. Create Application
2. Select Self Serve Features
3. Add Branding Information

## 1. Create Application

The **'Workflow Builder'** allows you to choose the type of application you want to build. Currently, only 'Regular Web Application' is supported, with more application types planned for the future (e.g., Single Page Application, Native Applications).
## 2. Self Serve Features

In this part of the **'Workflow Builder'**, define the steps of the user journey. Your selections in each step of the questionnaire determine the user workflow. The **'Workflow Builder'** creates each node with default configurations, editable later in the **'Workflow Canvas'** via the **'Configuration Pane'**.

This article briefly explains each feature. For more details, refer to individual pages for each feature.

### Authentication
Configure authentication for your user workflow. ThriveStack can handle authentication configuration for you, or you can set up JWT tokens or user_id if authentication is already implemented in your product. [Read More]
### Enrichment
Collect additional information about your customer and their organisation during onboarding. Configure the questionnaire that users will fill out in this step.[Read More]

### Onboarding
Onboard users/tenants to your product. Configure the data needed for tenant onboarding at your SAAS product. The onboarding node sends data via a configurable URL. The tenant onboarding status can be notified to ThriveStack via an AWS SQS message. [Read More]

### Notifications
Notify your customers or internal team once onboarding/tenant creation is complete. Currently, only email notifications are supported.

### Pricing
Configure pricing plans, allowing users to select and be billed accordingly.

### Authorization
Associate users with roles to enforce Role-Based Access Control (RBAC) in your product.

### Lead Storage
Configure your CMS, and ThriveStack will seamlessly sync lead data to your CMS.

### Waitlist
If user sign-ups surpass predefined thresholds, users can be added to the waitlist. Define the threshold in this step.

## 3. Branding

The third and final step in the **'Workflow Builder'** is configuring branding information.

Currently, you can update the Brand Logo by uploading an image file under 1.0 MB in size. More customization options will be available soon.
