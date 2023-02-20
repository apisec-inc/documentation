
# APIsec Security Categories 

[Using Security Categories in APIsec](SecurityCategoriesUse.md)

## What is a Security Category?

A Security Category is a set of security tests that will be used to intelligently create tests applied to endpoints. Each security category is a test generator to find security issues.


## What is a Security Category Tier?

A Security Category is a set of security tests that will be used to intelligently create tests applied to endpoints. Each security category is a test generator to find security issues.


## Security Category Tiers


#### Tier 0



* **The beginning. ** All you have is a URL. There is no specification or a minimal specification for the API. Nothing else is configured.
* **What is tested:** Server level configurations can be tested at this tier.  
* **Examples:** SSL certificates, Headers


#### Tier 1



* **This tier has a good specification (_file/url)_** to work with. The endpoints and parameters are defined that allow more complex tests to intelligently target the API.
* **What is tested:** Endpoint testing without authentication. Parameters without authentication can be tested and any endpoints that should require authentication but do not, can also be discovered.
* **Examples**: Malicious payloads allowed in parameters without authentication.

	


#### Tier 2



* **Tier 2 requires authentication to be configured** along with working users for that authentication.
* **What is tested:** All endpoints are tested with the users configured to see what security issues can be found behind authenticated access.
* **Examples:** Insecure authentication practices


#### Tier 3



* **This tier requires configuring more complex scenarios** pre-defined in APISec. It may include things like defining roles or acceptable payloads.
* **What is Tested:** Tests with multiple steps to look for access and logic issues that can’t be determined with a single api endpoint call or basic configuration.
* **Examples:** RBAC
