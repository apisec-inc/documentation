**Scanner Sizing Recommendations**
<p style="text-align: left;color: 	#A9A9A9;font-size:16px;"> By <b><a href="https://github.com/mjameel757">Mohammed Jameel</a></b> on <b>Oct 17,2022</b> </p> 

- Scanners without resource limit will be faster to complete the jobs.
- Below chart shows the execution time of playbooks with different resource limits.

<table style="border:1px solid white;">
  <tr>
    <th style="border:1px solid white;">Cluster Count/Size</th>
    <th style="border:1px solid white;">No of Playbooks</th>
    <th style="border:1px solid white;">Duration in Seconds</th>
    <th style="border:1px solid white;">CPU Request</th>
    <th style="border:1px solid white;">CPU Limit</th>
    <th style="border:1px solid white;">Memory Request</th>
    <th style="border:1px solid white;">Memory Limit</th>
    
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
<iframe src="../Chatbot/index.html" width="320" height="400" frameborder="0" style="position: fixed; bottom: 20px; right: 20px;"></iframe>