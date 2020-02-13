$(function(){
	$('.sub').click(function(){
		if(($('#inp1').val())!=undefined){
			isUpassword($('#inp1').val(),$('#inp2').val());		
		}else{
			alert("false");
		}
	});
	// 发送请求去后台拿取数据
	function isUpassword(uphone,pw){
		$.ajax({
		  type: "post",
		  url: "http://www.cdzu.top/deppon/user/login",
		  data:{
			  userPhone:uphone,
			  uPassword:pw
		  },
		  dataType:"json",
		  success: function(data){
			  console.log(data);  
			  if(data.code==200){
				   setCookie('us',data.data,20)
			  }
	    }
		
		});
	}
	
	// 用户名是否为空
	function isUserName(){	
		if(($('#inp1').val())!=undefined){
			return success;
		}else{
			return false;
		}
	}
	
});