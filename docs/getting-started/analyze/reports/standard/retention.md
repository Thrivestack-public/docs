# Retention
Do you know what must do to keep your customers not only happy but also coming back for more time and again? 
 So that is where retention reports come in…. 
# What is retention report? 
Retention in the context of B2B SAAS is very important information for understanding the users are coming back to you or not. Retention reports help you to understand if your product satisfies the users, helps to identify weak areas and helps to retain the customers for a longer

Here are the elements provided by the retention report:

1.***Retention Metrics***
- Retention rate: The percentage of customers or employees who continue their relationship with the organization over a specified period.
  
2.***Retention Analysis***
-	Cohort Analysis: Examines specific groups of customers or employees who started at the same time to understand their retention patterns.
  

3.***Overview widgets***

4.***Trend charts***

5.***Integration guide***

- To generate a retention report, we will analyse events such as user sign-ups, account creations, and user sign-ins. By tracking these events and measuring how many users remain active over time, we can create an accurate retention report that reflects user engagement and retention trends.



<img width="522" alt="image" src="https://github.com/user-attachments/assets/44bbc563-d09d-4874-81c9-7a6b2791d58b">


# Comprehensive Review of the Retention Report. 
Before diving into what a retention report consists of, we need to understand some key concepts to better grasp the report. 

1.***Retention score:*** is a metric that measures how well you’re able to keep users or customers engaged with your product or service over a period of time. 
How to Calculate Retention Score: 
- ***Retention Rate = (Number of users who return/Number of users start the period)x100***

 For e.g. If you start with 1000 users at the beginning of the month and 200 of them are still active by the end of the month, the retention rate is: 
                                                  (200/1000)x100=20% 

Retention score is important because it helps to get the idea of Revenue growth, customer loyalty and product improvement 

- ***Cohort Analysis:*** Retention score is often used to analyse retention by grouping users based on their sign-up date or other criteria 
Also retention score can be measured over diJerent periods (daily, weekly, monthly) depending on your product and user behaviour. 
 
Now Let’s analyse the widgets of retention report in detail. 
The retention report consists of two tabs: Users and Accounts, which are both CRM objects.

|***Tabs***|***Widgets***|***Description***|***Axes***|
| -------- | ------------ | -------------- | -------- |
| ***users***    | Retention score | The retention score for the user is provided, showing their position on the retention scale.| N/A |
|          | Retention graph | The graph that charts the retention score over time | X axis:Percentage of the retention Y ,axis: date |
|          | Key metrics(LTR) | The graph shows the retentions rate of users over weeks, months and year | X axis: the retention rate Y, axis: date |
|          | Retention cohort | Cohort retention analysis tracks how distinct groups of users engage with the product over a period of time.|   N/A    |
| ***Accounts*** | Retention score | The retention score for the account is provided, showing their position on the retention scale.| N/A |
|          | Retention graph | The graph that charts the retention score over time | X axis:Percentage of the retention Y ,axis: date |
|          | Key metrics(LTR) | The graph shows the retentions rate of accounts over weeks, months and year | X axis: the retention rate Y, axis: date |
|          | Retention cohort | Cohort retention analysis tracks how distinct groups of accounts engage with the product over a period of time.|   N/A    |


**Note**: 
- Users can toggle between viewing the count and the percentage change. It also includes a time range filter.
- For each widget, we are provided with filters for di8erent time periods (daily, weekly, monthly)

  # Integration of the Data for the Report Setup:

  
<img width="462" alt="image" src="https://github.com/user-attachments/assets/0b22dd8f-7c74-44a4-ba3d-73b8e2e50302">





Expected events and API calls for the Telemetry Api are: 

1.***Track API***
- `Signed up` event
- `Signed in` event
-  `Account created ` event

2.***Group Call***
- For account creation

3.***Identify Call***  
- For user signup o For user sign in





 
 
If you want the self-serve, then [Set up Self-Serve](https://dev.app.thrivestack.ai/build/setup/quick-start/) 


If don’t want self-serve, then [link to the API documentation](https://docs.dev.app.thrivestack.ai/getting-started/analyze/instrumentation/overview). 
 
 
Your doubts are not yet cleared? Contact support at support@thrivestack.ai 



