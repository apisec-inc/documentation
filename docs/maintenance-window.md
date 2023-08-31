# Maintenance Window

APIsec is committed to a continuous delivery cycle and as such will have a nightly maintenance window.
The following tasks are executed during the maintenance windows:

- Application and scanner deployments.
- UX, bug fixes, enhancements, and new feature deployments,
- Configuration changes related to security and usability are applied.

Service status during the maintenance windows:

- All updates are triggered automatically and/or done by the APIsec staff.
- All updates are applied as rolling updates resulting in minimal downtime, if any. 
- All changes pre and post-deployments are automatically tested by our continuous test automation suite.  If we determine any deficiences, an automatic rollback is triggered.
- If you experience service issues during the maintenance window, please wait a few minutes and try again.

## Maintenance Window Times

APIsec currently is using the following maintenance times:

```
- 2:30 AM PST to 3:00 AM PST (half hour) Monday - Saturday
- 2:30 AM PST to 3:30 AM PST (one hour) Sunday
```
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