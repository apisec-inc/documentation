## **1. API Registration** 
**Register APIs for security test and compliance.** <br>
To get started with APIsec security coverage and scanning for your APIs, you need to first register your API.<br>
On the **Homepage**, `click` **Register API** <br>

![image](https://user-images.githubusercontent.com/87167426/188885759-5ed7c93a-d380-4f31-b323-610777a47784.png)

  It requires API Name, API Documentation URL/File.<br>
  
  ![image](https://user-images.githubusercontent.com/87167426/188886850-50f4c9ca-9af8-4a5d-9f15-ded1d6d1620b.png)


## **2. Scanners Deployment**
Scans playbooks and tests are executed to uncover vulnerabilities.<br>

Go to the Scanner module by `click` 'Scanners' on the home page.<br>

![image](https://user-images.githubusercontent.com/87167426/188887698-773d600c-5620-403f-be7a-7daf11aa53e5.png)


   You can deploy Private Scanners across AWS, Azure, GCP, Kubernetes, and on-premises.<br> 
   The APIsec scanner is a light-weight Docker container.<br> 
   You can deploy the on-prem Scanner as a docker container on any Linux host or deploy across the above mentioned cloud regions.<br>
   1. `click` on New Scanner on the Scanner module page.<br>
   
   ![image](https://user-images.githubusercontent.com/87167426/188888217-2ec96aeb-9ef6-47ab-8f5d-f1b2b6f7c6f9.png)


  2.Enter Scanner name and register the cloud service.<br>
  
  ![image](https://user-images.githubusercontent.com/87167426/188888441-998679f7-091f-4746-a0f3-e2c3194f5b17.png)

  3.Click `Submit` to deploy the private scanner. <br>

  To deploy an on-prem private scanner, you need to set up the Docker/Kubernetes on the host machine.<br>
   1.`click` on 'Docker/Kubernetes installer' and select cluster size.<br>
   
   ![image](https://user-images.githubusercontent.com/87167426/188889247-ff4a3159-3208-4861-8d0f-7afc5bb2520a.png)
  
   2.`click` 'Submit' and 'OK' to proceed.<br>
 

## **3. Environment and Authentications Configuration** 
Based on security categories, environments and authentications are configured to access APIs.<br>
  To add, edit, and delete the current API testing environment and the API user-login credentials.<br>
  When you register the API, the API environment is created. The default name is "Master" and the BaseURL is the API URL registered.<br> 
  You can add or clone an environment by clicking on the ellipsis besides the scroll bar.<br>
  The 'Authentications' list contains all the 'Credentials/Tokens' previously provided while registering the API.<br> 
  You can also add and edit them on this page.<br>
  
It is mandatory to have a "Default" an "Invalid_Auth" authentications in a every environment for security testing.<br>
   1.To add Environment Click on 'Add Env', Insert Name and BaseURL. <br>
   2.To Add an Auth Click on 'Add Auth' Insert and select 'Authentication Type'.<br>
   3.To Test added Authentication, select Auth and click on 'Test Authentications'.<br>
   
   ![image](https://user-images.githubusercontent.com/87167426/188890629-fc3557bd-0428-40de-9a29-5daa3032e8f0.png)


## **4. Triggering Scans** 
Executes generated playbooks of OWASP categories.<br>
  The important feature on the 'Project' page is the 'Scan'. <br>
  You can initiate a Scan on the current Project by clicking on scan tile on the right of the page.<br>
  Select Profile + Select Scanner  + Select Categories, You can initiate a Scan by clicking on 'Submit'.<br>
  After the Scan is completed, it displays all the results.<br>
  
  ![image](https://user-images.githubusercontent.com/87167426/188890887-b649f7f7-6303-4df6-af69-35a00deb65d2.png)


## **5.  Detected Vulnerabilities View** 
Analyses the vulnerable test results.<br>
  At the bottom of the 'Project' page, the list of Open Vulnerabilities appears after the Scan.<br>
  You can view the details of each vulnerability by clicking on it.<br>
  
  ![image](https://user-images.githubusercontent.com/87167426/188941095-18060f9f-9c28-490a-bf46-f58b0e043c23.png)


## **6. False Positives Review (FP)** 
   False positives are identified and marked by AI Bot.<br> 
    
   ![image](https://user-images.githubusercontent.com/87167426/188891615-a935f33a-f41c-48f2-a765-681e4771d576.png)

   
   

