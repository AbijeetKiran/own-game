const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Events = Matter.Events
var cone = [];
var cube = [];
var cuboid = [];
var cylinder = [];
var hexagon = [];
var sphere = [];
var torus = [];

function setup(){

  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


   

}




function draw(){

  background(255);
  Engine.update(engine);

  
  /*rand = Math.round(random(1,4));
    if(frameCount%60===0){
      if(rand===1){
      sphereobj();
      }
      if(rand===2){
      coneobj();
      }
      if(rand===3){
      cubeobj();
      }
      if(rand===4){
      cuboidobj();
      }
      /*if(rand===5){
      cylinderobj();
      }
      if(rand===6){
      torusobj();
      }
      if(rand===7){
      hexagonobj();
      }*/
      if(frameCount%60===0){
          sphere.push(new Sphere(700 ,200))
        }
      
  
      for(var i = 0; i<sphere.length; i++){
        sphere[i].display();
      }
      /*for(var a = 0; a<50; a++){
        cone[a].display();
      }
      for(var b = 0; b<50; b++){
        cube[b].display();
      }
      for(var c = 0; c<50; c++){
        cuboid[c].display();
      }*/
    
    }

  

  
  





function sphereobj(){
  for(var i = 0; i<50; i++){
    sphere.push(new Sphere(700 ,200))
  }
}
function coneobj(){
  for(var a = 0; a<50; a++){
    cone.push(new Cone(700 ,200))
  }
  
}
function cubeobj(){
  for(var b = 0; b<50; b++){
    cube.push(new Cube(700 ,200))
  }
}
function cuboidobj(){
  for(var c = 0; c<50; c++){
    cuboid.push(new Cuboid(700 ,200))
  }
}
function cylinderobj(){
  for(var i = 0; i<50; i++){
    cylinder.push(new Cylinder(700 ,200))
  }
}
function torusobj(){
  for(var i = 0; i<50; i++){
    torus.push(new Torus(700 ,200))
  }
}
function hexagonobj(){
  for(var i = 0; i<50; i++){
    hexagon.push(new Hexagon(700 ,200))
  }
}