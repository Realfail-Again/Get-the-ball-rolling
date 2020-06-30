let groundPos = 300; //Sets the Position of the Ground
let circleX = 100; //X position of the center of the circle
let circleY = groundPos - 50; //Y position of the center of the circle (in relation to ground)
let posObjX = 350; //X position of the postion reference object
let posObjY = groundPos - 25; //Y position of top corner of position reference object
let i = 1; //Degree of rotation of the rotation reference objection

function setup() {
  createCanvas(400, 400); //Creates the canvas that is drawn upon
}
function drawGround() {
  stroke(0); //Chooses the color of the lines
  strokeWeight(5); //Makes all the lines thicker
  line(0, groundPos, width, groundPos); //draws the ground
}
function drawrotObj() { //Draws the two lines called the rotation reference object
  angleMode(DEGREES); //switches from radians to degrees
  translate(circleX, circleY); //Changes center of rotation from (0,0) to the ball's center
  rotate(i++); //increases the angle of rotation by one degree every cycle
  //Draws the two lines
  line(-5,0,5,0); 
  line(0,5,0,-5);
}
function drawBall() { //Draws the circle that acts as a ball
  fill(255); //changes the fill color of the ball
  circle(circleX,circleY,dist(circleX,circleY,circleX,groundPos)*2); //Draws circle on the ground
}
function drawposObj() { //Draws a square that serves as the position reference object
  fill(5, 4, 240); //changes color of the square
  square(posObjX,posObjY,dist(posObjX,posObjY,posObjX,groundPos)); //draws the square
  posObjX--; //Moves the square backwards
}

function draw() {
  background(220); //Sets the background color
  //Runs the functions
  drawGround();
  drawposObj();
  drawBall();//this function is lower to draw the ball in front of the position reference object
  drawrotObj();
  if (posObjX < -width) {
    posObjX = width;
  } //loops the postion reference object around the screen
}