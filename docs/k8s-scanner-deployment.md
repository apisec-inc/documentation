`Reading time < 1 min`
# APIsec Scanner as Kubernetes Deployment

Please use the below Yaml file format for deploying the APIsec Scanner as a Kubernetes Deployment.

``` yaml
apiVersion: apps/v1
kind: Deployment
metadata:
 name: <ScannerName>
spec:
 replicas: 5
 selector:
   matchLabels:
     app: <ScannerName>
 template:
   metadata:
     labels:
       app: <ScannerName>
   spec:
     containers:
       - name: <ScannerName>
         image: apisec/scanner:latest
         imagePullPolicy: IfNotPresent
         env:
         - name: FX_HOST
           value: "cloud.apisec.ai"
         - name: FX_IAM
           value: "<FX_IAM_VALUE>"
         - name: FX_KEY
           value: "<FX_KEY_VALUE>"
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