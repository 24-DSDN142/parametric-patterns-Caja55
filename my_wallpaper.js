
//your parameter variables go here!

//so i can change my fish
let headX = 0   //0 = middle
let headY =0  //0= middle
let eyeSize = 10 // 8 usually
let bgColour;
let fishColour;
let fishSize = 2
let eyeColour;

// bubble code 
let bubbleX = 90    //usually 0
let bubbleY = 40    //usually 0
let bubbleSize = 10

//bigger changes
let fishVar = 2 //1 -fish layout for P1, 2 for P2 ect.
let bubbleVar = 4 //1- no bubbles,2- detailed buble,3- plain bubble

//ignore me
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
eyeColour = color(255,251,230)
//red = 153,25,0
//dark blue = 0,8,51
//light blue 66, 83, 107
//baige = 255,251,230

  angleMode(DEGREES);// for head and tail square

  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 300;
  pWallpaper.grid_settings.cell_height = 300;
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {

  background(bgColour); 
}












function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  






//fishy positions
//ture = mirrored fish
if (fishVar ==1){
  DrawFish(-80, 0, fishSize,fishColour, true); // Mirrored fish
  DrawFish(-10, 0, fishSize,fishColour, true);
  DrawFish(60, 0, fishSize, fishColour,true); 
  DrawFish(130, 0, fishSize,fishColour, true); 
}

if (fishVar ==2){
  DrawFish(headX-20, headY-20, fishSize,color(153,25,0)
  , true);
  DrawFish(headX+50, headY+100, fishSize,fishColour);
}

if(fishVar ==3){
  DrawFish(-80, 0, fishSize, fishColour); // Normal fish
  DrawFish(-10, 0, fishSize,fishColour,true);// mirored fish
}

if (fishVar ==4){
  DrawFish(-80, 0, fishSize,fishColour); // Normal fish
}

if (fishVar ==5){
  DrawFish(-80, 80, fishSize,fishColour); // Normal fish
  DrawFish(-10, 0, fishSize,fishColour, true);// mirored fish
}
//no six cos it uses Var 2 fish
if (fishVar ==7){
  DrawFish(30, -20, fishSize,fishColour); 
  DrawFish(-90, -160, fishSize,fishColour);
}

if (fishVar ==8){
  DrawFish(headX+68, 90, fishSize,color(66, 83, 107)); // Normal fish
  DrawFish(headX-50, 0, fishSize,fishColour, true);// mirored fish
}



//Bubble stuff

if (bubbleVar ==1){}//no bubbles
if (bubbleVar ==2){//detailed bubbles
  DrawBubble(bubbleX,bubbleY,bubbleSize)
  DrawBubble(20,70,bubbleSize+2)
  DrawBubble(50,90,bubbleSize+5)
}
if (bubbleVar ==3){//simple bubbles
  DrawBubble2(bubbleX,bubbleY,bubbleSize)
  DrawBubble2(bubbleX,bubbleY+60,bubbleSize+5)
  DrawBubble2(bubbleX+20,bubbleY+130,bubbleSize+14)

}
if (bubbleVar ==4){//more simple bubbles
DrawBubble2(bubbleX,bubbleY+40,bubbleSize)
DrawBubble2(130,bubbleY+80,bubbleSize+10)
DrawBubble2(bubbleX+30,bubbleY+125,bubbleSize+20)
}
}












//functions for drawing my symbols

function DrawFish(headX,headY,fishSize,fishColour, mirror = false,){//fish face
  
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

  function DrawBubble(bubbleX,bubbleY,bubbleSize){

  fill(fishColour)
    circle(bubbleX ,bubbleY,bubbleSize)
    
    fill(255)
    circle(bubbleX+2,bubbleY-2,bubbleSize/4)
    circle(bubbleX+3,bubbleY,bubbleSize/5)
    }
    
function DrawBubble2(BubbleX,bubbleY,bubbleSize){

  stroke(fishColour)
  circle(bubbleX ,bubbleY,bubbleSize)

}








