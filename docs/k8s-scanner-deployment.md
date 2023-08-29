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
<iframe src="../Chatbot/index.html" width="320" height="400" frameborder="0" style="position: fixed; bottom: 20px; right: 20px;"></iframe>