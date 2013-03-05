/*
 * hwScrollTop v.1.0
 * (c) 2013 Highwire Design Ltd
 * Released under Creative Commons Attribution-NonCommercial-Sharealike (CC-BY-NC-SA) - www.creativecommons.org.uk
 * For commercial use please contact Highwiredesign Ltd - design@highwiredesign.com
 * More information: design@highwiredesign.com
 * This header must remain with code
 */
/*
How to use this plugin:

1) Get jQuery http://jquery.com and load it in to your page
2) Include this file in to your page after jQuery
3) You can attach the function to any part of your HTML document, but body makes most sense:
	$(document).ready(function() {
		$('body').hwScrollTop();
	});
	
4) If you want to alter the defaults then just add any or all to the function call, like below:

		$('body').hwScrollTop(
			{
				anchor 				: '#',
				position 			: 'left',
				startscroll 		: 400,
				bordercolor	 		: '#000',
				borderwidth			: '1px',
				borderstyle			: 'solid',
				backgroundcolor 	: '#000',
				color				: '#fff',
				fontsize			: '14px',
				paddingtop			: '5px',
				paddingbottom		: '5px',
				paddingleft			: '10px',
				paddingright		: '10px',
				text				: 'Top'
			}		
		);
 */

(function($) {
	$.fn.hwScrollTop = function(params) {
		var settings = $.extend(
			{},
			{
				anchor 				: '#',
				position 			: 'left',
				startscroll 		: 400,
				bordercolor	 		: '#000',
				borderwidth			: '1px',
				borderstyle			: 'solid',
				backgroundcolor 	: '#000',
				color				: '#fff',
				fontsize			: '14px',
				paddingtop			: '5px',
				paddingbottom		: '5px',
				paddingleft			: '10px',
				paddingright		: '10px',
				text				: 'Top'
			},
			params);

		var htmlcode = "<a 	id='hwScrollBox' href='" + settings.anchor + "' style='display:block;position:fixed;bottom:0;" + settings.position + ":0;border-color: " + settings.bordercolor + ";border-width:" + settings.borderwidth + ";border-style:" + settings.borderstyle + ";background-color: " + settings.backgroundcolor + ";color: " + settings.color + ";font-size: " + settings.fontsize + ";padding-top: " + settings.paddingtop + ";padding-bottom: " + settings.paddingbottom + ";padding-left: " + settings.paddingleft + ";padding-right: " + settings.paddingright + ";display: none;' >" + settings.text + "</a>";

		$(this).append(htmlcode);

		$(window).scroll(function() {
			if($(window).scrollTop() <= settings.startscroll) {
				$('#hwScrollBox').fadeOut();
			}
			else {
				$('#hwScrollBox').slideDown();
			}
		});
	};
})( jQuery );