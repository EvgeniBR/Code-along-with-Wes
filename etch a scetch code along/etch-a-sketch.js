//selects the elements
const canvas = document.querySelector(`#etch-a-sketch`);
const ctx = canvas.getContext(`2d`);
const shakebutton = document.querySelector(`.shake`);
const Move_Amount = 10;
//steup canvas
const width = canvas.width;
const height = canvas.height;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
let hue = 0;
ctx.strokeStyle = `hsl(${hue} ,100% , 50%)`;
ctx.lineJoin = `round`;
ctx.lineCap = `round`;
ctx.lineWidth = 20;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

//write a draw function
function draw({ key }) {
  hue = hue+10;
  ctx.strokeStyle = `hsl(${hue} ,100% , 50%)`;
  console.log(key);
  ctx.beginPath();
  ctx.moveTo(x, y);

 switch (key){
   case `ArrowUp`: 
   y = y- Move_Amount;
   break;
   case `ArrowDown`: 
   y = y+ Move_Amount;
   break;
   case `ArrowLeft`: 
   x = x- Move_Amount;
   break;
   case `ArrowRight`: 
   x = x+ Move_Amount;
   break;

   default: break;
 }
  ctx.lineTo(x, y);
  ctx.stroke();
}
//write a handler for the keys
function handleKey(e) {
  if (e.key.includes(`Arrow`)) {
    draw({ key: e.key });

    e.preventDefault();
  }
}
//clear function
function clearCanvas(){
  canvas.classList.add(`shake`);
  ctx.clearRect(0,0, width , height);
  canvas.addEventListener(`animationend`,function(){
    console.log(`done the shake`);
    canvas.classList.remove(`shake`);
  },{once:true})
}

shakebutton.addEventListener(`click` ,clearCanvas );
//listen for arrow keys
window.addEventListener(`keydown`, handleKey);
