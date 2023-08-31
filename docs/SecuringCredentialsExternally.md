<h1 align="center" style="color: #F5F5F5;"> <b> Securing APIsec Service Account Credentials in Vault or Privileged Access Manager Solution </b> </h1>

<p style="text-align: left;color: 	#A9A9A9;font-size:16px;"> By <b><a href="https://github.com/fersy02">Feroz Syed</a></b> on <b>August 23,2022</b> </p>

### **Problem Statement:**

APIsec supports Single Sign-On with OKTA using the OpenID Connect standard. Once Single Sign-On is activated in an APIsec organization, the users of that organization can no longer access their accounts using basic authentication. They should instead access the APIsec application with their OKTA Account. However, the APIsec APIs rely on the basic credentials required to generate an access token.


### **Solution:**

Organizations enabling Single Sign-On with APIsec should request them to create a service account to access the APIsec APIs. The APIsec Administrator creates and shares the credentials with the organization admin, who could change the password and store them in their preferred vault. These credentials are required to generate an access token before accessing the APIsec APIs.


### **High-Level Process:**

1.	Reach out to the APIsec team for the creation of a service account, if SSO is active in your organization.
2.	Change the password of the newly created service account and store it in the vault.
3.	Create a policy that restricts other users from accessing the password. Except for the organization admin, no one can fetch the password.
4.	Using a client such as GitLab, schedule a job to rotate the access token at least twice daily and store it in the vault.
5.	Create a policy that restricts developers from updating or deleting the token. However, they should be allowed to access the token for calling APIsec APIs.


### **Summary**

APIsec platform provides REST APIS to perform almost all operations available from the Web Application. In general, APIsec APIs could help register a new API or reload a specification in an existing API project. Similarly, developers can run a new scan and review the vulnerabilities from the current scan. This way, developers can use the APIsec APIs to operationalize the core features of APIsec without using the APIsec Web Application.
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