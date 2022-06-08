<h1 align="center"> <b> APIsec Official Documentation </b> </h1>

## **Generating OpenAPI Specification (OAS) documentation for your REST APIs**

!!! example "Generating OpenAPI Specification (OAS)"
    
    - The OpenAPI Specification (OAS) defines a standard, language-agnostic interface to RESTful APIs which allows both humans and computers to discover and understand the capabilities of the service without access to source code, documentation, or through network traffic inspection.
    - **APISec** supports 1.0, 2.0, 3.x versions of the OpenAPI specification (OAS) as well as Postman and RAML formats.
    - The following is a list of some libraries and resources which can be helpful in generating an OpenAPI Specification (OAS) document for your existing REST API application grouped by implementation technology.
    
   - **ASP.NET Core** : 
   - The two main OpenAPI implementations for .NET are Swashbuckle and NSwag. They are explained nicely in the Microsoft ASP.NET documentation - [ASP.NET Core web API documentation with Swagger / OpenAPI | Microsoft Docs](https://docs.microsoft.com/en-us/aspnet/core/tutorials/web-api-help-pages-using-swagger?view=aspnetcore-6.0)
   - The OpenAPI.NET SDK contains a useful object model for OpenAPI documents in .NET along with common serializers to extract raw OpenAPI JSON and YAML documents from the model - [GitHub - microsoft/OpenAPI.NET](https://github.com/microsoft/OpenAPI.NET)
