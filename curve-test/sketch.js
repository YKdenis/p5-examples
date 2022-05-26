let NUMBER_OF_LINES = 8;
let lines = [];

const maxCpx = 1500;
const minCpx = -1000;
const spd = 25;

function setup() {
	createCanvas(700, 700);
	c1 = color(239, 71, 111);
	c2 = color(0, 0, 0);
	for (let i = 0; i < NUMBER_OF_LINES; i++) {
		lines[i] = {
			cpx1: minCpx,
			cpx2: maxCpx,
			cpx1_direction: 1,
			cpx2_direction: -1,
		};
	}
}

function draw() {
	background(c2);
	fill(c1);
	stroke(c1);
	for (let i = 0; i < lines.length; i++) {
		lines[i].cpx1_direction = checkBoundariesOfCpx(
			lines[i].cpx1,
			lines[i].cpx1_direction
		);
		lines[i].cpx2_direction = checkBoundariesOfCpx(
			lines[i].cpx2,
			lines[i].cpx2_direction
		);
		lines[i].cpx1 = lines[i].cpx1 + spd * lines[i].cpx1_direction;
		lines[i].cpx2 = lines[i].cpx2 + spd * lines[i].cpx2_direction;
	}

	curve(lines[0].cpx1, 150, 250, 50, 250, 250, lines[0].cpx2, 150);
}

function checkBoundariesOfCpx(cpx, direction) {
	if (cpx > maxCpx) {
		return -1;
	} else if (cpx < minCpx) {
		return 1;
	} else {
		return direction;
	}
}
