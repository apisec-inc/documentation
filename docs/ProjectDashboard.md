After registering the API, a Project tile is added in the 'Projects Section'. Users can view the Individual Project Dashboard by clicking on the desired Project tile or row. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166120411-f011f054-d5cb-4424-9da2-269643ce1726.png"/>

In the Project Dashboard you can view all the current project stats represented by figures and charts. You can initiate a scan, view scan history, and check project health status. Another useful feature is the list view of the 'Open/Closed Vulnerabilities' at the very bottom of the 'Project' page.  

It also has 'Configurations' and 'Reports' pages that allows the user to configure the current API project as per the requirement and view or download detailed reports of the current Project pentest. 

### **4.1. Project Overview** 
The 'Project Overview' page clearly displays all the stats of the current Project. All of the displayed stats are self-explanatory. But, the notable and most important ones are the Scan, Endpoints, Security Categories, and Playbooks tile. 
The 'Select Environment' option allows you to select different API environments for testing. By default the environment is 'Master' but you can add and edit existing environments in the 'Configurations' page. 

More details on the environment, Profile, and Playbooks are given in chapter 4.2. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166120405-8e18be02-4d52-4b62-910b-0aa125a88eac.png"/>

#### **4.1.1. View Project Health Status, Scans & Activity** 
The 'Project Health Status' tile besides the pie charts shows the current status of the project. 

- **Evironment**: Shows the current enviornment, host and port project is configured on. By default the environment is "Master". Users can directly edit the project environment by clicking on "Master". If anything in red is mentioned here that means something was missed while 'Registering the API'. (more details in chapter 4.2.1.)
- **Credentials**: Shows the environment credentials the project is set up with. You can directly edit or configure them by clicking on 'Edit Cred'. (more details in chapter 4.2.1.)
- **Playbook Health**: Displays whether all of the available 'Playbooks' are compatible with the Project Environment and are ready for a 'Scan'. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/172059538-9712ab03-19c2-47f6-bac2-3fa8adfbc34f.png"/>

-> **All Scans:** 

You can view the details of all the 'Scans' performed on the Project. To view 'Scan' details, `click` 'All Scans' on the tile besides 'Monthly Scans'. 

You can view detailed individual 'Scan' results by clicking on desired scan from the list. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/172059531-765e9d3c-2ee5-4bbe-82a6-b60b42e2d915.png"/>


-> **Activities:**

You can view the activities performed by all of the users on the project. Logs generated for the particular activity can be viewed by clicking on "file icon" in front of the activity. 

To view the activities, `click` 'Activities' under the 'All Scans'. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/172059535-f46b3dcc-eb01-48da-9449-407b0a516deb.png"/>

This is the logs view of the activity. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/172059536-ccad5dc8-b293-4be8-b70a-bf640fa480a1.png"/>

#### **4.1.2. View Endpoints & Edit the API Source Code**
The Endpoints tile on the 'Project' page shows the total number of endpoints the registered API has. When you click on this tile, it redirects the you to a page where details of all the Endpoints are given. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166120370-1921ea90-c6e5-4383-bf6c-d9ca3f6c1a2a.png"/>

The notable feature on this page is that it provides you an option to edit the API source code with an OAS Editor. 

**Note**: if you are not a tech-geek please do not attempt using this feature. This requires a deep understanding of APIs and programming them.
	
<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166120371-157830ab-e3da-4a32-a70d-ca86423b7f94.png"/>

#### **4.1.3. Initiate a Scan** 
The important feature on the 'Project' page is the 'Scan'. You can initiate a Scan on the current Project by clicking on the blue `scan` tile on the right of the page. 

Before initiating a scan, you need to do quick configurations which includes:

- **Profile**: Select the environment and profile to run the scan on. (more details in chapter 4.2.3.)
- **Scanner**: Select a Public or Private Scanner. 
- **Categories**: Select the Security Category(s) to test against the API. (more details in chapter 9)

You can initiate a Scan by clicking on 'Submit' or go to the 'Advanced' section for more custom settings. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166120373-ee56e49c-bc17-42f3-9cfe-488c5f2ad0ef.png"/>

The ***Advanced*** section requires following information: 

- **Resources**: Select the API resources to include in the Scan. 
- **Endpoints**: Select the API endpoints to include in the Scan. 
- **Playbooks**: Add custom Playbooks for the Scan. (more details in chapter 4.2.4.)

Also, you can select the check box 'Email report after scan completion' to receive the Scan report on your registered email.

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166120377-f0497554-816a-49c8-a3fb-38398ae410d0.png"/>

When a user clicks on 'Submit', the Scan is initiated. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166120382-6400120c-3691-41a0-839b-11ea3ac0d6d5.png"/>

After the Scan is completed, it displays all the results. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166120387-93bed09c-6037-4774-bf92-21376f375ba3.png"/>

This page gives the details of Playbooks against the API and their outcome. You can view logs and Analytics of each playbook separately by clicking on the buttons under 'Analytics' column. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166120388-6aa24b41-9b76-4dcc-91a1-eb56be8d00b5.png"/>

This is the log view. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166120390-ad397858-7298-4125-8c26-62aeb6ce98d2.png"/>

This is the Analytics view. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166120392-d8f974ac-9589-4e99-8f2d-0effd4b95ba3.png"/>


#### **4.1.4. View Open Vulnerabilities**
At the bottom of the 'Project' page, the list of Open Vulnerabilities appears after the Scan. 
You can view the details of each vulnerability by clicking on it. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166120396-257c5d32-ff2c-457b-bc7b-e3980e00c98c.png"/>

It allows a you to perform certain actions like downloading the reports, closing the vulnerabilities, viewing RBAC map, or view the list of closed vulnerabilities.

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166120397-a6e5249a-91ab-4158-b949-f7155fea450b.png"/>

<p>If a you click on any 'Open Vulnerability' then you will be redirected to <b>vulnerability details page</b>. This page contains all of the information about the particular vulnerability including the logs and remediation techniques. You can perform certain <b>actions</b> that include: </p>
<ul>

<li><strong>Reverify</strong>: Will ask you to perform another scan. This way a you can verify if it was a false positive.</li>

<li><strong>Not a Vulnerability</strong>: Will discard/close the vulnerability and deactivate the 'Playbook'.</li>

<li><strong>Mark endpoint unsecured</strong>: Will add a 'Unsecure' flag to that particular endpoint. This can be done for segmentation of secured and unsecured endpoints. </li>

<li><strong>Delete</strong>: Will completely remove the vulnerability from the record.</li>

<li><strong>Bulk Close/Archive</strong>: Will close or archive all the vulnerabilities. Those particular vulnerabilites will not appear under 'Open vulnerabilities' section. </li>

<li><strong>Review</strong>: Allows the you to mark the vulnerability 'reviewed' for others to see.</li>

</ul>

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/171455416-10700b88-b161-4c84-849c-de9271aefeac.png"/>

### **4.2. Configurations Page**
The 'Configurations' next to the 'Project' tab takes you to the Project configuration page. 
This page is the control panel of the Project, where you can play around with:

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

When a you register the API, the API environment is created. The default name is
"Master" and the base URL is the API URL registered. You can add or clone an environment by clicking on the ellipsis besides the scroll bar. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322125-4ed05c51-099d-47e0-aff5-4344836e7313.png" />

when you click on the 'Add Env' then you are redirected to the below page. Enter the "Name" and the "Base URL", and `click` 'Create' to add a new environment.

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322136-23db9348-cb59-4bd5-ac67-50c2f6c9db60.png" />

The 'Clone Env' option creates a copy of the current environment. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322166-ee2afa5a-4a48-4415-8e50-5b26958f6d34.png" />

-> **Authentications:**

The 'Authentications' list contains all the 'Credentials/Tokens' previously provided while registering the API. You can also add and edit them on this page. 

It is mandatory to have a "Default" an "Invalid_Auth" authentications in a every environment for security testing. 

- "Default" contains default credentials 
- "Invalid_Auth" contains invalid credentials

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322177-f11b57a3-58ef-4d43-a01e-2e413af2c32c.png" />

To add an authentication;  `click` on 'Add Auth' under the ellipsis menu. 
For adding an authentication, provide the "Name", select "Authentication Type". 

The credentials requirement varies with the selected type. Most of them require username and password.

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322180-9d2c40da-d670-4bdf-8fc0-389f1e5da6b6.png" />

You can bulk-add the authentications by clicking on 'Bulk Add Auths' under the ellipsis menu. The explanation is provided in **Section 1**.

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322184-b5a67179-32ea-4b34-a2e0-df78455691f6.png" />

To **test** the added authentication; `click` on the name from the list, then `click` on 'Test Authentications'. You can **test all** of the authentications by clicking 'Save & Test All Auths' button at the very bottom of the page. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322195-2f4752a9-811b-4767-a8d5-d79924b846c2.png" />

If the authentication is valid then a pop-up will appear (like the screenshot below) and the status will change from "Not Working" to "Working". 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322209-0f992f25-f514-48b1-8d6e-c69507c97d7a.png" />

#### **4.2.2. Configure the Variables** 
This section allows you to add, edit or delete the API variables. Initially they are auto-fetched when the API is registered. You can add new variables and modify the ones already existing. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322216-8bb34752-ad1e-4f4c-84bb-c5377e759fc5.png" />

To add a new variable;  `click` on '+ New Variable' and provide the required values as shown in the screenshot below. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322221-e29675a2-7a68-4d50-a2a8-7f131be66057.png" />

To add variables in bulk; `click` on '+ New Variables (Bulk)' and provide the required values as shown in the screenshot below. 
You can upload an excel file or enter all the variables in text box according to the format mentioned in the comment box. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322231-c5a5644a-2c5d-4c2f-8d05-d29fd35ab62e.png" />

#### **4.2.3. Set up the Scan Profile**
This section allows you to set up the scan profile(s) for the Project environment. You can configure the profile(s) for different environments.  

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322239-dad43e5b-41d7-4c7d-a93a-56937e20224f.png" />

To add a new profile; `click` on '+ New Profile'. Provide the required values as shown in the screenshot below. Also, you can schedule the time for perforiming daily scans on the selected API environment. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322248-4e624444-6835-4168-ba82-c24804459283.png" />

There are already existing profiles which are automatically created when an API is registered and the environment is configured. You can edit these profiles and schedule daily scans on them. 

APIsec provides "Trainning Profiles". The only difference in these profiles is that they do not track vulnerabilities. These profiles are for beginners who want to learn through exploring. 

#### **4.2.4. Play with Playbooks**
Playbooks execute the payloads against the configured tyarget API + environment. APIsec has a over 1200 Playbooks but the number of Playbooks available for scanning are 229. As of now, 994 new Playbooks are added to the APIsec central repository. New Playbooks are constantly added and released for use in the product. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322252-48bc0770-055a-448d-93ca-3a6d835ab6ce.png" />

The "Coverage Breakdown" pie chart shows the categories of Playbooks and total number of Playbooks in each category. When a you click on a slice of pie chart, all of the Playbooks in that 'Security Category' appear below.  

The "Playbook Trend" graph next to the pie chart represents the trend of Playbooks. From April 23, 2022 till the time of writing this document, The total number of Playbooks remained constant i.e, 1223. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322263-6385877d-0a02-40db-8777-f32448f18c09.png" />

The section below the figures contains the list of Playbooks. You can filter the Playbooks by categories, working, new addition or all Playbooks. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322271-36d859a2-3fef-44f1-9d16-db7905d0eac1.png" />

-> **Create a New Playbook:**

To create a new playbook, `click` on '+ New Playbook'. 

The Playbook script text editor has the template with comments. Someone with relevant technical background can understand the template from comments and write or edit the script. 
You also need to choose the Playbook type. Only 'POST Playbook' option is currently available, if the new Playbooks needs to have a POST method then choose this type.

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322282-f65904a7-3541-4e90-a06f-fc9e5c70816f.png" />

-> **Bulk Create/Delete Playbooks:**

You can bulk add and delete the playbooks based on the 'Security Category(s)'. 

To create Playbooks, select the category(s) and `click` submit. APIsec auto-generates the Playbooks for the selected category. "Authentication Exploit" in the example. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322294-26ac1b5a-f8db-445f-a4e6-bd6b0bf49069.png" />

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322307-bee36551-0dc6-481f-9b03-e30ee0626d91.png" />

You can bulk delete the Playbooks via 'Delete Playbooks' option. 

-> **Edit the Playbook(s):**

APIsec also allows the you to edit the pre-built or user added Playbooks and propagate the changes across the platform.

To edit a Playbook, `click` on the desired Playbook. 
You can edit the script with the text editor and save the changes. You can perform a Scan on the API using that particular Playbook only. 

To perform a Scan; select an environment, select a scanner, and `click` on Scan. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322314-d4593de5-18b4-48c6-a49e-8eb9da738cb7.png" />

The ellipsis on the top right of this pop-up contains different options to propagate the changes. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322323-99c55a8a-f324-4c82-8022-0d5af4a83675.png" />

#### **4.2.5. Categories** 
The categories on the 'Configurations' page are the same as the 'Security Categories' (chapter 9) option in the 'Services' menu.
APIsec has a total 118 categories. 34 are currently active and 84 are inactive. The inactive categories are activated as needed.

You can switch between 'Tiles View' and 'List View' as needed. You can Apply the filters like All, Active, Inactive, and Type on the categories. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322337-7a0da67f-a085-45d3-b8db-94d3567d59a4.png" />

To view the details of a category and configure the attack scenarios, `click` on the tile of desired category.

The page shown below contains:

- Name
- Overview
- Severity
- Vulnerability Impact
- Exploitation
- Remediation
- References
- Attack Scenarios 

There are some configuration options at the bottom of page. These are explained in chapter 9. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322342-2bb8c105-87be-430a-931d-6a12d99385ed.png" />

To add a new attack scenario, `click` on '+ Add Attack Scenarios' and provide the required values.

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322349-96a92f14-90b8-45b9-b058-2df1388b316a.png" />

To edit already added attack scenario, `click` on the desired one from the list.

When configurations is complete you can choose to only save the changes or 'Save and Rewrite Playbooks'. If major changes are done then it is recommended to `click` on 'Save and Rewrite Playbooks'.

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322360-a718207f-64b3-4e48-913d-103d28c9ed77.png" />


#### **4.2.6. Payloads**
APIsec has 4 types of Payloads:

1. Default
2. Injection
3. Stored Injection
4. Access Based Authentication Control (ABAC)

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322365-98ea5cdb-506b-48af-9acb-d8d6add15b80.png" />

These payloads are used by Playbooks to exploit the vulnerabilities in the API. If a you edit any payload then you needs to re-configure the relevant Playbook(s).

To edit a Payload, `click` on one from the list. Once the payload is edited, you can 'Lock & Save' or 'Save' or 'Save & Propagate'. The later option saves and propagates the changes across all the Playbooks.

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322375-cd27c695-f07b-469b-ae24-46b0cc1c3790.png" />

#### **4.2.7. View the Details of Project**
This view contains all of the details about the registered API in the current project. The details include 
- API source code
- API Name
- API document or URL
- Collaborators 

The 'API project' page contains the details about the API. 

 <img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322454-7b93ea21-e494-4eac-aa1e-83152001541a.png" />

The 'Collaborators' view allows you to assign registered users for managing the project. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322472-3e0dbe24-1a26-463a-b2fc-483facae18a3.png" />

'OpenAPI Spec' contains the API code. Non OAS is empty because the registered API format is the OpenAPI Specification. If the API is in any other supported format then the API code will appear in Non OAS. 

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/168322481-09ff0707-baf8-4909-a913-1db1919fc393.png" />


