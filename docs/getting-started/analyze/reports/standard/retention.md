# Retention Report
### Overview
This documentation defines the Retention Report, explaining its importance in understanding user loyalty and product engagement in B2B SaaS. It covers key metrics like retention rate and cohort analysis, alongside the report’s widgets, such as retention scores, graphs, and cohort analysis across different timeframes. Additionally, it provides an integration guide for setting up the retention report, either through a self-serve workflow or via telemetry APIs for tracking user sign-ups, sign-ins, and account creations.

### What is retention report? 
Retention in the context of B2B SAAS is very important information for understanding the users are coming back to you or not. Retention reports help you to understand if your product satisfies the users, helps to identify weak areas and helps to retain the customers for a longer.

Here are the elements provided by the retention report:
##### 1.Retention Score:
- It is a metric that measures how well you’re able to keep users or customers engaged with your product or service over a period of time. 
- ***Retention Rate = (Number of users who return/Number of users start the period)x100***
For e.g. If you start with 1000 users at the beginning of the month and 200 of them are still active by the end of the month, the retention rate is (200/1000)x100=20% 
- Retention score is important because it helps to get the idea of Revenue growth, customer loyalty and product improvement.
- Retention rate: The percentage of customers or employees who continue their relationship with the organization over a specified period.
  
##### 2.Cohort Analysis:
-	Cohort Analysis: Examines specific groups of customers or employees who started at the same time to understand their retention patterns.

To generate a retention report, we will analyse events such as user sign-ups, account creations, and user sign-ins. By tracking these events and measuring how many users remain active over time, we can create an accurate retention report that reflects user engagement and retention trends.

![ThriveStack Acquisition Report Flowchart](/img/docs/analyze/reports/Retention_Report.png)

# Comprehensive Review of the Retention Report. 
Before diving into what a retention report consists of, we need to understand some key concepts to better grasp the report. 

Now Let’s analyse the widgets of retention report in detail. 
The retention report consists of two tabs: Users and Accounts, which are both CRM objects.

| ***Tabs*** |  ***Widgets*** | ***Description*** | ***Axes*** |
| -------- | ------------ | -------------- | -------- |
| ***Users*** | Retention score | The retention score for the user is provided, showing their position on the retention scale.| N/A |
|          | Retention graph | The graph that charts the retention score over time. | X axis:Percentage of the retention Y ,axis: date |
|          | Key metrics(LTR) | The graph shows the retentions rate of users over weeks, months and year. | X axis: the retention rate Y, axis: date |
|          | Retention cohort | Cohort retention analysis tracks how distinct groups of users engage with the product over a period of time.|   N/A    |
| ***Accounts*** | Retention score | The retention score for the account is provided, showing their position on the retention scale.| N/A |
|          | Retention graph | The graph that charts the retention score over time. | X axis:Percentage of the retention Y ,axis: date |
|          | Key metrics(LTR) | The graph shows the retentions rate of accounts over weeks, months and year. | X axis: the retention rate Y, axis: date |
|          | Retention cohort | Cohort retention analysis tracks how distinct groups of accounts engage with the product over a period of time.|   N/A    |

**Note**: 
- Users can toggle between viewing the count and the percentage change. It also includes a time range filter.
- For each widget, we are provided with filters for di8erent time periods (daily, weekly, monthly).

### Integration of Data for Report Setup

There are two ways currently by which you can integrate data to generate an Virality Report:
##### 1.Configure Self-serve workflow :
You don’t have to do anything; everything else will be done by us for you.[Set up Self-Serve](https://dev.app.thrivestack.ai/build/setup/quick-start/).
##### 2.Telemetry APIs

If you prefer not to use the self-serve option, you can send telemetry events via telemetry APIs. Here is the [link to the API documentation](https://link-to-api-docs.com).

### Expected events and API calls are:

- **Track API:**
  - `signed_up` event.
  - `account_created` event.
  - `account_added_user` event.

- **Group Call:**
  - For account creation.

- **Identify Call:**
  - For user signup.
   
Your doubts are not yet cleared? Contact support at support@thrivestack.ai .
