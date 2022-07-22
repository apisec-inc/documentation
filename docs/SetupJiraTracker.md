This document outlines the steps to setup your Atlassian Jira account with APIsec.  

### **Setup Jira Issue Tracker**

The expectation is that you already have an account with JIRA or know how to set one up.  You can find more information <a href="https://confluence.atlassian.com/jirakb/how-to-find-your-site-url-to-set-up-the-jira-data-center-and-server-mobile-app-954244798.html">here</a>.

1. From the homepage select your project > Then, select the `Configurations` tab 
2. Select the `Integrations` tab from the top menu
3. From the left menu select `Issue Tracker`
4. Choose an Environment Name Profile 
5. Select `Jira` for the Issue Tracker  
6. Create New Issue Tracker Credentials by clicking on the button.  Or, select from the Credentials dropdown if it's already created.

   Note: You can create a new user with read/write access to the test repository.

7. Once you add the credentials, add the Issue-Tracker URL
8. Add the Project Key.  Should match the key value from Jira/Atlassian project page.

The following fields are optional:

9. Assignee Account ID. e.g. https://mycompany.atlassian.net/
10. Label should be a single word without any white spaces. If more than one label to be tagged, provide comma (,) seperated labels.
   `label1,label2,label3`

Activating the toggle button will log the vulnerabilities to Jira.

Finally, click on `Test Credentials` button to validate the connection has established.

Click Save.
