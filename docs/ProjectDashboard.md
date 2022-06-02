After registering the API, a Project tile is added in the 'Projects Section'. User can view the Individual Project Dashboard by clicking on the desired Project tile. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166120411-f011f054-d5cb-4424-9da2-269643ce1726.png"/>

In the Project Dashboard, you can view all the current Project stats represented by figures and pie charts. Also, you can initiate a Scan, view Scan history, check Project health status. Another useful feature is the list view of the 'Open/ Closed Vulnerabilities' at the very bottom of the 'Demo' page.  

Moreover, it also has 'Configurations' and 'Reports' page that allows the user to configure the current API project as per the requirement and view or download detailed reports of the current Project pentest. 

### **4.1. Demo Page** 
The Demo page clearly displays all the stats of the current Project. All of the displayed stats are self-explanatory. But, the notable and most important ones are the Scan, Endpoints, Security Categories, and Playbooks tile. 
Also, the 'Select Environment' option allows you to select different API environments for testing. By default the environment is 'Master' but you can add and edit existing environments in the 'Configurations' page. 

More details on the environment, Profile, and Playbooks is given in chapter 9. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166120405-8e18be02-4d52-4b62-910b-0aa125a88eac.png"/>

#### **4.1.1. View Endpoints & Edit the API Source Code**
The Endpoints tile on the 'Demo' page shows the total number of Endpoints the registered API has. When you click on this tile, it redirects the user to a page where details of all the Endpoints are given. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166120370-1921ea90-c6e5-4383-bf6c-d9ca3f6c1a2a.png"/>

The notable feature on this page is that it provides the user an option to edit the API source code via an in-built OAS Editor. 

**Note**: if you are not a tech-geek then please do not play around with this feature. This requires a serious understanding of APIs and coding.
	
<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166120371-157830ab-e3da-4a32-a70d-ca86423b7f94.png"/>

#### **4.1.2. Initiate a Scan** 
The important feature on the 'Demo' page is the 'Scan'. You can initiate a Scan on the current Project by clicking on the blue tile on the right of the page. 

Before initiating a Scan, a user needs to do quick configurations, which include:

- **Profile**: select the environment and profile to run the Scan on. (more details in chapter 9)
- **Scanner**: select a Public or Private Scanner. 
- **Categories**: select the Security Category(s) to test against the API. (more details in chapter 9)

You can initiate a Scan by clicking on 'Submit' or go to 'Advance' section for more custom settings. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166120373-ee56e49c-bc17-42f3-9cfe-488c5f2ad0ef.png"/>

The ***advance*** section requires following information: 

- **Resources**: select the API resources to include in the Scan. 
- **Endpoints**: select the API Endpoints to include in the Scan. 
- **Playbooks**: Add custom Playbooks for the Scan. (more details in chapter 9)

Also, you can check mark the box 'Email report after scan completion' to receive the Scan report on your registered email.

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166120377-f0497554-816a-49c8-a3fb-38398ae410d0.png"/>

When a user clicks on 'Submit', the Scan is initiated. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166120382-6400120c-3691-41a0-839b-11ea3ac0d6d5.png"/>

After the Scan is completed, it displays all the results. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166120387-93bed09c-6037-4774-bf92-21376f375ba3.png"/>

This page also gives the details of Playbooks against the API and their outcome. User can view logs and Analytics of each playbook separately by clicking on the buttons under 'Analytics' column. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166120388-6aa24b41-9b76-4dcc-91a1-eb56be8d00b5.png"/>

This is the log view. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166120390-ad397858-7298-4125-8c26-62aeb6ce98d2.png"/>

This is the Analytics view. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166120392-d8f974ac-9589-4e99-8f2d-0effd4b95ba3.png"/>


#### **4.1.3. View Open Vulnerabilities**
At the bottom of the 'Demo' page, the list of Open Vulnerabilities appears after the Scan. 
User can view the details of each vulnerability by clicking on it. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166120396-257c5d32-ff2c-457b-bc7b-e3980e00c98c.png"/>

Also, it allows a user to perform certain actions like downloading the reports, closing the vulnerabilities, viewing RBAC map or view the list of closed vulnerabilities.

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166120397-a6e5249a-91ab-4158-b949-f7155fea450b.png"/>

<p>If a user clicks on any 'Open Vulnerability' then they will be redirected to <b>vulnerability details page</b>. This page contains all the information about the particular vulnerability including the logs and remediation techniques. Also, user can perform certain <b>actions</b> that include: </p>
<ul>

<li><strong>Reverify</strong>: It will ask user to perform another scan. This way a user can verify if it was either a false positive.</li>

<li><strong>Not a Vulnerability</strong>: It will discard/close the vulnerability and deactivate the 'Playbook'.</li>

<li><strong>Mark endpoint unsecured</strong>: It will add a 'Unsecure' flag to that particular endpoint. This can be done for segmentation of secured and unsecured endpoints. </li>

<li><strong>Delete</strong>: It will completely remove the vulnerability from the record.</li>

<li><strong>Bulk Close/Archive</strong>: It will close or archive all the vulnerabilities. Those particular vulnerabilites will not appear under 'Open vulnerabilities' section. </li>

<li><strong>Review</strong>: It allows the user to mark the vulnerability 'reviewed' so other users can identify.</li>

</ul>

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/171455416-10700b88-b161-4c84-849c-de9271aefeac.png"/>

### **4.2. Configurations Page**
The 'Configurations' next to the 'Demo' tab takes you to the Project configuration page. 
This page is basically the control panel of the Project, where you can play around with:

- Environment & Credentials
- Variables
- Profiles
- Playbooks
- Categories
- Payloads
- Integrations 
- Details 

Please note that all the settings will be limited to the current Project only. Every Project needs to be configured separately from the respective 'Project Dashboard'. 


#### **4.2.1 Set up the Environment & Credentials** 
This page allows you to add, edit, and delete the current API testing environment and the API user-login credentials. 

-> **Environment Details:** 

When a user register's the API, the API environment is created. The name by-deafault is
"Master" and the base URL is the API URL the user registers. A user can add or clone an evniornment by clicking on the three-dots besides the scroll bar. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322125-4ed05c51-099d-47e0-aff5-4344836e7313.png" />

when a user clicks on the 'Add Env' then he is redirected to the below page. For adding the new evnironment; enter the "Name" and the "Base URL", and `click` 'Create'. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322136-23db9348-cb59-4bd5-ac67-50c2f6c9db60.png" />

The 'Clone Env' options creates the copy of the current environment. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322166-ee2afa5a-4a48-4415-8e50-5b26958f6d34.png" />

-> **Authentications:**

The 'Authentications' listicle contains all the 'Credentials/Tokens' a user provides while registering the API. But, a user can also add and edit them on this page. 

It is mandatory to have a "Default" and "Invalid_Auth" authentications in a every environment. The "Default" contains default credentials and the "Invalid_Auth" contains invalid credentials. These are required for API security testing. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322177-f11b57a3-58ef-4d43-a01e-2e413af2c32c.png" />

To add an authentication;  `click` on 'Add Auth' under the three-dots menu. 
For adding an authentication, provide the "Name", select "Authentication Type". 

The credentials requirement varies with the selected type. Most of them require username and password.

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322180-9d2c40da-d670-4bdf-8fc0-389f1e5da6b6.png" />

Also, a user can bulk-add the authentications by clicking on 'Bulk Add Auths' under the three-dots menu. The explanation is provided in **Section 1**.

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322184-b5a67179-32ea-4b34-a2e0-df78455691f6.png" />

To **test** the added authentication; `click` on the name from the list, then `click` on 'Test Authentications'. Also, you can **test all** the authentications by clicking 'Save & Test All Auths' button at the very bottom of the page. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322195-2f4752a9-811b-4767-a8d5-d79924b846c2.png" />

If the authentication is a valid one then a pop-up as shown below in SS will appear and the status will change from "Not Working" to "Working". 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322209-0f992f25-f514-48b1-8d6e-c69507c97d7a.png" />

#### **4.2.2. Configure the Variables** 
This section allows you to add, edit or delete the API variables. Initially they are auto-fetched when a user registers the API. But, you can add new and play around with the existing. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322216-8bb34752-ad1e-4f4c-84bb-c5377e759fc5.png" />

To add a new variable;  `click` on '+ New Variable' and provide the required values as shown in the screenshot below. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322221-e29675a2-7a68-4d50-a2a8-7f131be66057.png" />

To add variables in bulk; `click` on '+ New Variables (Bulk)' and provide the required values as shown in the screenshot below. 
The user can upload an excel file or enter all the variables in text box according to the format mentioned in the comment box. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322231-c5a5644a-2c5d-4c2f-8d05-d29fd35ab62e.png" />

#### **4.2.3. Set up the Scan Profile**
This section allows you to set up the scan profile(s) for the Project environment. You can configure the profile(s) for different environments.  

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322239-dad43e5b-41d7-4c7d-a93a-56937e20224f.png" />

To add a new profile; `click` on '+ New Profile'. Provide the required values as shown in the screenshot below. Also, you can schedule the time for perforiming daily scans on the selected API environment. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322248-4e624444-6835-4168-ba82-c24804459283.png" />

There are already existing profile which are created automatically when a user registers the API and configure the environments. User can edit these profiles and schedule daily scans on them too. 

Moreover, APIsec provides "Trainning Profiles". The only difference in these profiles is that they do not track vulnerabilities. These profiles are for beginners who want to play around and understand the working. 

#### **4.2.4. Play with Playbooks**
The APIsec has a total of 1223 Playbooks but the number of Playbooks available for scanning are 229. As of now, 994 new Playbooks are added to the APIsec central repository. The new Playbooks are constantly added and are released for users when the need arises. 

It is worth mentioning here that Playbooks execute the Payloads. More detail in next Chapters. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322252-48bc0770-055a-448d-93ca-3a6d835ab6ce.png" />

The "Coverage Breakdown" Pie chart graphically represents the categories of Playbooks and total number of Playbooks in each category. When a user clicks on a slice of Pie chart, all the Playbooks in that 'Security Category' appear below.  

The "Playbook Trend" graph next to the Pie chart represents the trend of Playbooks. From April 23, 2022 till the time of writing this document, The total number of Playbooks remained constant i.e, 1223. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322263-6385877d-0a02-40db-8777-f32448f18c09.png" />

The section below the figures contains the list of Playbooks. You can filter the Playbooks by categories, working, new addition or all Playbooks. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322271-36d859a2-3fef-44f1-9d16-db7905d0eac1.png" />

-> **Create a New Playbook:**

To create a new playbook, `click` on '+ New Playbook'. 

The Playbook script text editor has contains the template with comments. A person with relevant technical background can understand the template from comments and write or add the script. 
Also, choose the Playbook type. Only 'POST Playbook' option is available, if the new Playbooks needs to have a POST method then chose this type.

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322282-f65904a7-3541-4e90-a06f-fc9e5c70816f.png" />

-> **Bulk Create/Delete Playbooks:**

A user can bulk add and delete the playbooks based on the 'Security Category(s)'. 

To create Playbooks, select the category(s) and `click` submit. APIsec auto-generates the Playbooks for the selected category. I selected "Authentication Exploit". 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322294-26ac1b5a-f8db-445f-a4e6-bd6b0bf49069.png" />

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322307-bee36551-0dc6-481f-9b03-e30ee0626d91.png" />

Similarly, you can bulk delete the Playbooks via 'Delete Playbooks' option. 

-> **Edit the Playbook(s):**

APIsec also allows the user to edit the pre-built or user added Playbooks and propagate the changes across the platform.

To edit a Playbook, `click` on the desired Playbook under the listicle. 
A user can edit the script via the text editor and save the changes. Also, a user can perform Scan on the API using that particular Playbook only. 

To perform Scan; select environment, select scanner, and `click` on Scan. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322314-d4593de5-18b4-48c6-a49e-8eb9da738cb7.png" />

Also, the three-dots on the top right of this pop-up contains different options to propagate the changes. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322323-99c55a8a-f324-4c82-8022-0d5af4a83675.png" />

#### **4.2.5. Categories** 
The categories on the 'Configurations' page are same as the 'Security Categories' (Chapter 5) option in the 'Services' Menu.
APIsec has total 118 categories. 34 are currently active and 84 are inactive. The inactive categories are activated when the need arises.

A user can switch between 'Tiles View' and 'List View' as per their need. Also, the user can Apply the filters like All, Active, Inactive, and type on the categories. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322337-7a0da67f-a085-45d3-b8db-94d3567d59a4.png" />

To view the details of a category and configure the attack scenarios, `click` on the tile of desired category.

Below shown page is displayed to the user which contains:

- Name
- Overview
- Severity
- Vulnerability Impact
- Exploitation
- Remediation
- References
- Attack Scenarios 

Alongside, there are some configuration options at the bottom of page. These are explained in Chapter 5. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322342-2bb8c105-87be-430a-931d-6a12d99385ed.png" />

To add a new attack scenario, `click` on '+ Add Attack Scenarios' and provide the required values.

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322349-96a92f14-90b8-45b9-b058-2df1388b316a.png" />

To edit already added attack scenario, `click` on the desired one from the list.

After all the configurations, a user can chose to only save the changes or save and rewrite Playbooks. If major changes are done then it is recommended to `click` on 'Save and Rewrite Playbooks'.

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322360-a718207f-64b3-4e48-913d-103d28c9ed77.png" />


#### **4.2.6. Payloads**
APIsec has 4 types of Payloads:

- Default
- Injection
- Stored Injection
- Access Based Authentication Control (ABAC)

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322365-98ea5cdb-506b-48af-9acb-d8d6add15b80.png" />

It is worth mentioning here that these Payloads are used by Playbooks to exploit the vulnerabilities in the API. So, if a user edits any Payload then he needs to re-configure the relevant Playbook(s).

To edit a Payload, `click` on the desired from the list. Once the payload is edited, user can 'Lock & Save' or 'Save' or 'Save & Propagate'. The later option saves and propagates the changes across all the Playbooks.

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322375-cd27c695-f07b-469b-ae24-46b0cc1c3790.png" />

#### **4.2.7. View the Details of Project**
It contains all the details about the Registered API in the Current Project. The details include 
- API source code
- API Name
- API document or URL
- Collaborators 

The 'API project' page contains the details about the API. 

 <img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322454-7b93ea21-e494-4eac-aa1e-83152001541a.png" />

The 'Collaborators' allows the user to assign registered users for managing the Project. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322472-3e0dbe24-1a26-463a-b2fc-483facae18a3.png" />

'OpenAPI Spec' contains the API code. And Non OAS is empty because the registered API format is OpenAPI Specification. If the API is in any other supported format then the API code will appear in Non OAS. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322481-09ff0707-baf8-4909-a913-1db1919fc393.png" />


