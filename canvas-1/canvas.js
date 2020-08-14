let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

c.fillStyle = 'rgba(99, 0, 0, 0.4)';
c.fillRect(100, 230, 100, 100);
c.fillStyle = 'rgba(0, 255, 0, 0.4)';
c.fillRect(300, 400, 100, 100);
console.log(canvas);

function getRandomColor() {

    return "#"+((1<<24)*Math.random()|0).toString(16);
}

//Line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 122);
c.lineTo(400, 300);
c.strokeStyle = getRandomColor();

console.log(c.strokeStyle);
c.stroke();

for(let i=0; i<5; i++){
    c.beginPath();
    c.moveTo(50*i, 300);
    c.lineTo(300, 122);
    c.lineTo(400, 300);
    c.strokeStyle = "getRandomColor";
    console.log(c.strokeStyle);
    c.stroke();
}

//Ark - Circle
c.beginPath();
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = "green";
c.stroke();

for(let i=0; i<111; i++){
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = getRandomColor();
    c.stroke();
}
