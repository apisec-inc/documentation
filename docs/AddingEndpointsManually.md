# Add Endpoints via UI

**Adding endpoints to an existing project**

Although endpoints are added at the time of registering an API, you can still add these manually. This document outlines step-be-step to add that.

From the homepage find for a previously created project where you need to add more endpoints. Open that project and click on the Endpoints tile. 

<img width="1506" alt="Screen Shot 2022-09-30 at 22 37 14" src="https://user-images.githubusercontent.com/109250250/193392623-24d46de7-7570-4db1-9930-a1a3f5b6a5a9.png">


On the top right corner of the page, click on the Add Endpoints button.

<img width="1506" alt="Screen Shot 2022-09-30 at 22 48 17" src="https://user-images.githubusercontent.com/109250250/193392632-acf16145-ffb3-4636-9afa-32c0613ed91f.png">


In the Popup > Add the endpoint along with its method, for example: post:/api/v1/addAccount/sample > Before you Save, keeping the checkbox checked will scan these specific endpoint against different categories.

<img width="1358" alt="Screen Shot 2022-10-31 at 13 54 53" src="https://user-images.githubusercontent.com/109250250/199087796-be67f99d-5036-43db-8777-fb4aac9f060a.png">

Observe the newly endpoint and a tag is added to identify the manual entries.

<img width="1425" alt="Screen Shot 2022-10-03 at 10 47 59" src="https://user-images.githubusercontent.com/109250250/193658166-39a94367-3c82-4f4c-b8a4-d6250316a751.png">

Go to the Dashboard of the project > Observe the endpoint count has been increased now.  The Playbooks will also be generating

<img width="1503" alt="Screen Shot 2022-09-30 at 22 50 19" src="https://user-images.githubusercontent.com/109250250/193392655-6122b932-b4b7-495a-9b8d-b356399c5bcb.png">


Run Scan if you haven’t already in the previous screen.

More information about the dashboard can be found [here](https://docs.apisec.ai/ProjectDashboard/). 
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