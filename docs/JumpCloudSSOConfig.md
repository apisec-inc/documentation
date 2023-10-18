# **How to Configure JumpCloud SSO for APIsec**

## Contents
 Configuration Steps
    Tutorial


# Configuration Steps(2)

1.  **Actions to Perform to setup JumpCloud :**  
    - Log in to your JumpCloud admin account. (https://console.jumpcloud.com/login/admin).  
    - Launch an existing organization or create a new one and launch it.   
    - Go to SSO Applications and add a new application.
    
    ![JumpcloudImage1]()

    - Select "Custom Application" & click Next.
    - Under "Manage Single Sign-On (SSO)," Select "Configure SSO with OIDC" and click Next.
    - Add a "Display Label" for the application and click Next.
    - Verify the application summary and click on "Configure Application".
    
    ![JumpcloudImage2]()
    
    - Under "SSO" select "Refresh token" and under "Client Authentication Type" select "Client Secret Basic".
    - For "Redirect URIs" and "Login URL" provide as "https://cloud.apisec.ai/auth/{{clientId}}/redirect".
       Note: You can obtain the clientId after clicking on the "Activate" button.
    - Select "Email & profile" under "Standard Scopes".
    - Under "User Groups" assign the application to any group from the list.
       Note: 1. If no "User Groups" exist, you can create them in the "USER MANAGEMENT" section, ensuring that they align with the APIsec user roles.
             2.  User groups serve as a link between users and applications, enabling access.
    - Click on "Save" and store the "Client ID" and "Client Secret" locally. These will be prompted in a window after clicking on the "Save" button.
    - Place the stored "clientId" in "Redirect URIs" and "Login URL" under "SSO" by clicking on the created application and save it.
    - Under "User Management" you can add users and user groups.
       Note: Users can access the applications with the same user group assigned to the user.

    ![JumpcloudImage3]()

    ![JumpcloudImage4]()


2.   **Actions to Perform at APIsec:**  
    
      - Login to APIsec with the organization Admin account at https://cloud.apisec.ai
     
      ![JumpcloudImage5](https://github.com/apisec-inc/documentation/assets/115025465/2b10a07c-ec89-41be-9b1f-3d9575d48091)

      - Click on the Configurations Tile.

      ![JumpcloudImage6](https://github.com/apisec-inc/documentation/assets/115025465/f939572d-40d2-498e-a2b5-65c5de3a0a80)
          
      - Click on SSO Tile Under Integrations and Select SSO Type as JUMPCLOUD from the Dropdown.
      
      ![JumpcloudImage7](https://github.com/apisec-inc/documentation/assets/115025465/57150f5c-f790-4125-bdcb-8aaee11cc278)

      - On the SSO Settings tab, enter the "Client-ID" and "Secret" from the application created on JumpCloud and save by activating the form.
      
      - Go to the User Portal Login page at https://console.jumpcloud.com/login
      - Enter the user credentials and log in.
      - Click on the created application, and you should be redirected to the APIsec portal.
  


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
