# Guide to ThriveStack Integration Using a Sample Application

### Overview
This document demonstrates how ThriveStack enables the integration of self-serve workflows into SaaS applications using a sample application created for illustrative purposes. 
The sample application represents a typical user scenario, helping SaaS builders understand the integration points and capabilities of ThriveStack.
The code for the sample application is available on [GitHub](https://github.com/Thrivestack-public/sample-app/tree/develop).

![Sample Application](/img/docs/self_serve/integrate/sample-app.png)

### Components

#### 1. Sample App
The Sample App serves as a model for SaaS builders, illustrating how a typical SaaS application, with both frontend and backend components, can integrate with ThriveStack. This application uses a frontend framework like React (though it can be adapted for other frameworks or vanilla JavaScript) and includes a backend setup for handling server-side operations.

** Frontend **
- **Embed TS Frontend Library** (1): This library is embedded into the Sample App’s frontend, facilitating communication with ThriveStack and enabling features such as single sign-on and tenant management.
- **Pages** (2):
  - **Home**: The main landing page where users first interact with the application.
  - **Onboard**: Guides new users through the process of setting up their account, which may involve collecting personal and persona information as required by the SaaS builder.

#### Backend
- **Webhook for Tenant Events** (3): The backend of the Sample App includes a webhook that receives messages from ThriveStack when events like user account creation or joining occur. This setup ensures that the Sample App’s backend remains synchronized with ThriveStack. After processing these messages, the Sample App acknowledges the reception and handling of the information to ThriveStack.

#### 2. ThriveStack

ThriveStack is structured into three main components: 1. Self Serve, 2. PLG CRM, and 3. PLG Analytics. This document primarily addresses the Self Serve aspect.

** Self Serve Workflows **

  - **Signup Workflow**:
    - **Signup Screen**: Facilitates new user account creation.
    - **Create or Join Account Screen**: Allows users to either establish a new account or join an existing one.
  
  - **Login Workflow**:
     - **Login Screen**: Manages user authentication.
     - **Select Account Page** (if applicable): Lets users select which account they wish to log into.

**Tenant Management**

ThriveStack send notifications of account creation or joining to the Sample App while the signup. This system waits for an acknowledgment from the Sample App, confirming the user's addition or creation at their end.

** Communications **
- **Tenant Events**: Sends notifications and events related to tenant activities to the Sample App.
- **Ack Actions**: Allows the Sample App to acknowledge the receipt and processing of events, critical for completing the signup workflow.

** Integrated Services **
- Once Self Serve is integrated, SaaS builders automatically gain access to PLG CRM and PLG Analytics, which receive user and telemetry data from the Self Serve component. These tools are designed to enhance customer relationship management and provide deep insights into user behavior and application performance.

### Self serve workflows

ThriveStack provides two primary workflows for integrating self-serve capabilities into SaaS applications: the Login workflow and the Signup workflow. 
Each workflow can be customized according to the needs of the SaaS application, utilizing different workflow templates. 
Detailed information about these templates and the necessary integration points for each workflow can be found here: [Self Serve Integration Guide](/getting-started/self-serve/integrate/).

#### Signup Workflow
The Signup workflow generally follows these steps:
1. **Signup Page**: Users begin by creating a new account on the signup page.
2. **Verification Email Sent**: A verification email is sent immediately after the account creation.
3. **Email Verification**: Once the email is verified, the user is redirected to the SaaS application to begin the onboarding process. During onboarding, the user may need to provide additional personal or business details as required by the SaaS application.
5. **Return to ThriveStack**: After the onboarding is completed, the user is redirected back to ThriveStack to complete additional steps such as plan association or data enrichment.
6. **Final Redirection**: The final step involves redirecting the user back to the SaaS application's homepage, where they can start using the application.

#### Login Workflow
The typical steps involved in the Login workflow include:
1. **Login Page**: The user starts by entering their credentials on the login page.
2. **Verification Email Sent**: An email is sent to the user to verify their identity.
3. **Account Selection**: Once the email is verified, the user may need to select an account to proceed (if applicable).
4. **Redirection**: After verification, the user is redirected to the SaaS application's homepage, completing the login process.

These workflows ensure a seamless user experience from initial account creation to full integration into the SaaS application, supporting a smooth onboarding process and effective management of user data.
