const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var backgroundImg
function preload() {
  getBackgroundImg()
}


function setup() {
  createCanvas(800, 400)

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(405, 370, 300, 10);

  box1 = new Box(400, 340, 50, 70);

  box2 = new Box(360, 340, 50, 70)

  box3 = new Box(100, 100, 50, 50)

  box4 = new Box(330, 340, 50, 70)

  box5 = new Box(430, 340, 50, 70)
  box6 = new Box(500, 340, 50, 70)
  box7 = new Box(475, 250, 50, 70)
  box8 = new Box(425, 250, 50, 70)
  box9 = new Box(375, 250, 50, 70)
  box10 = new Box(325, 250, 50, 70)
  box11 = new Box(450, 190, 50, 70)
  box12 = new Box(400, 190, 50, 70)
  box13 = new Box(350, 190, 50, 70)
  box14 = new Box(425, 130, 50, 70)
  box15 = new Box(375, 130, 50, 70)
  box16 = new Box(400, 70, 50, 70)
  rope = new SlingShot(box3.body, { x: 70, y: 120 })

}

function draw() {
  Engine.update(engine)

  if (backgroundImg) {
    background(backgroundImg)
  }

  ground1.display();




  fill("lightblue")
  box1.display();
  box2.display();
  rope.display();
  box4.display()
  box5.display()
  box6.display()
  fill("pink")
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  fill("cyan")
  box11.display()
  box12.display()
  box13.display()
  fill("skyblue")
  box14.display()
  box15.display()
  fill("lightgreen")
  box16.display()
  fill("red")
  box3.display()
  textSize(30);
  text("x : " + mouseX + "y : " + mouseY, mouseX, mouseY);

  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(box3.body, { x: mouseX, y: mouseY });
}


function mouseReleased() {
  rope.fly();
}

  async function getBackgroundImg(){
  
  var response = await fetch("http://worldclockapi.com/api/json/est/now");

  var responseJSON = await response.json();

  var datetime = responseJSON.currentDateTime;

  var hour = datetime.slice(11,13);

  console.log(hour);

  if (hour >=6  && hour <= 7 ) {
    bg = "morning.jpg"
  }
  else {
    bg = "night.jpg"
  }

  backgroundImg = loadImage(bg);
} 
