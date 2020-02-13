//$(function(){
	function inArray(array, str)
	{
		for(a in array) {
			if(array[a] == str) return true;
		}
		return false;	}
		//显示时间格式格式
	function faor(shi){
		return shi.getFullYear()+"-"+(shi.getMonth()+1)+"-"+shi.getDate()+" "+shi.getHours()+":"+shi.getMinutes()+":"+shi.getSeconds();
	}
	//RGB颜色值转换为16进制颜色值
	function colorRGBtoHex(color) {
		var rgb = color.split(',');
		var r = parseInt(rgb[0].split('(')[1]);
		var g = parseInt(rgb[1]);
		var b = parseInt(rgb[2].split(')')[0]);
		var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
		return hex;
	}
	//写cookies
	function setCookie(name,value)
	{
		var Days = 30;
		var exp = new Date();
		exp.setTime(exp.getTime() + Days*24*60*60*1000);
		document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
	}
	//读取cookies
		function getCookie(name){
			var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");

			if(arr=document.cookie.match(reg))
		 
				return unescape(arr[2]);
			else
				return null;
		}
		//删除cookies
		function delCookie(name)
		{
			var exp = new Date();
			exp.setTime(exp.getTime() - 1);
			var cval=getCookie(name);
			if(cval!=null)
				document.cookie= name + "="+cval+";expires="+exp.toGMTString();
		}

//});