# Acquisition Report

### Overview

This documentation covers the definition of Acquisition Report, along with an overview of the report’s widgets, such as daily, weekly, and monthly counts with delta changes and trend charts. Finally, it offers a guide on integrating the report, including self-serve steps or via instrumentation API.

### What is an Acquisition Report?

An Acquisition Report, in the context of B2B SaaS, is a document that tracks and analyzes key performance indicators (KPIs) related to acquiring new users or accounts. These acquisition metrics are crucial as they provide invaluable insights into how effectively a business attracts new customers and extends its market presence. The report helps in understanding the success of your strategies and identifying trends and patterns over time.

Following are the key offerings of an Acquisition Report:

- **Acquisition Metrics**
- **Baseline Metrics**
- **Overview Widget**
- **Trend Charts**
- **Integration Guide**

![ThriveStack Acquisition Report Flowchart](/img/docs/analyze/reports/acquisition_report.png)

### What does this report consist of?

This report consists of two tabs, representing two CRM objects: User and Account.

| **Tab** | **Widget** | **Description** | **Axes** |
| --- | --- | --- | --- |
| **User** | Overview Widget | Daily new user count with delta, weekly new user count with delta, monthly new user count with delta | N/A |
|  | Trend Chart - Daily | Line chart tracking daily new user count over time | Y-axis: Count of new users, X-axis: Date |
|  | Trend Chart - Weekly | Line chart tracking weekly new user count over time | Y-axis: Count of new users, X-axis: Date |
|  | Trend Chart - Monthly | Line chart tracking monthly new user count over time | Y-axis: Count of new users, X-axis: Date |
| **Account** | Overview Widget | Daily new account count with delta, weekly new account count with delta, monthly new account count with delta | N/A |
|  | Trend Chart - Daily | Line chart tracking daily new account count over time | Y-axis: Count of new accounts, X-axis: Date |
|  | Trend Chart - Weekly | Line chart tracking weekly new account count over time | Y-axis: Count of new accounts, X-axis: Date |
|  | Trend Chart - Monthly | Line chart tracking monthly new account count over time | Y-axis: Count of new accounts, X-axis: Date |
|  | Trend Chart - Account Added User Daily | Line chart tracking daily count of users added to accounts | Y-axis: Count of users, X-axis: Date |
|  | Trend Chart - Account Added User Weekly | Line chart tracking weekly count of users added to accounts | Y-axis: Count of users, X-axis: Date |
|  | Trend Chart - Account Added User Monthly | Line chart tracking monthly count of users added to accounts | Y-axis: Count of users, X-axis: Date |

**Note**: Users can toggle between viewing the count and the percentage change. It also includes a time range filter.

### Integration Steps for Acquisition Report Setup

To generate an Retention Report, you can choose **one of the following two methods** based on your preference:

1. **Configure Self-Serve Workflow**:
    - With the self-serve, you need to set it up initially. Once configured, the self-serve system will automatically handle all your standard events, such as user signups, account creations, and other relevant events.. [Set up Self-Serve](https://dev.app.thrivestack.ai/build/setup/quick-start/)
2. **Configure Telemetry APIs**:
    - If you prefer not to use the self-serve option, you can send telemetry events via telemetry APIs. Here is the [link to the API documentation](https://docs.dev.app.thrivestack.ai/getting-started/analyze/instrumentation/overview). 

### Expected events and API calls are:

- **Track API:**
  - [signed_up](https://docs.dev.app.thrivestack.ai/getting-started/analyze/instrumentation/events/standard/signed_up) event.
  - [account_created](https://docs.dev.app.thrivestack.ai/getting-started/analyze/instrumentation/events/standard/account_created) event
  - [account_created](https://docs.dev.app.thrivestack.ai/getting-started/analyze/instrumentation/events/standard/account_created) event
  

- **Group Call:**
  - For [account creation](https://docs.dev.app.thrivestack.ai/getting-started/analyze/instrumentation/identification/group)

- **Identify Call:**
  - For [user signup](https://docs.dev.app.thrivestack.ai/getting-started/analyze/instrumentation/identification/user)

- ** API call sequence **
![ThriveStack Acquisition Report API Flow Chart](/acquisition_flow.png)

   
Your doubts are not yet cleared? Contact support at support@thrivestack.ai .
