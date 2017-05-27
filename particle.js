var gravity = -0.1;

function Particle(x, y){
	this.x = x;
	this.y = y;
	this.c = 0;

	this.xspeed = 0;
	this.yspeed = 0;

	this.history = [];

	this.update = function(){
		
		if (this.c < 255){
			this.c += 0.1;
		} else {
			this.c = 0;
		}
		
		this.y += this.yspeed;
		this.x += this.xspeed;
		this.yspeed += gravity;
		this.xspeed += gravity;

		if (this.y > height - 12){
			this.y = height - 12;
			this.yspeed *= -1;
		}

		if (this.y < 12){
			this.y = 12;
			this.yspeed *= -1;
		}

		if (this.x > width - 12){
			this.x = width - 12;
			this.xspeed *= -1;
		}
		if (this.x < 12){
			this.x = 12;
			this.xspeed *= -1;
		}

		var v = createVector(this.x, this.y);
		this.history.push(v);

		if (this.history.length > 25){
			this.history.splice(0, 1);
		}
	}

	this.show = function(){
		noStroke();
		for (var i = 0; i < this.history.length; i++){
			var pos = this.history[i];
			fill(this.c, 255, 255/this.history.length*i)
			ellipse(pos.x, pos.y, 24, 24);
		}
		fill(this.c, 255, 255);
		ellipse(this.x, this.y, 24, 24);
	}
}

