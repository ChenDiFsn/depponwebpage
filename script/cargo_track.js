$(function(){
	
	$('#dvu').click(function(){
		isSelect($('#ii').val());
	
	});
	
	// 根据用户输入运单号查询
	function isSelect(wbn){
		 $.ajax({
		 	data:{
		 		waybillNum:wbn
		 	},
		 	dataType:'json',//服务器返回json格式数据
		 	type:'get',//HTTP请求类型
			url:"http://www.cdzu.top/deppon/waybill/queryTheWaybill",
		 	success: function(data){
		 		console.log(data);
		 			 
		 	  }
		 });
	}
	// 清除最近查询
	function isDelete(){
		
	}
	
	});