var hasSword = false;
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');

function start(){
title.classList.add('head');
button1.innerHTML = 'Stand up';
button1.onclick = level1;
button1.classList.add('knop1');
button2.innerHTML = 'Rot away';
button2.onclick = leveldead;
button2.classList.add('knoprot')
button3.style.display = 'none';
}

function level1() {
	console.log('level 1')
button1.classList.remove('knop1');
button1.style.display = 'none';
button2.style.display = 'block';
button2.innerHTML = 'walk forward';
button2.onclick = level2;
button2.classList.add('knop2');

	document.getElementById('title').innerHTML ='You are risen, just walk forward.';
	document.body.style.background="url('./img/wake-up.jpg')";
	document.body.style.backgroundSize='cover';
}
function leveldead() {
	button2.classList.remove('knop2');
	button1.style.display = 'none';
	button2.style.display = 'none';
	button3.style.display = 'none';
	console.log('level dead')
	document.getElementById('title').innerHTML ='Press F5 or command + R to restart the game.';
	document.body.style.background="url('./img/game-over.jpg')";
	document.body.style.backgroundSize='cover';
}
function level2() {
	console.log('level 2')
	button1.style.display = 'block';
	button2.style.display = 'block';
	button1.innerHTML = 'Walk over the bridge';
	button2.innerHTML = 'Look over here';
	button1.classList.add('knopbridge');
	button1.onclick = levelbridgecrush;
	button2.classList.add('knopfalldown');
	button2.onclick = levelfalldown;
	document.getElementById('title').innerHTML ='There is a bridge.';
	document.body.style.background="url('./img/bridge.jpg')";
	document.body.style.backgroundSize='cover';
}
function levelbridgecrush() {
	button1.classList.remove('knopbridge');
	button2.classList.remove('knopfalldown');
	button1.classList.add('knoplookright');
	button2.classList.add('knopforwarddead');
	console.log('level bridge crush')
	button1.innerHTML = 'Look right';
	button2.innerHTML = 'Go forward';
	button1.onclick = levelsword;
	button2.onclick = leveldead2;
	document.getElementById('title').innerHTML ='The bridge colapsed. you fell down and found a boat.';
	document.body.style.background="url('./img/driveboat.png')";
	document.body.style.backgroundSize='cover';
}
function levelfalldown() {
	console.log('level fall down')
	button1.classList.remove('knopbridge');
	button2.classList.remove('knopknopfalldown');
	button1.classList.add('knoplookright');
	button2.classList.add('knopforwarddead');
	button1.innerHTML = 'Look right';
	button2.innerHTML = 'Go forward';
	button1.onclick = levelsword;
	button2.onclick = leveldead2;
	document.getElementById('title').innerHTML ='You fell down and found a boat.';
	document.body.style.background="url('./img/driveboat.png')";
	document.body.style.backgroundSize='cover';

}
function leveldead2() {
	console.log('level game over')
	button1.style.display = 'none';
	button2.style.display = 'none';
	document.getElementById('title').innerHTML ='You are killed by the dragon. Press F5 or command + R to restart.';
	document.body.style.background="url('./img/game-over.jpg')";
	document.body.style.backgroundSize='cover';
}
function levelsword() {
	console.log('level sword')
	button1.style.display = 'block';
	button1.innerHTML = 'Back';
	button1.classList.add('knopback');
	button1.onclick = levelboat;
	button2.style.display = 'none';
	document.getElementById('title').innerHTML ='Pick up the sword.';
	document.body.style.background="url('./img/picksword.jpg')";
	document.body.style.backgroundSize='cover';
	document.getElementById("image-holder").style.display="block";
	document.getElementById("image-holder").innerHTML = "<img src='./img/sword.png' alt='Sword' />";
	document.getElementById("image-holder").onclick = function(){
		document.getElementById("image-holder").style.display="none";
		alert("Congratulations you have the sword!");
		console.log('picked up sword');
		hasSword = true;
	}
}
function levelboat() {
	console.log('level boat')
	button2.style.display = 'none';
	button1.innerHTML = 'Go forward';
	button1.classList.add('knopforward')
	button1.onclick = levelbridge1;
	document.getElementById('title').innerHTML ='You are back on the boat.';
	document.body.style.background="url('./img/driveboat.png')";
	document.body.style.backgroundSize='cover';
	document.getElementById("image-holder").style.display="none";
}
function levelbridge1() {
	console.log('level bridge')
	button1.onclick = leveldragon;
	document.getElementById('title').innerHTML ='Brrrr its cold over here go over the bridge.';
	document.body.style.background="url('./img/bridge1.jpg')";
	document.body.style.backgroundSize='cover';
}
function leveldragon() {
	console.log('level dragon 1')
	button1.innerHTML = 'Attack';
	button1.classList.add('knopattack');
	document.getElementById('title').innerHTML ='Oh no! There is a dragon!';
	document.body.style.background="url('./img/crushdragon.jpg')";
	document.body.style.backgroundSize='cover';

	button1.onclick = function(){
		if (hasSword) {
			leveldragon2();
		} else {
			leveldead2();
			alert("Maybe I need a weapon to kill it.");
		}
}
}
function leveldragon2() {
	console.log('level dragon 2')
	button1.onclick = levelcomplete;
	button2.classList.add('knopdodge');
	button2.style.display = 'block';
	button2.innerHTML = 'Dodge';
	button2.onclick = leveldead2;
	document.getElementById('title').innerHTML ='Attack him or dodge his blast.';
	document.body.style.background="url('./img/flydragon.jpg')";
	document.body.style.backgroundSize='cover';
}
function levelcomplete() {
	console.log('level end')
	button1.style.display = 'none';
	button2.style.display = 'none';
	document.getElementById('title').innerHTML ='Congratulations you have defeated the dragon. play again? Press F5 or command + R.';
	document.body.style.background="url('./img/complete.jpg')";
	document.body.style.backgroundSize='cover';

}

start();