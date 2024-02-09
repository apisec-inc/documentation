## **Steps to Configure GitHub Playbooks Backup and Restore**
**1. GitHub Credentials in APIsec can be saved via Personal Access Token or SSH** <br>
<br>`Reading time < 3 min`<br>
**1.1 To configure GitHub Credentials in APIsec via Personal Access Token**<br>
Step 1: Generate the PAT in Github.<br>
To generate the PAT refer to the following GitHub [documentation](https://docs.github.com/en/enterprise-server@3.6/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens). Select the below scopes while generating the PAT.<br>
1. Full control of private repositories<br>
2. Update GitHub Action workflows<br>
3. Read org and team membership, read org projects<br>
4. Create gists.<br>
Once the scopes are selected, the PAT is generated.<br>
Step 2:  In the APIsec project, Go to Configurations > Integrations<br>
Click on Git Backup > +New Credentials. A New Credentials Pop-Up window appears.<br>
![image](https://github.com/apisec-inc/documentation/assets/39483585/702c6fc7-6a18-436c-b303-eeeeae42b7f9)<br>
Add a name for the credential along with the Personal Access Token. <br>
Click on Add. The credentials will be saved in the APIsec Vault.  <br>
<br>
**1.2 Backup Playbooks in GitHub** <br>
Step 1: Go to GitHub and create a new Repository with a README file. Copy the **'Git Repository HTTPS URL'**  as shown in the below image.<br>
![image](https://github.com/apisec-inc/documentation/assets/39483585/8a13b4ee-42b3-4f3a-999b-f0be228b7768)<br>
Step 2: Go to Configurations > Integrations > Playbook Backup in the project of APIsec.<br>
Paste the GitHub repository URL extracted from Step 1 under the GitHub repository URL field. Now click on the 'GitHub access credentials' dropdown and select your registered credential. Click Save and enable the Active toggle button.<br>
![image](https://github.com/apisec-inc/documentation/assets/39483585/084fbeef-369f-4c06-b5d6-61f0dcf95216)<br>
Once these configurations are completed, the playbooks will be auto-synced into your GitHub repository.<br>
![image](https://github.com/apisec-inc/documentation/assets/39483585/3dab1fd8-5099-4cd6-89b4-796d32c443f6)<br>
<br>
**2.1 To configure credentials for GitHub Playbooks Backup via SSH** <br>
Step 1: Open a Git Bash terminal on your local machine.<br>
Step 2. Enter the following command: ssh-keygen -t ecdsa -m PEM to generate the Public and Private keys.<br>
Step 3. The generated keys will be stored on your local drive. Extract the Public key from your drive and paste it into your GitHub account under the GitHub SSH Settings.<br>
Step 4. Go to Configurations > Integrations > Playbook Backup in the project of APIsec.<br>
![image](https://github.com/apisec-inc/documentation/assets/39483585/552446e4-2ab5-4f49-8c95-9dc32d797e54) <br>
Click on Playbook Backup > +New Credentials. A New Credentials Pop-Up window appears.<br>
Add a name to this credential. Retrieve the Private key generated in Step 2 from your local drive, paste it into the Private Key field, and click on Add. The credentials will be saved in the APIsec Vault. <br>
<br>
**2.2 Backup Playbooks in GitHub** <br>
Step 1: Go to GitHub and create a new Repository with a README file. Copy the **'Git Repository SSH URL'**  as shown in the below image.<br>
![Screenshot 2024-02-09 191341](https://github.com/apisec-inc/documentation/assets/39483585/19b5f01f-433b-42d2-9c7f-9ce5402451e4) <br>
Step 2: Go to Configurations > Integrations > Playbook Backup in the project of APIsec.<br>
Paste the GitHub repository URL extracted from Step 1 under the GitHub repository URL field. Now click on the 'GitHub access credentials' dropdown and select your registered credential. Click Save and enable the Active toggle button.<br>
![image](https://github.com/apisec-inc/documentation/assets/39483585/98de010c-4cae-4c36-9016-35c283954b8e) <br>
Once these configurations are completed, the playbooks will be auto-synced into your GitHub repository. <br>
<h2 align="center"> <b> Steps to Restore Playbooks from the GitHub Repository </b> </h2>
Step 1: Once the GitHub Credentials are configured and the playbook backup has been done as described in the 1.1 and 2.1 sections, the playbooks can be restored in APIsec. For this, Go to Configurations > Playbooks <br>
Step 2: Click on Bulk Create/Delete Playbooks. Select All from the categories drop-down list. Check Delete Custom Playbooks and click Submit.<br>
![image](https://github.com/apisec-inc/documentation/assets/39483585/d596d82b-fd4f-46b6-9575-c4b075cdeb23) <br>
Step 3: Go to GitHub and open the Repository where the playbooks have been backed up. Copy the 'Git Repository URL'  as shown in the below image.
![image](https://github.com/apisec-inc/documentation/assets/39483585/289e20ea-d139-418c-94fa-f34df8c749c2)<br>
Step 4: Go to Configurations > Integrations > Playbook Backup in the project of APIsec.<br>
![image](https://github.com/apisec-inc/documentation/assets/39483585/b87114e4-caeb-4941-95b4-8b315a7e3e67)<br>
Paste the GitHub repository URL extracted from Step 3 under the GitHub repository URL field. Now click the 'GitHub access credentials' dropdown and select your registered credential. Click Save and enable the Active toggle button.<br>
<br>
Once these configurations are completed, the playbooks will be auto-synced into APIsec from the GitHub repository.<br>











