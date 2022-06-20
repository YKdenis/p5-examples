let myShader;

let cnv;
let img;
function preload() {
	myShader = loadShader('shader.vert', 'shader.frag');
	img = loadImage('images/line-art/4-faces.jpeg');
}

function setup() {
	img.resize(600, 0);
	cnv = createCanvas(img.width, img.height, WEBGL);

	angleMode(DEGREES);
	pixelDensity(1);

	let newCanvasX = (windowWidth - img.width) / 2;
	let newCanvasY = (windowHeight - img.height) / 2;
	cnv.position(newCanvasX, newCanvasY);
	noStroke();
	translate(-300, -390);

	for (let col = 0; col < img.width; col += 1) {
		for (let row = 0; row < img.height; row += 1) {
			let xPos = col;
			let yPos = row;
			let c = img.get(xPos, yPos);
			if (c[0] < 200) {
				push();
				translate(xPos, yPos);
				sphere(2, 4, 4);
				pop();
			}
		}
	}
}

function draw() {
	// background(255);

	shader(myShader);

	// Send the frameCount to the shader
	myShader.setUniform('uFrameCount', frameCount);
}
