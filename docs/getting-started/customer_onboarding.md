# ThriveStack - Customer Onboarding

This section gives a high-level checklist of what are the steps and the time needed to onboard your product on the ThriveStack platform.

## Pre-requisites to Onboarding

1. Understand the problems ThriveStack is solving
2. Understand ThriveStack’s solution offerings for enabling and operating Product-Led Growth (PLG)

Listed below are the steps and the tentative timeline required to onboard any Product on the ThriveStack platform.

## Milestones

|                         | Milestone 1                                                                                         | Milestone 2                                                        | Milestone 3                                                      |
|-------------------------|------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|------------------------------------------------------------------|
| **Time taken**          | **Total time:** 15 mins - 1 hour<br/>**Setup time** ~5 mins                                          | **Total time:** 1 hr - 4 hrs<br/>**Setup time** ~30 mins            | **Total time:** 2 hrs - 1 day<br/>**Setup time** ~2 hrs           |
| **What will you be doing in this time** | Customize & Experience Self-Serve with ThriveStack’s Default configuration             | Integrate with your Application Environment<br/>Integrate with P1 config | Integrate P2 config                                              |
| **What you will accomplish by the end** | - See Self-Serve Signup/Login in action<br/>- Experience OOB reports<br/>- Experience Bottom up PLG CRM | - Outcome of Milestone 1 integrated with your Product development environment with P1 configs | - Outcome of Milestone 2 with complete Integration with your Product in development environment |

## Step 1 – Configure and Experience Self-Serve with ThriveStack’s Default Configuration

Step 1 in Customer onboarding is to be able to see how easily Self-Serve can be customized and see it in action, as soon as possible. This step normally takes an hour (tentatively).

In this step, we will help you:

1. **Signup to [ThriveStack](http://www.ThriveStack.ai)**
2. **Customize Self-Serve for your business**
   - After you have clicked on the magic link you received in your inbox, you will be able to Create your Product and choose your Persona with intent.
   - Choose your application type, whether it’s used by “Business” or “Consumers” directly.
   - Select whether you have your own Authentication implemented or you would need ThriveStack to implement Authentication for you.
   - Select the Self-Serve Template that suits your business and click “Next” ([Learn more](https://resources.thrivestack.ai/p/announcing-self-serve-templates)).
     - Prosumer
     - COGS Efficient
     - Traditional SaaS
   - Clicking “Next” will start the deployment of your Self-Serve you just customized for your Product, and take you to a simulated experience of Self-Serve.
   - Completing the Self-Serve deployment and Simulation you would have received two emails.  
      - First email demonstrates your End User notification, that they will receive on Signing up to your Product 
      - Second email demonstrates the notification that your GTM Team will receive when your End Users will signup. 

3. **Complete Self-Serve with ThriveStack’s default configuration.**
   - With the above steps completed, you have successfully Customized your Self-Serve, and now you are ready to experience firsthand what your End Users will experience, and, ready to integrate with your Product’s development environment. You should see an “Integration checklist” now.
   - The Integration Checklist is set to ThriveStack’s default, so that, you can directly experience Self-Serve Signup/Login runtime.
   - In the “Output Console” on the right, under “Workflows” under “Signup” click on the runtime icon.
   - Click on Signup Runtime or Login Runtime icon will open the “Self-Serve Signup/Login” page in a new tab. This is ThriveStack’s default Signup/Login page. You can modify this anytime.
   - Enter your “Email” and click “Continue” to go through the Self-Serve Signup/Login experience for your Product’s End Users.
   - Review default configurations for all the self-serve configurations.
     - Steps that are marked as default are denoted with a “Grey Tick” on the left.
     - On the right section, you will be able to see ThriveStack’s default configuration already applied in the dropdown menu “ONBOARDING_DEV_CONFIG”. You can create your own and apply anytime.

4. **Experience Self-Serve Signup or Login you just configured above, and experience what your End Users will experience.**
   - Invite 1-2 of your colleagues from the Engineering Team to experience and test it together.
     - You can invite your Team members by clicking on the “Collaborator” icon on the top or “Invite Team” link at the very top right of the page.
     - Add the email address of the Team member you wish to add. Add to the Default Team or Create a New Team and assign a Role.
       - Note: Current Roles do not restrict the product usage for the invited Users. They will have full access to your Product.
   - How to find the URLs for your self-serve?
     - In “Integration checklist” expand “Integrate to your Application environment” and click “Frontend Integration”. You should now be able to see the Signup and Login URLs.
   - Try signing up as an end-user.
     - You can share the Self-Serve Signup/Login URLs directly as shown in the step above or click on the icon under Signup/Login section under Workflow.
   - Try logging-in as an end-user.

5. **Experience ANALYZE: PLG Reports**
   - Navigate to “/analyze/report-dashboard” from the App or click on the “three horizontal line menu” on the top left, next to ThriveStack’s logo, click on “Analyze”, and then click on “Dashboard” menu to access the list of out of the box Report.
   - Review Acquisition Report.
     - You will be able to see your End Users signups here. You can ask your Team members to try and signup to see that the report.
   - Review Retention Report.

6. **Experience DRIVE: PLG CRM**
   - Navigate to “/drive/dashboard” from the App or click on the “three horizontal line menu” on the top left, next to ThriveStack’s logo, click on “Drive”, and then click on “Accounts” or “Users” menu to access the Accounts and User list signing up to your Product.
   - Review PLG CRM dashboard.
   - Review Accounts List.
   - Review Users List.

## Step 2 – Integrate with your Development Environment – 1 Day

Step 2 in Customer Onboarding is to now integrate your Product with ThriveStack in your Product’s development environment. This step normally takes a day’s effort for an engineer; however, this can span 1-2 days depending on the bandwidth available and skill.

### Pre-requisite for Step 2:

1. You have customized and completed the setup for Self-Serve with ThriveStack’s default configuration.
2. You understand well, the Self-Serve template that you have chosen, and the integration points that it will need to have between your Product and ThriveStack platform.
3. You have invited an Engineer to your Product in ThriveStack, to help you integrate.
4. You or your Team member is aware of your Product’s environmental configurations and has access to it.

### Step 2 – Part 1 - Mandatory configuration for integration to your Product – 1hr - 4hrs

1. **Configure Application domain**
   - Enter “Your Application Domain” where Product’s dev environment is hosted. All further redirections from ThriveStack to your Product will be done using this configuration.

2. **Onboarding Redirects - Understanding**
   - Your End User will be redirected to your Onboarding Application’s page which is saved in this configuration.
   - The URL you will receive will have a return URL (encoded) as a query parameter.
   - Once the onboarding is completed, redirect the End User to the return URL (decoded) mentioned in point 2.

3. **On-Success Redirects**
- This configuration is used to redirect your End User to your Product once the Self-Serve workflow is completed.
   - You will receive a JWT Token which will contain the payload as shown below.

```json
{
  "authorized": true,
  "emailId": "prashants@thrivestack.ai",
  "tenantId": "c7460439-c5e2-4828-a685-6958537db9c3",
  "tenantName": "thrivestack.ai",
  "thriveUserId": "f866cd9f-69f0-4a40-9920-5e0806d0f88b",
  "tokenExpiry": 1720613740
}
```

With the above steps completed, you should now be able to Signup and see the redirection going to your Product.

## Step 2 – Part 2 - Mandatory configuration for integration to your Product – 4hrs - 1 day

- Frontend Integration
- Backend Integration
  - Create a Webhook
  - Handle events on Webhooks

**Exception:** In case you have chosen the Template where you are Authenticating the User

- Frontend Integration to Trigger Workflow

To have the basic integration completed with your Product, listed below are minimum mandatory configuration that should be setup:

- Integrate your Product with ThriveStack Platform
- Understand the integration points and the data exchange that would happen between your Product and ThriveStack
  - Authentication
  - Onboarding (In case you want the Users redirected to your onboarding)
  - Frontend Integration
  - Backend Integration
- Understand “How to test” the integration points
- Run end to end flow for Signup/Login Self-Serve Workflow with integration complete

By the end of Step 2, you would have accomplished:

- Integrating your Product with ThriveStack in your Product’s development environment
- Run an end-to-end Self-Serve workflow in the development environment
- Detail understanding of configurations and how you can change and add new configurations
- Test and validate integration points between your Product and ThriveStack

## Step 3 – Analyze – Out of the Box Reports

## Step 4 – Drive – Bottom Up PLG CRM

### Step 2 – (Break into sub steps)

- **Step 2 – Part 1 - Priority 1 config**
  - P1 – time (min-hrs)
    - Show with screenshot
    - Have explanation
    - How to test

- **Step 2 – Part 2 - Priority 2 config**
  - P1 – time (min-hrs)
    - Show with screenshot
    - Have explanation
    - How to test

**List down priority configuration out of the total configuration**

- **P1 – time (min-hrs)**
  - Show with screenshot
  - Have explanation
  - How to test

- **P2 – time (min-hrs)**
  - Show with screenshot
  - Have explanation
  - How to test

## Summary of Steps

1. **Step 1 – Configure and Experience Self-Serve with ThriveStack’s Default configuration**
2. **Step 2 – Integrate with your Development environment – 1 day**
3. **Step 3 – Analyze – Out of the box Reports**
4. **Step 4 – Drive – Bottom up PLG CRM**
