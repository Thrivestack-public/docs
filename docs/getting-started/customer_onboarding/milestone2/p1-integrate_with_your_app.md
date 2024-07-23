--- 
hide_table_of_contents: true
---

# Phase I - With Minimal Mandatory Configuration

### Milestone 2 in Customer Onboarding is to integrate your Product with ThriveStack, in your Product’s development environment. This step normally takes a day’s effort for an engineer; however, this can span 1-2 days depending on the bandwidth available and skill.

1. Pre-requisite for Milestone 2:

    1.1. You have customized and completed the setup for Self-Serve with ThriveStack’s default configuration.

    1.2. You understand well, the Self-Serve template that you have chosen, and the integration points that it will need to have between your Product and ThriveStack platform.

    1.3. You have invited an Engineer to your Product in ThriveStack, to help you integrate.

    1.4. You or your Team member is aware of your Product’s environmental configurations and has access to it.

### Milestone 2 – Part 1 - Mandatory configuration for integration to your Product – 1hr - 4hrs

1. Configure Application domain

   1.1.  Enter “Your Application Domain” where Product’s development environment is hosted. All further redirections from ThriveStack to your Product will be done using this configuration. Here’s an example of what your app domain might look like:

   ![](/img/customer_onboarding/app-domain-example.png)

   ![](/img/customer_onboarding/app-domain-checklist.png)

2.  Onboarding Redirects

   ![](/img/customer_onboarding/onboarding-redirects.png)

   2.1.  Your End User will be redirected to your Onboarding Application’s page which is saved in this configuration.

   2.2.  The URL you will receive will have a return URL (encoded) as a query parameter. 

   - For Example:
      - Your url: 
      ```
      https://ts-sandbox.app.thrivestack.ai/c66921f5-83d1-4692-b4bb-bbde7cccf489/2f39049b-4023-11ef-a334-ba152117b3c2/3506de7a-4023-11ef-893e-f20d7c66ef21/home?productId=c66921f5-83d1-4692-b4bb-bbde7cccf489&environment=dev&environmentId=2f39049b-4023-11ef-a334-ba152117b3c2&runtimeId=b4491bfb-4027-11ef-8cf3-8e09ffaecde2&workflowId=3506de7a-4023-11ef-893e-f20d7c66ef21&userEmail=ajays@thrivestack.ai&returnUrl=**https%3A%2F%2Fts-sandbox.app.thrivestack.ai%2Fc66921f5-83d1-4692-b4bb-bbde7cccf489%2F2f39049b-4023-11ef-a334-ba152117b3c2%2F3506de7a-4023-11ef-893e-f20d7c66ef21%2Fcreate-tenant%3FproductId%3Dc66921f5-83d1-4692-b4bb-bbde7cccf489%26environment%3Ddev%26environmentId%3D2f39049b-4023-11ef-a334-ba152117b3c2%26runtimeId%3Db4491bfb-4027-11ef-8cf3-8e09ffaecde2%26workflowId%3D3506de7a-4023-11ef-893e-f20d7c66ef21#
      ```
      - To troubleshoot and see what’s the value in return url, you can use any free online tools like [Link here](https://meyerweb.com/eric/tools/dencoder)
      - Enter the URL 
      - Click on “Decode”
      - You can see the value: 
      ```
      https://ts-sandbox.app.thrivestack.ai/c66921f5-83d1-4692-b4bb-bbde7cccf489/2f39049b-4023-11ef-a334-ba152117b3c2/3506de7a-4023-11ef-893e-f20d7c66ef21/create-tenant?productId=c66921f5-83d1-4692-b4bb-bbde7cccf489&environment=dev&environmentId=2f39049b-4023-11ef-a334-ba152117b3c2&runtimeId=b4491bfb-4027-11ef-8cf3-8e09ffaecde2&workflowId=3506de7a-4023-11ef-893e-f20d7c66ef21
      ```

   2.3.  Once the onboarding is completed, redirect the End User to the return URL (decoded) mentioned in point 2


3. On-Success Redirects

![](/img/customer_onboarding/on-success-redirects.png)

   3.1. This configuration is used to redirect your End User to your Product once the Self-Serve workflow is completed

   3.2. You will receive a JWT Token which will contain the payload as shown below.

```
{
"authorized": true, //Authenticated or not
"emailId": "endusermail@enduseremaildomain.com", //
"tenantId": "c7460439-c5e2-4828-a685-6958537db9c3", //Thrivestack’s TenantID
"tenantName": "enduseremaildomain.com", //Account Name
"thriveUserId": "f866cd9f-69f0-4a40-9920-5e0806d0f88b", //Thrivestack UserID
"tokenExpiry": 1720613740
} 
```
With the above steps completed, you should now be able to Signup and see the redirection going to your Product



