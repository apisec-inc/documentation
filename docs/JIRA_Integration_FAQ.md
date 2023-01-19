# JIRA Integration FAQ

The integration between APIsec and JIRA is incredibly helpful in delivering vulnerabilities discovered in your API's to your development team in a familiar and easy to consume format.

In the prior documentation, we discussed how to enable the JIRA integration, but you probably have a few questions. 

## When does a ticket get created in JIRA?

APIsec scans your API's for vulnerabilites. When the scan is finished, any vulnerabilites are examined by one of APIsec's AI bots to look for false positives. If the vulnerability is determined to be valid, then a JIRA ticket is opened based on your integration settings.

## What happens if the ticket is closed in JIRA?

The recomended process is to NOT close the ticket in JIRA itself. Once the developer has addressed the vulnerability, the best course of action is to trigger another scan in APIsec.  If the vulnerability is fixed, the ticket will be transition by the results of the scan.

## Will a subsequent scan reopen a ticket?

If the issue is resolved on the API, then no ticket will be created again.


## What causes issues to show up on subsequent scans, but not the initial scan?

APIsec is an evolving platform. New categories are created and playbooks are updated. Either of these cases could result in subsequent scans discovering new vulnerabilities that were not present in the initial/prior scan.

