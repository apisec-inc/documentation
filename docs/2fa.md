# Two Factor Authentication Setup


`Reading time 3 min`

Two factor authentication (2FA) allows you to increase the security of your APIsec account which allows the users to authenticate themselves with a two-step process.  This authentication layers makes it harder for the hackers to attack your account.

## Steps

For the 2FA, it's a 2 step process to activate it

### Steps for the Admin
- First, the admin needs to enable the 2FA from the Accounts under the name menu

![Account](https://user-images.githubusercontent.com/105206963/220571253-09e08e65-a186-491c-ba6a-8f24d9345df6.png)

![2FAadmin1](https://user-images.githubusercontent.com/105206963/220570278-943a7294-6784-405e-9154-e3373e929c66.png)

- Then, an email will be sent out to the users

### Steps for the Users
- Now, the the user will have to enable it from the My Profile menu option 

![my profile](https://user-images.githubusercontent.com/105206963/220571745-0e06852e-deaf-49a6-b845-dacc822e2019.png)

![2FAuser](https://user-images.githubusercontent.com/105206963/220571858-6450b4e7-1bd6-474d-81aa-bb6e9d416f15.png)

- A QR code will be shown > Scan it using the app on the phone and 

![2FAQR](https://user-images.githubusercontent.com/105206963/220572117-598a8ae0-b1c8-4eec-a0c4-b22be6c69891.png)

- Click Save
- Note: Ensure that the setup is successful and the code is getting generated


### Certified Applications on IOS
- Twilio - Authy and
- Microsoft Authenticator

### Certified Applications on Android
- Twilio - Authy
- Microsoft Authenticator and
- Google Authenticator


### Troubleshooting ###

**Check MFA Settings and Configuration:**
Ensure that the MFA settings for the affected users are configured correctly and consistently with those of the users for whom MFA is working. Verify that the time settings on their devices are synchronized.

**MFA App Compatibility:**
Different MFA apps might have slight variations in how they generate codes. Ensure that the users are using recommended and tested MFA apps. Authenticator apps like Google Authenticator, Authy, or Microsoft Authenticator are commonly used and usually reliable.

**Time Synchronization:**
MFA codes are time-based. If the user's device has an incorrect time setting, the generated codes won't match the server's expectations. Ensure that the time zone and time settings are correct on the user's device.

**Account Lockouts:**
APISec has account lockout policies that trigger after a certain number of failed MFA attempts. Check if the affected accounts are locked out due to repeated incorrect MFA attempts.

**Device-Specific Issues:**
If the issue seems to be isolated to specific devices, it might be worth investigating if there are any device-specific settings or software conflicts causing the problem.

**Software Updates:**
Ensure that both the MFA app and the device's operating system are up to date. Sometimes, updating these components can resolve compatibility issues.
