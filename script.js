let canvas = document.querySelector("#my-canvas");

/**@type {CanvasRenderingContext2D}*/
let ctx = canvas.getContext("2d");

let xPos = 0;
let drawMiniPanda = false;
let mouse = {
    x: 0,
    y: 0
  }

// eventlistener for the "L" key
window.addEventListener("keydown", (e) => {
  if (e.key == "L" || e.key == "l") {
    console.log("bib");
    drawMiniPanda = !drawMiniPanda;
  }
});

//Farver
let colors = {
  white: "#FFFFFF",
  black: "#24170e",
};
 //Gradient
    let myGradient = ctx.createLinearGradient(0, 0, 1100, 100);
    myGradient.addColorStop(0.01, "#3ed0ea");
    myGradient.addColorStop(0.5, "pink");
    myGradient.addColorStop(1, "#3ed0ea");

    //Gradient
    const gradient = ctx.createLinearGradient(0, 0, 1100, 100);
    gradient.addColorStop(0, "pink");
    gradient.addColorStop(0.5, "cyan");
gradient.addColorStop(1, "pink");

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  //baggrund
  ctx.beginPath();
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1100, 1100);

//kasse
ctx.beginPath(); 
ctx.strokeStyle = 'white'
ctx.lineWidth = 5;
ctx.strokeRect(42, 42, 1000, 1000);

  
//EARS baggrund
  ctx.beginPath();
  ctx.fillStyle = colors.black;
  fillCircle(890, 320, 80);
  
//TEKST
    ctx.font = "300px Agbalumo";
    ctx.fillStyle = myGradient; // Pass the myGradient variable, not a string
    ctx.fillText("PANDA", 10, 255);
  
  if (drawMiniPanda) {
    newFunction();
  }
  //2ndPanda

  //newFunction();

  //KROP bue op
  ctx.beginPath();
  ctx.fillStyle = colors.white;
  ctx.arc(330, 580, 280, 0, 5 * Math.PI, 1, 5 * Math.PI);
  ctx.lineWidth = 30;
  ctx.fill();

  //Krop
  ctx.beginPath();
  ctx.fillStyle = colors.white;
  ctx.rect(150, 430, 410, 360);
  ctx.fill();

  //TREKANT NUMSE
  ctx.beginPath();
  ctx.fillStyle = colors.white;
  //øverste hjørne
  ctx.moveTo(150, 400);
  //nederste
  ctx.lineTo(150, 790);
  //midten
  ctx.lineTo(50, 590);
  ctx.closePath();
  ctx.fill();

  //Hale
  ctx.beginPath();
  ctx.fillStyle = colors.black;
  fillCircle(50, 560, 40);

  //forben
  ctx.beginPath();
  ctx.fillStyle = colors.black;
  ctx.rect(550, 400, 310, 360);
  ctx.fill();

  //bagben op
  ctx.beginPath();
  ctx.fillStyle = colors.black;
  ctx.rect(150, 400, 240, 360);
  ctx.fill();

  //Hvidt på ben
  ctx.beginPath();
  ctx.fillStyle = colors.white;
  ctx.rect(150, 400, 240, 200);
  ctx.fill();

  //bue på ben
  ctx.beginPath();
  ctx.fillStyle = colors.black;
  ctx.arc(270, 620, 121, 0, 5 * Math.PI, 1, 5 * Math.PI);
  ctx.lineWidth = 30;
  ctx.fill();

  //circkle hoved
  ctx.fillStyle = colors.white;
  fillCircle(790, 500, 200);

  ctx.beginPath();
  ctx.fillStyle = colors.white;
  fillCircle(960, 550, 78);
  fillCircle(920, 560, 90);

  //forrest Fod
  ctx.beginPath();
  ctx.fillStyle = colors.black;
  ctx.rect(550, 650, 300, 140);
  ctx.fill();

  //halv fod f0rrest
  ctx.beginPath();
  ctx.fillStyle = colors.black;
  ctx.arc(840, 720, 70, 0.5 * Math.PI, 1.5 * Math.PI, 1.5 * Math.PI);
  ctx.lineWidth = 0;
  ctx.fill();

  //bag fod
  ctx.fillStyle = colors.black;
  ctx.rect(150, 650, 300, 140);
  ctx.fill();

  //halv fod bagerst
  ctx.beginPath();
  ctx.fillStyle = colors.black;
  ctx.arc(440, 720, 70, 0.5 * Math.PI, 1.5 * Math.PI, 1, 5 * Math.PI);
  ctx.lineWidth = 0;
  ctx.fill();

  //Nose
  ctx.beginPath();
  ctx.fillStyle = colors.black;
  fillCircle(1010, 540, 30);

  //øje
  ctx.beginPath();
  ctx.fillStyle = colors.black;
  fillCircle(850, 440, 50);

  //halvt øje
  ctx.beginPath();
  ctx.arc(967, 425, 48, 1.4 * Math.PI, 1, 1 * Math.PI);
  ctx.lineWidth = 0;
  ctx.fill();
 
  //
  ctx.beginPath();
  ctx.fillStyle = colors.white;
  ctx.arc(970, 420, 8, 1.4 * Math.PI, 1, 1 * Math.PI);
  ctx.lineWidth = 0;
  ctx.fill();

  //øje indeni
  ctx.beginPath();
  ctx.fillStyle = colors.white;
  fillCircle(850, 440, 8);

  //Ears
  ctx.beginPath();
  ctx.fillStyle = colors.black;
  fillCircle(690, 350, 80);

//TEKST
ctx.font = "150px Agbalumo";
ctx.fillStyle = myGradient; // Pass the myGradient variable, not a string
ctx.fillText("THE BAMBOO", 74, 910);

ctx.font = "200px Agbalumo";
ctx.fillStyle = myGradient; // Pass the myGradient variable, not a string
ctx.fillText("BLUES", 210, 1065);


  requestAnimationFrame(draw);
}

function newFunction() {
  ctx.beginPath();
  ctx.fillStyle = colors.black;
  fillCircle(390, 270, 80);

  //Ears
  ctx.beginPath();
  ctx.fillStyle = colors.black;
  fillCircle(625, 280, 80);

  //circkle hoved
  ctx.fillStyle = colors.white;
  fillCircle(500, 430, 200);

  //øje
  ctx.beginPath();
  ctx.fillStyle = colors.black;
  fillCircle(430, 360, 50);

  ctx.beginPath();
  ctx.fillStyle = colors.black;
  fillCircle(580, 360, 50);

  ctx.beginPath();
  ctx.fillStyle = colors.white;
  fillCircle(580, 365, 10);

  //TEXT
  ctx.font = "240px Agbalumo";
  ctx.fillStyle = myGradient; // Pass the myGradient variable, not a string
  ctx.fillText("S", 940, 200);



// //TEXT
// ctx.font = "80px Agbalumo";
// ctx.fillStyle = 'pink'; // Pass the myGradient variable, not a string
// ctx.fillText("", 370, 880);



}

// Helper funtions - cickle skal have x kordinat og y korndinat og en radius samler ens formel et sted
function fillCircle(x, y, radius) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}

//font til en variable
let fontface = new FontFace("Agbalumo", "url (Agbalumo-Regular copy.ttf)");
document.fonts.add(fontface);

draw();
