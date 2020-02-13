var authCode=-1;//验证码,-1:是默认值
$(function(){
	$('.enjoy').click(function(){	
		if (isPoneAvailable($('#inp1').val())) {		
			phoneAuth('phone',$('#inp1').val());
		} else{
			alert("chendi是个憨憨");
		}
		
	});
	$('.sub').click(function(){
		if (isPasswordAuth($('#inp3').val())) {
			register($('#inp1').val(),$('#inp3').val());
		} else{
			alert("狗贼，你又错了");
		}
	});
	 function isPoneAvailable(phone) {
		 //S正则表达式验证是否为11位有效手机号码
		 //1--以1为开头；2--第二位可为3,4,5,7,8,中的任意一位；3--最后以0-9的9个整数结尾。
		var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
		if (!myreg.test(phone)) {
			return false;
		} else {
			return true;
		}
	}
	function phoneAuth(phone,telephone){
		$.ajax({
		  type: "post",
		  url: "http://www.cdzu.top/deppon/user/authCode",
		  data:{
			  genre:phone,
			  phOrEm:telephone
		  },
		  dataType:"json",
		  success: function(data){
			  console.log(data);
		    authCode=data.data; //获取data数据返回的验证码
		    }
		
		});
		}
	function isPasswordAuth(password){
		//密码至少为8位的字母、数字和特殊符号的组合
		var reg = /^[a-zA-Z0-9]{6,13}$/;
		if (!reg.test(password)) {
			return false;
		} else {
			return true;
		}
	}	
	function register(up,pw){
		if (authCode==$('#inp2').val()) {
			alert("请继续你的表演");
			$.ajax({
			  type: "post",
			  url: "http://www.cdzu.top/deppon/user/register",
			  data:{
				  userPhone:up,
				  uPassword:pw
			  },
			  dataType:"json",
			  success: function(data){
				  console.log(data);
			    }
			
			});
		} else{
			alert("你死了");
		}
	}	
	
	
	
		
});