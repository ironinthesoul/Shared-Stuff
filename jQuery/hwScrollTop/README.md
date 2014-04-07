Highwire jQuery Scroll Page To Top
==================================

Version
-------
hwScrollTop v.1.0.1

Usage
-----
This plugin automatically adds a [TOP] button to your page once it has been scrolled a bit.
You can choose where it is positioned and what it looks like.

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

Licence
-------
(c) 2014 Highwire Design Ltd
Released under Creative Commons Attribution-NonCommercial-Sharealike (CC-BY-NC-SA) - www.creativecommons.org.uk
For commercial use please contact Highwire Design Ltd - design@highwiredesign.com
More information: design@highwiredesign.com