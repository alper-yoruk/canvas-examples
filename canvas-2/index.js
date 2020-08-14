let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

function Circle(x,y, dx, dy, circleRadius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.circleRadius = circleRadius;

    this.draw = function () {
        c.beginPath();
        c.arc(this.x,this.y,this.circleRadius,0,Math.PI * 2, false);
        c.strokeStyle = "red";
        c.fillStyle = 'green';
        c.fill();
        c.stroke();
    };

    this.update = function () {
        if( this.x + this.circleRadius > innerWidth || this.x - this.circleRadius < 0) {
            this.dx = -this.dx;
        }

        if( this.y + this.circleRadius > innerHeight || this.y - this.circleRadius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    };

}

let circleArray = [];

for(let i=0; i<100; i++) {
    let circleRadius = 30;
    let x = Math.random() * (innerWidth - circleRadius * 2) + circleRadius;
    let y = Math.random() * (innerHeight - circleRadius * 2) + circleRadius;
    let dx = (Math.random() - 0.2);
    let dy = (Math.random() - 0.2);
    circleArray.push(new Circle(x, y, dx, dy, circleRadius));
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth, innerHeight);

    for(let i=0; i<circleArray.length; i++) {
        circleArray[i].update();
    }
}

animate();
