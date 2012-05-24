/*
 * cropAndZoom v.1.0
 * (c) 2012 Highwire Design Ltd
 * Released under Creative Commons Attribution-NonCommercial-Sharealike (CC-BY-NC-SA) - www.creativecommons.org.uk
 * For commercial use please contact Highwiredesign Ltd - design@highwiredesign.com
 * More information: design@highwiredesign.com
 * This header must remain with code
 */

(function($) {
  $.fn.scaleAndZoom = function(container) {
  		//Find all the images in the chosen container and see if they need scaling
		this.find('img').each(function(){
			//Get the container width		
			var contW = $(this).parent().width();
			//Get the image width
			var origW = $(this).width();
			//Set the original width as an attribute of the image for later retrieval
			$(this).attr('originalwidth', origW);				
			//If the image is larger than the container then scale it
			if(origW >= contW) {
				$(this).width(contW);	
				$(this).css('cursor', 'se-resize');	
			}
		});
		//If the image is clicked then scale it up or down
		this.find('img').click(function(event) {
			//Get the parent container width
			var contW = $(this).parent().width();
			//Get the image original width from the atttribute we set earlier			
			var imgorigW = $(this).attr('originalwidth');
			//image has been scaled
			if(imgorigW >= contW) {
				//image is in scaled state so zoom to original size	
				if($(this).width() <= contW) { 
					$(this).animate({
						width: imgorigW
						},400);	
					$(this).css('cursor', 'nw-resize');
				}
				//Otherwise it is at full size so shrink to fit container
				else {
					$(this).animate({
						width: contW
						},400);	
					$(this).css('cursor', 'se-resize');	
				}	
			}
		})
  };
})( jQuery );





