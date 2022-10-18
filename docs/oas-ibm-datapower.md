
# **Getting OAS for an API from IBM DataPower**

### **Overview**

The **IBM API Connect** supports **two** gateway types: DataPower Gateway (v5 compatible) **and** DataPower API Gateway.

- **DataPower API Gateway** is a new gateway with the same security focus as DataPower Gateway (v5 compatible), with some limitations. - This is the one that connects with OAS.
- **DataPower Gateway (v5 compatible)** has been available with IBM API Connect for a number of years.  - No support for OpenAPI

### **DataPower API Gateway**

**OpenAPI 3.0 support in IBM API Connect**

OpenAPI 3.0 API support is provided by the DataPower API Gateway only but it has some limitations.  There is no OpenAPI 3.0 API support with the DataPower® Gateway (v5 compatible).  OpenAPI 3.0 APIs can be validated in the local file system by using the apic validate command provided by the developer toolkit CLI.  

**Limitations**

- User interface limitations
- Limitations for APIs that are enforced by the DataPower API Gateway

### **How to get OAS?**

OAS definitions are created in the IBM API Connect, which is done either by using the API Designer UI application, or by using the browser based API Manager UI.

For API Manager, the specifications for the APIs and Products are stored on the management server.
For API Designer, the specifications for the APIs and Products are stored in the directory that you specified when you logged in. 

### **Connect SwaggerHub with IBM API Connect**

SwaggerHub connects with IBM API Connect to design and collaborate on the API definition, and then synchronize it with IBM Cloud to create an API Gateway.

1. SwaggerHub requires an API key.
2. From IBM Cloud > create an API key.
3. Copy/download the key and added in SwaggerHub.
4. In SwaggerHub, synchronize the API definition with IBM API connect.
5. Once the APIs are published in IBM Cloud, the APIs will be available for external use.

### **References**

[API Connect Gateway Types](https://www.ibm.com/docs/en/api-connect/2018.x?topic=overview-api-connect-gateway-types)

[SwaggerHub with IBM API Connect](https://support.smartbear.com/swaggerhub/docs/integrations/ibm-api-connect.html)

