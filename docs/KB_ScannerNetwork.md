# APIsec Scanner Network Architecture

Deploying the APIsec Scanner on a local or self-managed network is an easy task. The steps to do that are covered in another article. 
This page is to describe the network connectivitiy required.

We have two endpoints for connecting the scanner to the APIsec platform. Depending on which endpoint you choose, this impacts which ports need to be open. 

The options that we have are 443 or 5671

scanner.APIsec.ai:443  
cloud.APIsec.ai:5671


The image below is used to depict the following information:

![Scanner Diagram](https://github.com/apisec-inc/documentation/assets/115025465/89cf707f-2238-4cba-a441-9e22d7a1b6a4)
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