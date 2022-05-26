const SHAPES_AMOUNT = 40;
const Y_RANGE = 90;
const X_RANGE = 6;
const SPEED = 2;

function setup() {
	createCanvas(700, 700, WEBGL);
	angleMode(DEGREES);
}

function draw() {
	background(30);

	rotateX(60);
	// rotateY(90);

	noFill();
	stroke(255);

	for (let i = 0; i < SHAPES_AMOUNT; i++) {
		let r = map(sin(frameCount / 2), -1, 1, 100, 255);
		let g = map(i, 0, SHAPES_AMOUNT, 100, 255);
		let b = map(cos(frameCount / 2), -1, 1, 255, 100);

		stroke(r, g, b);

		rotate(frameCount / 20);

		beginShape();
		for (let j = 0; j < 360; j += 360 / 60) {
			let rad = i * X_RANGE;
			let x = rad * cos(j);
			let y = rad * sin(j);
			let z = sin(frameCount * SPEED + i * 5) * Y_RANGE;

			vertex(x, y, z);
		}
		endShape(CLOSE);
	}
}
