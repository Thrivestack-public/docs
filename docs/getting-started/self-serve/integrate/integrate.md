# Integrate your application with ThriveStack

## 1. Bring Your own Authentication

<details>

<summary> 

### 1.1 Template 1: Prosumer

</summary>

![](/img/docs/self_serve/integrate/without_ts_auth_template1.png)

The Prosumer Template equips typical prosumer applications (such as Figma, Canva, and Miro) with essential Product-Led Growth (PLG) capabilities. In this context, each tenant usually begins as an individual user and gradually transitions to a teams or enterprise plan. Due to light weight nature of prosumer tenants, onboarding usually occurs after the user-tenant relationship is established.
 
**Key Benefits:**
 
1. Effortless Integration:
Thrivestack handles critical self-service tasks, including User Waitlisting, User & Account Enrichment, Free Pricing Plan Association, Tenant Provisioning, and Welcome notifications.
Developers are relieved from instrumenting standard SaaS events related to user Signup and Login, freeing them to focus on other priorities.
2. Unlock Core PLG Capabilities:
By leveraging the template, you gain access to two pivotal functionalities:
PLG CRM: Understand and engage with users & accounts effectively.
PLG Analytics: Extract valuable insights for growth and GTM strategies.
 
 
**Integration Points:**

1. Authentication and Workflow Trigger:
Enable authentication or bring your own Identity Provider (IdP) by sending user authentication data to Thrivestack. This triggers the workflow.
2. Tenant Data Reception:
Receive provisioned tenant data (including enrichment) from Thrivestack and provide acknowledgment.
3. User Onboarding Control:
Flow control is then transferred to your application for seamless user onboarding.

<details>

<summary> 

#### 1.1.1 Send User Authentication Data to ThriveStack; Trigger Workflow

</summary>

Once your user is authenticated, send the authentication-related data to ThriveStack. 
At this point, control of the user workflow is transferred to us, and we manage the continuation of the signup/login process.
To achieve this, there are two parts,

** a. Trigger ThriveStack Worfklow **

To send the authentication data to ThriveStack, your API call should look like the following code:

```bash
curl -X POST {{THRIVESTACK-BASEURL}}/trigger \
-H "Content-Type: application/json" \
-H "Authorization: Bearer {{token}}" \
-d '{
  "user_id": "string", // This user_id is from your application
  "email_id": "mark@acme.com",
  "role": {
    "role_id": "string", // This role_id is from your application
    "role_name": "string" // This role_name is from your application
  },
  "workflow_id": "string" // Get this workflow_id from the Workflows Page
}'
```
To obtain the __workflow_id__, from your Integration Checklist Page.

Success Response
```
{
  "status": 200,
  "data": {
    "workflow_runtime_id": "aebm-etuki-mklou-ywedt",
    "redirect_url": "{{THRIVESTACK-REDIRECT-URL}}"
    "message": "Successful"
  }
}
```
Failure Response
```
{
  "status": 403,
  "data": {
    "error_code": "FORBIDDEN",
    "error_message": "You do not have permission to access this resource."
  }
}
```

** b. Redirect your user to ThriveStack **

Redirect the user to __redirect_url__ obtained in the success response for the last step.

</details>

 
<details>

<summary> 

#### 1.1.2 Receive provisioned tenant (and enrichment) data from us and provide acknowledgement

</summary>

:::note
By this point, ThriveStack will have:
- Enriched the user/account data
- Placed the user on a waitlist (if applicable)
- Associated a pricing plan
- Provisioned a tenant
:::

ThriveStack provisions tenant data and sends it to your application. Once you receive the tenant data, you can provision the tenant at your end, if you choose to.
At this point, ThriveStack will be waiting for the acknowledgement from your application.

This happens in two steps,

** a. Configure webhook to receive tenant data **

Configure your webhook ThriveStack Integration Checklist. ThriveStack will send the tenant data (along with user enrichment) to your webhook in the following format.

```javascript
{
  "tenant_provisioning_data" : {
    "ts_tenant_id" : "string",
    "is_ts_provisioning_success": true,
  },
  "enrichment_data": {
    "ip": "string",
    "fuzzy": "boolean",
    "domain": "string",
    "type": "string",
    "company": {
      "name": "string",
      "tags": [
        "string"
      ],
      "metrics": {
        "alexaUsRank": "integer",
        "alexaGlobalRank": "integer",
        "employees": "integer",
        "employeesRange": "string",
        "raised": "integer"
      },
      "...": "string"
    },
    "geoIP": {
      "city": "string",
      "state": "string",
      "stateCode": "string",
      "country": "string",
      "countryCode": "string"
    },
    "confidenceScore": "string",
    "role": "string",
    "seniority": "string"
  }
}
```

** b. Send tenant provisioning acknowledgement **

Once tenant provisioning is completed at your application, your application sends an acknowledgement to ThriveStack. The acknowledgement API call resembles the following code.

```bash
curl -X POST {{THRIVESTACK-BASEURL}}/workflow \
-H "Content-Type: application/json" \
-H "Authorization: Bearer {{token}}" \
-d '{
  "workflowDesignTimeId": "4a238be4-3db2-43b2-b5f6-f131c6a4f154",
  "workflowRuntimeId": "a13d3ee3-2bd4-404e-9a96-2a5769bb936e",
  "tenantId": "eae34b09-d0c9-47c0-96a9-d7e5e681e9d7",
  "tenantName": "ExampleCorp",
  "userEmailId": "user@example.com",
  "thrivestackTenantId": "88f8b02b-414a-4022-9c25-771b2c9e25dd"
}'
```

Success Response
```
{
  "status": 200,
  "data": {
    "message": "Acknowledgement received"
  }
}
```
Failure Response
```
{
  "status": 403,
  "data": {
    "error_code": "FORBIDDEN",
    "error_message": "You do not have permission to access this resource."
  }
}
```

</details>


<details>

<summary> 

#### 1.1.3 Flow control is transferred to you for user onboarding

</summary>

For the prosumer template workflow, this is the final user redirection.
You can configure the page where you want to redirect the user at the Onboarding Checklist. Thrivestack will redirect the user to this page.

:::note
After this point, ThriveStack will:
- Store the leads
- Send a Welcome Email to the user

You would have the access to:
- PLG CRM
- PLG Analytics
:::

</details>

</details>


<details>

<summary> 

### 1.2 Template 2: COGS Efficient B2B SaaS

</summary>

![](/img/docs/self_serve/integrate/without_ts_auth_template2.png)

The **COGS Efficient B2B SaaS Template** is designed for B2B applications that incur significant tenant hosting costs. 
This template requires slightly more development effort than the Prosumer Template and includes automatic PLG CRM and PLG Analytics.

This template requires integration at three places,
1. Send User Authentication Data to ThriveStack; Trigger Workflow
2. Flow control is transferred to you for user onboarding; Thrivestack awaits for user redirection
3. Receive provisioned tenant (and enrichment) data from us and provide acknowledgement
4. User is redirected to your product home page

<details>

<summary> 

#### 1.2.1 Send User Authentication Data to ThriveStack; Trigger Workflow

</summary>

Once your user is authenticated, send the authentication-related data to ThriveStack. 
At this point, control of the user workflow is transferred to us, and we manage the continuation of the signup/login process.
To achieve this, there are two parts,

** a. Trigger ThriveStack Worfklow **

To send the authentication data to ThriveStack, your API call should look like the following code:

```bash
curl -X POST {{THRIVESTACK-BASEURL}}/trigger \
-H "Content-Type: application/json" \
-H "Authorization: Bearer {{token}}" \
-d '{
  "user_id": "string", // This user_id is from your application
  "email_id": "mark@acme.com",
  "role": {
    "role_id": "string", // This role_id is from your application
    "role_name": "string" // This role_name is from your application
  },
  "workflow_id": "string" // Get this workflow_id from the Workflows Page
}'
```

To obtain the __workflow_id__, from your Integration Checklist Page.

Success Response
```
{
  "status": 200,
  "data": {
    "workflow_runtime_id": "aebm-etuki-mklou-ywedt",
    "redirect_url": "{{THRIVESTACK-REDIRECT-URL}}"
    "message": "Successful"
  }
}
```
Failure Response
```
{
  "status": 403,
  "data": {
    "error_code": "FORBIDDEN",
    "error_message": "You do not have permission to access this resource."
  }
}
```

** b. Redirect your user to ThriveStack **

Redirect the user to __redirect_url__ obtained in the success response for the last step.

</details>


<details>

<summary> 

#### 1.2.2 Flow control is transferred to you for user onboarding; Thrivestack awaits for user redirection

</summary>

:::note
By this point, ThriveStack will have:
- Enriched the user/account data
- Placed the user on a waitlist (if applicable)
:::

ThriveStack will redirect the user to your onboarding page. Once onboarding is complete, we await the user's return to ThriveStack.

This comprises two steps,

a. ThriveStack redirects the user to a pre-configured page

Configure the redirection page at ThriveStack's [Onboarding Checklist](#).
During this redirection, ThriveStack will share a URL in the parameter which will be used in the next step.

The URL would look something like this.

```
https://<YOUR-ONBOARDING-URL_PAGE>?redirect_url="{{THRIVESTACK-REDIRECT-URL}}"
```

b. Redirect the user back to ThriveStack once the onboarding is complete

During the last redirection, ThriveStack will send a URL in the URL parameter. This URL received in the URL parameter is the redirection page
where you redirect the user to.


</details>


<details>

<summary> 

#### 1.2.3 Receive provisioned tenant (and enrichment) data from us and provide acknowledgement

</summary>

:::note
By this point, ThriveStack will have:
- Associated a pricing plan
- Provisioned a tenant
:::

ThriveStack provisions tenant data and sends it to your application. Once you receive the tenant data, you can provision the tenant at your end, if you choose to.
At this point, ThriveStack will be waiting for the acknowledgement from your application.

This happens in two steps,

** a. Configure webhook to receive tenant data **

Configure your webhook ThriveStack Integration Checklist. ThriveStack will send the tenant data (along with user enrichment) to your webhook in the following format.

```javascript
{
  "tenant_provisioning_data" : {
    "ts_tenant_id" : "string",
    "is_ts_provisioning_success": true,
  },
  "enrichment_data": {
    "ip": "string",
    "fuzzy": "boolean",
    "domain": "string",
    "type": "string",
    "company": {
      "name": "string",
      "tags": [
        "string"
      ],
      "metrics": {
        "alexaUsRank": "integer",
        "alexaGlobalRank": "integer",
        "employees": "integer",
        "employeesRange": "string",
        "raised": "integer"
      },
      "...": "string"
    },
    "geoIP": {
      "city": "string",
      "state": "string",
      "stateCode": "string",
      "country": "string",
      "countryCode": "string"
    },
    "confidenceScore": "string",
    "role": "string",
    "seniority": "string"
  }
}
```

** b. Send tenant provisioning acknowledgement **

Once tenant provisioning is completed at your application, your application sends an acknowledgement to ThriveStack. The acknowledgement API call resembles the following code.

```bash
curl -X POST {{THRIVESTACK-BASEURL}}/workflow \
-H "Content-Type: application/json" \
-H "Authorization: Bearer {{token}}" \
-d '{
  "workflowDesignTimeId": "4a238be4-3db2-43b2-b5f6-f131c6a4f154",
  "workflowRuntimeId": "a13d3ee3-2bd4-404e-9a96-2a5769bb936e",
  "tenantId": "eae34b09-d0c9-47c0-96a9-d7e5e681e9d7",
  "tenantName": "ExampleCorp",
  "userEmailId": "user@example.com",
  "thrivestackTenantId": "88f8b02b-414a-4022-9c25-771b2c9e25dd"
}'
```

Success Response
```
{
  "status": 200,
  "data": {
    "message": "Acknowledgement received"
  }
}
```
Failure Response
```
{
  "status": 403,
  "data": {
    "error_code": "FORBIDDEN",
    "error_message": "You do not have permission to access this resource."
  }
}
```

</details>


<details>

<summary> 

#### 1.2.4 User is redirected to your product home page

</summary>

For this template,  this is the final user redirection. 
You can configure the page where you want to redirect the user at the [Success Redirection Page Checklist.](#) 
Thrivestack will redirect the user to this page.

</details>

</details>


<details>

<summary> 

### 1.3 Template 3: Increased Workload on your platform

</summary>

![](/img/docs/self_serve/integrate/without_ts_auth_template3.png)

The **Traditional SaaS Template** takes the lease effort to get started but most effort to go live.
Your application handles most of the self-service operations, 
with ThriveStack providing support in areas such as User Waitlisting, Tenant Provisioning, and Lead Storage. 
This template also necessitates the integration of business telemetry within your application.

This template requires integration at three places,
1. Send User Authentication Data to ThriveStack; Trigger Workflow
2. Receive provisioned tenant (and enrichment) data from us and provide acknowledgement
3. User is redirected to your product home page

<details>

<summary> 

#### 1.3.1 Send User Authentication Data to ThriveStack; Trigger Workflow

</summary>

Once your user is authenticated, send the authentication-related data to ThriveStack. 
At this point, control of the user workflow is transferred to us, and we manage the continuation of the signup/login process.
To achieve this, there are two parts,

** a. Trigger ThriveStack Worfklow **

To send the authentication data to ThriveStack, your API call should look like the following code:

```bash
curl -X POST {{THRIVESTACK-BASEURL}}/trigger \
-H "Content-Type: application/json" \
-H "Authorization: Bearer {{token}}" \
-d '{
  "user_id": "string", // This user_id is from your application
  "email_id": "mark@acme.com",
  "role": {
    "role_id": "string", // This role_id is from your application
    "role_name": "string" // This role_name is from your application
  },
  "workflow_id": "string" // Get this workflow_id from the Workflows Page
}'
```

To obtain the __workflow_id__, from your Integration Checklist Page.

Success Response
```
{
  "status": 200,
  "data": {
    "workflow_runtime_id": "aebm-etuki-mklou-ywedt",
    "redirect_url": "{{THRIVESTACK-REDIRECT-URL}}"
    "message": "Successful"
  }
}
```
Failure Response
```
{
  "status": 403,
  "data": {
    "error_code": "FORBIDDEN",
    "error_message": "You do not have permission to access this resource."
  }
}
```

** b. Redirect your user to ThriveStack **

Redirect the user to __redirect_url__ obtained in the success response for the last step.

</details>

<details>

<summary> 

#### 1.3.2 Receive provisioned tenant (and enrichment) data from us and provide acknowledgement

</summary>

:::note
By this point, ThriveStack will have:
- Enriched the user/account data
- Placed the user on a waitlist (if applicable)
- Associated a pricing plan
- Provisioned a tenant
:::

ThriveStack provisions tenant data and sends it to your application. Once you receive the tenant data, you can provision the tenant at your end, if you choose to.
At this point, ThriveStack will be waiting for the acknowledgement from your application.

This happens in two steps,

** a. Configure webhook to receive tenant data **

Configure your webhook [here](#). ThriveStack will send the tenant data (along with user enrichment) to your webhook in the following format.

```javascript
{
  "tenant_provisioning_data" : {
    "ts_tenant_id" : "string",
    "is_ts_provisioning_success": true,
  },
  "enrichment_data": {
    "ip": "string",
    "fuzzy": "boolean",
    "domain": "string",
    "type": "string",
    "company": {
      "name": "string",
      "tags": [
        "string"
      ],
      "metrics": {
        "alexaUsRank": "integer",
        "alexaGlobalRank": "integer",
        "employees": "integer",
        "employeesRange": "string",
        "raised": "integer"
      },
      "...": "string"
    },
    "geoIP": {
      "city": "string",
      "state": "string",
      "stateCode": "string",
      "country": "string",
      "countryCode": "string"
    },
    "confidenceScore": "string",
    "role": "string",
    "seniority": "string"
  }
}
```

** b. Send tenant provisioning acknowledgement **

Once tenant provisioning is completed at your application, your application sends an acknowledgement to ThriveStack. The acknowledgement API call resembles the following code.

```bash
curl -X POST {{THRIVESTACK-BASEURL}}/workflow \
-H "Content-Type: application/json" \
-H "Authorization: Bearer {{token}}" \
-d '{
  "workflowDesignTimeId": "4a238be4-3db2-43b2-b5f6-f131c6a4f154",
  "workflowRuntimeId": "a13d3ee3-2bd4-404e-9a96-2a5769bb936e",
  "tenantId": "eae34b09-d0c9-47c0-96a9-d7e5e681e9d7",
  "tenantName": "ExampleCorp",
  "userEmailId": "user@example.com",
  "thrivestackTenantId": "88f8b02b-414a-4022-9c25-771b2c9e25dd"
}'
```

Success Response
```
{
  "status": 200,
  "data": {
    "message": "Acknowledgement recieved"
  }
}
```
Failure Response
```
{
  "status": 403,
  "data": {
    "error_code": "FORBIDDEN",
    "error_message": "You do not have permission to access this resource."
  }
}
```

</details>



<details>

<summary> 

#### 1.3.3 User is redirected to your product home page

</summary>

For this template,  this is the final user redirection. 
You can configure the page where you want to redirect the user at the [Success Redirection Page Checklist.](#) 
Thrivestack will redirect the user to this page.

</details>


</details>

<hr />

## 2. With ThriveStack's Authentication

<details>

<summary> 

### 2.1 Template 1: Prosumer

</summary>

![](/img/docs/self_serve/integrate/with_ts_auth_template1.png)


The Prosumer Template equips typical prosumer applications (such as Figma, Canva, and Miro) with essential Product-Led Growth (PLG) capabilities. In this context, each tenant usually begins as an individual user and gradually transitions to a teams or enterprise plan. Due to light weight nature of prosumer tenants, onboarding usually occurs after the user-tenant relationship is established.
 
**Key Benefits:**
 
1. Effortless Integration:
Thrivestack handles critical self-service tasks, including User Waitlisting, User & Account Enrichment, Free Pricing Plan Association, Tenant Provisioning, and Welcome notifications.
Developers are relieved from instrumenting standard SaaS events related to user Signup and Login, freeing them to focus on other priorities.
2. Unlock Core PLG Capabilities:
By leveraging the template, you gain access to two pivotal functionalities:
PLG CRM: Understand and engage with users & accounts effectively.
PLG Analytics: Extract valuable insights for growth and GTM strategies.
 
 
**Integration Points:**

1. Tenant Data Reception:
Receive provisioned tenant data (including enrichment) from Thrivestack and provide acknowledgment.
2. User Onboarding Control:
Flow control is then transferred to your application for seamless user onboarding.

<details>

<summary> 

#### 2.1.1 Receive provisioned tenant (and enrichment) data from us and provide acknowledgement

</summary>

:::note
By this point, ThriveStack will have:
- Enriched the user/account data
- Placed the user on a waitlist (if applicable)
- Associated a pricing plan
- Provisioned a tenant
:::

ThriveStack provisions tenant data and sends it to your application. Once you receive the tenant data, you can provision the tenant at your end, if you choose to.
At this point, ThriveStack will be waiting for the acknowledgement from your application.

This happens in two steps,

** a. Configure webhook to receive tenant data **

Configure your webhook [here](#). ThriveStack will send the tenant data (along with user enrichment) to your webhook in the following format.

```javascript
{
  "tenant_provisioning_data" : {
    "ts_tenant_id" : "string",
    "is_ts_provisioning_success": true,
  },
  "enrichment_data": {
    "ip": "string",
    "fuzzy": "boolean",
    "domain": "string",
    "type": "string",
    "company": {
      "name": "string",
      "tags": [
        "string"
      ],
      "metrics": {
        "alexaUsRank": "integer",
        "alexaGlobalRank": "integer",
        "employees": "integer",
        "employeesRange": "string",
        "raised": "integer"
      },
      "...": "string"
    },
    "geoIP": {
      "city": "string",
      "state": "string",
      "stateCode": "string",
      "country": "string",
      "countryCode": "string"
    },
    "confidenceScore": "string",
    "role": "string",
    "seniority": "string"
  }
}
```

** b. Send tenant provisioning acknowledgement **

Once tenant provisioning is completed at your application, your application sends an acknowledgement to ThriveStack. The acknowledgement API call resembles the following code.

```bash
curl -X POST {{THRIVESTACK-BASEURL}}/workflow \
-H "Content-Type: application/json" \
-H "Authorization: Bearer {{token}}" \
-d '{
  "workflowDesignTimeId": "4a238be4-3db2-43b2-b5f6-f131c6a4f154",
  "workflowRuntimeId": "a13d3ee3-2bd4-404e-9a96-2a5769bb936e",
  "tenantId": "eae34b09-d0c9-47c0-96a9-d7e5e681e9d7",
  "tenantName": "ExampleCorp",
  "userEmailId": "user@example.com",
  "thrivestackTenantId": "88f8b02b-414a-4022-9c25-771b2c9e25dd"
}'
```

Success Response
```
{
  "status": 200,
  "data": {
    "message": "Acknowledgement recieved"
  }
}
```
Failure Response
```
{
  "status": 403,
  "data": {
    "error_code": "FORBIDDEN",
    "error_message": "You do not have permission to access this resource."
  }
}
```

</details>

<details>

<summary> 

#### 2.1.2 Flow control is transferred to you for user onboarding

</summary>

For the prosumer template workflow, this is the final user redirection.
You can configure the page where you want to redirect the user at the Onboarding Checklist. 
Thrivestack will redirect the user to this page.

With this redirection, ThriveStack will also set the authentication token in the Cookie specific to your app domain.


:::note
After this point, ThriveStack will:
- Store the leads
- Send a Welcome Email to the user

You would have the access to:
- PLG CRM
- PLG Analytics
:::

</details>

</details>

<details>

<summary> 

### 2.2 Template 2: COGS Efficient B2B SaaS

</summary>

![](/img/docs/self_serve/integrate/with_ts_auth_template2.png)

The **COGS Efficient B2B SaaS Template** is designed for B2B applications that incur significant tenant hosting costs. 
This template requires slightly more development effort than the Prosumer Template and includes automatic PLG CRM and PLG Analytics.

This template requires integration at three places,
1. Flow control is transferred to you for user onboarding; Thrivestack awaits for user redirection
2. Receive provisioned tenant (and enrichment) data from us and provide acknowledgement
3. User is redirected to your product home page

<details>

<summary> 

#### 2.2.1 Flow control is transferred to you for user onboarding; Thrivestack awaits for user redirection

</summary>

:::note
By this point, ThriveStack will have:
- Enriched the user/account data
- Placed the user on a waitlist (if applicable)
:::

ThriveStack will redirect the user to your onboarding page. Once onboarding is complete, we await the user's return to ThriveStack.

This comprises two steps,

a. ThriveStack redirects the user to a pre-configured page

Configure the redirection page at ThriveStack's Onboarding Checklist.
During this redirection, ThriveStack will share a URL in the parameter which will be used in the next step.

The URL would look something like this.

```
https://<YOUR-ONBOARDING-URL_PAGE>?redirect_url="{{THRIVESTACK-REDIRECT-URL}}"
```

b. Redirect the user back to ThriveStack once the onboarding is complete

During the last redirection, ThriveStack will send a URL in the URL parameter. This URL received in the URL parameter is the redirection page
where you redirect the user to.


</details>


<details>

<summary> 

#### 2.2.2 Receive provisioned tenant (and enrichment) data from us and provide acknowledgement

</summary>

:::note
By this point, ThriveStack will have:
- Associated a pricing plan
- Provisioned a tenant
:::

ThriveStack provisions tenant data and sends it to your application. Once you receive the tenant data, you can provision the tenant at your end, if you choose to.
At this point, ThriveStack will be waiting for the acknowledgement from your application.

This happens in two steps,

** a. Configure webhook to receive tenant data **

Configure your webhook ThriveStack Integration Checklist. ThriveStack will send the tenant data (along with user enrichment) to your webhook in the following format.

```javascript
{
  "tenant_provisioning_data" : {
    "ts_tenant_id" : "string",
    "is_ts_provisioning_success": true,
  },
  "enrichment_data": {
    "ip": "string",
    "fuzzy": "boolean",
    "domain": "string",
    "type": "string",
    "company": {
      "name": "string",
      "tags": [
        "string"
      ],
      "metrics": {
        "alexaUsRank": "integer",
        "alexaGlobalRank": "integer",
        "employees": "integer",
        "employeesRange": "string",
        "raised": "integer"
      },
      "...": "string"
    },
    "geoIP": {
      "city": "string",
      "state": "string",
      "stateCode": "string",
      "country": "string",
      "countryCode": "string"
    },
    "confidenceScore": "string",
    "role": "string",
    "seniority": "string"
  }
}
```

** b. Send tenant provisioning acknowledgement **

Once tenant provisioning is completed at your application, your application sends an acknowledgement to ThriveStack. The acknowledgement API call resembles the following code.

```bash
curl -X POST {{THRIVESTACK-BASEURL}}/workflow \
-H "Content-Type: application/json" \
-H "Authorization: Bearer {{token}}" \
-d '{
  "workflowDesignTimeId": "4a238be4-3db2-43b2-b5f6-f131c6a4f154",
  "workflowRuntimeId": "a13d3ee3-2bd4-404e-9a96-2a5769bb936e",
  "tenantId": "eae34b09-d0c9-47c0-96a9-d7e5e681e9d7",
  "tenantName": "ExampleCorp",
  "userEmailId": "user@example.com",
  "thrivestackTenantId": "88f8b02b-414a-4022-9c25-771b2c9e25dd"
}'
```

Success Response
```
{
  "status": 200,
  "data": {
    "message": "Acknowledgement recieved"
  }
}
```
Failure Response
```
{
  "status": 403,
  "data": {
    "error_code": "FORBIDDEN",
    "error_message": "You do not have permission to access this resource."
  }
}
```

</details>


<details>

<summary> 

#### 2.2.3 User is redirected to your product home page

</summary>

For this template,  this is the final user redirection. 
You can configure the page where you want to redirect the user at the [Success Redirection Page Checklist.](#) 
Thrivestack will redirect the user to this page.

With this redirection, ThriveStack will also set the authentication token in the Cookie specific to your app domain.

</details>

</details>

<details>

<summary> 

### 2.3 Template 3: Increased Workload on your platform

</summary>

![](/img/docs/self_serve/integrate/with_ts_auth_template3.png)

The **Traditional SaaS Template** takes the lease effort to get started but most effort to go live.
Your application handles most of the self-service operations, 
with ThriveStack providing support in areas such as User Waitlisting, Tenant Provisioning, and Lead Storage. 
This template also necessitates the integration of business telemetry within your application.

This template requires integration at three places,
1. Receive provisioned tenant (and enrichment) data from us and provide acknowledgement
2. User is redirected to your product home page

<details>

<summary> 

#### 2.3.1 Receive provisioned tenant (and enrichment) data from us and provide acknowledgement

</summary>

:::note
By this point, ThriveStack will have:
- Enriched the user/account data
- Placed the user on a waitlist (if applicable)
- Associated a pricing plan
- Provisioned a tenant
:::

ThriveStack provisions tenant data and sends it to your application. Once you receive the tenant data, you can provision the tenant at your end, if you choose to.
At this point, ThriveStack will be waiting for the acknowledgement from your application.

This happens in two steps,

** a. Configure webhook to receive tenant data **

Configure your webhook [here](#). ThriveStack will send the tenant data (along with user enrichment) to your webhook in the following format.

```javascript
{
  "tenant_provisioning_data" : {
    "ts_tenant_id" : "string",
    "is_ts_provisioning_success": true,
  },
  "enrichment_data": {
    "ip": "string",
    "fuzzy": "boolean",
    "domain": "string",
    "type": "string",
    "company": {
      "name": "string",
      "tags": [
        "string"
      ],
      "metrics": {
        "alexaUsRank": "integer",
        "alexaGlobalRank": "integer",
        "employees": "integer",
        "employeesRange": "string",
        "raised": "integer"
      },
      "...": "string"
    },
    "geoIP": {
      "city": "string",
      "state": "string",
      "stateCode": "string",
      "country": "string",
      "countryCode": "string"
    },
    "confidenceScore": "string",
    "role": "string",
    "seniority": "string"
  }
}
```

** b. Send tenant provisioning acknowledgement **

Once tenant provisioning is completed at your application, your application sends an acknowledgement to ThriveStack. The acknowledgement API call resembles the following code.

```bash
curl -X POST {{THRIVESTACK-BASEURL}}/workflow \
-H "Content-Type: application/json" \
-H "Authorization: Bearer {{token}}" \
-d '{
  "workflowDesignTimeId": "4a238be4-3db2-43b2-b5f6-f131c6a4f154",
  "workflowRuntimeId": "a13d3ee3-2bd4-404e-9a96-2a5769bb936e",
  "tenantId": "eae34b09-d0c9-47c0-96a9-d7e5e681e9d7",
  "tenantName": "ExampleCorp",
  "userEmailId": "user@example.com",
  "thrivestackTenantId": "88f8b02b-414a-4022-9c25-771b2c9e25dd"
}'
```

Success Response
```
{
  "status": 200,
  "data": {
    "message": "Acknowledgement recieved"
  }
}
```
Failure Response
```
{
  "status": 403,
  "data": {
    "error_code": "FORBIDDEN",
    "error_message": "You do not have permission to access this resource."
  }
}
```

</details>


<details>

<summary> 

#### 2.3.2 User is redirected to your product home page

</summary>

For this template,  this is the final user redirection. 
You can configure the page where you want to redirect the user at the [Success Redirection Page Checklist.](#) 
Thrivestack will redirect the user to this page.

With this redirection, ThriveStack will also set the authentication token in the Cookie specific to your app domain.

</details>


</details>
