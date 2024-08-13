# **Steps to Configure AZURE using OAuth2.0 - PKCE with Confidential Client**

1.  **Register an Application in the Azure AD Portal:**
    - Log into the Azure Portal.
    - Navigate to Azure Active Directory, App registrations, New registration.
    - Enter the following details to create an application:
    - Name: ApplicationName
    - Account types: Please select single/multi-tenant account types.
    - Redirect URI: Select the platform as web from the dropdown.
    - Click Register.
    
        ![Azure sso Registr](https://github.com/user-attachments/assets/ab356e4b-2339-445e-8b06-1dcc7f99cf9b)


2. **Configure Application for PKCE  with Confidential Client**
      - After an application is registered, please note the Application’s Client Id and Directory (Tenant Id).
      - Click the “Redirect URIs” link to navigate to the platform configurations page.

        ![CopyRedirectURI](https://github.com/user-attachments/assets/f761fb82-b0db-4220-900f-986bcf741fed)

      - Click Add a platform and select Web under the Web applications.

        ![Configure platform](https://github.com/user-attachments/assets/cddb02d0-90f2-4705-b981-efc29fe8907b)

      - Enter the redirect URI of the application: https://{environment}.apisec.ai/auth2.0/{clientId}/redirect.
        - Here’s an example: https://cloud.apisec.ai/auth2.0/000008ee-c71d-4a6a-a53c-33f7eb1000000/redirect

      - Click Configure and Save the platform configurations.

3. **Enter the Homepage URL**
      - Click Branding and properties under Manage.
      - Enter the Homepage URL, same as the redirect URI.
      - Click Save.

        ![Branding and properties HomePageURL](https://github.com/user-attachments/assets/8e182daa-605c-49ad-ac12-57fdcc8abd13)

4. **Generate a Client Secret**
      - Under the manage section: 
        - Click certificates and secrets.
        - Click a new client secret.
        - Enter description and expiry.
        - Click Add.
        - Copy the Client Secret value.
      
5. **Create and Assign App Roles**
      - Click App roles under the manage section.
      - Enter a display name such as “Admin”.
      - Select “Users/Groups” under Allowed member types.
      - Enter Value, Description.
      - Check the box “Do you want to enable this role?”.
      - Click Apply.
    
6. **Assign user/ groups with the Enterprise application**
      - 6.1 **Navigate to the Enterprise Application from the home page**.

          ![Default directory enterprise app](https://github.com/user-attachments/assets/dfcadfc0-ae03-4323-a8b0-bcb22451026d)

      - Search and select the application registered in Step: 1

          ![All applications](https://github.com/user-attachments/assets/824c2acc-a1e1-44be-9e7f-728984de84da)

      - Click “Assign users and groups” link on the Overview page.

          ![Assign users and groups](https://github.com/user-attachments/assets/0f3e823f-1c7a-4e94-a429-9ee39578db50)

      - Click Add user group.

          ![Add assignment](https://github.com/user-attachments/assets/0fdb7427-aee9-4f51-b063-41aea8da2dd2)

      - Select the users.

          ![userslist](https://github.com/user-attachments/assets/d4925c87-5703-4842-bb57-04ea7f479c6d)

      - Select Roles & click on Assign.

          ![selectrole and assign](https://github.com/user-attachments/assets/2c43efad-1641-463a-ac21-41e5f7ff8852)

      **Note: Users associated with a role will be used to assign the same role in APIsec.**

- 6.2 **Creating & assigning groups with the application**
    - Go to the home overview page.
    - Under manage click Groups.
    ![OverviewUsersandgroups](https://github.com/user-attachments/assets/62b63b0e-77f7-4ecd-88d3-c78cc38c4552)

      - Click New group & fill the details.
        - Select Group type as “Security”.
        - Enter Group name.
        - Enter Membership type as “Assigned”.

      ![newgroupform](https://github.com/user-attachments/assets/44db6796-d645-41ee-912b-5b4d2b5a13f5)

        - In members under users list select the users & click select.

      ![userslistundermembers](https://github.com/user-attachments/assets/2eadd037-cd37-4cd5-9875-01fc84330aab)

        - Click create to successfully add members to that specific group.         

7. **Assign permissions for the group's resource**
   
   **Note: AD Groups support require the following configurations**
   
    - 7.1 **To assign Delegated permissions**
      - Go to Application registrations page & select the registered app.
      
        ![appregistrations7 1new](https://github.com/user-attachments/assets/bca55601-7366-4132-9331-d53e282e1846)

        - Under manage click API Permissions.
        - Click Add a permission.
        - Under Microsoft APIs click Microsoft Graph.
   
            ![APIpermission 7 1 2](https://github.com/user-attachments/assets/b7e3e9b7-7ae9-49c6-bbd4-0fcae8482b8b)

        - Click Delegated permissions & search for Group under Select permissions search field.
        - Expand group & check the boxes.
        - Click on Add permissions.
   
            ![RequestAPIpermissions7 1 3](https://github.com/user-attachments/assets/ebe3736c-b11d-4a4a-b181-afc72b9307ec)

   - 7.2 **To Assign Application permissions**
        - Follow the same steps as mentioned in 7.1
        
          **Note: Under Microsoft Graph click Application permissions**

8. **Assign Groups with the Enterprise application**
      - Navigate to the Enterprise Application from the home page.
      - Search and select the application registered in Step: 1.
      - Click “Assign users and groups” link on the Overview page.
      - Click Add user group.
      - Select Group & click on Assign.

        ![selectgropuandassign8 1new](https://github.com/user-attachments/assets/2764970d-9c3b-483a-bb99-311983328a40)

    - Select Roles & click on Assign.

        ![selectroleandassign8 3](https://github.com/user-attachments/assets/bee422a4-09fd-48b6-8a54-8d33e07f67c3)
  
9. **Publish Application**
      - Click properties under manage section.
      - Click the toggle to enable “Visible to users”.
      - Click Apply changes.

          ![properties9 1new](https://github.com/user-attachments/assets/403855f8-3793-4846-a5d8-bd4da964b4cf)

10. **Configure SSO in APIsec**
      - Login to APIsec application.
      - Click on configuration from APIsec dashboard.
      - Click on SSO and select sso type as Azure from dropdown.
      - Enter the secret code copied from step 4.
      - Enter the client Id and tenant Id copied from step 2.
      - Click the toggle to active.
      - Click Save.

11. **Confirm login with SSO using OAuth2.0 - PKCE with Confidential Client**
      - Launch the URL https://myapps.microsoft.com/  and select the registered application which redirects the user to APIsec application dashboard.
      - Alternatively, the users may use the redirect link for the SP-initiated flow.

          ![APIsecdashboard11](https://github.com/user-attachments/assets/d99b7ac1-7e1a-4cc4-a243-ea70b05d4541)
