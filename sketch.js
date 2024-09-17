/* ManuTorres
8/26/2024
Document programs in order to make them easier to follow, test, and debug. 2-AP-19
Systematically test and refine programs  2-AP-17*/
   

let xLocation = 200;


function setup() {
  createCanvas(420, 500);
}

function draw() {
  background(6,34,992)//blue;
fill(0);

  stroke(255);
  strokeWeight(1);
  
   // Start drawing the shape.
  beginShape();

  // Add vertices.
  vertex(60, 140);
  vertex(200, 0);
  vertex(340, 0);
  vertex(xLocation, 140);
  
 
  // Stop drawing the shape.
  endShape(CLOSE);

   beginShape();
  vertex(60, 140);
  vertex(200, 140);
  vertex(140,200 );
  vertex(0,200 );
  
  endShape(CLOSE);

//Mouse coordinate finder: 
  
  fill(0); 
  
  beginShape();

  // Add vertices.
  vertex(140, 200);
  vertex(200, 140);
  vertex(200, 440);
  vertex(140, 500);
  
 
  // Stop drawing the shape.
  endShape(CLOSE);
  
  
  
   beginShape();

  // Add vertices.
  vertex(340,0);
  vertex(340,220);
  vertex(230,338);
  vertex(230,110);
  
 
  // Stop drawing the shape.
  endShape(CLOSE);
  
  
    
  
  
   beginShape();

  // Add vertices.
  vertex(230,338);
  vertex(340,220);
  vertex(365,240);
  vertex(260,358);
 
  
 
  // Stop drawing the shape.
  endShape(CLOSE);
  
  
  
  noStroke();

fill(255,0,0);

text("("+mouseX+","+mouseY+")", mouseX, mouseY);
//rect(2,220,300,80);




}
