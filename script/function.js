$(document).ready(function(){
	$(".btn").click(function(){
	$(".form-control").css('height', '120px'); 
     $("#md5").css("height","250px");
	 $(".btn").hide();
	 $(".seach").show();
	}); 

    $(".di2").click(function(){
		var a=$(".di2").css("background-color");
		alert(a);
		if("rgb(255, 250, 205)"==a||a==undefined){
			$(".di2").css(a,"rgb(255, 255, 0)");
			$(".contern2").show();
		}else{
			$(".di1").css(a,"rgb(255, 250, 205)");	
			$(".contern").hide();
		}
	});	
	
	
});

