console.log("Hotjar", window.hj);

function fuckUpBody() {
	document.getElementsByTagName("body")[0].style.setProperty("transform", "rotate(0.003rad)");
}

function fuckUpImages() {
	let index = 0;
	Array.from(document.getElementsByTagName("img")).forEach(ele => {
		if (index % 2) {
			ele.style.setProperty("transform", "translateX(-15px)");
		}
		index++;
	});
}

function fuckUpText() {
	Array.from(document.getElementsByTagName("p")).forEach(node => {
		const text = node.innerText;
		const position = Math.floor(Math.random() * text.length) + 1;
		const fuckedUpText = text.substring(0, position - 1) + text.substring(position, text.length);
		node.innerText = fuckedUpText;
	});
}

fuckUpText();
fuckUpImages();
fuckUpBody();
