# **How to Configure AZURE SSO for APIsec**

## Contents
 Configuration Steps
    Tutorial


# Configuration Steps(2)

1.  **Actions to Perform to setup  AZURE AD :**  
    - Sign in to the Azure portal. (https://portal.azure.com).  
    - If you have access to multiple tenants, in the top menu, use the Directory + subscription filter to select the tenant in which you want to register an application (OR) Search for and select Azure Active Directory.   
    - Under Manage, select App registrations > New registration.
    
    ![AzureImage1](https://github.com/apisec-inc/documentation/assets/115025465/bf231800-dea6-4adf-87e2-16d8f0f642be)

    - In the Register an application page that appears, enter your application's registration information.  
        - In the Name section, enter a meaningful application name that will be displayed to users of the app.
        - Under Supported account types, select an option.(Multitenant / Single Tenant)
        - In the Redirect URI section, select Web in the combo-box and enter the redirect URI of your web application. This is the URI where your application wants to handle the authentication response after the user signs in. For now, enter the following redirect URI : https://cloud.apisec.ai/auth/redirect.
        - 
![AzureImage2](https://github.com/apisec-inc/documentation/assets/115025465/d130d53f-3d1a-4217-a5e2-c6c5aed33443)

        - Select Register to create the application.
        - In the app's registration screen, find and note the Application (client) ID and Directory (tenant) ID.
![AzureImage3](https://github.com/apisec-inc/documentation/assets/115025465/50ec404d-1dd8-4c6f-b254-406d5de4c5bd)

        - In the app's registration screen, click on the Certificates & secrets blade in the left to open the page to generate secrets. In the Client secrets section, click on New client secret :
            - Type a key description.
            - Select one of the available key durations.
            - The generated key value will be displayed when you click the Add button. Copy the generated value for use in the steps later. This key value will not be displayed again, and is not retrievable by any other means, so make sure to note it from the Azure portal before navigating to any other screen.
![AzureImage4](https://github.com/apisec-inc/documentation/assets/115025465/32fdd96a-383a-44f3-ad38-23571a473da1)

    - Insert Application (client) ID , Directory (tenant) ID and key value in the APIsec portal and copy the generated Azure Home URL for further configuration of Azure AD application. 


2.   **Actions to Perform at APIsec:**  
    
        - Login to APIsec with the organization Admin account at https://cloud.apisec.ai
          ![AzureImage5](https://github.com/apisec-inc/documentation/assets/115025465/2b10a07c-ec89-41be-9b1f-3d9575d48091)

        - Click on the Integrations Tile.
  ![AzureImage6](https://github.com/apisec-inc/documentation/assets/115025465/f939572d-40d2-498e-a2b5-65c5de3a0a80)
          
        - Click on SSO Tile and Select SSO Type as AZURE from the Dropdown.
        - On the SSO Settings tab, enter Secret Code(key value), Client-ID and Tenant Id  from the Application Created on Azure AD.
        - Copy the Azure Home URL and redirect to https://portal.azure.com (Cont. step:1.8)
            - App registrations >Select the Created App.
            - Under Manage select Branding & properties
            - Insert Home page URL (Azure Home URL) copied from APIsec & Save.

        - Click on the Authentication blade under Manage.
        - Select Both the Tokens and Save.

        - Click on API Permissions blade under Manage.
        - Add API / Permissions (name = User.Read), if not added.
        - Grant admin consent to the API / Permissions.
            - Note : Can only be done by Global Admin.

        - Add app roles. Currently, we offer support for the following roles. Please note that these are **case sensitive**. Create the following roles in your system:
            - ADMIN
            - PROJECT_MANAGER
            - USER


        - Owners can be added at the Owners section below App roles, if required.

        - Redirect to Azure Active Directory Home page >  Manage > Enterprise Applications. 
        - Search and Select the created application.

        - Under Manage select Properties blade.
        - Click “Yes” for ‘Assignment required?’ And ‘Visible to users?’ and Save .

        - Under Manage Select ‘Users and groups’ .
        - Click on "Add Users/Groups" to assign them to the application, then select the desired role you wish to provide. If you do not add a role, then the user will not be able to login to APIsec.


        -  Go To https://myapplications.microsoft.com/
        - Click on the created Application and you should be redirected to APIsec portal.

**Tutorial**  

For a comprehensive visual guide on configuring Azure AD with APIsec, we have prepared a helpful Video tutorial. In this [video](https://drive.google.com/file/d/18VKwmlfshCMMsNJovpIgZ9AdnMDth5Lh/view?usp=drive_link), you'll learn step-by-step instructions on setting up the integration between Azure AD and APIsec
