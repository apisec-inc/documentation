
**Getting OAS for an API from IBM DataPower**

**Overview**

The **IBM API Connect** supports **two** gateway types: DataPower Gateway (v5 compatible) **and** DataPower API Gateway.
- **DataPower API Gateway** is a new gateway with the same security focus as DataPower Gateway (v5 compatible), with some limitations. - This is the one that connects with OAS.
- **DataPower Gateway (v5 compatible)** has been available with IBM API Connect for a number of years.  - No support for OpenAPI

**DataPower API Gateway**

&nbsp;&nbsp;**OpenAPI 3.0 support in IBM API Connect**

&nbsp;&nbsp;&nbsp;&nbsp;OpenAPI 3.0 API support is provided by the DataPower API Gateway only. It has some limitations.

&nbsp;&nbsp;&nbsp;&nbsp;There is no OpenAPI 3.0 API support with the DataPower® Gateway (v5 compatible)

&nbsp;&nbsp;&nbsp;&nbsp;OpenAPI 3.0 APIs can be validated in the local file system by using the apic validate command provided by the developer toolkit CLI.  

&nbsp;&nbsp;**Limitations**

&nbsp;&nbsp;&nbsp;&nbsp;User interface limitations

&nbsp;&nbsp;&nbsp;&nbsp;Limitations for APIs that are enforced by the DataPower API Gateway

**How to get OAS?**

OAS definitions are created in the IBM API Connect, which is done either by using the API Designer UI application, or by using the browser based API Manager UI.

For API Manager, the specifications for the APIs and Products are stored on the management server.
For API Designer, the specifications for the APIs and Products are stored in the directory that you specified when you logged in. 

**Additionally SwaggerHub can be used**

SwaggerHub connects with IBM API Connect - to design and collaborate on the API definition, then synchronize it with IBM Cloud to create an API Gateway.
SwaggerHub requires an API key 
From IBM Cloud > create an API key
Copy/download the key and added in SwaggerHub
In SwaggerHub, synchronize the API definition with IBM API connect
Once the APIs are published in IBM Cloud, the APIs will be available for external use
