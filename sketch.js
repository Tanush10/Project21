var bullet,wall;
var speed,weight;


function setup() {
  createCanvas(1500,400);
 speed=random( 90,150 );
 weight=random(400,1500);
 thickness=random(22,83);
 bullet=createSprite(50,200,10,50);
 bullet.velocityX=speed;
 wall=createSprite(1000,200,thickness,100)
 wall.shapeColor="brown";
}
function draw() {
  background(0);
  if(hasCollided(bullet, wall)) {
     bullet.velocityX=0;
      var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
       if(damage>10) { 
         wall.shapeColor=color(255,0,0);
         } 
         if(damage<10) {
            wall.shapeColor=color(0,255,0);
           } 
          }

  drawSprites();
}
function hasCollided(lbullet, lwall) 
{
   bulletRightEdge=lbullet.x +lbullet.width;
    wallLeftEdge=lwall.x;
     if (bulletRightEdge>=wallLeftEdge) 
     { 
       return true
       } 
     return false;
     }
