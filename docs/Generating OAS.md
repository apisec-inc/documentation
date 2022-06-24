<h1 align="center" style="color: #F5F5F5;"> <b> Generating OpenAPI Specification (OAS) for your REST APIs </b> </h1>

<p style="text-align: left;color: 	#A9A9A9;font-size:40px;"> By <b><a href="https://github.com/Abdullah-Akbar">Abdullah Akbar</a></b> on <b>April 5,2022</b> </p> 

 The OpenAPI Specification (OAS) defines a standard, language-agnostic interface to RESTful APIs which allows both humans and computers to discover and understand the capabilities of the service without access to source code, documentation, or through network traffic inspection.[[1]](https://www.openapis.org/)

**APISec** supports 1.0, 2.0, 3.x versions of the OpenAPI specification (OAS) as well as Postman and RAML formats.

The following is a list of some libraries and resources which can be helpful in generating an OpenAPI Specification (OAS) document for your existing REST API application grouped by implementation technology.
    
### **ASP.NET Core**  
   - The two main OpenAPI implementations for .NET are Swashbuckle and NSwag. They are explained nicely in the Microsoft ASP.NET documentation - [ASP.NET Core web API documentation with Swagger / OpenAPI | Microsoft Docs](https://docs.microsoft.com/en-us/aspnet/core/tutorials/web-api-help-pages-using-swagger?view=aspnetcore-6.0)
   - The OpenAPI.NET SDK contains a useful object model for OpenAPI documents in .NET along with common serializers to extract raw OpenAPI JSON and YAML documents from the model - [GitHub - microsoft/OpenAPI.NET](https://github.com/microsoft/OpenAPI.NET)

### **Spring**  
   - Springfox supports automated JSON API documentation for API's built with Spring - [GitHub - springfox/springfox](https://github.com/springfox/springfox)
   - The springdoc-openapi Java library helps automating the generation of API documentation using Spring Boot projects - [GitHub - springdoc/springdoc-openapi](https://github.com/springdoc/springdoc-openapi)
   
### **Java**
   - For JAX-RS based projects(Jersey/RESTEasy/Mule),**Swagger Core** provides examples and server integrations for generating the Swagger API Specification, which enables easy access to your REST API - [GitHub - swagger-api/swagger-core](https://github.com/swagger-api/swagger-core)
   - The Swagger Maven Plugin is a JAX-RS & SpringMVC supported maven build plugin, helps you generate Swagger JSON and API document in build phase -  [GitHub - kongchen/swagger-maven-plugin](https://github.com/kongchen/swagger-maven-plugin)

### **Python**
 - Flask-RESTX is an extension for [Flask](https://flask.palletsprojects.com/en/2.1.x/) which provides a coherent collection of decorators and tools to describe your API and expose its documentation properly using Swagger - [GitHub - python-restx/flask-restx](https://github.com/python-restx/flask-restx)
 - Falcon-apispec is an apispec plugin that generates OpenAPI specification (aka Swagger) for Falcon web applications -  [Github - alysivji/falcon-apispec](https://github.com/alysivji/falcon-apispec)
 - drf-yasg - Yet another Swagger generator helps in automated generation of real Swagger/OpenAPI 2.0 schemas from Django REST Framework code. - [GitHub - axnsan12/drf-yasg](https://github.com/axnsan12/drf-yasg)
 - drf-spectacular is a sane and flexible OpenAPI 3 schema generation for Django REST framework - [GitHub - tfranzel/drf-spectacular](https://github.com/tfranzel/drf-spectacular) 

### **Node.js**
 - swagger-autogen performs the automatic construction of the Swagger documentation - [swagger-autogen - npm](https://www.npmjs.com/package/swagger-autogen) 
 - NestJS provides a dedicated module which allows generating OpenAPI (Swagger) - [Github - nestjs/swagger](https://github.com/nestjs/swagger)
 - swagger-express is a simple and clean solution to integrate swagger with Express - [swagger-express - npm](https://www.npmjs.com/package/swagger-express)
 - express-oas-generator automatically generates OpenAPI (Swagger) specification for existing ExpressJS 4.x REST API applications - [express-oas-generator - npm](https://www.npmjs.com/package/express-oas-generator)
 - Hapi-swagger is a OpenAPI (aka Swagger) plug-in for Hapi When installed it will self document the API interface in a project - [hapi-swagger - npm](https://www.npmjs.com/package/hapi-swagger)

### **PHP**
 - swagger-php is a php swagger annotation and parsing library which generates interactive OpenAPI documentation for your RESTful API using doctrine annotations. -  [GitHub - zircote/swagger-php](https://github.com/zircote/swagger-php)

### **Ruby**
 - rspec-openapi generates OpenAPI schema from RSpec request specs - [Github - rspec-openapi](https://github.com/k0kubun/rspec-openapi)  
 - rswag seamlessly adds a Swagger to Rails-based APIs - [Github - rswag](https://github.com/rswag/rswag) 
 - zero-rails_openapi is a concise DSL for generating OpenAPI Specification 3 (OAS3) JSON documentation for Ruby application - [GitHub - zhandao/zero-rails_openapi](https://github.com/zhandao/zero-rails_openapi)
 - The grape-swagger gem provides an auto generated documentation for your Grape API - [GitHub - ruby-grape/grape-swagger](https://github.com/ruby-grape/grape-swagger)
 - Swagger::Blocks is a DSL for pure Ruby code blocks that can be turned into Swagger JSON - [.GitHub - fotinakis/swagger-blocks](https://github.com/fotinakis/swagger-blocks)
 - openapi-rails is a CRUD interface for Rails models with OpenAPI (Swagger) specification support and Swagger UI integration - [GitHub - slate-studio/openapi-rails](https://github.com/slate-studio/openapi-rails)

### **Go**
 - swag automatically generates RESTful API documentation with Swagger 2.0 - [GitHub - swaggo/swag](https://github.com/swaggo/swag) 
 - go-swagger (golang implementation of Swagger 2.0) is a complete suite of fully-featured, high-performance, API components to work with a Swagger API: server, client and data model - [Github - Swagger 2.0 implementation for go](https://github.com/go-swagger/go-swagger)

**APISec** seamlessly integrates with most of the popular API gateways and automatically pulls the API specs in OAS format for easy API registration.  For the purpose of document completion and developer curiosity, a select few are mentioned below. 

### **AWS API Gateway**
 - get-export  is a CLI  command to export OAS from AWS API Gateway - [get-export — AWS CLI 2.4.27 Command Reference](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/apigateway/get-export.html) 

### **Google Cloud Endpoints**
 - Generating the OpenAPI document is described here -, [Adding API management | Cloud Endpoints Frameworks for App Engine](https://cloud.google.com/endpoints/docs/frameworks/java/adding-api-management) 

### **Azure API Management**
 - API developers can export API definitions in OAS format - [Export API definitions from API Management developer portal | Azure updates | Microsoft Azure](https://azure.microsoft.com/en-in/updates/export-api-definitions-from-api-management-developer-portal/)

### **Apigee Edge**
 - Apigee Edge Proxy to OpenAPI 2.0 conversion tool. - [GitHub - anil614sagar/apigee2openapi](https://github.com/anil614sagar/apigee2openapi) 

### **Postman**
 - Convert Postman Collections v2.1/v2.0 to OpenAPI v3.0 -  [postman-to-openapi - npm](https://www.npmjs.com/package/postman-to-openapi) 


Help us improve this article by sending your suggestions and comments to [documentation@apisec.ai](documentation@apisec.ai) Thanks!


### **References:**
 1. [OpenAPI Initiative](https://www.openapis.org/)



       




