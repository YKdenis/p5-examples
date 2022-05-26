const NUMLEVELS = 4;
const NUMSINES = NUMLEVELS > 1 ? Math.pow(2, NUMLEVELS - 1) - 1 : 1; // how many of these things can we do at once?
let sines = new Array(NUMSINES); // an array to hold all the current angles of the sines
let rad; // an initial radius value for the central sine

let c1, c2;

// play with these to get a sense of what's going on:
let fund = 0.005; // the speed of the central sine
let ratio = 0.1; // what multiplier for speed is each additional sine?
let alpha = 10; // how opaque is the tracing system

function setup() {
	createCanvas(750, 750);
	// blendMode(LIGHTEST);
	// noLoop();
	// Define colors
	c1 = color(239, 71, 111);
	c2 = color(7, 59, 76);

	rad = height / 1.2; // compute radius for central circle

	for (let i = 0; i < NUMSINES; i++) {
		sines[i] = PI; // starting angle
	}
	console.log(sines, PI);
}

function draw() {
	background(0);
	// MAIN ACTION
	push(); // start a first transformation matrix
	translate(width / 2, height / 2); // move to middle of screen

	for (let i = 0; i < sines.length; i++) {
		const tt = (126 * i) / 4.0;
		stroke(0);
		fill(tt);
		if (i == 0) {
			noStroke();
			noFill();
		}

		rad = rad / 2; // radius for circle itself
		rotate(sines[i]); // rotate circle
		ellipse(0, 0, rad * 2, rad * 2); // if we're simulating, draw the sine
		translate(0, rad / 2); // move into position for next sine
		sines[i] = (sines[i] + (fund + fund * i * ratio)) % TWO_PI; // update angle based on fundamental
	}
	rad = -height / 1.2;
	pop(); // pop down final transformation
	push();
	translate(width / 2, height / 2); // move to middle of screen
	for (let i = 0; i < sines.length; i++) {
		const tt = (126 * i) / 4.0;
		stroke(0);
		fill(tt);
		if (i == 0) {
			noStroke();
			noFill();
		}

		rad = rad / 2; // radius for circle itself
		rotate(sines[i]); // rotate circle
		ellipse(0, 0, rad * 2, rad * 2); // if we're simulating, draw the sine
		translate(0, rad / 2); // move into position for next sine
		sines[i] = (sines[i] + (fund + fund * i * ratio)) % TWO_PI; // update angle based on fundamental
	}
	rad = height / 1.2;
	pop(); // pop down final transformation
}
