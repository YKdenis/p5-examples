const SHAPES_AMOUNT = 70;
const AMOUNT_OF_VERTEXES = 4;
const Y_RANGE = 130;
const X_RANGE = 4;
const SPEED = 5;

function setup() {
	createCanvas(700, 700, WEBGL);
	angleMode(DEGREES);
}

function draw() {
	background(0);

	rotateX(60);
	translate(0, -250);

	stroke(255);
	for (let i = 0; i < SHAPES_AMOUNT; i++) {
		let n = noise(i);
		let r = map(sin(frameCount) * n * 2, -1, 1, 100, 200);
		let g = map(n * 10, 0, SHAPES_AMOUNT, 100, 150);
		let b = map(cos(frameCount) * n, -1, 1, 200, 100);

		translate(0, -5 * n);
		// rotateY(30 + sin(frameCount / 5) * n);
		translate(0, n + 5);

		stroke(r, g, b);
		fill(r, g, b);
		// noFill();

		// rotate(frameCount / 2);

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
