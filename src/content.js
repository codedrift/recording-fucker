console.log("Hotjar", window.hj);

const FUCKED_TEXT_NODES = ["p", "h1", "h2", "h3", "h4", "h5", "span", "strong"];

function fuckUpBody() {
	document.getElementsByTagName("body")[0].style.setProperty("transform", "rotate(0.001rad)");
}

function fuckUpImages() {
	let index = 0;
	Array.from(document.getElementsByTagName("img")).forEach(ele => {
		if (index % 2 === 0) {
			ele.style.setProperty("transform", "translateX(-15px)");
		}
		index++;
	});
}

function fuckUpTextContent(node) {
	if (node.children.length > 0) {
		return;
	}
	const text = node.innerText;
	const position = Math.floor(Math.random() * text.length) + 1;
	const fuckedUpText = text.substring(0, position - 1) + text.substring(position, text.length);
	node.innerText = fuckedUpText;
}

function fuckUpText() {
	let index = 0;
	FUCKED_TEXT_NODES.forEach(tag =>
		Array.from(document.getElementsByTagName(tag)).forEach(node => {
			if (index % 4 === 0) {
				fuckUpTextContent(node);
			}
			index++;
		})
	);
}

fuckUpText();
fuckUpImages();
fuckUpBody();
