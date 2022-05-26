let s1, s2, s3, s4;
let gravity = 9.0;
let mass = 3.0;

function setup() {
	createCanvas(720, 720);
	fill('#3a5a40');
	// Inputs: x, y, mass, gravity
	s1 = new Spring2D(0.0, width / 2, mass, gravity);
	s2 = new Spring2D(0.0, width / 2, mass, gravity);
	s3 = new Spring2D(0.0, width / 2, mass, gravity);
	s4 = new Spring2D(0.0, width / 2, mass, gravity);
}

function draw() {
	background('#588157');
	s1.update(mouseX, mouseY);
	s1.display(mouseX, mouseY);
	s2.update(s1.x, s1.y);
	s2.display(s1.x, s1.y);
	s3.update(s2.x, s2.y);
	s3.display(s2.x, s2.y);
	s4.update(s3.x, s3.y);
	s4.display(s3.x, s3.y);
}

function Spring2D(xpos, ypos, m, g) {
	this.x = xpos; // The x- and y-coordinates
	this.y = ypos;
	this.vx = 0; // The x- and y-axis velocities
	this.vy = 0;
	this.mass = m;
	this.gravity = g;
	this.radius = 30;
	this.stiffness = 0.3;
	this.damping = 0.7;

	this.update = function (targetX, targetY) {
		let forceX = (targetX - this.x) * this.stiffness;
		let ax = forceX / this.mass;
		this.vx = this.damping * (this.vx + ax);
		this.x += this.vx;
		let forceY = (targetY - this.y) * this.stiffness;
		forceY += this.gravity;
		let ay = forceY / this.mass;
		this.vy = this.damping * (this.vy + ay);
		this.y += this.vy;
	};

	this.display = function (nx, ny) {
		noStroke();
		ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
		stroke('#3a5a40');
		line(this.x, this.y, nx, ny);
	};
}
