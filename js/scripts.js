/* MUSIC */

document.getElementById('ItsLove').onclick = function() {
  document.getElementById('its-love').play();
};

document.getElementById('MyMind').onclick = function() {
  document.getElementById('my-mind').play();
};

document.getElementById('NoTears').onclick = function() {
  document.getElementById('no-tears').play();
};

document.getElementById('stopButton').onclick = function() {
  var sounds = document.getElementsByTagName('audio');
  for(i=0; i<sounds.length; i++) sounds[i].pause();
};


/* MSN */

document.getElementById('MsnButton').onclick = function() {
  document.getElementById('msn-sound').play();
};

/* BEEPS 

document.getElementById('ItsLove').onmouseover = function() {
	document.getElementById('beep').play();
};

document.getElementById('MyMind').onmouseover = function() {
	document.getElementById('beep').play();
};

document.getElementById('Song3').onmouseover = function() {
	document.getElementById('beep').play();
};

document.getElementById('Song4').onmouseover = function() {
	document.getElementById('beep').play();
};

document.getElementById('stopButton').onmouseover = function() {
	document.getElementById('beep').play();
};

*/