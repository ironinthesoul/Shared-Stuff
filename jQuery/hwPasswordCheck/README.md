Highwire jQuery Password Checker
================================

Version
-------
hwPasswordCheck v.1.0.0

Usage
-----
1) Get jQuery http://jquery.com and load it in to your page
2) Include this file in to your page after jQuery
3) You can attach the function to any password form field,
	$(document).ready(function() {
		$('#password').hwPasswordCheck();
	});
	
4) If you want to alter the defaults then just add any or all to the function call, like below:

		$('#password').hwPasswordCheck(
			{
				// Styling
				backgrounds			: ["#a90b0b", "#50a050", "#057705"], //fail, pass, excellent pass
				textcolour			: ["#fff", "#fff", "#fff"], //red, green, greenest
				// Defaults
				minChar				: 8,			
				minCharWeight		: 10,
				upperLowerWeight	: 10,
				oneDigitWeight		: 10,
				longWeight			: 2,
				extraLongWeight		: 2,
				extraDigitsWeight	: 2,
				specialCharWeight	: 2,
				extraSpecialWeight	: 2,
				// Scores
				minScore			: 30, // Score to enable save
				topScore			: 34  // Score to be considered excellent
			}		
		);
5) The password strength meter colours the password box red until the minimum requirements are met.
   Once you start typing a password the form's submit buttons are disabled until the requirements are met.
   You can still submit the form if the password is empty. This is useful for updating user information
   without updating a password. To force a password to be entered use another javascript error checker too.

Licence
-------
(c) 2014 Highwire Design Ltd
Released under Creative Commons Attribution-NonCommercial-Sharealike (CC-BY-NC-SA) - www.creativecommons.org.uk
For commercial use please contact Highwire Design Ltd - design@highwiredesign.com
More information: design@highwiredesign.com