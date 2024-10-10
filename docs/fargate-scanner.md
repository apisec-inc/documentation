![image](https://github.com/user-attachments/assets/c14efcc3-ec6b-4226-bd41-14fb60cb045a)![image](https://github.com/user-attachments/assets/9f871569-9543-419e-9a62-c1473513ca78)# APIsec AWS Fargate

## Run APIsec Scanner as an AWS Fargate

 - Login to AWS Account.
 - Select **Amazon Elastic Container Service** (ECS).
 - Select Clusters.
 - Click on **Create Cluster**.
   
![image](https://github.com/user-attachments/assets/1c68b956-2d12-46a5-a711-c387bbf75d67)

 - Give a Unique Cluster Name.
 - In Infrastructure Select **AWS Fargate (serverless)**
   
![image](https://github.com/user-attachments/assets/80ac2352-eb24-49cf-b6ed-bf81c8b162f6)

 - Create New Task Definitions.
   
![image](https://github.com/user-attachments/assets/e440202a-8244-4b99-89b3-cd7e91af5603)

 - Specify a Unique task name.
 - Select Launch type as **AWS Fargate**.
 - Select 1 vCPU & 2GB memory.

![image](https://github.com/user-attachments/assets/aeee62d2-c658-4fb4-a296-86a08b5d699b)

 - Add Container.
 - Give Unique Container name, Image name(fxlabs/bot:latest).
 - Add below **Environment variables** from APIsec scanner.
 - FX_HOST, FX_PORT, FX_IAM & FX_KEY
   
![image](https://github.com/user-attachments/assets/8da1e9b7-18fc-46f4-babf-5f5f8c4bf8d5)

 - Click on Create.
 - Go back to the **Cluster** > Click on the Newly created **Cluster name**.
 - Go to the **Tasks** tab and Click on **Run new task**
   
![image](https://github.com/user-attachments/assets/7a2b259b-c315-489a-afcb-7acac663859a)

 - Select **Launch Type** as **FARGATE** and Deployment Configuration as **Task** then Click **Create**

![image](https://github.com/user-attachments/assets/2875cf94-8b89-462f-be22-5bf93a384281)

 - Click on **Check Status** from the APIsec Scanner page.
 - You will see the status is **OK**
   
![image](https://github.com/user-attachments/assets/5f30ffab-82d0-4b76-9a88-7bd56e5b1d93)

 - Now you can run scans on this scanner from the APIsec project.

!!! info "Note"
	
 - If Auto-assign public IP is selected as disabled, the container will be in a stop state.
 - To Delete the cluster, you need to stop the TASK first.

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
