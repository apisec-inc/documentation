This document outlines the steps to setup your Zendesk account with APIsec.  

`Reading time 4 min`

### **Setup Zendesk Issue Tracker**

The expectation is that you already have an account with Zendesk or know how to set one up. New Zendesk connections in APIsec authenticate with OAuth 2.0, so start by registering an OAuth client in your Zendesk instance:

1. In Zendesk, open Admin Center > Apps and integrations > APIs > OAuth clients, then click Add OAuth client.
2. Copy the Unique Identifier (this is your OAuth Client ID) and the Secret from the confirmation page. The secret is shown only once, so store it securely.
3. Add the APIsec callback URL as the Redirect URI: `https://cso.apisecapps.com/integrations/zendesk/oauth/callback` (for the APIsec cloud). On-premises deployments use their own APIsec instance URL with the same path.
4. Make sure the client allows APIsec to read and write tickets. On Zendesk plans that do not offer granular scopes, register the client with the coarse read and write pair instead.

<img width="1194" alt="zendesk-oauth-client-registration" src="../screenshots/zendesk-oauth-client-registration.png">

Then connect Zendesk to your APIsec project:

1. From the homepage select your project > Then, select the `Configurations` tab.
2. Select the `Integrations` tab from the top menu.
3. From the left menu select `Issue Tracker`.
4. Choose an Environment Name Profile.
5. Select `Zendesk` for the Issue Tracker.

    <img width="1194" alt="zendesk-issue-tracker-selection" src="../screenshots/zendesk-issue-tracker-selection.png">

6. Create New Issue Tracker Credentials by clicking on the button.  Or, select from the Credentials dropdown if it's already created.

    On the New Issue Tracker Credentials form:

    - Enter a Name for the connection.
    - Enter the Zendesk URL of your subdomain, e.g. `https://mycompany.zendesk.com`. Omit the trailing slash.
    - Enter the OAuth Client ID and the OAuth Client Secret you copied earlier.
    - Select the Ticket severity sync. These are the APIsec severity levels (Critical, High, Medium, Low) that will sync tickets to Zendesk for this connection.

    The following field is optional:

    - Tags should be a single word without any white spaces. If more than one tag is to be added, provide comma (,) separated tags, e.g. `security,apisec`. These tags are added to every ticket so you can group or filter them in Zendesk.

    <img width="1194" alt="zendesk-connection-form" src="../screenshots/zendesk-connection-form.png">

7. Click `Authorize Connection`. A new browser window opens where you sign in to Zendesk and grant APIsec access to your account. Once you approve access, the window closes and the connection is saved in APIsec.

    <img width="520" alt="zendesk-authorize-confirm" src="../screenshots/zendesk-authorize-confirm.png">

    <img width="620" alt="zendesk-consent-window" src="../screenshots/zendesk-consent-window.png">

    Note: If the sign-in window does not open, allow popups for the APIsec site and try again.

8. Click on `Test Credentials` on the saved connection to validate the connection has established.

If everything is setup correctly, you'll see the Test Connection successful message and the connection will show as Online in the connections list.

<img width="1194" alt="zendesk-connection-online" src="../screenshots/zendesk-connection-online.png">

Activating the toggle button will log the vulnerabilities to Zendesk.

Once the account is set up, you'll start to see tickets getting created with any vulnerability that's detected. Each ticket is created with the type `problem` and the vulnerability details are added to the ticket description. The ticket is tagged with the vulnerability category, the CVSS score, `APIsec`, and any tags configured on the connection.

<img width="1504" alt="zendesk-tickets-created" src="../screenshots/zendesk-tickets-created.png">

### **How the Zendesk integration works**

When does a ticket get created in Zendesk?

APIsec scans your APIs for vulnerabilities. When the scan is finished, tickets are created in Zendesk for valid findings that match the severity levels selected on the connection.

What happens when the vulnerability is fixed?

The recommended process is to NOT close the ticket in Zendesk itself. Once the developer has addressed the vulnerability, the best course of action is to trigger another scan in APIsec. If the vulnerability is fixed, the ticket will be set to `solved` with a closing comment.

Will a subsequent scan reopen a ticket?

If the vulnerability reappears in a later scan, the ticket is reopened and set back to `open` so your team sees it again.

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
