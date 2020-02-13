$(function(){
	
	
	// 保存寄件人
	function saveSender(){
		$('.jj_a2').click(function(){
			$(".js_user  input[type='text']").each(function(){ 
				// console.log($(this).val()); 
				setCookie("保存寄件人",$(this).val());
				 });
			
		});
	}
	
	
	
	
});