<h1 align="center"> <b> APIsec Official Documentation </b> </h1>
## **1. Register an API**
To get started with APIsec security coverage and scanning for your APIs, you need to first register your API.

On the **Home Page**, `click` **Register API** 

<img alt="[RegisterAPI(1).png]" src="https://user-images.githubusercontent.com/75529175/171797629-e14d508b-6e8f-407e-9c96-eee030ed0f51.png" />

## **1.1. Basic Section**
The ***Basic Section*** requires the follwing information:

1. **API name**: Provide any name that you would like to link with your project. 
2. **API Document URL or File**: Provide a URL or upload a file to allow APIsec to record your API in the database for automated security coverage. 
	- The supported formats for a URL link are OpenAPI Specification (OAS), Swagger, Postman & RAML.  e.g. https://example.com/v2/api-docs 
	- The supported formats for a API document file are same as for URL link. 

<img alt="Register Api Basic Section" src="https://user-images.githubusercontent.com/75529175/166118460-fc02dcab-c25a-4161-92af-11aa850c21c2.png" />

## **1.2. Advance Section**
The ***Advanced Section*** requires the following information:

1. **Credentials**:  Provide credentials for the API i.e. username, role, email & password. These credentials are for specific user accounts you want to scan via APIsec. 
	- The format is UserA||Basic||[user1@example.com](mailto:user1@example.com)||admin123$
<br>
2. **Tokens**: An API token is similar to a password and allows a user to authenticate to a software API to perform actions as you. The API service generates a unqiue token for the requesting application or user. This unique token is used everytime for authentication when the user requests to use the service.
	- The procedure to generate token can be found by clicking show more on the comment box of **Advanced Section**. 
<br>
3. **Scanner Selection**: You can `select` a scanner from the list of APIsec private scanners available in the drop-down menu. I selected Super_1 for this demo. 

<img alt="Register Api Advanced Section" src="https://user-images.githubusercontent.com/75529175/166118455-292791e3-cce8-4795-b686-21b23f87e3c6.png" />

Once you complete all the requirements, `click` **Register** and proceed. 

A message prompt as shown in the screenshort below will be dispalyed on the **Home** page. Also, you can see the project named "Demo" has been added in **My Projects**

<img alt="Register Api process complete" src="https://user-images.githubusercontent.com/75529175/171797636-625e54d8-6dc2-4bc3-9071-cbe4285eb80d.png
"/>

