(function($){ 		  
	$.fn.popupWindow = function(){
		
		return this.each(function(){
		
		$(this).click(function(){
					window.open('https://rawgithub.com/yggie/EduChat/develop/popupContent.html','CHAT', "width=600, height=750").focus();
					return false;
		
			});		
		});	
	};
})(jQuery);

