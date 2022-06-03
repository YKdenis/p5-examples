let cnv;
let img;
function preload() {
	img = loadImage('images/line-art/4-faces.jpeg');
}

function setup() {
	img.resize(600, 0);
	cnv = createCanvas(img.width, img.height, WEBGL);
	angleMode(DEGREES);

	let newCanvasX = (windowWidth - img.width) / 2;
	let newCanvasY = (windowHeight - img.height) / 2;
	cnv.position(newCanvasX, newCanvasY);

	background('#f5ebe0');
	translate(-300, -390);

	for (let col = 0; col < img.width; col += 2) {
		for (let row = 0; row < img.height; row += 2) {
			let xPos = col;
			let yPos = row;
			let c = img.get(xPos, yPos);
			if (c[0] < 200) {
				push();
				noFill();
				strokeWeight(1);
				stroke('black');
				beginShape();
				vertex(xPos, yPos);
				vertex(xPos + 1, yPos + 1);
				endShape(CLOSE);
				pop();
			}
		}
	}
}

function draw() {
	// background('#f5ebe0');
	camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
}
