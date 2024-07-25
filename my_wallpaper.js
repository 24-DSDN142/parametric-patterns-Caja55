//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(219,240,255); //light blue colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  
 
  {
    
    
    fill(84)
  noStroke()
  ellipse(79, 120, 15, 50);//wing
  ellipse(121, 120, 15, 50);//wing
    ellipse(100, 120, 50, 80);//body
    fill(255)
    ellipse(100, 120, 40, 70);//body circle
    
  }
{fill(84)
  circle(100,80,40);//head
  fill(255)
  noStroke()
  ellipse(100, 85, 38, 30.5);//head circle

}
noStroke()
fill(84)
rect(95,64,10,16)//streak



fill(255)
{ellipse(90,78,16,19)}//white eye
{ellipse(110,78,16,19)}//white eye

fill(255,204,0)
{triangle(95,80,100,90,105,80)}//beak
fill(255)
stroke(0)
{circle(90,75,5)}//eye
{circle(110,75,5)}//eye
{circle(111,76,1)}//eye
{circle(91,76,1)}//eye

noStroke()

// var x=70;
// var y=130;

// //small bow tie x=90 y=110
// //big bow tie x=70 y=130

// fill(204,0,0)
//     // {triangle(x, y, x, 100, 102, 105)
//     // triangle(y, y, y, 100, 98, 105)
//     // circle(100,105,7);}//small bow tie

//     {triangle(x, y, x, 80, 102, 105)
//     triangle(y, y, y, 80, 98, 105)
//     circle(100,105,20);}//big bow tie

fill(255,204,0)


ellipse(90, 158, 12, 5);//foot
ellipse(110, 158, 12, 5);//foot
}
