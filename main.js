var canvas = new fabric.Canvas(mc);
var golf_pit_initial_position_x = 300;
var golf_pit_initial_position_y = 400;
var ball_initial_position_x =  0;
var ball_initial_position_y =  0;
block_image_width = 5;
block_image_height = 5;
function li(){
fabric.Image.fromURL(golf-h.png , function (img) {
hole_obj = img;
hole_obj.scaleToWidth(50);
hole_obj.scaleToHeight(50);
hole_obj.set({
top:golf_pit_initial_position_y,left:golf_pit_initial_position_x
});
canvas.add(hole_obj);
});
new_image();
}
function new_image()
{
fabric.Image.fromURL(ball.png , function (img) {
ball_obj = img;
ball_obj.scaleToWidth(50);
ball_obj.scaleToHeight(50);
ball_obj.set({
top:ball_initial_position_y,left:ball_initial_position_x
});
canvas.add(ball_obj);
});
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if((ball_initial_position_x = golf_pit_initial_position_x)&& (ball_initial_position_y = golf_pit_initial_position_y)){
document.getElementById(hd3).innerHTML="You have done the goal";
document.getElementById(mc).style.borderColor="red";
}
else{
if(keyPressed == '38')
{
up();
}
if(keyPressed == '40')
{
down();
}
if(keyPressed == '37')
{
left();
}
if(keyPressed == '39')
{
right();
}
}
function up()
{
if (ball_initial_position_y<=50){
ball_initial_position_y=ball_initial_position_y-10;
canvas.remove(ball_obj);
new_image();
}
}
function down()
{
if (ball_initial_position_y<=750){
ball_initial_position_y=ball_initial_position_y+10;
canvas.remove(ball_obj);
new_image();
}
}
function left()
{
if (ball_initial_position_x<=50){
ball_initial_position_x=ball_initial_position_x-10;
canvas.remove(ball_obj);
new_image();
}
}
function right()
{
if (ball_initial_position_y<=1750){
ball_initial_position_x=ball_initial_position_x+10;
canvas.remove(ball_obj);
new_image();
}
}	
}








