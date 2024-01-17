## **Configure Mulesoft API Gateway via Connected App Credentials**

**Prerequisites:**
<br>
1. Create a Connected App in the Mulesoft API Gateway. Please refer to the following link:
https://docs.mulesoft.com/api-manager/latest/manage-client-apps-connected-apps-concept
2. Select the following scopes in the Connected App:
API Governance > Governance Viewer
API Manager > View APIs Configuration
Data Gateway > Data Gateway Viewer
3. Retrieve Client ID and Secret to integrate Mulesoft API Gateway with APIsec

**Steps to integrate Mulesoft API Gateway with APIsec:**
1. Click API Gateways Tile on the APIsec Home page.
2. Click Register Gateway
3. Select Anypoint Platform from the Gateway dropdown
4. Enter the ID and Secret obtained from the Mulesoft Gateway’s Connected App and click Test.
5. Click Create to save the credentials

**Note:** The create button is enabled after the test is successful. If the Test button throws an error, resolve the issue and restart the process.

You may activate the Enable Automated Onboarding feature to register any new or unregistered APIs every week automatically. This job runs every Sunday at 9 PM GMT.

In the case of the existing Mulesoft API Gateway configuration with a Username and password, the credentials can be replaced with the ID and secret in the settings tab. Please refer to the Prerequisites section above to create a Connected App and obtain a Client ID and Secret.




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
