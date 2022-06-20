//this variable will hold our shader object
let cnv;

let myShader;

function preload() {
	// a shader is composed of two parts, a vertex shader, and a fragment shader
	// the vertex shader prepares the vertices and geometry to be drawn
	// the fragment shader renders the actual pixel colors
	// loadShader() is asynchronous so it needs to be in preload
	// loadShader() first takes the filename of a vertex shader, and then a frag shader
	// these file types are usually .vert and .frag, but you can actually use anything. .glsl is another common one
	myShader = loadShader('shader.vert', 'shader.frag');
}

function setup() {
	// shaders require WEBGL mode to work
	cnv = createCanvas(800, 800, WEBGL);
	angleMode(DEGREES);
	pixelDensity(1);

	let newCanvasX = (windowWidth - 800) / 2;
	let newCanvasY = (windowHeight - 800) / 2;
	cnv.position(newCanvasX, newCanvasY);
	noStroke();
}

function draw() {
	background(0);
	// shader() sets the active shader with our shader
	shader(myShader);
	let n = noise(random(-1, 1));

	// Send the frameCount to the shader
	myShader.setUniform('uFrameCount', frameCount);

	// Rotate our geometry on the X and Y axes
	rotateX(frameCount * 0.01);
	rotateY(frameCount * 0.5);
	rotateZ(frameCount * 0.5);
	translate(n, n);
	// Draw some geometry to the screen
	// We're going to tessellate the sphere a bit so we have some more geometry to work with
	sphere(width / 4, 200, 200);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
