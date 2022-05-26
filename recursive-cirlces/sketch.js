// play with these to get a sense of what's going on:
let fund = 0.0005; // the speed of the central sine
let ratio = 1; // what multiplier for speed is each additional sine?
let alpha = 10; // how opaque is the tracing system

// 'level' is the variable that terminates the recursion once it reaches
// a certain value (here, 1). If a terminating condition is not
// specified, a recursive function keeps calling itself again and again
// until it runs out of stack space - not a favourable outcome!
let level = 3;

let rad; // an initial radius value for the central sine
let sines; // an array to hold all the current angles of the sines
let counter = 0; // counts how many circles have been drawn

function setup() {
	createCanvas(720, 720);
	background(0);
	noStroke();
	// noLoop();
	sines = new Array(pow(2, level - 1) - 1); // an array to hold all the current angles of the sines
	for (let i = 0; i < sines.length; i++) {
		sines[i] = PI; // start EVERYBODY facing NORTH
	}
	rad = height / 2 - 100; // compute radius for central circle
}

function draw() {
	background(0);
	push();
	translate(width / 2, height / 2);
	drawCircle(0, height / 2 - 100, level);
	pop();
}

function drawCircle(x, radius, level) {
	const tt = (126 * level) / 4.0;
	fill(tt);
	counter++;

	push();
	if (counter !== 1) {
		rotate(sines[counter]); // rotate circles
		translate(x, radius);
	}

	ellipse(0, 0, radius * 2, radius * 2);
	pop();

	sines[counter] = (sines[counter] + (fund + fund * counter * ratio)) % TWO_PI; // update angle based on fundamental
	console.log(counter, level);
	if (level > 1) {
		// 'level' decreases by 1 at every step and thus makes the terminating condition
		// attainable
		level = level - 1;

		drawCircle(x - radius / 2, radius / 2, level);
		drawCircle(x + radius / 2, radius / 2, level);
	} else {
		counter = 0;
	}
}
