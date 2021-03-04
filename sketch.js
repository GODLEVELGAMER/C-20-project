    var cat,cat_running,cat_end,cat_Img;
    var mouse,mouse_teasing,mouse_end,mouse_Img;
    var garden,garden_Img;

function preload() {
    //load the images here
    garden_Img.loadImage(garden.png);
    cat_Img.loadImage(cat1.png);
    cat_running.loadAnimation("cat2.png","cat3.png")
    cat_end.loadImage(cat4.png);
    mouse_Img.loadImage(mouse1.png);
    mouse_teasing.loadAnimation("mouse2.png","mouse3.png");
    mouse_end.loadImage(mouse4.png);
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(1000,800);
    garden.addImage(garden);
    
    cat.createSprite(900,700,20,20);
    cat.addImage(cat_Img);

    mouse.createSprite(200,200,20,20);
    mouse.addImage(mouse_Img);
    
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.isTouching(mouse)){
        cat.addImage(cat_end);
        mouse.addImage(mouse_end);
    }
    drawSprites();
    keyPressed();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("catRunning",cat_running);
      cat.changeAnimation("catRunning");
  }


}

