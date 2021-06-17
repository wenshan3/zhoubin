// 背景下雨效果
setInterval(function() {
	//创建rain元素
	var rain = document.createElement("div");
	//初始化rain属性
	rain.style.position = "fixed";
	rain.style.height = "40px";
	rain.style.width = "2px";
	rain.style.background = "url(./images/rain.jpg)";
	rain.style.filter = "blur(1px)";
	rain.style.top = "0px";
	rain.style.left = Math.random()*1920 + "px";					//随机化位置
	rain.style.opacity = parseInt(Math.random()*10)/10;		//随机化透明度
	//向body里添加子节点rain
	document.body.appendChild(rain);
	var timer = setInterval(function() {	
		var height = parseInt(rain.style.top);
		var k = 1;
		k++;
		rain.style.top = height+5*Math.pow(k,2)+"px";				//模拟重力加速度
		//当雨滴到达底部后消失并清除子节点rain
		if(rain.style.top>="900px") {			
			clearInterval(timer);
			rain.parentNode.removeChild(rain);
		}
	},20)						//每隔20毫秒雨滴下落一次
},18)							//每隔18毫秒生成一次雨滴
