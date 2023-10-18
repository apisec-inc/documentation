# **How to Configure JumpCloud SSO for APIsec**

## Contents
 Configuration Steps
    Tutorial


# Configuration Steps(2)

1.  **Actions to Perform to setup JumpCloud :**  
    - Log in to your JumpCloud admin account. (https://console.jumpcloud.com/login/admin).  
    - Launch an existing organization or create a new one and launch it.   
    - Go to SSO Applications and add a new application.
    
    ![JumpcloudImage1](https://github.com/apisec-inc/documentation/assets/87167426/46690455-84da-4137-b839-3fb2be74f0e6)

    - Select "Custom Application" & click Next.
    - Under "Manage Single Sign-On (SSO)," Select "Configure SSO with OIDC" and click Next.
      
    ![JumpcloudImage2](https://github.com/apisec-inc/documentation/assets/87167426/ae24495a-bd34-4b54-b036-361d252d2369)

    - Add a "Display Label" for the application and click Next.
      
    ![JumpcloudImage3](https://github.com/apisec-inc/documentation/assets/87167426/4463695c-45a8-4301-bd2c-ccc7bd84629c)

    - Verify the application summary and click on "Configure Application".
          
    - Under "SSO" select "Refresh token" and under "Client Authentication Type" select "Client Secret Basic".
    - For "Redirect URIs" and "Login URL" provide as "https://cloud.apisec.ai/auth/{{clientId}}/redirect".
       Note: You can obtain the clientId after clicking on the "Activate" button.
    - Select "Email & profile" under "Standard Scopes".

    ![JumpcloudImage4](https://github.com/apisec-inc/documentation/assets/87167426/5d3f8970-3e50-4890-ae65-a4ed289257a9)

    - Under "User Groups" assign the application to any group from the list.
       Note: 1. If no "User Groups" exist, you can create them in the "USER MANAGEMENT" section, ensuring that they align with the APIsec user roles.
             2.  User groups serve as a link between users and applications, enabling access.
    - Click on "Save" and store the "Client ID" and "Client Secret" locally. These will be prompted in a window after clicking on the "Save" button.

    ![JumpcloudImage5](https://github.com/apisec-inc/documentation/assets/87167426/a64b87e2-e115-407d-835e-c9fbe421c0d3)

    - Place the stored "clientId" in "Redirect URIs" and "Login URL" under "SSO" by clicking on the created application and save it.
    - Under "User Management" you can add users and user groups.
       Note: Users can access the applications with the same user group assigned to the user.
      
    ![JumpcloudImage6](https://github.com/apisec-inc/documentation/assets/87167426/c5bd0239-875c-4c49-b122-6a364f776b1e)


1.   **Actions to Perform at APIsec:**  
    
      - Login to APIsec with the organization Admin account at https://cloud.apisec.ai
     
      ![JumpcloudImage7](https://github.com/apisec-inc/documentation/assets/87167426/122a817c-fb90-4567-adfe-c29801ded80d)

      - Click on the Configurations Tile.

      ![JumpcloudImage8](https://github.com/apisec-inc/documentation/assets/87167426/cc7b935a-9edc-4919-b0a1-b658d1433475)
          
      - Click on SSO Tile Under Integrations and Select SSO Type as JUMPCLOUD from the Dropdown.
      
      ![JumpcloudImage9](https://github.com/apisec-inc/documentation/assets/87167426/58e8e031-6313-4c6e-b1b0-b4caddaae2e4)

      - On the SSO Settings tab, enter the "Client-ID" and "Secret" from the application created on JumpCloud and save by activating the form.
      
      - Go to the User Portal Login page at https://console.jumpcloud.com/login
      - Enter the user credentials and log in.
      - Click on the created application, and you should be redirected to the APIsec portal.
      ![JumpcloudImage10](https://github.com/apisec-inc/documentation/assets/87167426/7fb3f2b8-bd06-45b6-9005-12a40c90ea35)

  


<div class="container" id="iframeContainer" style="position: fixed; bottom: 20px; right: 20px; overflow: hidden;">
    <iframe id="iFrame1" src="../Chatbot/index.html" style="border: none; width: 100%; height: 100%;"></iframe>
</div>

<script>
    // Function to set dimensions of iframe container based on logo dimensions
    function setIframeContainerDimensions(width, height) {
        const iframeContainer = document.getElementById("iframeContainer");
        iframeContainer.style.width = `${width + 100}px`;
        iframeContainer.style.height = `${height +50}px`;
    }
</script>
