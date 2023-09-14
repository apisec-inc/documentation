`Reading time < 1 min`
# APIsec Scanner as Docker Swarm Deployment

Please use the below Yaml file format for deploying the APIsec Scanner as a Docker Swarm Deployment.  
and don't forget to update your **ScannerName, FX_IAM_VALUE & FX_KEY_VALUE**.
``` yaml
version: '3.5'
services:
  <ScannerName>:
    image: "apisec/scanner:latest"
    deploy:
      replicas: 1
    environment:
      - FX_HOST=cloud.apisec.ai
      - FX_IAM=<FX_IAM_VALUE>
      - FX_KEY=<FX_KEY_VALUE>
      - concurrentConsumers=5
      - maxConcurrentConsumers=5
```
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
