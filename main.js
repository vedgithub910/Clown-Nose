nosex=0;
nosey=0;
function setup(){
c1= createCanvas(500,400);
c1.center()
v1=createCapture(VIDEO)
v1.hide()
pn=ml5.poseNet(v1,modelLoaded)
pn.on('pose',gotPoses)



}                                 
function draw(){
image (v1,0,0,500,400)
image (cn,nosex,nosey,40,40)



}
function modelLoaded(){
console.log("My model is working")
}
function gotPoses(results){
if(results.length>0)

{
console.log (results)
nosex=results[0].pose.nose.x-90;
nosey=results[0].pose.nose.y-69;

}
}

cn="";
function preload(){
cn=loadImage("https://i.postimg.cc/RZpC02Gx/clownnose.png")
}



function takephoto(){
save('joker.png');





}