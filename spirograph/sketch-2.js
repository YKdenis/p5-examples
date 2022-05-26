const NUMCHAINS = 16; // How many chains at once
const NUMCIRCLES = 5;
const NUMSINES = NUMCIRCLES * NUMCHAINS; // how many of these things can we do at once?
let sines = new Array(NUMSINES); // an array to hold all the current angles of the sines
let rad; // an initial radius value for the central sine
let i; // a counter variable
const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2;

// play with these to get a sense of what's going on:
let fund = 0.005; // the speed of the central sine
let ratio = 1; // what multiplier for speed is each additional sine?
let alpha = 10; // how opaque is the tracing system

function setup() {
	createCanvas(750, 750);
	// Define colors
	c1 = color(239, 71, 111);
	c2 = color(7, 59, 76);

	rad = height / 5; // compute radius for central circle

	for (let i = 1; i <= NUMCHAINS; i++) {
		for (let j = 1; j <= NUMCIRCLES; j++) {
			let counter = i * NUMCIRCLES - j;
			let startingAngle = (TWO_PI * i) / NUMCHAINS; // starting angle
			let isEvenCircle = (i % j) % 2;
			sines[counter] = startingAngle + PI * isEvenCircle;
		}
	}
}

function draw() {
	strokeWeight(4);
	fill(c1); // don't fill
	background(c2);
	// setGradient(0, 0, width, height, c2, c1, X_AXIS); // create gradient background
	stroke('#ffd166'); // black pen
	// MAIN ACTION
	push(); // start a first transformation matrix
	translate(width / 2, height / 2); // move to middle of screen

	for (let i = 1; i <= NUMCHAINS; i++) {
		push(); // start a second transformation matrix
		for (let j = 1; j <= NUMCIRCLES; j++) {
			let counter = i * NUMCIRCLES - j;
			let radius = rad / (j * 2 - 1); // radius for circle itself
			rotate(sines[counter]); // rotate circle
			ellipse(0, 0, radius * 2, radius * 2); // if we're simulating, draw the sine
			push(); // go up one level
			translate(0, radius); // move to sine edge
			// ellipse(0, 0, 5, 5); // draw a little circle
			pop(); // go down one level
			translate(0, radius); // move into position for next sine
			sines[counter] = (sines[counter] + (fund + fund * j * ratio)) % TWO_PI; // update angle based on fundamental
		}
		pop(); // pop down final transformation
	}
	ellipse(0, 0, rad * 2, rad * 2); // draw a circle on top hiding the last computed chain.

	pop(); // pop down final transformation
}

function setGradient(x, y, w, h, c1, c2, axis) {
	noFill();

	if (axis === Y_AXIS) {
		// Top to bottom gradient
		for (let i = y; i <= y + h; i++) {
			let inter = map(i, y, y + h, 0, 1);
			let c = lerpColor(c1, c2, inter);
			stroke(c);
			line(x, i, x + w, i);
		}
	} else if (axis === X_AXIS) {
		// Left to right gradient
		for (let i = x; i <= x + w; i++) {
			let inter = map(i, x, x + w, 0, 1);
			let c = lerpColor(c1, c2, inter);
			stroke(c);
			line(i, y, i, y + h);
		}
	}
}
