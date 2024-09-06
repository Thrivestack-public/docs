# Virality Report
### Overview
This documentation provides an in-depth look at the Virality Report, detailing core metrics like the virality coefficient, conversion rates, and engagement timelines (TTA and TTI). It also explores various report widgets, including daily, weekly, and monthly virality trends, along with insights into user behaviors, such as invitation and acceptance rates. Additionally, it guides users through integrating the report, either using a self-serve workflow or through API instrumentation for event tracking.

### What is Virality Report? 
In the context of Software as a Service (SaaS), a virality report is a detailed analysis that tracks and measures how quickly and broadly the SaaS product is being adopted and shared by users. It specifically looks at how eAectively the product's features or marketing strategies encourage users to invite others, thereby driving organic growth.    
This virality report encompass the of concepts like: 
##### 1.Virality Coefficient(k):
- The virality coefficient measures how many new users each existing user brings to the platform. It’s a ratio that helps assess whether the product is spreading organically.
- ***Virality coefficient = Number of Invited users/Number of active users.*** 
- A virality coefficient greater than 1 indicates exponential growth, while a coefficient less than 1 means viral growth is not yet achieved.

##### 2.Conversion Rate:
- It is the percentage of users who take a desired action on your website, app, or platform out of the total number of users who were given the opportunity to do so. 
- ***Conversion Rate=(Number of conversions/Total visitors or users)×100*** 

##### 3.Time to Acquire (TTA):
- Time to Acquire (TTA) is the average time it takes for a new user to sign up after being invited by an existing user.A lower TTA means faster conversion from invite to signup, which accelerates viral growth. Longer TTAs can indicate friction in the user acquisition process 

##### 4. Time to Invite (TTI):
- Time to Invite (TTI) refers to the average time it takes for a newly signed-up user to invite others after joining. 
A short TTI indicates that users are quickly engaging with the product and inviting others, contributing to faster viral spread. If TTI is high, it may signal that users are not immediately engaged or there is friction in the invite process. 

To generate a virality report, we will analyse events like signups and track the number of signups, as well as the invites sent by each user. This data helps in creating an accurate virality report.

![ThriveStack Acquisition Report Flowchart](/img/docs/analyze/reports/Virality_Report.png)

### What does a virality report consist of?

Now, let’s analyse the widgets in detail :

| **Tabs**  | **Widgets** | **Description** | **Axes** |
| -------- | ----------- | --------------- | -------- |
| ***User*** | Overall Analysis of virality | Virality coefficient factor(k), Number of invites sent, Conversion rate( c), Time to Invite (TTA), Time to Accept (TTA) | N/A |
|           | Virality trend - Daily | Chart that tracks the  daily virality coefficient over a period | axis: Days Y axis: virality coefficient factor|
|            | Virality trend - Weekly | Chart that tracks the  weekly virality coefficient over a period | X axis: Days Y axis: virality coefficient factor |
|           | Virality trend - Monthly | Chart that tracks the  monthly virality coefficient over a period | X axis: Days Y axis: virality coefficient factor |
|           | Time to Send the Invite (TTI) | Chart that tracks the  Time taken by the user to send the invitation | X	axis: Time Y	axis: Days | 
|           | Graph that represents the users that sent the invites | Chart that tracks the percentage of users sent one or more invites| X axis: Percentage of  Y axis: Days |
|           | Time to Accept the Invite (TTA) | Chart that tracks the time take to accept the invitation | X	axis: Time , Y	axis: Days 
|           | Table that shows the top 5 accounts that drive invitation | This table will help to get the details of the number of invitations sent by the accounts |N/A|
|           | Table that shows top features that drive virality | This table will help to get the details of the features that increases | N/A |
|           |Table that shows the users that drive virality | This table will help to get the details of the number of invitations sent by the users |  N/A |

**Note**: For each widget, we are provided with filters for different time periods (daily, weekly,monthly). 

### Integration of Data for Report Setup

There are two ways currently by which you can integrate data to generate an Virality Report:
##### 1.Configure Self-serve workflow :
You don’t have to do anything; everything else will be done by us for you.[Set up Self-Serve](https://dev.app.thrivestack.ai/build/setup/quick-start/)
##### 2.Telemetry APIs

If you prefer not to use the self-serve option, you can send telemetry events via telemetry APIs. Here is the [link to the API documentation](https://link-to-api-docs.com).

### Expected events and API calls are:

- **Track API:**
  - `signed_up` event
  - `account_created` event
  - `account_added_user` event

- **Group Call:**
  - For account creation

- **Identify Call:**
  - For user signup 
 
Your doubts are not yet cleared? Contact support at support@thrivestack.ai 
