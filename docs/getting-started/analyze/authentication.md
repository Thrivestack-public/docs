# Authentication

## Introduction

ThriveStack has a powerful API that enables you to capture, evaluate, create, update, and delete nearly all of your information in ThriveStack. You can use it to pull information into your app, update metadata programmatically, capture events from any language that can send HTTP requests, and more.

![ThriveStack Authentication Flowchart](/img/docs/analyze/apis/auth-flowchart.png)

The API is available for all users and instances. It contains two types of endpoints:

- Public POST endpoints used for capturing events, batching events, updating person or group information. These don't require authentication but use your project API key to handle the request.
- Private GET, POST, PATCH, DELETE endpoints used for creating, updating, or deleting nearly all other non-event data in ThriveStack. They give the same access as if you were logged into your ThriveStack instance but require authentication with your personal API key.

### 1 - Public POST endpoints

The Public API will handle the different types of events for you, but with the API, you need to send the right type of event (listed below) to get the functionality you want.

#### 1.1 – Requirement for Identify call

Updates user information, as per the following structure to identify() call.

```bash
curl -v -L --header "Content-Type: application/json" -d '{ 
    "api_key": "<ph_project_api_key>", 
    "timestamp": "2023-11-06 09:03:11.913767", 
    "traits": { 
      "$set": {}, 
    }, 
    "user_id": "1234", 
  }' https://app.thrivestack.ai/v1/identify
```

2.2 - Requirement for Group call
Updates user information, as per the following structure to group() call.
```bash
curl -v -L --header "Content-Type: application/json" -d '{ 
    "api_key": "<ph_project_api_key>", 
    "group_id": "1234", 
    "user_id": "1234", 
    "traits": { 
      "$set": {}, 
    } 
  }' https://app.thrivestack.ai/v1/group
```

2.3 - Requirement for Track call
Updates user information, as per the following structure to track() call.
```bash
curl -v -L --header "Content-Type: application/json" -d '{ 
    "event": "event name", 
    "api_key": "<ph_project_api_key>", 
    "user_id": "1234", 
    "properties": { 
        "$set": {}, 
    }, 
    "timestamp": "[optional timestamp in ISO 8601 format]" 
  }' https://app.thrivestack.ai/v1/track
```

2 - Private GET, POST, PATCH, DELETE endpoints
Private APIs enable full access to your account, like an email address and password. You can create multiple and each can be invalidated individually. This improves the security of your ThriveStack account.

2.1 - Requirements to obtain a private API key
As a SaaS Builder, It is required to perform the following steps:

Users go to workspace environment account settings.
By default, an API key is created for the public API and in the API Access section, Click CTA to create a private API key.
Enable data point to access workflow and instrumentation data.
Give your key a label – this is just for you, usually to describe the key's purpose.
At the top of the list, you should see your brand-new key.
2.2 – Requirements to Authenticate using the private API key
As a SaaS Builder, it is required to perform the following steps:

1. Use the Authorization header and token authentication, like so:
```bash
const headers = {Authorization: `Token ${THRIVESTACK_ENV_API_KEY}`}
```

2. Put the key in the request body, like so:
```bash
const body = {api_key: THRIVESTACK_ENV_API_KEY}
```

3. Put the key in the query string, like so:
```bash
const url = `https://app.thrivestack.ai/api/event/?api_key=${THRIVESTACK_ENV_API_KEY}`
```
