<h2>Spec Analysis</h2>

Spec analysis is run when a API spec is uploaded or updated. It's looking for recommendations from a security perspective to either configure something or based on the details defined.


<h3>Recommendations to configure</h3>
  Something left undefined in an API spec does not indicate a vulnerability in itself. Recommendations to improve the spec are because API testing, both functional and security are based on the spec. What is missing from the spec may not be getting tested sufficiently.
  The spec is also the basis of security appliances such as Web Aplication (Layer 7) Firewalls. They filter traffic based on definitions of what should be allowed. The less that is defined the les that is understood and filtered.
  
  Example: No auth schemes are configured. Without any auth schemes configured it's diffocult for testing tools to understand the context of what requires auth and does not and at what level. This context is significant for generating relevent recommendations.
  
<h3>Secuity issues based on API Spec</h3>
  The spec file is analyzed for anything that can be determined by looking at the spec by itself, before scanning. This is from the perspective that the spec is correctly defined. Any recommendations on a spec that not defined correctly should prompt correcting the spec.
  
  Example: Sensitive data sent over GET method. Parameters sent in the URL aren't secure from interception. 
<iframe src="../Chatbot/index.html" width="320" height="400" frameborder="0" style="position: fixed; bottom: 20px; right: 20px;"></iframe>