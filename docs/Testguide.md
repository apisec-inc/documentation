## **1. Register an API**
To get started with APIsec security coverage and scanning for your APIs, you need to first register your API.
On the **Homepage**, `click` **Register API** 
## **1.1. Basic Section** : 
  It requires API Name, API Documentation URL/File.
## **1.2. Advanced Section** :
  It requires Credentials/Tokens and Scanner Selection.

Once you completed all of the requirements, `click` **Register** and proceed. 

## **2. Deploying Scanners**
APIsec allows you to deploy a Private or Global Scanner. Go to the Scanner module by `click` 'Scanners' on the home page.
### **2.1. Private Scanner** :
   You can deploy Private Scanners across AWS, Azure, GCP, Kubernetes, and On-premises. The APIsec scanner is a light-weight Docker container. You can deploy the On-prem Scanner as a docker container on any Linux host or deploy across the above mentioned cloud regions.
   1.Click on New Scanner on the Scanner module page
   2.Enter Scanner name and register the cloud service.
   3.Click Submit to deploy the private scanner 
####  **2.2. Deploying a New Private Scanner On-premisses** :
  To deploy an On-prem private scanner, you need to set up the Docker/Kubernetes on the host machine.
   1.Click on 'Docker/Kubernetes installer' and select cluster size.
   2.Click 'Submit' and 'OK' to proceed.
### **2.3. Global Scanners** :
  APIsec also allows you to select a ready to use Global Scanner. These scanners are deployed on the Virtual Machines of APIsec Inc. They are provided for the ease of users who do not want to set up a separate private scanner.  

## **3. Setup Environment or Authentications** :
  To add, edit, and delete the current API testing environment and the API user-login credentials.
  When you register the API, the API environment is created. The default name is "Master" and the base URL is   the API URL registered. You can add or clone an environment by clicking on the ellipsis besides the           scroll bar.
  The 'Authentications' list contains all the 'Credentials/Tokens' previously provided while registering the API. You can also add and edit them on this page.
  
It is mandatory to have a "Default" an "Invalid_Auth" authentications in a every environment for security testing.
    1.To add Environment Click on 'Add Env', Insert Name and BaseURL. 
    2.To Add an Auth Click on 'Add Auth' Insert and select 'Authentication Type'.
    3.To Test added Authentication, select Auth and click on 'Test Authentications'.

## **4. Initiate a Scan** :
  The important feature on the 'Project' page is the 'Scan'. You can initiate a Scan on the current Project by clicking on scan tile on the right of the page.
   Select Profile + Select Scanner  + Select Categories, You can initiate a Scan by clicking on 'Submit'.
  After the Scan is completed, it displays all the results.   

## **5. View Open Vulnerabilities (FP)** :
  At the bottom of the 'Project' page, the list of Open Vulnerabilities appears after the Scan. You can view the details of each vulnerability by clicking on it. and it includes certain actions like Reverify,Not a Vulnerability,Mark endpoint unsecured,Delete etc.
