## Configuring Azure API Management Gateway


From the main APIsec dashboard, click API Gateways.

![image](https://user-images.githubusercontent.com/115025465/216443349-89d2bfc6-c530-405d-a7f9-9b20c5773715.png)

Once you have done that Click "+ Register Gateway" and then select Azure API Management.

![image](https://user-images.githubusercontent.com/115025465/216377912-9e4a317c-52b4-4698-9b4d-f85b9b2b09ca.png)


On the next screen, you will have a number of fields to fill out:
   Name (what makes sense to you), Client ID, Client Secret Key and Tenant ID.
   
   Then click "Create"
   
   ![image](https://user-images.githubusercontent.com/115025465/216378444-08dc10b3-3e64-45f1-9f8f-62a148e9134e.png)

 *  For Enable Automatic Onboarding, it is recommended starting with this off and then turning it on after validating the registaration of a few API's.*

![image](https://user-images.githubusercontent.com/115025465/216435834-1e5dc15d-68a5-4855-b36e-113d20361943.png)

**Roles Needed:** The user needs `API Management Service Contributor` and the service principal needs `API Management Service Reader` for proper access.

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
