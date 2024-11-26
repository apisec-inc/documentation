## **Configure Mulesoft API Gateway via Connected App Credentials**

**Prerequisites:**
<br>
1. Create a Connected App in the Mulesoft API Gateway. Please refer to the following [link](https://docs.mulesoft.com/api-manager/latest/manage-client-apps-connected-apps-concept)<br>
2. Select the following scopes in the Connected App:<br>  
   - API Governance > Governance Viewer.<br>  
   - API Manager > View APIs Configuration.<br>  
   - Data Gateway > Data Gateway Viewer.<br>
3. Retrieve Client ID and Secret to integrate Mulesoft API Gateway with APIsec
<br>
<br>
**Steps to integrate Mulesoft API Gateway with APIsec:**
<br>
1. Click API Gateways Tile on the APIsec Home page.
![Screenshot 2024-01-19 110606](https://github.com/apisec-inc/documentation/assets/39483585/90c64991-0270-42b4-b8aa-b299f8168fad)<br>
2. Click Register Gateway
![Screenshot 2024-01-19 111207](https://github.com/apisec-inc/documentation/assets/39483585/f0d298e5-f68a-4b6b-9232-e935735a81cf)<br>
3. Select Anypoint Platform from the Gateway dropdown
![Screenshot 2024-01-19 110417](https://github.com/apisec-inc/documentation/assets/39483585/dddde524-9c0d-4b40-a4ea-e447f84fcfb7)<br>
4. Enter the ID and Secret obtained from the Mulesoft Gateway’s Connected App and click Test.
![image](https://github.com/apisec-inc/documentation/assets/39483585/236bfa7d-b78a-4b62-bcc7-f86c6dd8118d)<br>
5. Click Create to save the credentials
<be>
<br>
**Note:** The create button is enabled after the test is successful. If the Test button throws an error, resolve the issue and restart the process.
<br>
You may activate the Enable Automated Onboarding feature to register any new or unregistered APIs every week automatically. This job runs every Sunday at 9 PM GMT.
<be>
<br>
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
