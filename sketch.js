var particles = [];

function setup() {
	createCanvas(1366,768);
	colorMode(HSB, 255);
	particle = new Particle(100,height - 100);
}

function mousePressed(){
	particles.push(new Particle(mouseX, mouseY));
}

function draw() {
	background(0);
	for (var i = 0; i < particles.length; i++){
		particles[i].update();
		particles[i].show();
	}
	
}

