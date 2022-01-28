var bgimg
var bg


function preload()
{
bgimg =loadImage("images/final.png")


}
function setup()
{
createCanvas(windowWidth,windowHeight)

bg = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
bg.addImage(bgimg)
bg.velocityY=3

}
function draw()
{
background("black")
drawSprites()

if(bg.y>=windowHeight/2+100)
{
bg.y=bg.height/2

}
else{bg.velocityY=3}







}