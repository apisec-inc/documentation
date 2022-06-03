APIsec allows you to deploy a Private or Global Scanner. To go to the Scanner module, `click` 'Scanners' on the user home page. 

<img alt="Deploy Scanner" src="https://user-images.githubusercontent.com/75529175/166118486-438d314c-d5e7-4221-a0fc-528387791cee.png" />

### **7.1. Private Scanner**
You can deploy Private Scanners across AWS, Azure, GCP, Kubernetes, and On-premises. The APIsec scanner is a light-weight Docker container. You can deploy the On-prem Scanner as a docker container on any Linux host or deploy across the above mentioned cloud regions. 

#### **7.1.1. Deploy a New Private Scanner on Cloud**
1. `click` '+ New Scanner' on the Scanners module page.

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166118496-56bedf77-f288-4686-856d-71b530fa149c.png" /><br>
<br>
2. Enter Scanner name that you would like to associate to the scanner. Also, It is recommended to give unique names to the Scanners. This would make it easy for you to identify while deploying registered Private Scanner. 
    
<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166118505-d0897564-08e8-4e78-a108-195d4c6110d1.png" /> <br>
<br>
3. You need to register the cloud service, which you will use for hosting the Scanner.
   <br> 
   To register a cloud service;


a . `click` '+ Register Cloud' -> Enter the name -> Select the cloud type. (For this demo, i selected 'Azure') 
      
b. Provide the required mandatory cloud credentials. For 'Azure' the credentials shown in the screenshot are required.
<br>
**Note**: credentials requirement varies with the selected cloud type. 
<br>

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166118506-a21ceff5-32d0-49ac-8ace-c8727b705798.png" />

	 
c.`click` 'Advanced section' below and select the available region. 
<br>
**Note**: credentials requirements varies with the selected cloud type.
<br>

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166118509-18494304-3ef2-4cd2-86d7-6fa8fb9f2630.png" /> 

d. `click` 'Add' and the registered cloud service will appear on the current page.

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166118513-45f082b0-97e8-4b30-bf78-d03ec932c47d.png" />

 e. `click` 'Submit' to deploy the private scanner on the cloud.
	      
<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166118517-aaa9ee4f-b4b3-4c0c-9614-0bca7d3d60ea.png"/>
	    
####  **7.1.2. Deploying a New Private Scanner On-premiss**
To deploy a On-prem private scanner, you need to set up the Docker/Kubernetes on the host machine. 

1.  Follow the step 1 and 2 of the chapter 3.1.1.
2. `click` 'Docker/Kubernetes Installer' and Select the cluster size. (The more the cluster size the better the speed) 
   
<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166118529-c0439dbf-586c-4099-abed-644e5bb8cf9c.png"/> 
<br>
3. `click` 'Submit' and a screen with commands for deploying the Scanner on Kubernetes, Docker, and AWS Fargate will appear. 
   
<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166118532-4554c374-4c66-4e79-aae0-799f79bb8b2e.png"/>
<br>
4. Click 'Ok' to proceed. 
<br>
5. Enter the IP address of the Scanner. This IP is of the machine on which private scanner is deployed. 
<br>
6. The commands for setting up the Scanners on Docker, Kubernetes, and AWS Fargate are given on the same page. You can use the commands as per the host system enviornment. 
<br>
7. `click` 'Check Status' at the end of page to check the status of Scanner. This status tells us if the scanner is deployed successfully and running. 
<br>
8. `click` 'Save' to deploy the On-prem private scanner. 
<br>

<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166118536-5b297263-1a3f-437e-a1ef-366d781d167f.png"/>

### **7.2. Global Scanners**
APIsec also allows you to select a ready to use Global Scanner. These Scanners are deployed on the Virtual Machines of APIsec Inc. They are provided for the ease of users who do not want to set up a private scanner explicitly.  

You can select any desired Global Scanner while initiating a Scan.

A total of 9 Global Scanners are currently available. 


- Rate limit Scanners run slowly with intervals. 
- Super Scanners are fast. 
- The other scanners are deployed on the Cloud in different regions. 
  
<img alt="APIsec Screenshort" src="https://user-images.githubusercontent.com/75529175/166118529-c0439dbf-586c-4099-abed-644e5bb8cf9c.png"/>