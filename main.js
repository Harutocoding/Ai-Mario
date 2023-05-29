function preload() {
	world_start = loadSound("world_start.wav");
	jumping = loadSound("jump.wav");
	killing = loadSound("kick.wav");
	coin = loadSound("coin.wav");
	Die = loadSound("mariodie.wav");
	gameover = loadSound("gameover.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent("game_console");
	
	
	poseNet = ml5.poseNet(video, Modelloaded);
	poseNet.on('pose', gotPoses);
}
function Modelloaded()
{
	console.log('Model is Initialized');
}
function gotPoses(results)
{
	if(results.length > 0)
	{
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log("noseX =" + noseX +", noseY = " + noseY);
	}
}

function draw() {
	game()
}






