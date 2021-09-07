const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const button = document.querySelector('.shake');

const {width, height} = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

let move_amount = 10;

ctx.lineJoin = 'round';
ctx.lineCap = "round";
ctx.lineWidth = move_amount;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x,y);
ctx.stroke();

function draw({key}){
    hue += 3;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(x,y);

    switch(key){
        case 'ArrowUp':
            y -= move_amount;
            break;
        case 'ArrowRight':
            x += move_amount;
            break;
        case 'ArrowDown':
            y += move_amount;
            break;
        case 'ArrowLeft':
            x -= move_amount;
            break;
        default:
            break;
    }
    ctx.lineTo(x,y);
    ctx.stroke();
}

function handleKey(e){
    if(e.key.includes('Arrow')){
        e.preventDefault();
        draw({key: e.key});
    }
}

window.addEventListener('keydown', handleKey);

function clearCanvas(){
    canvas.classList.add('shakee');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener('animationend', function(){
        canvas.classList.remove('shakee');
        // canvas.removeEventListener();
    },  {once: true}
    );
}

button.addEventListener('click', clearCanvas);