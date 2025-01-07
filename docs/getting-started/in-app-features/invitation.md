# Invitation - Getting Started

This guide will walk you through setting up and integrating ThriveStack's *Invitation as a Service* into your application. *Invitation as a Service* will help you easily implement the in-app invitation feature within your application, enabling your users to invite their team members and helping you increase qualified acquisitions.

## Setup 'Invitation In-App Feature'

You can find *Invitation as a Service* on the [Quick Start Page](https://app.thrivestack.ai/build/setup/quick-start/). Navigate to the *Invitation* card and click on *Setup*. Please note that, as of now, using *Invitation as a Service* through ThriveStack's Self-Service is a mandatory step.

Once you begin the setup, the wizard will let you try a simulated invitation to help you better understand all the steps ThriveStack performs behind the scenes in an end-to-end invitation flow.

Proceed with the setup and select *Use ThriveStack's Self-Serve* when prompted. The wizard will create an invitation workflow for your application. And you’re done! You are now ready to integrate the invitation workflow with your application.

## Integrating Invitation Workflows with Your Application

Once the setup is complete, you will be directed to the 'Integrate' screen for the Invitation as a Service feature. The integration process is simplified into four steps, with two being optional. The 'Integrate' wizard itself is organized into two sections: 'Basic', which covers the mandatory steps, and 'All Configs', which includes the optional steps.

Each integration step in ThriveStack may include a Configuration. Configurations store your preferences, enabling you to customize workflows to suit your needs and seamlessly integrate the Invitation feature with your application. While you can save multiple configurations, only one can be applied at a time. For integration steps that do not require preferences to be saved, configurations are not applicable.

In some configuration steps, ThriveStack provides Default Configurations. These pre-configured settings allow you to experience and integrate workflows with your application without requiring upfront customization. This approach helps you better understand your needs while reducing the time required to gather configuration details. Please note that not all default configurations are suitable for Production environments. Before going live, you will need to create and apply your own custom configurations. You will be prompted to update any default configurations that are not production-ready.

Returning to the integration steps, you will need to complete the four steps (including optional steps) to configure and successfully integrate the Invitation feature with your application.

- **Integrate with your UI**:  
   Integrate the *Invitation* feature with your UI by using either the ThriveStack SDK or by creating a custom UI with APIs.

- **Configure Notification Provider**:  
   Configure your SendGrid details, which will be used to send invitation emails to your users. ThriveStack provides a default configuration to simplify integration until you are ready to go live.

- *(Optional)* **Configure Webhook to Receive Invitation Events**:  
   Set up a webhook for ThriveStack to send invitation events to your application.

- *(Optional)* **Handle Invitation Events**:  
   Review the list of events sent during the invitation process. You can decide which events to handle based on your application’s requirements.

Now, let’s dive deeper into each of the configurations.

### 1. Integrate with Your UI

In this step, we will integrate the *Invitation* feature with your UI. You have two options to achieve this:

- Use the UI Component provided by ThriveStack (via the ThriveStack SDK).
- Create a custom UI and integrate it using ThriveStack APIs.

Before proceeding, there is a prerequisite step: creating a secure backend to store and fetch ThriveStack secrets. However, you can initially skip this step, as ThriveStack provides dummy secrets through an endpoint to help you proceed with the integration. Learn more about this [here](#).

#### A. UI Component (ThriveStack SDK, currently React supported)

**a. Install the npm package**  
Install the ThriveStack React SDK package to add the Invitation component to your project.

```bash
npm i ts-react
```

**b. Import the npm package**  
Import the `InvitationModal` component from the installed ThriveStack package.

```bash
import {InvitationModal} from "ts-react";
```

**c. Use Invitation Component**  
Integrate the `InvitationModal` component into your application and provide the necessary props.

```javascript
<InvitationModal 
    isModalVisible={false}
    setIsModalVisible={setIsModalVisible}
    sender_email_id="xyz@domain.com"
    invite_workflow_id=""
/>
```

Here is the list of all the props that can be sent to the Modal for customization:

- **isModalVisible**: Controls the visibility of the invitation modal (true to show, false to hide).  
- **setIsModalVisible**: A function to toggle the visibility state of the invitation modal.  
- **sender_email_id**: The email ID of the user sending the invitation.  
- **invite_workflow_id**: The unique ID of the invitation workflow to be used.  
- **invite_source_page_url**: The URL of the page where the invitation was initiated.  
- **invite_destination_page_url**: The URL to which the invitee will be directed upon accepting the invitation.  
- **invite_link_expiry_in_minutes**: The expiration time (in minutes) for the invitation link.  
- **test_mode**: A boolean indicating whether the invitation is being sent in test mode.  
- **roles**: A list of roles assigned to the invitee.  
- **teams**: A list of teams the invitee will be added to.  
- **feature_id**: The unique ID of the feature associated with the invitation.  
- **feature_name**: The name of the feature associated with the invitation.  
- **task_id**: The unique ID of the task linked to the invitation.  
- **task_name**: The name of the task linked to the invitation.  
- **comments**: Additional comments or notes to be included with the invitation.  

#### How is Authentication and Authorization Handled?

The UI component internally detects the following cookies: **`tsAuthToken`** and **`tsManagementToken`**, and uses them for authentication. These tokens are automatically set in the cookies by ThriveStack's self-serve workflows. Once you have successfully integrated ThriveStack's self-serve, these tokens will always be available after user signup or login.

#### B. API

If you are implementing a custom UI for the invitation, you can use the following API to trigger the invitation flow:

```bash
curl --location 'https://api.dev.app.thrivestack.ai/v1/TriggerInvitation' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <tsManagementToken>' \
--data-raw '{
    "account_id": "RXBTZH6hn",
    "tenant_id": "w0qhZsOFl",
    "workflow_design_time_id": "285FVfZhL7",
    "invite_user_details": [
        {
            "email_id": "xcm39u41ko@dygovil.com",
            "role_id": "role_id_1",
            "role_name": "Role One",
            "team_id": "team_id_1",
            "team_name": "Team One"
        }
    ],
    "invite_destination_page_url": "https://google.com/build/setup",
    "invite_source_page_url": "userManagemnet",
    "invite_link_expiry_in_minutes": 300,
    "feature_id": "feature_id", 
    "feature_name": "feature name", 
    "task_id": "task_id",
    "task_name": "task_name",
    "comments": "test comment",
    "token": "<tsAuthToken>"
}'
```

#### Where Do I Get the `tsAuthToken` and `tsManagementToken`?

Once you have integrated ThriveStack Self-Serve Workflows, the `tsAuthToken` and `tsManagementToken` will be automatically set in the cookies. You can fetch these tokens directly from the cookies whenever needed.

---

### 2. Configure Notification Provider

In this step, you will configure the notification provider to enable sending invitation emails.

1. **Select Notification Provider**:  
   Use the dropdown to select your notification provider (e.g., SendGrid).

2. **API Key**:  
   Enter the API key associated with your selected notification provider to authorize email-sending actions.

ThriveStack provides a default configuration to simplify integration until you are ready to go live.

---

### 3. (Optional) Configure Webhook to Receive Invitation Events

Set up a webhook to receive invitation-related events from ThriveStack.

1. **Enter Webhook URL**:  
   Provide the endpoint URL (method type: POST) for your application's webhook in the dev environment.

2. **API Key**:  
   Enter the API key required for authenticating webhook calls to your application.

This configuration ensures that your application receives real-time event notifications.

---

### 4. (Optional) Handle Invitation Events

Review the list of events sent during the invitation process. The webhook configured in the previous step will receive these events:

1. **User Invited (`user_invited`)**:  
   Triggered when an invitation is sent to a user.

2. **User Invite Accepted (`user_invite_accepted`)**:  
   Triggered when a user accepts an invitation.

3. **User Joined Tenant (`user_joined_tenant`)**:  
   Triggered when a user joins the tenant.

You can process these events as needed based on your application’s requirements.
