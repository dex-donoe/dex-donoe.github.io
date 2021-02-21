document.getElementById('ItsLove').onclick = function() {
  document.getElementById('its-love').play();
};

document.getElementById('MyMind').onclick = function() {
  document.getElementById('my-mind').play();
};

document.getElementById('Song3').onclick = function() {
  document.getElementById('song-3').play();
};

document.getElementById('Song4').onclick = function() {
  document.getElementById('song-4').play();
};

document.getElementById('stopButton').onclick = function() {
  var sounds = document.getElementsByTagName('audio');
  for(i=0; i<sounds.length; i++) sounds[i].pause();
};