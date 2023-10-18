# **How to Configure OKTA SSO for APIsec**

This setup might fail without parameter values that are customized for your organization. Please use the Okta Administrator Dashboard to add an application and view the values that are specific for your organization. 

If you have not yet added the APISec app to your Okta organization please follow the below instructions.
  - Sign in to your Okta organization with your administrator account.
  - In the Admin Console, go to Applications > Applications.
  - Click Browse App Catalog.
  - Enter APIsec in the Search... text box
  - On the catalog page for the app integration, click Add.
  - Enter a label for your copy of this app integration. Click Done to add this to your org.
  - On the Assignments tab, click Assign to assign the app integration to any user or group in your org. Click Done when the assignments are complete.  

## Supported Features :

The APISec Okta SSO  integration currently supports the following features:  
-  IdP-initiated SSO  
-  JIT (Just In Time) Provisioning

For more information on the listed features, visit the [Okta Glossary](https://help.okta.com/en-us/content/topics/reference/glossary.htm)

## Configuration Steps :
  
  - Sign in to Apisec with the organization Admin account at [https://cloud.apisec.ai](https://cloud.apisec.ai)

    ![OKTAImage1](https://github.com/apisec-inc/documentation/assets/87167426/122a817c-fb90-4567-adfe-c29801ded80d)

  - Click on Configurations Tile

    ![OKTAImage2](https://github.com/apisec-inc/documentation/assets/87167426/cc7b935a-9edc-4919-b0a1-b658d1433475)

  - Click on SSO Tile Under Integrations and Select SSO Type as OKTA from the Dropdown.
  
    ![OKTAImage13](https://github.com/apisec-inc/documentation/assets/87167426/2bd586db-2c3c-42ba-a69c-0c1666353426)

  - Enter Issuer, Client-ID and Sign-In URL.
  - **Issuer** : Copy and paste the following:
        - In Okta , Issuer URL is the https://your-domain.okta.com
  - **Client-ID** : Copy and paste the following:
        - In Okta, select the Sign On tab for the APIsec and copy the Client ID.
    
    ![OKTAImage4](https://github.com/apisec-inc/documentation/assets/87167426/e03c1a5e-15a2-492e-80ee-2aa0a4ae560b)

  - **App Embed Link** : Copy and paste the following:
        - In Okta, select the General tab for the APISec and copy the Embed Link.

    ![OKTAImage5](https://github.com/apisec-inc/documentation/assets/87167426/49447dbe-5e73-4dc0-944f-609df37b1fec)

  - Click Save.

## Notes : 
 Make sure the URL does not have any extra slash at the end in the issuer field under the SSO Settings tab in APIsec. Using the wrong value will prevent you from authenticating via OIDC to APIsec.
  Eg: https://your-doman.okta.com

 
