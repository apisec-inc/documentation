This document outlines the steps to setup your Atlassian Jira account with APIsec.  

### **Setup Jira Issue Tracker**

The expectation is that you already have an account with JIRA or know how to set one up.  You can find more information <a href="https://confluence.atlassian.com/jirakb/how-to-find-your-site-url-to-set-up-the-jira-data-center-and-server-mobile-app-954244798.html">here</a>.

1. From the homepage select your project > Then, select the `Configurations` tab.
2. Select the `Integrations` tab from the top menu.
3. From the left menu select `Issue Tracker`.
4. Choose an Environment Name Profile.
5. Select `Jira` for the Issue Tracker.
6. Create New Issue Tracker Credentials by clicking on the button.  Or, select from the Credentials dropdown if it's already created. You can create a new user with read/write access to the test repository.

   Note: You'll need the your email and and API token to add your JIRA account (more info on the popup).
   
   
   <img width="899" alt="new-issue-tracker-creds" src="https://user-images.githubusercontent.com/109250250/180610320-e877267c-11e6-42fd-9158-d1d5e34159c3.png">

7. Once you add the credentials, add the Issue-Tracker URL.
8. Add the Project Key.  Should match the key value from Jira/Atlassian project page.

The following fields are optional:

9. Assignee Account ID. e.g. https://mycompany.atlassian.net/
10. Label should be a single word without any white spaces. If more than one label to be tagged, provide comma (,) seperated labels.
   `label1,label2,label3`

Activating the toggle button will log the vulnerabilities to Jira.

Finally, click on `Test Credentials` button to validate the connection has established and click Save.

If everything is setup correctly, you'll see Valid Jira Credentials message at the bottom of the screen.

<img width="1495" alt="jira-valid-creds" src="https://user-images.githubusercontent.com/109250250/180609364-42943462-c306-4257-888b-447bc7998667.png">


