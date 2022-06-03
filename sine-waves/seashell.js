const SHAPES_AMOUNT = 160;
const AMOUNT_OF_VERTEXES = 8;
const Y_RANGE = 80;
const X_RANGE = 1.2;
const SPEED = 0.1;

function setup() {
	createCanvas(700, 700, WEBGL);
	angleMode(DEGREES);
}

function draw() {
	background(30);

	noFill();
	stroke(255);

	for (let i = 0; i < SHAPES_AMOUNT; i++) {
		let r = map(sin(frameCount / 2), -1, 1, 100, 255);
		let g = map(i, 0, SHAPES_AMOUNT, 100, 255);
		let b = map(cos(frameCount / 2), -1, 1, 255, 100);

		let n = noise(i);
		stroke(0, g, b);

		rotate((frameCount / 100) * n);
		// rotateX(n);

		push();
		translate(0, 0, -200);
		beginShape();
		for (let j = 0; j < 360; j += 360 / AMOUNT_OF_VERTEXES) {
			let rad = i * X_RANGE;
			let x = rad * cos(j + frameCount);
			let y = rad * sin(j + frameCount);
			let z = sin(frameCount * SPEED + i * 5) * Y_RANGE;
			vertex(x, y, z);
		}
		endShape(CLOSE);
		pop();

		push();
		translate(100, 0);
		rotateY(180);
		beginShape();
		for (let j = 0; j < 360; j += 360 / AMOUNT_OF_VERTEXES) {
			let rad = -i * X_RANGE;
			let x = rad * cos(j + frameCount);
			let y = rad * sin(j + frameCount);
			let z = sin(frameCount * SPEED + i * 5) * Y_RANGE;
			vertex(x, y, z);
		}
		endShape(CLOSE);
		pop();
	}
}
