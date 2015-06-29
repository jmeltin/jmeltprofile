// include _controller.js

var body = document.getElementById("game");

var gameWidth = body.offsetWidth;
var gameHeight = body.offsetHeight;

var renderer = new PIXI.WebGLRenderer(gameWidth, gameHeight);
body.appendChild(renderer.view);
var stage = new PIXI.Container();

var bunnyTexture = PIXI.Texture.fromImage('img/bunny.png');
var bunny = new PIXI.Sprite(bunnyTexture);
bunny.position.x = 400;
bunny.position.y = 300;

bunny.anchor.x = 0.5;
bunny.anchor.y = 0.5;

bunny.scale.x = 2;
bunny.scale.y = 2;
stage.addChild(bunny);

animate();

function animate() {
	requestAnimationFrame(animate);
	renderer.render(stage);
}