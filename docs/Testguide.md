## **1. Register an API** :
To get started with APIsec security coverage and scanning for your APIs, you need to first register your API.
On the **Homepage**, `click` **Register API** 

![image](https://user-images.githubusercontent.com/87167426/188885759-5ed7c93a-d380-4f31-b323-610777a47784.png)


## **1.1. Basic Section** : 
  It requires API Name, API Documentation URL/File.![Basic section](https://user-images.githubusercontent.com/87167471/188849698-5ede3180-941f-4af6-8882-7877506ccb70.png)


## **1.2. Advanced Section** :
  It requires Credentials/Tokens and Scanner Selection.
Once you completed all of the requirements, `click` **Register** and proceed.![ADV section](https://user-images.githubusercontent.com/87167471/188850215-0483a00e-c142-4683-9bbd-1d6eee7e1e13.png)
 


## **2. Deploying Scanners**
APIsec allows you to deploy a Private or Global Scanner. Go to the Scanner module by `click` 'Scanners' on the home page.![scanners](https://user-images.githubusercontent.com/87167471/188850757-9ce11509-019b-4fc8-99d7-51e380240d16.png)


## **2.1. Private Scanner** :
   You can deploy Private Scanners across AWS, Azure, GCP, Kubernetes, and On-premises. The APIsec scanner is a light-weight Docker container. You can      deploy the On-prem Scanner as a docker container on any Linux host or deploy across the above mentioned cloud regions.<br>
  1.Click on New Scanner on the Scanner module page.<br>![Scanners1](https://user-images.githubusercontent.com/87167471/188851748-71c27718-4da2-4c39-bf43-06a1856695a5.png)

  2.Enter Scanner name and register the cloud service.<br>![Scanners2](https://user-images.githubusercontent.com/87167471/188854919-cdf49a54-7228-42b1-8621-65c938dd10ca.png)

  3.Click Submit to deploy the private scanner. <br>

## **2.2. Deploying a New Private Scanner On-premises** :
  To deploy an On-prem private scanner, you need to set up the Docker/Kubernetes on the host machine.<br>
   1.Click on 'Docker/Kubernetes installer' and select cluster size.<br>
   2.Click 'Submit' and 'OK' to proceed.<br>![Scanners3](https://user-images.githubusercontent.com/87167471/188855392-c5624fbb-2ba8-4515-a05a-8b0d3be7c096.png)


## **2.3. Global Scanners** :
  APIsec also allows you to select a ready to use Global Scanner. These scanners are deployed on the Virtual Machines of APIsec Inc. They are provided for the ease of users who do not want to set up a separate private scanner. ![scanners4](https://user-images.githubusercontent.com/87167471/188855688-fc5851a9-6b85-4e58-b7af-e49dbeabd50f.png)
 


## **3. Setup Environment or Authentications** :
  To add, edit, and delete the current API testing environment and the API user-login credentials.
  When you register the API, the API environment is created. The default name is "Master" and the base URL is   the API URL registered. You can add or clone an environment by clicking on the ellipsis besides the scroll bar.
  The 'Authentications' list contains all the 'Credentials/Tokens' previously provided while registering the API. You can also add and edit them on this page.
  
It is mandatory to have a "Default" an "Invalid_Auth" authentications in a every environment for security testing.<br>
    1.To add Environment Click on 'Add Env', Insert Name and BaseURL. <br>![env1](https://user-images.githubusercontent.com/87167471/188856333-c8891cbb-75ef-427d-ad81-3389ce20c899.png)![evn2](https://user-images.githubusercontent.com/87167471/188857013-18d52ee0-2252-42ca-bd5a-88f1b54800ed.png)


    2.To Add an Auth Click on 'Add Auth' Insert and select 'Authentication Type'.<br>![auth1](https://user-images.githubusercontent.com/87167471/188860694-41f7a722-2c7f-439d-8b65-4d99fae76341.png)


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

 
   
   

