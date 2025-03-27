`Reading time 2 min`

You can securely store and use API keys and credentials, tokens, passwords, and key-value pairs. APIsec vault is just like a password manager that securely stores all your credentials for ease of access. 

![image](https://user-images.githubusercontent.com/115025465/213296236-afaf708e-ee20-47ff-a952-467e0228fb05.png)


In the below screenshot, you can see all the stored credentials. When you integrate an account with your APIsec account the credentials are automatically stored in the vault. 

<img alt="APIsec Screenshot" src="https://user-images.githubusercontent.com/75529175/166119692-643b3dc7-b821-4eb5-8b34-fd9474db4751.png"/>

APIsec also allows you to add new credentials in the vault for later use. 

To add new credentials:

1. `click` '+ New Credentials'.
   <br>
2.  Provide the name you would like to associate with the credentials. It is recommended to provide unique names for the ease of identification. 
   <br>
3. Select the account type against those credentials. 
   There are number of account types available for API Gateways, Version Control, 
   Notifications, Scanner Deployment, Issue Trackers, Report Storage, and Notifications.
   
   Github was selected for this example **Version Control**. This account type only requires name and personal access token (PAT). <br>
   You can read the **GitHub** official documentation by clicking 'learn more' for generating the PAT. 
   
 **Note**: The credentials requirement varies according to the account type. Also, it is advised to provide the mandatory and optional account credentials for smooth integration. 

 <img alt="APIsec Screenshot" src="https://user-images.githubusercontent.com/75529175/166119695-fee13ad6-ae56-45e3-b348-8c13884f3166.png"/>
 <br>
 <br>
 4. `click` 'Create' and the credentials will be successfully added in the vault. 
   
   <img alt="APIsec Screenshot" src="https://user-images.githubusercontent.com/75529175/166119696-ff83c70a-c45a-44df-942e-7fb733e814d4.png"/>
 <br>
 <br>

# How to Use Vault for Secure Password Management
 <br>
 Once a key-value pair is created in Vault, follow these steps to integrate it into your authentication settings:
 <br>
 1. Navigate to the project for which the authentication key has been saved in the vault. 
 <br>
 2. Go to Configurations > Environments > Envs and Creds 
 <br>
 3. Click on an authentication and select the appropriate Authentication Type. 
 <br>
 4. Replace the key value with the following Vault syntax:
 <br>
 Usage:
  <br>
 [[@Vault.ORG-NAME/KEY-NAME]] 
  <br>
  Ensure that ORG-NAME is replaced with your organization’s name and KEY-NAME with the specific key name stored in Vault.
  <br>
  In the screenshot below, you can see an example of how to use the Vault syntax in your authentication settings.
  <br>
 <img width="899" alt="new-issue-tracker-creds" src="https://github.com/user-attachments/assets/6a33aefb-6fd1-4dcd-8423-d65d945cb916">
 
 <br>
 By following these steps, you can securely reference stored credentials without exposing sensitive information in your project configurations.
 
# How does APIsec keep items in your vault secure?
 <br>
  APIsec stores the vault data in a postgreSQL database encrypted using PGP with a symmetric key.
 <br><br>
 APISec passes a secret key (called as session key) DB to encrypt and decrypt. The Key and its size can't be revealed.
 <br><br>
For more details on how the PGP Encrption works refer Section "F.28.3. PGP Encryption Functions" at https://www.postgresql.org/docs/current/pgcrypto.html
 
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
