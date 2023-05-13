var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d",{ alpha: false });
var radius = 50.0;
var delta = 10;
var label = document.getElementById("label");
var text = ["Hai cominciato da 0...","Hai trovato collaboratori e clienti...","Hai trovato un prodotto o servizio vincente...","Hai dedicato anni e anni a costruire un’idea e una rete…","A volte hai dovuto rallentare un po’: è stata dura…","Altre invece hai corso e sudato fino all'ultimo…","Solo tu sai quanto unica è la tua attività...","Che sia un’idea o qualcosa di molto più concreto…","Merita un colpo di fulmine con tutti i possibili clienti del tuo territorio","Dai una forma concreta online al tuo business e tappa i buchi che ti rallentano. <br><br> Io sono Alessandro, e la mia esperienza urla alle piccole aziende di <i>implementare poco, ma in maniera efficace</i> se si parla di online. <br><br> Connettiti con il resto del mondo in maniera creativa, <b>ottieni subito un progetto gratuito, clicca qui sotto.</b> <br><br>Conosciamoci meglio."];
var index = 0;
var scorrimento = 0;
var opacity=1;

function drawCircle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(canvas.width/2, canvas.height/2, radius, 0, 2*Math.PI);
  ctx.fillStyle = "#fff";
  ctx.fill();
}

async function updateLabel() {
  for(let i=0;i<(delta*10);i++){
    label.style.opacity=opacity;
    await sleep(6);
    opacity-=0.1;
  }
  label.innerHTML = text[index];
  opacity=1;
  label.style.opacity=opacity;
  index = (index + 1) % 10;
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function bigger() {
  for(let i=0;i<(delta*10);i++){
    radius+=0.05;
    if(i<20){
      await sleep(10);
    }
    else{
      await sleep(1);
    }
    drawCircle();
  }
  updateLabel();
}
async function morebigger() {
  updateLabel();
  for(let i=0;i<(delta*10);i++){
    radius+=0.4;
    if(i<20){
      await sleep(10);
    }
    else{
      await sleep(1);
    }
    drawCircle();
  }
}

async function toZero() {
  for(let i=0;i<(delta*10);i++){
    radius-=0.5;
    if(i<20){
      await sleep(10);
    }
    else{
      await sleep(1);
    }
    drawCircle();
  }
  let opacity2=1;
  for(let i=0;i<(delta*10);i++){
    document.getElementById("arrow").style.opacity=opacity2;
    await sleep(6);
    opacity2-=0.1;
  }
  updateLabel();
}
async function fillall(){
  for(let i=0;i<(delta*10);i++){
    radius+=1;
    if(i<20){
      await sleep(10);
    }
    else{
      await sleep(1);
    }
    drawCircle();
  }
  updateLabel();

  document.getElementById("myCanvas").style.visibility = "hidden";
}

async function stop(){
  updateLabel();
}

async function appearButton(){
  let opacity2=0;
  await sleep(2000);
  for(let i=0;i<(delta*10);i++){
    document.getElementById("btn").style.opacity=opacity2;
    await sleep(20);
    opacity2+=0.1;
  }
}

document.addEventListener("click", function(){
  switch(scorrimento){
    case 0:
      toZero();
      scorrimento++;
      break;
    case 1:
      bigger();
      scorrimento++;
      document.getElementById("arrow").style.visibility = "hidden";
      break;
    case 4:
      stop();
      scorrimento++;
      break;
    case 5:
      morebigger();
      scorrimento++;
      break;
    case 8:
      stop();
      scorrimento++;
      break;
    case 9:
      fillall();
      appearButton();
      scorrimento=1000;
      break;


    default:
    if(scorrimento!=1000){
      bigger();
      scorrimento++;
      break;
    }
    else{
      break;
    }
  }
});
drawCircle();
