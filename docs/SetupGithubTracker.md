This document outlines the steps to setup your Github account with APIsec.  

`Reading time < 3 min`

### **Setup Github Issue Tracker**

The expectation is that you already have an account with Github or know how to set one up.  

1. From the homepage select your project > Then, select the `Configurations` tab.
2. Select the `Integrations` tab from the top menu.
3. From the left menu select `Issue Tracker`.
4. Choose an Environment Name Profile.
5. Select `Github` for the Issue Tracker.
6. Create New Issue Tracker Credentials by clicking on the button.  Or, select from the Credentials dropdown if it's already created. You can create a new user with read/write access to the test repository.

   Note: You'll need generate an API token to add your Github account. You can find more information how to set up Personal Access Token <a href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token">here</a>.
   
   
   <img width="908" alt="github-login-popup" src="https://user-images.githubusercontent.com/109250250/180657758-b2192004-a117-4f1e-8f58-a680c86d7085.png">

7. Once you add the credentials, add the Issue-Tracker URL.

The following fields are optional:

8. Assignee Username.  The Github username of the assignee must be a collaborator with write access.

Activating the toggle button will log the vulnerabilities to Github.

Finally, click on `Test Credentials` button to validate the connection has established and click Save.

If everything is setup correctly, you'll see Valid Credentials message at the bottom of the screen.

<img width="1358" alt="github-valid-creds" src="https://user-images.githubusercontent.com/109250250/180657674-72c3be7f-10b3-4302-aa83-bd1a3aca351c.png">


<iframe src="../Chatbot/index.html" width="320" height="400" frameborder="0" style="position: fixed; bottom: 20px; right: 20px;"></iframe>