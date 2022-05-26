const SHAPES_AMOUNT = 40;
const AMOUNT_OF_VERTEXES = 15;
const Y_RANGE = 90;
const X_RANGE = 8;
const SPEED = 1;

function setup() {
	createCanvas(700, 700, WEBGL);
	angleMode(DEGREES);
}

function draw() {
	background(30);

	// rotateY(60);

	noFill();
	stroke(255);

	for (let i = 0; i < SHAPES_AMOUNT; i++) {
		let r = map(sin(frameCount / 2), -1, 1, 100, 255);
		let g = map(i, 0, SHAPES_AMOUNT, 100, 255);
		let b = map(cos(frameCount / 2), -1, 1, 255, 100);

		let n = noise(i);
		// translate(0, -5 * n);
		rotate(30 + sin(i + frameCount * n));

		stroke(r, 0, b);

		// rotate(frameCount / 20);

		beginShape();
		for (let j = 0; j < 360; j += 360 / AMOUNT_OF_VERTEXES) {
			let rad = i * X_RANGE;
			let x = rad * cos(j + frameCount / 2);
			let y = rad * sin(j + frameCount / 2);
			let z = sin(frameCount * SPEED + i * 5) * Y_RANGE;

			vertex(x, y, z);
			vertex(x / 1.5, y / 1.5, z / 2);
			vertex(x / 3, y / 3, z / 2);
		}
		endShape(CLOSE);
	}
}
