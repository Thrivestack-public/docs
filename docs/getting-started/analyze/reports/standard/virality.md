# Virality
You will no longer need to pay for ads, salespeople or marketing campaigns!!!!! 
 If your product is viral, it naturally attracts more users. Virality is, when users promote a product by using it and sharing their experiences with others. Users share a version of the product with non-users who then become users. This loop is closed.  

<img width="155" alt="image" src="https://github.com/user-attachments/assets/dd91e086-96fd-4953-9e2b-c0e974c7f202">

# What is Virality Report? 
In the context of Software as a Service (SaaS), a virality report is a detailed analysis that tracks and measures how quickly and broadly the SaaS product is being adopted and shared by users. It specifically looks at how eAectively the product's features or marketing strategies encourage users to invite others, thereby driving organic growth.    
                                            
                                            
This virality report encompass the of concepts like: 
- **Virality Coefficient(k)**
- **Viral Cycle time**
- **Invitation conversion metrics** 
- **Content sharing metrics**
- **Network effects.**

**What all questions that the virality report helps to solve is:** 

<img width="401" alt="image" src="https://github.com/user-attachments/assets/03870dad-486c-487f-a103-ae5da857db38">


<br><br>

To generate a virality report, we will analyse events like signups and track the number of signups, as well as the invites sent by each user. This data helps in creating an accurate virality report. 



<img width="452" alt="image" src="https://github.com/user-attachments/assets/25c11d2f-7e37-4dbe-a383-8b74b287aefc">

<br><br>

# A Deep Analysis of Virality Report 
Before diving into the Virality Report, it's essential to understand key concepts like the ***virality coefficient***, ***Conversion Rate***, ***Time to Acquire (TTA)***, and ***Time to Invite (TTI)***, as they are critical to measuring and interpreting viral growth. 


***1.Virality Coefficient:*** The virality coefficient measures how many new users each existing user brings to the platform. It’s a ratio that helps assess whether the product is spreading organically.
- Virality coefficient = Number of Invited users/Number of active users. 
- A virality coefficient greater than 1 indicates exponential growth, while a coe@icient less than 1 means viral growth is not yet achieved.

***2.Conversion Rate(c):*** is the percentage of users who take a desired action on your website, app, or platform out of the total number of users who were given the opportunity to do so. 
- Conversion Rate=(Number of conversions/Total visitors or users)×100 

***3.Time to Acquire (TTA):*** Time to Acquire (TTA) is the average time it takes for a new user to sign up after being invited by an existing user.A lower TTA means faster conversion from invite to signup, which accelerates viral growth. Longer TTAs can indicate friction in the user acquisition process 

***4. Time to Invite (TTI):*** Time to Invite (TTI) refers to the average time it takes for a newly signed-up user to invite others after joining. 
A short TTI indicates that users are quickly engaging with the product and inviting others, contributing to faster viral spread. If TTI is high, it may signal that users are not immediately engaged or there is friction in the invite process. 


Now, let’s analyse the widgets in detail :



| **Tabs**  | **Widgets** | **Description** | **Axes** |
| -------- | ----------- | --------------- | -------- |
| ***User***| Overall Analysis of virality | Virality coe@icient factor(k), Number of invites sent, Conversion rate(c), Time to Invite (TTA), Time to Accept (TTA) | N/A |
|           | Virality trend - Daily | Chart that tracks the  daily virality coefficient over a period | axis: Days Y axis: virality coefficient factor|
|            | Virality trend - Weekly | Chart that tracks the  weekly virality coefficient over a period | X axis: Days Y axis: virality coefficient factor |
|           | Virality trend - Monthly | Chart that tracks the  monthly virality coefficient over a period | X axis: Days Y axis: virality coefficient factor |
|           | Time to Send the Invite (TTI) | Chart that tracks the  Time taken by the user to send the invitation | X	axis: Time Y	axis: Days | 
|           | Graph that represents the users that sent the invites | Chart that tracks the percentage of users sent one or more invites| X axis: Percentage of  Y axis: Days |
|           | Time to Accept the Invite (TTA) | Chart that tracks the time take to accept the invitation | X	axis: Time , Y	axis: Days 
|           | Table that shows the top 5 accounts that drive invitation | This table will help to get the details of the number of invitations sent by the accounts |
|           | Table that shows top features that drive virality | This table will help to get the details of the features that increases | N/A |
|           |Table that shows the users that drive virality | This table will help to get the details of the number of invitations sent by the users |  N/A |

**Note**: 1.For each widget, we are provided with filters for different time periods (daily, weekly,monthly). 


### Integration of Data for Report Setup




<img width="362" alt="image" src="https://github.com/user-attachments/assets/abf41172-dbc6-48d0-a4ca-2afdd9b26092">


 Expected events and API calls are:
 
1.***Track API*** 
-	“User signup” event 
-	“User Invite sent” event


2.***Identify Call*** (This is used to assign a unique identity to a user): 
- Used when identifying a user after signup

3.***Group Call*** (This is used when you're associating a user with a group or organization):
- Used if inviting users to a group/organization 
 
 
 
If you want the self-serve then, [Set up Self-Serve](https://dev.app.thrivestack.ai/build/setup/quick-start/)
If don’t want self-serve, then here is the [link to the API documentation](https://docs.dev.app.thrivestack.ai/getting-started/analyze/instrumentation/overview).
 
  
Your doubts are not yet cleared? Contact support at support@thrivestack.ai 
 
 






                              
