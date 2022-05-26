const SHAPES_AMOUNT = 100;
const AMOUNT_OF_VERTEXES = 3;
const Y_RANGE = 20;
const X_RANGE = 3;
const SPEED = 5;

function setup() {
	createCanvas(700, 700, WEBGL);
	angleMode(DEGREES);
}

function draw() {
	background(0);

	rotateX(60);

	stroke(255);
	for (let i = 0; i < SHAPES_AMOUNT; i++) {
		let n = noise(i);
		let r = map(sin(frameCount) * n * 2, -1, 1, 0, 255);
		let g = map(n * 10, 0, SHAPES_AMOUNT, 0, 255);
		let b = map(cos(frameCount) * n, -1, 1, 255, 0);

		translate(0, -5 * n);
		rotateY(30 + sin(frameCount / 5) * n);
		rotateX(n + 30);

		stroke(r, g, b);
		fill(r, g, b);
		// noFill();

		// rotate(frameCount / 20);

		beginShape();
		for (let j = 0; j < 360; j += 360 / AMOUNT_OF_VERTEXES) {
			let rad = i * X_RANGE;
			// let x = rad * cos(j);
			// let y = rad * sin(j);
			// let z = 0;
			let x = rad * cos(j + frameCount / 2);
			let y = rad * sin(j + frameCount / 2);
			let z = sin(frameCount * SPEED + i * 5) * Y_RANGE;

			vertex(x, y, z);
		}
		endShape(CLOSE);
	}
}
