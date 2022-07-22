<h1 align="center"> <b> APIsec Technical Documentation </b> </h1>
## **1. Register an API**
`Reading time < 3 min`

To get started with APIsec security coverage and scanning for your APIs, you need to first register your API.

On the **Homepage**, `click` **Register API** 

<img alt="[RegisterAPI(1).png]" src="https://user-images.githubusercontent.com/75529175/171797629-e14d508b-6e8f-407e-9c96-eee030ed0f51.png" />

## **1.1. Basic Section**
The ***Basic Section*** requires the following information:

1. **API name**: Provide any name that you would like to link with your project. 
2. **API Document URL or File**: Provide a URL or upload a file to allow APIsec to record your API in the database for automated security coverage. 
	- The supported formats for a URL link are OpenAPI Specification (OAS), Swagger, Postman & RAML.  e.g. `https://example.com/v2/api-docs` 
	- The supported formats for an API document file are same as for URL link. 

<img alt="Register Api Basic Section" src="https://user-images.githubusercontent.com/75529175/166118460-fc02dcab-c25a-4161-92af-11aa850c21c2.png" />

## **1.2. Advanced Section**
The ***Advanced Section*** requires the following information:

1. **Credentials**:  Provide credentials for the API i.e. username, role, email & password. These credentials are for specific user accounts you want to scan via APIsec. We recommend including a user to represent each role within your product or organization. 
	- The format is <b>
	`UserA||Basic||[user1@example.com](mailto:user1@example.com)||admin123$`
<br>
2. **Tokens**:  An API token is similar to a password and allows a user to authenticate to a software API to perform actions. The API service generates a unique token for the requested application or user, which is used every time for authentication when the user requests to use the service.
	- Find the steps to generate the token by clicking `show more` on the comment box of the **Advanced Section**. 
<br>
3. **Scanner Selection**:  You can `select` a scanner from the list of APIsec private scanners available in the drop-down menu. I selected Super_1 for this demo. 

<img alt="Register Api Advanced Section" src="https://user-images.githubusercontent.com/75529175/166118455-292791e3-cce8-4795-b686-21b23f87e3c6.png" />

Once you completed all of the requirements, `click` **Register** and proceed. 

A message prompt will be displayed on the **Homepage** like in the screenshot below.  Your project name will be created with your settings similar to  "Demo" in the screenshot and added to **My Projects**

<img alt="Register Api process complete" src="https://user-images.githubusercontent.com/75529175/171797636-625e54d8-6dc2-4bc3-9071-cbe4285eb80d.png
"/>
