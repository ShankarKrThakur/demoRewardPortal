Overview
The React application calculates and display reward points for customer based on their purchase transactions. The points are rewarded as follows:
1.	2 points for every dollar spent over $100 in each transaction.
2.	1 points for every dollar spent over $50 in each transaction.

This application simulate an API call to fetch transaction data, calculates the reward points for each customer per month and display the total reward points.

File Structure
 

1.	api.js  
This file simulates an asynchronous API call to fetch transaction data.
2.	calculateRewardPoints.js

This file calculates reward points based on transaction amount.

3.	useCalculateRewards.js
This is a custom hook.  it is used to push total reward points in our data.

4.	useFetchData.js
This is a custom hook. It is used to fetch data from API.

5.	App.css
This file is used for styling of the application.

6.	App.js
This is the main component that renders the result on UI.

7.	__tests__/api.test.js
This is a test file. Which is used to test if data is fetched or not??

8.	__tests__/utils.test.js
This is a test file. Which is used to test if rewards are calculating correctly or not??





