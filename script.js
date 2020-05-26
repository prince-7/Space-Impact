var renderer = PIXI.autoDetectRenderer(1800, 1800,{backgroundColor : 0x1099bb});  
document.body.appendChild(renderer.view);

var stage = new PIXI.Container();


 
var gamebg = PIXI.Texture.fromImage('images/space.jpg');
var texture = PIXI.Texture.fromImage('images/ship.png');  
var obj = PIXI.Texture.fromImage('images/bullet.png');
var target =PIXI.Texture.from('images/alien.png');
var green =PIXI.Texture.from('images/healthbar.png');
var final =PIXI.Texture.from('images/gameover.png');
var end = PIXI.Texture.from('images/youwin.png');
var point =PIXI.Texture.from('images/checkpoint.png');


var space = new PIXI.Sprite(gamebg);
space.anchor.x = 0.5;  
space.anchor.y = 0.5;
space.width =1700;
space.height=800;
space.position.x = 0;  
space.position.y = 250;
stage.addChild(space);



var aliens = [];  
var alienSpeed = 0.7;

for (let i = 0; i < 36; i++){
  var alien = new PIXI.Sprite(target);
  alien.anchor.x = 0.5;  
  alien.anchor.y = 0.5;
  alien.width =70;
  alien.height=70;
  alien.position.x = 1300 - (i % 6) * 90;  
  alien.position.y = 70 + Math.floor(i / 6) * 100;
  stage.addChild(alien);
  aliens.push(alien);
}


move();  
function move() {  
  requestAnimationFrame(move);

  for(var b=aliens.length-1;b>=0;b--){
    aliens[b].position.x -= alienSpeed;
    }

  renderer.render(stage);
}





var ship = new PIXI.Sprite(texture);
ship.anchor.x = 0.5;  
ship.anchor.y = 0.5;
ship.width =100;
ship.height=100;
ship.position.x = 60;  
ship.position.y = 250;
stage.addChild(ship);


var healthbar = new PIXI.Sprite(green);
healthbar.anchor.x = 0.5;  
healthbar.anchor.y = 0.5;
healthbar.width =10;
healthbar.height=900;
healthbar.position.x = 0;  
healthbar.position.y = 300;
stage.addChild(healthbar);

var healthbar2 = new PIXI.Sprite(green);
healthbar2.anchor.x = 0.5;  
healthbar2.anchor.y = 0.5;
healthbar2.width =5;
healthbar2.height=900;
healthbar2.position.x = -5;  
healthbar2.position.y = 300;
stage.addChild(healthbar2);


var healthbar3 = new PIXI.Sprite(green);
healthbar3.anchor.x = 0.5;  
healthbar3.anchor.y = 0.5;
healthbar3.width =1000;
healthbar3.height=1;
healthbar3.position.x = 350;  
healthbar3.position.y = 600;
stage.addChild(healthbar3);



var checkpoint = new PIXI.Sprite(point);
checkpoint.anchor.x = 0.5;  
checkpoint.anchor.y = 0.5;
checkpoint.width =0;
checkpoint.height=0;
checkpoint.position.x = 400;  
checkpoint.position.y = 200;
stage.addChild(checkpoint);


function shoot(startPosition){    
  var bullet = new PIXI.Sprite(obj);
  bullet.height=20;
  bullet.width=20;
  bullet.position.x = startPosition.x;
  bullet.position.y = startPosition.y;
  stage.addChild(bullet);
  bullets.push(bullet);
}



var t=0;
var a =71;

var projs=[];
var projSpeed=5;
var g =9.8;
function projectile(startPosition){    
  var proj = new PIXI.Sprite(obj);
  proj.height=20;
  proj.width=20;
  proj.position.x = startPosition.x;
  proj.position.y = startPosition.y;
  stage.addChild(proj);
  projs.push(proj);
}


fire();  
function fire() {  
  requestAnimationFrame(fire);
  t+=1;
  var t1=t;
  if(t>=4000)
  {
    for(var b=projs.length-1;b>=0;b--){
    projs[b].position.x += projSpeed;
    projs[b].vy += 0.1;
    for(var e=faliens.length-1;e>=0;e--)
    {
      if(crash(projs[b],faliens[e]))
      {
        projs[b].position.y=3000;
        faliens[e].position.x=3000;
        document.getElementById("aliens").innerHTML= "Aliens:-"+a;
        a-=1;
      }
    }
  }
  if(t>=8500)
      {
        win.width =300;
        win.height=100;
      }
  }
   
  renderer.render(stage);
}




var bullets = [];  
var bulletSpeed = 5;
animate();  
function animate() {  
  requestAnimationFrame(animate);
  t+=1;
  if(t<=3900)
  {
    for(var b=bullets.length-1;b>=0;b--){
    bullets[b].position.x += bulletSpeed;
    for(var e=aliens.length-1;e>=0;e--)
    {
      if(crash(bullets[b],aliens[e]))
      {
        bullets[b].position.x=3000;
        aliens[e].position.x=-100;
        document.getElementById("aliens").innerHTML= "Aliens:-"+a;
        a-=1;
      }
    }
  }

  }
      if(t>=3600)
      {
        checkpoint.width =300;
        checkpoint.height=100;
      }
      if( t>=3800)
      {
        checkpoint.width =0;
        checkpoint.height=0; 
      }

  renderer.render(stage);
}


var faliens = [];  
        var falienSpeed = 0.7;
        for (let i = 0; i < 36; i++){
          var falien = new PIXI.Sprite(target);
          falien.anchor.x = 0.5;  
          falien.anchor.y = 0.5;
          falien.width =70;
          falien.height=70;
          falien.position.x = 700 - (i % 6) * 90;  
          falien.position.y =  -2300 + Math.floor(i / 6) * 100;
          stage.addChild(falien);
          faliens.push(falien);
        }
        fall();


function fall() {  
  requestAnimationFrame(fall);
  for(var b=faliens.length-1;b>=0;b--){
    faliens[b].position.y += falienSpeed;
    }

  renderer.render(stage);
}




var win = new PIXI.Sprite(end);
win.anchor.x = 0.5;  
win.anchor.y = 0.5;
win.width =0;
win.height=0;
win.position.x = 400;  
win.position.y = 200;
stage.addChild(win);




var over = new PIXI.Sprite(final);
over.anchor.x = 0.5;  
over.anchor.y = 0.5;
over.width =0;
over.height=0;
over.position.x = 400;  
over.position.y = 200;
stage.addChild(over);




window.addEventListener("keyup",keysDown);
window.addEventListener("keyup",keysUp);
window.addEventListener("keypress",attack);
window.addEventListener("keypress",project);




var x = 50;
var p = 50;
function project(e){
  if(!x)
  {
    if(p && e.keyCode===32)
    {  
    p-=1;
    document.getElementById("ammo").innerHTML="Bullets:-"+p;
    projectile({
    x: ship.position.x,
    y: ship.position.y
    });
  }

  }
} 
function attack(e){
  if(x && e.keyCode===32)
  {
    x-=1;
    document.getElementById("ammo").innerHTML="Bullets:-"+x;
    shoot({
    x: ship.position.x,
    y: ship.position.y
    });
  }
}
function keysDown(e){
  if(e.keyCode === 115 || e.keyCode === 87 || e.keyCode === 38)
  {
      ship.position.y=ship.position.y-20;
  } 
}


function keysUp(e){
  if(e.keyCode === 119 || e.keyCode === 83 || e.keyCode === 40)
  {
      ship.position.y= ship.position.y+20;
  }
}


var h=1000
check();

function check() {
  requestAnimationFrame(check);
  for(var b=aliens.length-1;b>=0;b--)
  {
    if((h+ 1) && crash(ship,aliens[b]))
    {
      healthbar.height -=1;
      document.getElementById("health").innerHTML="Health:-"+h;
    }
    if((h+ 1) && crash(healthbar2,aliens[b]))
    {
      healthbar.height -=1;
      document.getElementById("health").innerHTML="Health:-"+h;
      h-=1;
    }
    if((h+ 1) && crash(healthbar3,faliens[b]))
    {
      healthbar.height -=1;
      document.getElementById("health").innerHTML="Health:-"+h;
      h-=1;
    }
    if(!h)
    {
      healthbar.height=3;
      over.width =900;
      over.height=800;
      document.getElementById("message").innerHTML="Game Over, Reload to start again";
      console.log("Game Over");
    }
  renderer.render(stage);
  }
}


function crash(a,b) {
  let aBox = a.getBounds();
  let bBox =b.getBounds();

  return aBox.x+aBox.width > bBox.x &&
         aBox.x < bBox.x + bBox.width &&
         aBox.y + aBox.height >bBox.y &&
         aBox.y < bBox.y +bBox.height;
}

