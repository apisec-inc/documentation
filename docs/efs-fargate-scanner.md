---

# Mounting EFS File System with APIsec Scanner Deployed on AWS Fargate

This guide will walk you through the process of mounting an AWS Elastic File System (EFS) to a container in ECS (Fargate) with detailed instructions with screenshots attached.

---

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Step 1: Create an EFS File System](#step-1-create-an-efs-file-system)
- [Step 2: Configure ECS Task Definition to Mount EFS](#step-2-configure-ecs-task-definition-to-mount-efs)
- [Step 3: Update ECS Service](#step-3-update-ecs-service)
- [Step 4: Test the Setup](#step-4-test-the-setup)
- [Troubleshooting](#troubleshooting)
- [Conclusion](#conclusion)

---

## Overview

Amazon EFS provides scalable file storage that can be mounted to containers running in ECS. This guide will show you how to:
- Create an EFS file system.
- Configure ECS Task Definitions to mount EFS.
- Update your ECS service to use EFS.

---

## Prerequisites

Before starting, ensure you have:
- An **AWS Account**.
- **ECS Cluster** set up with Fargate.
- **EFS** created in the same region as your ECS cluster.
- Proper **IAM Role** permissions.

---

## Step 1: Create an EFS File System

1. **Go to the AWS Console** and navigate to **EFS (Elastic File System)**.
   ![EFS Dashboard](https://github.com/user-attachments/assets/c412c82b-66a5-4a26-bce9-827d2cb1e564)

2. **Create a new EFS File System** by clicking the **Create file system** button.
   - Select the VPC in which your ECS cluster is running.

   ![Create EFS](https://github.com/user-attachments/assets/3147fb6e-f349-4f2e-ad73-bd9a93b4a9f7)


3. **Configure Network and Mount Targets**:
   - Select the customize button to configure the Regional or One Zone, Network & other configuration.
   - Select the appropriate **Availability Zones** and **Subnets**. Regional is recommended for high availability.
   - For each subnet, choose the appropriate **security group** to allow NFS access (port 2049).

   ![Network & Mount](https://github.com/user-attachments/assets/ef1885cf-698d-4409-b8d8-4e1701278227)


 4. **Configure Access Points** and **Security Groups** to ensure the EFS can be accessed by your ECS tasks.
   - Set the **Access Point** and note down the **File System ID**.
   - Attach a security group that allows NFS traffic (port **2049**) for the selected VPC CIDR range like 172.31.0.0/16 or respective security-group id of Fargate task/service for NFS communication with the Fargate tasks/service.
   - create EFS in the same VPC as Fargate tasks/services and the same security group to keep it simple.

 ![EFS Access Point](https://github.com/user-attachments/assets/1098ba0d-f0b0-4c51-be60-0ac343068915)


  5. **Inbound Rules**
    - Go to the Security Groups
    - Click on your Security Group ID
    - Edit Inbound rules
     
 ![image](https://github.com/user-attachments/assets/56cc7f41-362f-491e-bd86-d67c736d651c)

   **Outbound Rules**
   - Edit Outbound Rules
 ![image](https://github.com/user-attachments/assets/8c1ad68b-bdc6-4105-9335-924801f07e38)

Please add other relevant rules as per your requirement for other services communication.

   6. **VPC settings**
    - Go to the **VPC**
    - Select your **VPC**
    - Click On **Edit VPC Settings**

![image](https://github.com/user-attachments/assets/a77941d0-e77e-4124-92d8-48f3a684d56a)

 make sure the below options are selected/enabled in the VPC Settings.
 - **DNS resolution**
 - **DNS hostname**
 - **DHCP option set**

![image](https://github.com/user-attachments/assets/2918cdd4-78e9-41f4-b06b-d8dbf2983319)

---
## Step 2: Configure ECS Task Definition to Mount EFS

1. **Open ECS Task Definition** in the AWS Console.

   ![image](https://github.com/user-attachments/assets/fff247dd-ad69-4461-8856-c7c9cf8bf897)


2. **Create New Task Definition** or **Edit the existing one** to create a new revision:
   - Select **Elastic File System (EFS)**.
   - Give **Task definition** name
   - Choose **AWS Fargate** as the launch type.
   - Set **Task Memory** and **Task CPU** based on your application's requirements (1vCPU & 2GB memory recommended).

![image](https://github.com/user-attachments/assets/28f5903f-fb8f-4cb0-8ca6-4923d6343cbd)

   - In the **Container section** write any container name and image URI: **apisec/scanner:latest**
   - And Add the below **environment** variables.
   - **FX_HOST**=**scanner.apisec.ai**
   - **FX_PORT**=**443**
   - **FX_IAM**=<**FX_IAM**>
   - **FX_KEY**=<**FX_KEY**>
     For **FX_IAM** and **FX_KEY** see the scanner page in the APIsec product UI **https://cloud.apisec.ai/#/app/scanners/list**

![image](https://github.com/user-attachments/assets/96e47284-6236-4e4c-8e63-4f51e1f0f0c0)

3. **Configure Volume**:
   - Provide a volume name and choose your EFS file system.
   - Select Volume Type as **NFS**.
   - Select **File System ID** from the dropdown.
   - Root Directory as ```/mnt/efs```

   ![image](https://github.com/user-attachments/assets/904129c0-019f-46ce-9e97-23ddc5a92b44)
   - Click on **Create** button
   - 
## Step 3: Update ECS Service

## Troubleshooting

If you encounter issues, consider the following:
- **IAM Permissions**: Ensure the task execution role has the correct EFS access.
- **Security Groups**: Ensure the security group attached to the EFS allows **NFS** traffic (port **2049**).
- **EFS State**: Ensure the EFS is in a healthy state and available.
  
---

## Conclusion

You’ve successfully mounted an AWS EFS to an ECS service. This setup allows your ECS tasks to share data across multiple containers or persist data using EFS.

If you have any questions or run into issues, please consult the [AWS EFS Documentation](https://docs.aws.amazon.com/efs) or [AWS ECS Documentation](https://docs.aws.amazon.com/ecs).

---

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
