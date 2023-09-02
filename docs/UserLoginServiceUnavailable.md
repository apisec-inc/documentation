<h1 align="center" style="color: #F5F5F5;"> <b> Service Unavailable Error When Login To APIsec</b> </h1>

<p style="text-align: left;color: 	#A9A9A9;font-size:16px;"> By <b><a href="https://github.com/fersy02">Feroz Syed</a></b> on <b>September 05,2022</b> </p>

### **Problem Statement:**

Suppose you encounter a "Service Unavailable" error when trying to login to the APIsec Console.


### **Solution:**

It is most likely that one or more duplicate accounts with the same email address you are trying to log in already exist in APIsec. APIsec has added a restriction to prevent users from creating an account with an existing email Id. However, the duplicate accounts created before adding a regulation should be disabled manually by an administrator.


### **Follow These Steps:**

1.	Log into the APIsec console.
2.	Click on your name in the upper right corner to expand the menu and select Users.
3.	Search and edit the user account with the duplicate email by clicking More.
4.	Set the status from Active to Inactive and click Save.


### **Summary**
Duplicate user Accounts are restricted as it leads to user login errors. Existing duplicate accounts shall be disabled.


### **Note**
Ensure the primary account you would like to continue using is Active and if required, request the administrator to reset the password.
<div class="container" id="iframeContainer" style="position: fixed; bottom: 20px; right: 20px; overflow: hidden;">
    <iframe id="iFrame1" src="../Chatbot/index.html" style="border: none; width: 100%; height: 100%;"></iframe>
</div>

<script>
    // Function to set dimensions of iframe container based on logo dimensions
    function setIframeContainerDimensions(width, height) {
        const iframeContainer = document.getElementById("iframeContainer");
        iframeContainer.style.width = `${width + 100}px`;
        iframeContainer.style.height = `${height +50}px`;
    }
</script>