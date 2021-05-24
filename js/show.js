window.onload = function () {
	var h2 = document.querySelector('h2');
	function random() {
		return parseInt(Math.random()*255);
	};
	setInterval(()=>{
		r = random();
		g = random();
		b = random();
		h2.style.color = 'rgb('+r+','+g+','+b+')';		
	}, 1000)
}