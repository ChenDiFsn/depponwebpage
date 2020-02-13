$(function(){
	 
	// 保存寄件人
	 $('#myForm').submit(function(event){//event相当于此次事件
	            event.preventDefault();//阻止元素发生默认的行为（例如，当点击提交按钮时阻止对表单的提交）。
	                var form = $(this);
	                $.ajax({
	                    type: form.attr('method'),
	                    url: form.attr('action'),
	                    data: form.serialize(),//serialize()序列表格内容
	                    success: function(data){
	                        console.log(data);
	                    }
	              });
	        });
	
	// 保存收件人
	$('#myform2').submit(function(event){//event相当于此次事件
	           event.preventDefault();//阻止元素发生默认的行为（例如，当点击提交按钮时阻止对表单的提交）。
	               var form = $(this);
	               $.ajax({
	                   type: form.attr('method'),
	                   url: form.attr('action'),
	                   data: form.serialize(),//serialize()序列表格内容
	                   success: function(data){
	                       console.log(data);
	                   }
	             });
	       });
	
	
	
	
	
});