let myShader;

let cnv;
let img;
function preload() {
	myShader = loadShader('shader.vert', 'shader.frag');
	img = loadImage('images/line-art/yamuna.png');
}

function setup() {
	// img.resize(600, 0);
	cnv = createCanvas(img.width, img.height, WEBGL);

	angleMode(DEGREES);
	imageMode(CENTER);
	pixelDensity(1);

	let newCanvasX = (windowWidth - img.width) / 2;
	let newCanvasY = (windowHeight - img.height) / 2;
	cnv.position(newCanvasX, newCanvasY);
	noStroke();
}

function draw() {
	background(0);
	shader(myShader);

	// Send the frameCount to the shader
	myShader.setUniform('uFrameCount', frameCount);
	myShader.setUniform('uImage', img);
	push();
	rotateY(frameCount * 0.5);
	rectMode(CENTER);
	sphere(width / 4, 200, 200);
	// rect(0, 0, width, height);

	pop();
}
