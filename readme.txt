=== Pie Register ===
Contributors: pie-solutions
Donate link: http://pie-solutions.com/products/pie-register/donate
Tags: register, registration, password, invitation, code, invite, disclaimer, captcha, email, validation, recaptcha, privacy, policy, license, agreement, logo, moderation, user
Requires at least: 2.5
Tested up to: 3.2.1
Stable tag: 1.2.7

Enhance your Registration Page.  Add Custom Logo, Password Field, Invitation Codes, Disclaimers, CAPTCHA Validation, Email Validation, User Moderation, Profile Fields and more.

== Description ==

Enhance your Registration Page and Charge your User for registeration.

**Custom Logo**
Tired of that WordPress logo getting all the attention?  Upload your own custom logo image and get your brand in the spotlight.

**Password Field**
Hate those forgettable auto-generated passwords? Allow your users to set their own prefered password during registration. Includes that sweet Password Strength Meter from the Profile page. 

**Invitation Codes**
Is your blog super exclusive?  If so, you better require an invite to join your high end crew.  Setup multiple codes and track where your new users are coming from with the optional Invitation Tracking Dashboard Widget.

**Disclaimers**
Worried about legal liabilities?  Setup a general disclaimer, licence agreement and/or privacy policy for new users to agree to during registration.

**Captcha Validation**
Hate spam? If you don't want those spam bots registering with their very own passwords, you need some protection.  Includes a simple captcha easy enough for real humans to read as well as the ability to add a <a href="http://recaptcha.net">reCAPTCHA</a>.

**Email Validation**
Hate fake emails?  Make sure your users are not registering with invalid email accounts by forcing them to click a validation link that's sent out with their registration email.  This sets there username to a random generated string (something like: 'unverified__h439herld3') so they can't login until they hit that validation link which will put their real username back in place allowing them to login as per usual.  Unverified registrations have a defined grace period that will automatically delete an unverified account after a specified period of time, so you don't get clogged up with those fakies. (Manage under Users > Unverified Users)

**User Moderation**
Need absolute control?  Check out every new user yourself and hand pick who can stay and who gets the boot before they are able to login to your site. (Manage under Users > Unverified Users)

**Profile Fields**
Want more done sooner?  Have new users fill out there entire profile or just bits you need all during registration, you can even make them required.  

**User Defined Fields** 
Not enough info yet?  Add your own defined fields to the registration page for users to fill out.  It also adds the new fields to the profile page as well so current users can add their own info and update as needed. Now includes the abililty to add date, select, checkbox, radio and textarea fields!

**Duplicate Email Registration**
Got multiple users using the same email address?  Easily solve this prediciment without forcing them to sign up with unneeded email accounts. Also useful for administrators to create another account with one email address.

**Customized Admin & User Registration Email**
Tired of the same old emails when someone new registers?  Spice it up with your own From/Reply-To address, customized subject and customize the entire message! You can even disable those tiresome Admin notifications for new registrations. 

**Charge for Membership**
Wanna charge your user for registeration? If you would like to charge for a fee for registeration, Pie-Register has Built-in Paypal Integration, now easy to charge members on registeration. Pie-Register seemsly integrates with Paypal.

Pie-Register is a fork of register-Plus Plugin, however many things have changed since.

== Installation ==

1. Upload the `pie-register` directory to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Set the options in the Settings Panel
4. Please put this code at the top of your wp-login.php otherwise the plugin won't work properly, and always update your wp-login.php with the following code after upgrade.
<?php session_start(); ?>

== LOCALIZATION ==
* Currently This feature is not available. We are working on it to improve.

== Support ==
* Please visit http://www.pie-solutions.com/products/pie-register in order to get support regarding this plugin!

== CHANGELOG ==

**v1.2.7 October 4 2011**
* New ScreenShots Added

**v1.2.6 October 4 2011**
* Fixed Multiple Invitation Saving Problem

**v1.2.5 October 3 2011**
*Fixed custom meta fields "Saving" problem by the admin. (Fixed by Julian Warren with Thanks)
*Added New Layout Pie-Register Menu built!

**v1.2.4 September 21 2011**
*Fixed the "Backslash" problem on the admin Setting Page.

**v1.2.3 August 8 2011**
*Highlighted the Code to put on the wp-login.php at the plugin page.

**v1.2.2 February 20 2011**

* Fixed Settings Override.
* Compatible to Wp 3.0.5


**v1.2.1 January 20 2011**

* Fixed Password strength meter.
* Compatible to Wp 3.0.4


**v1.2.0 June 25 2010**

* Fixed Image uploads errors.
* First step to Compatiblity to Wp 3.0

**v1.1.9a April 07 2010**

* Fixed Error after registration.

**v1.1.9 April 06 2010**

* Fixed Login box after verification.
* Fixed diplaying invitation codes to the user dashboard.

**v1.1.8 March 03 2010**

* Fixed Payment link.
* Fixed session errors/header errors.
* And much much more..

**v1.1.7 Febraury 04 2010**

* Fixed Resend verification email.
* Fixed resend payment link.

**v1.1.6 February 03 2010**

* Fixed Security updates for Paypal resend code.
* Add Phone/Mobile number Field.

**v1.1.5 February 02 2010**

* Keep away Unverified/Un-paid users to get logged in.
* Fixed Logo display and form fields.
* Fixed short tags enabled.
* Fixed Date fields.
* Changed Paypal Buy now to One -Time Subscription fee Button.

**v1.1.3** January 08 2010 **

* Fixed User Registeration after Paypal Return.


**v1.1.2** January 07 2010 **

* Fixed temp user id and email verification.

**v1.1.1** January 06 2010 **

* Added Paypal Return and thank you URL.

**v1.0.1** January 04 2010 **

* Fixed Password meter.
* Added Paypal as shopping Cart


== Screenshots ==

1. Registration Page
2. Pie Register Settings
3. Invitation Tracking Dashboard Widget
4. Unverified User Management