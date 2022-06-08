<h1 align="center"> <b> APIsec Official Documentation </b> </h1>

## **Generating OpenAPI Specification (OAS) documentation for your REST APIs**

 The OpenAPI Specification (OAS) defines a standard, language-agnostic interface to RESTful APIs which allows both humans and computers to discover and understand the capabilities of the service without access to source code, documentation, or through network traffic inspection.

**APISec** supports 1.0, 2.0, 3.x versions of the OpenAPI specification (OAS) as well as Postman and RAML formats.

The following is a list of some libraries and resources which can be helpful in generating an OpenAPI Specification (OAS) document for your existing REST API application grouped by implementation technology.
    
### **ASP.NET Core**  
   - The two main OpenAPI implementations for .NET are Swashbuckle and NSwag. They are explained nicely in the Microsoft ASP.NET documentation - [ASP.NET Core web API documentation with Swagger / OpenAPI | Microsoft Docs](https://docs.microsoft.com/en-us/aspnet/core/tutorials/web-api-help-pages-using-swagger?view=aspnetcore-6.0)
   - The OpenAPI.NET SDK contains a useful object model for OpenAPI documents in .NET along with common serializers to extract raw OpenAPI JSON and YAML documents from the model - [GitHub - microsoft/OpenAPI.NET](https://github.com/microsoft/OpenAPI.NET)

   - **Spring**  
   - Springfox supports automated JSON API documentation for API's built with Spring - [GitHub - springfox/springfox](https://github.com/springfox/springfox)
   - The springdoc-openapi Java library helps automating the generation of API documentation using Spring Boot projects - [GitHub - springdoc/springdoc-openapi](https://github.com/springdoc/springdoc-openapi)
   
   - **Java**
   - For JAX-RS based projects(Jersey/RESTEasy/Mule),**Swagger Core** provides examples and server integrations for generating the Swagger API Specification, which enables easy access to your REST API - [GitHub - swagger-api/swagger-core](https://github.com/swagger-api/swagger-core)
   - The Swagger Maven Plugin is a JAX-RS & SpringMVC supported maven build plugin, helps you generate Swagger JSON and API document in build phase -  [GitHub - kongchen/swagger-maven-plugin](https://github.com/kongchen/swagger-maven-plugin)

 - **Python**
 - Flask-RESTX is an extension for [Flask](https://flask.palletsprojects.com/en/2.1.x/) which provides a coherent collection of decorators and tools to describe your API and expose its documentation properly using Swagger - [GitHub - python-restx/flask-restx](https://github.com/python-restx/flask-restx)
 - Falcon-apispec is an apispec plugin that generates OpenAPI specification (aka Swagger) for Falcon web applications -  [Github - alysivji/falcon-apispec](https://github.com/alysivji/falcon-apispec)
 - drf-yasg - Yet another Swagger generator helps in automated generation of real Swagger/OpenAPI 2.0 schemas from Django REST Framework code. - [GitHub - axnsan12/drf-yasg](https://github.com/axnsan12/drf-yasg)
 - drf-spectacular is a sane and flexible OpenAPI 3 schema generation for Django REST framework - [GitHub - tfranzel/drf-spectacular](https://github.com/tfranzel/drf-spectacular) 
