# Integrate your application with ThriveStack

## 1. With Your Authentication

### 1.1 Template 1: Prosumer

#### 1.1.1 Send User Authentication Data to ThriveStack; Trigger Workflow
Once your user is authenticated, send the authentication-related data to ThriveStack. 
At this point, control of the user workflow is transferred to us, and we manage the continuation of the signup/login process.
To achieve this, there are two parts,

** a. Trigger ThriveStack Worfklow **

To send the authentication data to ThriveStack, your API call should look like the following code:

// TODO: Add correct endpoint

```bash
curl -X POST /trigger \
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
To obtain the __workflow_id__, [visit this page](#).

// TODO: Add correct page link
// TODO: Redirect URL


Success Response
```
{
  "status": 200,
  "data": {
    "workflow_runtime_id": "aebm-etuki-mklou-ywedt",
    "redirect_url": ""
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

 
#### 1.1.2 Receive provisioned tenant (and enrichment) data from us and provide acknowledgment

:::note
By this point, ThriveStack will have:
- Enriched the user/account data
- Placed the user on a waitlist (if applicable)
- Associated a pricing plan
- Provisioned a tenant
:::

ThriveStack provisions tenant data and sends it to your application. Once you recieve the tenant data, you can provision the tenant at your end, if you choose to.
At this point, ThriveStack would be waiting for the acknowledgement from your application.

This happens in two steps,

** a. Configure webhook to recieve tenant data **

// TODO: Add a correct link

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

Once tenant provisioning is completed at your application, your application send acknowledgement to ThriveStack. The acknowledgement API call resemble the following code.

// TODO: Add correct endpoint

```bash
curl -X POST http://example.com/api/workflow \  # Replace with your actual URL
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
    "message": "Acknowledment recieved"
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


#### 1.1.3 Flow control is transferred to you for user onboarding

// TODO: Link to Onboarding Checklist.

For the prosumer template workflow, this the final user redirection.
You can configure the page where you want to redirect the user at the [Onboarding Checklist](#). Thrivestack will redirect the user to this page.

:::note
After this point, ThriveStack will:
- Store the leads
- Send Welcome Email to the user

You would have the access to:
- PLG CRM
- PLG Analytics
:::


<br />

### 1.2 Template 2: COGS Efficient B2B SaaS
#### 1.2.1 Send user authentication/authorization data to ThriveStack
#### 1.2.2 Flow control is transferred to you for user onboarding; Thrivestack awaits your the onboarding data
#### 1.2.3 Receive provisioned tenant (and enrichment) data from us and provide acknowledgment
#### 1.2.4 User is redirected to your product home page

<br />

### 1.3 Template 3: Increased Workload on your platform
#### 1.3.1 Send user authentication/authorization data to ThriveStack
#### 1.3.2 Receive provisioned tenant (and enrichment) data from us and provide acknowledgment
#### 1.3.4 User is redirected to your product home page

<hr />

## 2. With ThriveStack's Authentication
### 2.1 Template 1: Prosumer
#### 2.1.1 Receive provisioned tenant (and enrichment) data from us and provide acknowledgment
#### 2.1.2 Flow control is transferred to you for user onboarding; Thrivestack awaits your acknowledgment
#### 2.1.3 User is redirected to your product home page

<br />

### 2.2 Template 2: COGS Efficient B2B SaaS
#### 2.2.1 Flow control is transferred to you for user onboarding; Thrivestack awaits your acknowledgment
#### 2.2.2 Receive provisioned tenant (and enrichment) data from us and provide acknowledgment
#### 2.2.3 User is redirected to your product home page

<br />

### 2.3 Template 3: Increased Workload on your platform
#### 2.3.1 Receive provisioned tenant (and enrichment) data from us and provide acknowledgment
#### 2.3.2 User is redirected to your product home page
