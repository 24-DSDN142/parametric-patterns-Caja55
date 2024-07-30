//your parameter variables go here!

let headX = 0   //0 = middle
let headY =0  //0= middle
let eyeSize = 8 // 8 usually
let bgColour;
let fishColour;
let fishSize = 1
let eyeColour;


//if statements 
let backgroundVar = 1
// 0, basic fish
//1, 

let fishVar = 1 //1 fish 
let bubbleVar = 2 // 1=normal bubbles 2=many small bubles


//ignore me

// bubble code 
let bubbleX = 0
let bubbleY = 0
let bubbleSize = 10
//fish sizing code (so it moves together)
let rectSize = 50 * fishSize;
let mouthSize = 3 * fishSize;
let eyeDiameter = eyeSize * fishSize;
let bigOvalWidth = 50 * fishSize;
let bigOvalHeight = 82 * fishSize;
let smallOvalWidth = 25 * fishSize;
let smallOvalHeight = 41 * fishSize;
let tailSize = 25 * fishSize;
let tailOffset = 10 * fishSize;
  


function setup_wallpaper(pWallpaper) {

// colours for fishy
bgColour = color(255, 251, 230);
fishColour = color(0,8,51)
eyeColour = color(153,25,0)

  angleMode(DEGREES);// for head and tail square


  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}


function wallpaper_background() {

  background(bgColour); 

}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  

{//draw fish

if (backgroundVar == 1){
  DrawBubble(130,60)
  DrawBubble(135,40)
  DrawNew(0, 0, fishSize); 
}

if (backgroundVar ==2){
  DrawNew(60, 100, fishSize); 
  DrawNew(-10, 100, fishSize);
  DrawNew(-80, 100, fishSize); 
   
  DrawNew(-80, 0, fishSize, true); // Mirrored fish
  DrawNew(-10, 0, fishSize, true);
  DrawNew(60, 0, fishSize, true); 
  DrawNew(130, 0, fishSize, true); 
   
  DrawNew(60, -100, fishSize); 
  DrawNew(-10, -100, fishSize);
  DrawNew(-80, -100, fishSize); 

}




}

}














function DrawNew(headX,headY,fishSize, mirror = false){//fish face
  
  //fish face
    push();
    noStroke()
    translate(headX+100* fishSize, headY+100*fishSize); // Move to canvas center
    if (mirror) {
      scale(-1,1);//mirror fishy
    }
    rotate(45);
    rectMode(CENTER);
    fill(fishColour)
    rect(0, 0, rectSize, rectSize); // Draw at (0,0) which is now the canvas center
    fill(bgColour)
    rect(24 * fishSize, -24* fishSize, mouthSize, mouthSize)//mouth
    pop();
  
  //eye
  noStroke()
  fill(eyeColour)
  if (mirror){
    circle(headX +80*fishSize, headY+100 * fishSize,eyeDiameter)//for mirrored fish eye
    fill(fishColour);
    circle(headX +80 *fishSize, headY+100*fishSize, eyeDiameter-2 * fishSize)
  } else {
  circle(headX+120* fishSize,headY+100* fishSize,eyeDiameter)
  fill(fishColour)
  circle(headX+120* fishSize,headY+100* fishSize,eyeDiameter-2* fishSize)
  }
  
  //big oval
    noStroke()
    fill(bgColour)
    if (mirror){
      ellipse(headX +113*fishSize, headY + 100* fishSize,bigOvalWidth,bigOvalHeight)
    } else {
    ellipse(headX+87* fishSize,headY+100* fishSize,bigOvalWidth,bigOvalHeight)
    }
  
    // tail
    push();
    noStroke()
    translate(headX+100* fishSize, headY+100* fishSize); // Move to canvas center
    if (mirror){
    scale(-1,1);//mirror fish tail
    }
    rotate(45);
    rectMode(CENTER);
    fill(fishColour)
    rect(-tailOffset, tailOffset, tailSize, tailSize); 
    pop();
  
  
   //small oval
   if (mirror) {
    ellipse(headX+120* fishSize,headY+100* fishSize,smallOvalWidth,smallOvalHeight)
   } else{
    ellipse(headX+80* fishSize,headY+100* fishSize,smallOvalWidth,smallOvalHeight)
   }
  }


  function DrawBubble(bubbleX,bubbleY){

    fill(fishColour)
    circle(bubbleX ,bubbleY,bubbleSize)
    
    fill(255)
    circle(bubbleX+2,bubbleY-2,bubbleSize-7)
    circle(bubbleX+3,bubbleY,bubbleSize-8)
    
    }
    

























  // DrawNewFish1(60, 100, fishSize); 
  // DrawNewFish1(-10, 100, fishSize);
  // DrawNewFish1(-80, 100, fishSize); 
  
  
  // DrawNewFish1(-80, 0, fishSize, true); // Mirrored fish
  // DrawNewFish1(-10, 0, fishSize, true);
  // DrawNewFish1(60, 0, fishSize, true); 
  // DrawNewFish1(130, 0, fishSize, true); 
  
  // DrawNewFish1(60, -100, fishSize); 
  // DrawNewFish1(-10, -100, fishSize);
  // DrawNewFish1(-80, -100, fishSize); 
  




function DrawNewFish1(headX,headY,fishSize, mirror = false){//fish face
  
//fish face
  push();
  noStroke()
  translate(headX+100* fishSize, headY+100*fishSize); // Move to canvas center
  if (mirror) {
    scale(-1,1);//mirror fishy
  }
  rotate(45);
  rectMode(CENTER);
  fill(fishColour)
  rect(0, 0, rectSize, rectSize); // Draw at (0,0) which is now the canvas center
  fill(bgColour)
  rect(24 * fishSize, -24* fishSize, mouthSize, mouthSize)//mouth
  pop();

//eye
noStroke()
fill(eyeColour)
if (mirror){
  circle(headX +80*fishSize, headY+100 * fishSize,eyeDiameter)//for mirrored fish eye
  fill(fishColour);
  circle(headX +80 *fishSize, headY+100*fishSize, eyeDiameter-2 * fishSize)
} else {
circle(headX+120* fishSize,headY+100* fishSize,eyeDiameter)
fill(fishColour)
circle(headX+120* fishSize,headY+100* fishSize,eyeDiameter-2* fishSize)
}

//big oval
  noStroke()
  fill(bgColour)
  if (mirror){
    ellipse(headX +113*fishSize, headY + 100* fishSize,bigOvalWidth,bigOvalHeight)
  } else {
  ellipse(headX+87* fishSize,headY+100* fishSize,bigOvalWidth,bigOvalHeight)
  }

  // tail
  push();
  noStroke()
  translate(headX+100* fishSize, headY+100* fishSize); // Move to canvas center
  if (mirror){
  scale(-1,1);//mirror fish tail
  }
  rotate(45);
  rectMode(CENTER);
  fill(fishColour)
  rect(-tailOffset, tailOffset, tailSize, tailSize); 
  pop();


 //small oval
 if (mirror) {
  ellipse(headX+120* fishSize,headY+100* fishSize,smallOvalWidth,smallOvalHeight)
 } else{
  ellipse(headX+80* fishSize,headY+100* fishSize,smallOvalWidth,smallOvalHeight)
 }
}




// function DrawBubble(bubbleX,bubbleY){

// fill(fishColour)
// circle(bubbleX ,bubbleY,bubbleSize)

// fill(255)
// circle(bubbleX+2,bubbleY-2,bubbleSize-7)
// circle(bubbleX+3,bubbleY,bubbleSize-8)

// }




