**Scanner Sizing Recommendations**

- Scanners without resource limit will be faster to complete the jobs.
- Below chart shows the execution time of playbooks with different resource limits.

<img width="644" alt="Screen Shot 2022-10-29 at 08 41 12" src="https://user-images.githubusercontent.com/109250250/198834815-f95fbf46-3e07-4a2e-9bcc-fe64b299cc62.png">

<table style="border:1px solid white;text-align:center;">
  <tr style="border:1px solid white;text-align:center;">
    <th style="border:1px solid white;text-align:center;">Cluster Count/Size</th>
    <th style="border:1px solid white;text-align:center;">No of Playbooks</th>
    <th style="border:1px solid white;text-align:center;">Duration in Seconds</th>
    <th style="border:1px solid white;text-align:center;">CPU Request</th>
    <th style="border:1px solid white;text-align:center;">CPU Limit</th>
    <th style="border:1px solid white;text-align:center;">Memory Request</th>
    <th style="border:1px solid white;text-align:center;">Memory Limit</th>
    
  </tr>
  <tr>
    <td style="border:1px solid white;text-align:center;">1</td>
    <td style="border:1px solid white;text-align:center;">75</td>
    <td style="border:1px solid white;text-align:center;">158s</td>
    <td style="border:1px solid white;text-align:center;">5m</td>
    <td style="border:1px solid white;text-align:center;">100m</td>
    <td style="border:1px solid white;text-align:center;">256Mi</td>
    <td style="border:1px solid white;text-align:center;">500Mi</td>
    
  </tr>
  
  <tr>
    <td style="border:1px solid white;text-align:center;">1</td>
    <td style="border:1px solid white;text-align:center;">75</td>
    <td style="border:1px solid white;text-align:center;">100s</td>
    <td style="border:1px solid white;text-align:center;">5m</td>
    <td style="border:1px solid white;text-align:center;">100m</td>
    <td style="border:1px solid white;text-align:center;">500Mi</td>
    <td style="border:1px solid white;text-align:center;">1000Mi</td>
    
  </tr>
  
  <tr>
    <td style="border:1px solid white;text-align:center;">1</td>
    <td style="border:1px solid white;text-align:center;">75</td>
    <td style="border:1px solid white;text-align:center;">43s</td>
    <td style="border:1px solid white;text-align:center;">No Limit</td>
    <td style="border:1px solid white;text-align:center;">No Limit</td>
    <td style="border:1px solid white;text-align:center;">No Limit</td>
    <td style="border:1px solid white;text-align:center;">No Limit</td>
    
  </tr>
  
  
</table>
