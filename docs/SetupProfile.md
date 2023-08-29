`Reading time 10 min`

The User Profile configuration options can be found under the User Profile menu on the top right corner of the User Home page. 

<img alt="APIsec Screenshot" src="https://user-images.githubusercontent.com/75529175/168322759-e2b1e1cf-fefb-4093-8174-f04e21a45e35.png" />

### **12.1. View the Activities**
It contains all the activities performed by this user profile. You can view the logs of the activities performed and apply Search filters to optimize the activities list.

<img alt="APIsec Screenshot" src="https://user-images.githubusercontent.com/75529175/168322576-3437a6c5-d90e-47ff-8a98-9b3a47a9df8e.png" />

To view the logs of the activity, `click` on file button under the logs column. 
Here is the view of activity logs. 

<img alt="APIsec Screenshot" src="https://user-images.githubusercontent.com/75529175/168327382-3063d023-f9e2-49d4-80c0-ac69aa342b43.png" />

### **12.2. View Account Details**
You can view the account details by clicking on the 'Account' under the user profile menu. 

*<img alt="APIsec Screenshot" src="https://user-images.githubusercontent.com/75529175/168322670-80793acc-5d82-44f2-bcc7-d3d402808e31.png" />*

#### **12.2.1 Link SSO/Okta account**
You can link SSO/Okta account with the APIsec account. This option is available in the 'Account' under the User Profile menu. 

<img alt="APIsec Screenshot" src="https://user-images.githubusercontent.com/75529175/168322601-3c5a9deb-23b8-4dfa-af92-b4a878249ec2.png" />

A guide on 'How to Configure OKTA SSO for APIsec?' is available which can be accessed by clicking on the question in blue. The link redirects you to a Google doc as shown in the below screenshot. 

<img alt="APIsec Screenshot" src="https://user-images.githubusercontent.com/75529175/168322647-fb5dbc74-9278-485f-a4c8-d6249dbd9635.png" />

## **12.3 Add/Edit Users**
APIsec allows the enterprise to add multiple users and assign them different roles. This option is available in the 'Users' under user Profile menu. 

<img alt="APIsec Screenshot" src="https://user-images.githubusercontent.com/75529175/168322686-41970268-fa1f-447d-a097-7fb9a1b36e8e.png" />

To add a new user, `click` '+ New User'.

The user's name, email and role are required. 

<img alt="APIsec Screenshot" src="https://user-images.githubusercontent.com/75529175/168322699-95a74262-e20b-4fda-b99a-0115275d0dc5.png" />

To add bulk new users, `click` on '+ New Users (Bulk)'.
Please follow the given format for adding the user credentials. 

<img alt="APIsec Screenshot" src="https://user-images.githubusercontent.com/75529175/168322713-5ce8fff7-55b8-4570-b949-ce7bbfb16a71.png" />

To add a guest user, `click` on '+ Add Guest User'.

Only Email and Role are required for the guest user. APIsec sends the invite to the guest on the given mail. If the guest accepts the invite then the user is added. 

<img alt="APIsec Screenshot" src="https://user-images.githubusercontent.com/75529175/168322724-21799488-338b-485b-8c90-d1e7e2cc3146.png" />

To edit the newly added users or already existing `click` on 'More' drop-down menu. The drop-down has Edit and Reset Password options. 

## 12.4 Add/Edit Orgs
Only Enterprise Admins can add, edit, and delete organizations in the APIsec database. 
Enterprise Admins have the 'Orgs' option under the User Profile menu. This takes the user to the 'Orgs' page. 

<img alt="APIsec Screenshot" src="https://user-images.githubusercontent.com/75529175/171651194-5c01d816-032e-4227-ae11-1100f6908418.png"/>



At the 'Orgs' page, user can view and edit the existing organizations or add a new one. 

<img alt="APIsec Screenshot" src="https://user-images.githubusercontent.com/75529175/171651250-b3bf064e-7d67-4e5f-8807-2e526fd25ba4.png"/>

To add a new organization, `click` '+ New Org' and enter the required credentials. 
The notable options here are the:

- Enterprise Licenses: Enter the number of API registration licenses provided to the organization. 
- Tag: Eag the organization for identification and segmentation purpose. 
- Playbook monthly execution limit: Enter the monthly max limit for Playbook execution via Scans.

`click` 'Create & Next' at the bottom left corner of the page to save the "Org Details" and proceed to "User Details" section. 

<img alt="APIsec Screenshot" src="https://user-images.githubusercontent.com/75529175/171651264-e68d7bd6-d6bc-43a0-948d-27b8627f2227.png"/>

Enter the "Name", "Email" and select the role of the user. The role access levels are mentioned explicitly as shown in the below screenshot.  

If the user is already registered then `click` 'Skip' or else `click` 'Save & Complete'. 

<img alt="APIsec Screenshot" src="https://user-images.githubusercontent.com/75529175/171651273-ad7fed69-8a64-4b0c-9a52-107a1b81f9c4.png"/>

The below screenshot shows the users of the "Demo" organization. Here, an Enterprise Admin can 'Edit' the organization and user details. He can also invite a 'Guest User' or add 'New Users'.

The details for the the 'New Users' are given in the chapter 12.3.

<img alt="APIsec Screenshot" src="https://user-images.githubusercontent.com/75529175/171651284-cdc06348-a5c7-419f-92e6-e5bff9c36c47.png"/>


## **12.5 View My Profile** 
You can view your user profile by visiting 'My Profile' under the user Profile menu. This section also provides the option to view organizatoin access and reset the password.  

<img alt="APIsec Screenshot" src="https://user-images.githubusercontent.com/75529175/168322735-1d0176cb-3d7b-45b8-aa7c-5ed0284f132b.png" />

<p>The 'Orgs Access' shows the registered organizations and the access level along with other details. All the registered organizations appear under this tab. </p>
<img alt="APIsec Screenshot" src="https://user-images.githubusercontent.com/75529175/169665719-109cf564-adaf-4b54-ab43-db2227b8a1d9.png" />


## **12.6 Sign out the Account**
To sign out the account, `click` 'Sign Out' under the user Profile menu. 

<img alt="APIsec Screenshot" src="https://user-images.githubusercontent.com/75529175/171663783-65644566-799c-4a36-82cd-91083ec351ac.png" />

<p>You can request a new password by clicking on 'Forgot Password'. It will prompt to enter the registered email. Once you enter the email, further instructions will be sent to that address. </p>
<img alt="APIsec Screenshot" src="https://user-images.githubusercontent.com/75529175/169666107-cd357cc5-dc55-4bfb-a8d4-83cf60c338a4.png" />


<iframe src="../Chatbot/index.html" width="320" height="400" frameborder="0" style="position: fixed; bottom: 20px; right: 20px;"></iframe>