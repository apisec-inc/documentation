# Wrike IT Configuration

Step1: Go to the Integrations section in the APIsec platform and select Issue Tracker from the left-side menu.

Step2: Select Wrike from the issue tracker dropdown as shown in the image below.

<img width="1012" alt="Screen Shot 2022-10-18 at 14 10 05" src="https://user-images.githubusercontent.com/109250250/196522388-199e1d16-a414-46c4-b547-40b40c01a56e.png">

Step3: For adding Wrike credentials click New Issue Tracker Credentials button. It will open a window as shown below.

<img width="1012" alt="Screen Shot 2022-10-18 at 14 10 11" src="https://user-images.githubusercontent.com/109250250/196522469-37c11a4a-5082-42f4-9e93-077ce96e91ad.png">

Enter the name, select Issue Tracker type as Wrike and add the Access token. In order to get the access token, click here is a hyperlink, it will navigate to the Wrike account. In the Wrike account, from the left-hand menu select API and create a new API app by entering the name. key section as shown below.


<img width="1012" alt="Screen Shot 2022-10-18 at 14 10 23" src="https://user-images.githubusercontent.com/109250250/196522546-64004d0f-485e-4ce0-9333-7272155e1a84.png">

After creating the App scroll down and create a Permanent access token. Copy the token and add it to the APIsec platform.

<img width="909" alt="Screen Shot 2022-10-18 at 14 10 38" src="https://user-images.githubusercontent.com/109250250/196522558-a3061327-c1b0-47b6-aba5-1d03db59ae6a.png">

Step4: After adding the token, select the Issue Tracker credentials added in step 3 and it will list the projects and folders from the Wrike account select any project or folder and save to log the vulnerabilities from APISec.

<img width="918" alt="Screen Shot 2022-10-18 at 14 10 47" src="https://user-images.githubusercontent.com/109250250/196522840-5c552a95-ea43-465a-a636-be911374e101.png">
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