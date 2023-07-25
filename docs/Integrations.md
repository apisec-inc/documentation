`Reading time 7 min`

The APIsec allows you to integrate you project with a number of platforms.  Integrations provide connectivity across platforms and automate the processes. 

### **5.1. Reports Storage**
You can export reports to AWSS3, GCP, and Azure cloud accounts.  The reports are sent automatically at the beginning of every month.  If you have stored the credentials for the Report Storage account in the vault, it can be used or you can add new credentials.

<img alt="APIsec Screenshot" src="https://user-images.githubusercontent.com/75529175/168322387-9309887a-5b8f-4df0-9241-fd71bbe0f666.png" />

The process of adding the new credentials is explained in <a href="https://apisec-inc.github.io/documentation/Vault/">chapter 8</a>. 

**Note:** When you add New Credentials, for the Account Type selection dropdown menu, select your application from the Report Storage section as shown in the screenshot.

<img width="918" alt="report-storage-account-type-selection" src="https://user-images.githubusercontent.com/109250250/180295807-4c20f2ff-d4fa-4abb-8b48-018203fd2669.png">

### **5.2. Issue Tracker**
The Issue Tracker automates the process of vulnerability life-cycle management by providing the option to integrate issue tracking a wide range of platforms like Trello, GitHub, Jira, etc.

This can be setup by choosing the Profile and the Issue Tracker.  This example shows 'APIsec Issues'.  All of the vulnerabilities will be logged in the APIsec Project Dashboard. 

<img alt="APIsec Screenshot" src="https://user-images.githubusercontent.com/75529175/168322396-cb3d863e-f920-4113-b1d9-2f0bab92c71c.png" />

You can choose the Issue Tracker system that best suits your requirements.  The credentials vary with the chosen system.  The process for adding the new credentials of the Issue Tracker system is the same as explained in <a href="https://apisec-inc.github.io/documentation/Vault/">chapter 8</a>.

### **5.3. Notifications**
Notifications allow you to integrate Slack Channels with the Project for receiving notifications and Scan Reports. 

<img alt="APIsec Screenshot" src="https://user-images.githubusercontent.com/75529175/168322407-4b47066a-992b-4985-a88c-38a14359a654.png" />

### **5.4. Git Backup**
With this feature, you can integrate a Git source code repository for backing up Configurations, Playbooks, and other APIsec Project files.  It also allows the security engineers to collaborate as a team for adding Playbooks, Payloads, etc. 

<img alt="APIsec Screenshot" src="https://user-images.githubusercontent.com/75529175/168322418-f6ab37d5-4eaa-48be-8411-855b3b233ad2.png" />

### **5.5. CI/CD**
APIsec offers an amazing feature for terminal / command line users to trigger on-demand scans via external CI/CD Systems.  It supports ten CI/CD platforms that include AWS, <a href="https://github.com/marketplace/actions/apisec-scan" target="_blank">GitHub Actions</a>, Jenkins, MS Azure Pipelines and more. 

**Note:** The JQ and wget commands are prerequisites for this set up.

<img alt="APIsec Screenshot" src="https://user-images.githubusercontent.com/75529175/168322423-aa08bb33-0362-4c67-82d3-b74282bfe944.png" />

### **5.6. Configure Single Sign-On/Okta account** 
This option is available in the 'Account' under the user Profile menu, then click on the SSO/Okta Settings tab.  You can configure an SSO/Okta account with the APIsec account.

<img alt="APIsec Screenshot" src="https://user-images.githubusercontent.com/75529175/168322601-3c5a9deb-23b8-4dfa-af92-b4a878249ec2.png" />

A guide on 'How to Configure OKTA SSO for APIsec?' is also available in the instructions which can be accessed by clicking on the question in blue.  The link redirects you to a Google doc as shown in the below screenshot.

Here is a snippet of the documentation.

<img alt="APIsec Screenshot" src="https://user-images.githubusercontent.com/75529175/168322647-fb5dbc74-9278-485f-a4c8-d6249dbd9635.png" />


### **5.7. Configure Single Sign-On/Azure AD account**
This option is available in the 'Integrations Tile', then click on the 'SSO tile' and select the integrations type as Azure AD.

<img alt="APIsec Screenshot" src="https://github.com/apisec-inc/documentation/assets/105206963/b243b3af-df9f-425b-8bca-779a2eb71252.png" />

<img alt="APIsec Screenshot" src="https://github.com/apisec-inc/documentation/assets/105206963/68f4fbd3-0667-4a13-b37d-5b81f5b7fc13.png" />

![APIsec screenshot](https://github.com/apisec-inc/documentation/assets/105206963/29130297-9d73-4217-b9f7-ee152c3ea673)





