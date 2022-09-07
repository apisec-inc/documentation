## **1. Register an API** :
To get started with APIsec security coverage and scanning for your APIs, you need to first register your API.<br>
On the **Homepage**, `click` **Register API** <br>

![image](https://user-images.githubusercontent.com/87167426/188885759-5ed7c93a-d380-4f31-b323-610777a47784.png)


## **1.1. Basic Section** : 
  It requires API Name, API Documentation URL/File.<br>
  
  ![image](https://user-images.githubusercontent.com/87167426/188886850-50f4c9ca-9af8-4a5d-9f15-ded1d6d1620b.png)


## **1.2. Advanced Section** :<br>
  It requires Credentials/Tokens and Scanner Selection.<br>
Once you completed all of the requirements, `click` **Register** and proceed.<br>
 
 ![image](https://user-images.githubusercontent.com/87167426/188887335-52f2ecc5-7f7d-41a9-b87c-9327f32181ff.png)


## **2. Deploying Scanners**
APIsec allows you to deploy a Private or Global Scanner. <br>
Go to the Scanner module by `click` 'Scanners' on the home page.<br>

![image](https://user-images.githubusercontent.com/87167426/188887698-773d600c-5620-403f-be7a-7daf11aa53e5.png)


## **2.1. Private Scanner** :
   You can deploy Private Scanners across AWS, Azure, GCP, Kubernetes, and On-premises.<br> 
   The APIsec scanner is a light-weight Docker container.<br> 
   You can deploy the On-prem Scanner as a docker container on any Linux host or deploy across the above mentioned cloud regions.<br>
   1. `click` on New Scanner on the Scanner module page.<br>
   
   ![image](https://user-images.githubusercontent.com/87167426/188888217-2ec96aeb-9ef6-47ab-8f5d-f1b2b6f7c6f9.png)


  2.Enter Scanner name and register the cloud service.<br>
  
  ![image](https://user-images.githubusercontent.com/87167426/188888441-998679f7-091f-4746-a0f3-e2c3194f5b17.png)

  3.Click `Submit` to deploy the private scanner. <br>

## **2.2. Deploying a New Private Scanner On-premises** :
  To deploy an On-prem private scanner, you need to set up the Docker/Kubernetes on the host machine.<br>
   1.`click` on 'Docker/Kubernetes installer' and select cluster size.<br>
   
   ![image](https://user-images.githubusercontent.com/87167426/188889247-ff4a3159-3208-4861-8d0f-7afc5bb2520a.png)
  
   2.`click` 'Submit' and 'OK' to proceed.<br>
 

## **2.3. Global Scanners** :
  APIsec also allows you to select a ready to use Global Scanner.<br>
  These scanners are deployed on the Virtual Machines of APIsec Inc.<br>
  They are provided for the ease of users who do not want to set up a separate private scanner.<br> 
  
  ![image](https://user-images.githubusercontent.com/87167426/188889582-4174aadf-1183-476c-b04e-ca7cb8a500d5.png)


## **3. Setup Environment or Authentications** :
  To add, edit, and delete the current API testing environment and the API user-login credentials.<br>
  When you register the API, the API environment is created. The default name is "Master" and the BaseURL is the API URL registered.<br> 
  You can add or clone an environment by clicking on the ellipsis besides the scroll bar.<br>
  The 'Authentications' list contains all the 'Credentials/Tokens' previously provided while registering the API.<br> 
  You can also add and edit them on this page.<br>
  
It is mandatory to have a "Default" an "Invalid_Auth" authentications in a every environment for security testing.<br>
   1.To add Environment Click on 'Add Env', Insert Name and BaseURL. <br>
   
   2.To Add an Auth Click on 'Add Auth' Insert and select 'Authentication Type'.<br>
    
   3.To Test added Authentication, select Auth and click on 'Test Authentications'.<br>



## **4. Initiate a Scan** :
  The important feature on the 'Project' page is the 'Scan'. You can initiate a Scan on the current Project by clicking on scan tile on the right of the    page.<br>
  Select Profile + Select Scanner  + Select Categories, You can initiate a Scan by clicking on 'Submit'.<br>
  After the Scan is completed, it displays all the results.   <br>


## **5. View Open Vulnerabilities** :
  At the bottom of the 'Project' page, the list of Open Vulnerabilities appears after the Scan. You can view the details of each vulnerability by clicking on it. 
  
## **5.1. Review False Positives (FP)** : <br>
   False positives are identified and marked by AI Bot.<br> 
    AI Bot can learn and analyse vast amounts of data in the blink of an eye.<br>

 
   
   

