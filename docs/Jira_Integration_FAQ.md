# Jira Integration FAQ

The integration between APIsec and Jira is incredibly helpful in delivering vulnerabilities discovered in your API's to your development team in a familiar and easy to consume format.

In the prior documentation, we discussed how to enable the Jira integration, but you probably have a few questions. 

## When does a ticket get created in Jira?

APIsec scans your API's for vulnerabilites. When the scan is finished, any vulnerabilites are examined by one of APIsec's AI bots to look for false positives. If the vulnerability is determined to be valid, then a JIRA ticket is opened based on your integration settings.

## What happens if the ticket is closed in Jira?

The recomended process is to NOT close the ticket in JIRA itself. Once the developer has addressed the vulnerability, the best course of action is to trigger another scan in APIsec.  If the vulnerability is fixed, the ticket will be transition by the results of the scan.

## Will a subsequent scan reopen a ticket?

If the issue is resolved on the API, then no ticket will be created again.


## What causes issues to show up on subsequent scans, but not the initial scan?

APIsec is an evolving platform. New categories are created and playbooks are updated. Either of these cases could result in subsequent scans discovering new vulnerabilities that were not present in the initial/prior scan.

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