/*
 * hwPasswordCheck v.1.0.0
 * (c) 2014 Highwire Design Ltd
 * Released under Creative Commons Attribution-NonCommercial-Sharealike (CC-BY-NC-SA) - www.creativecommons.org.uk
 * For commercial use please contact Highwire Design Ltd - design@highwiredesign.com
 * More information: design@highwiredesign.com
 * This header must remain with code
 */
/*
How to use this plugin:

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
 */

(function($){
	$.fn.hwPasswordCheck = function(o) {
		var o = $.extend({
			// Styling
			backgrounds			: ["#a90b0b", "#50a050", "#057705"],
			textcolour			: ["#fff", "#fff", "#fff"],
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
			minScore			: 30,			
			topScore			: 34			
		},o);		
		return this.each(function(){
			$(this).keyup(function(){				
				$.fn.runPassword($(this), o);
			});
		});
	}
	$.fn.runPassword = function (p, o){
			var subButt = p.closest('form').find(':submit');
			var pval = p.val();
			fScore = $.fn.checkPassword(pval, o);	
			if(pval.length == 0) {
				p.css("background-color", "");
				subButt.removeAttr('disabled');
				subButt.removeAttr('color');
			}
			else if(fScore < o.minScore) { 
				p.css("background-color", o.backgrounds[0]);
				p.css("color", o.textcolour[0]);
				subButt.attr('disabled','disabled');
			}
			else if (fScore < o.topScore) { 
				p.css("background-color", o.backgrounds[1]);
				p.css("color", o.textcolour[1]);
				subButt.removeAttr('disabled');
			}
			else { 
				p.css("background-color", o.backgrounds[2]);
				p.css("color", o.textcolour[2]);
				subButt.removeAttr('disabled');
			}
		}
		$.fn.checkPassword = function(p, o) {
			var pwScore = 0;
			// BASIC CHECKS
			// If min chars is met
			if (p.length >= o.minChar) { pwScore = pwScore + o.minCharWeight; }
			// Has both upper and lower
			if (p.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) { pwScore = pwScore + o.upperLowerWeight; }
			// Has at least one digit
			if (p.match(/\d+/)) { pwScore = pwScore + o.oneDigitWeight; }
			// FURTHER CHECKS
			// If 1.5 min chars is met
			if (p.length > (Math.round(o.minChar*1.5))) { pwScore = pwScore + o.longWeight; }
			// If double min chars is met
			if (p.length > (o.minChar*2)) { pwScore = pwScore + o.extraLongWeight; }
			// At least 3 digits
			if ($.fn.countMatches(p, /\d/g) > 2) { pwScore = pwScore + o.extraDigitsWeight; }
			// At least 1 special character
			if (p.match(/.[!,@,#,$,%,^,&,*,?,_,~]/)) { pwScore = pwScore + o.specialCharWeight; }
			// At least 2 special character
			if ($.fn.countMatches(p, /[!,@,#,$,%,^,&,*,?,_,~]/g) > 2) { pwScore = pwScore + o.extraSpecialWeight; }
			return pwScore;
		}
		$.fn.countMatches = function(p, regex) {
			var result = p.match(regex); 
			return result ? result.length : 0;
		}	
})(jQuery);