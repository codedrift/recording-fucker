console.log("Hotjar", window.hj)

function tiltBody() {
	document.getElementsByTagName("body")[0].style.setProperty("transform", "rotate(0.003rad)");
}

if(window.hj) {
	tiltBody();
}
tiltBody();
