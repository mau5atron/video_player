 // 1. Get the elements in our player
 const player = document.querySelector('.player');
 const video = player.querySelector('.viewer');
 const progress = player.querySelector('.progress');
 const progressBar = player.querySelector('.progress__filled');
 const toggle = player.querySelector('.toggle');
 const skipButtons = player.querySelectorAll('[data-skip]');
 const ranges = player.querySelectorAll('.player__slider');
 // 2. Build out our functions

function togglePlay(){
	const method = video.paused ? 'play' : 'pause';
	video[method]();
	// if(video.paused){
	// 	video.play();
	// }else {
	// 	video.pause();
	// }
}

function updateButton(){
	const icon = this.paused ? '▶︎' : '❚ ❚';
	toggle.textContent = icon;
	console.log("Update the button");
}
// 3. Hook up the event listeners

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);

video.addEventListener('play', updateButton); 
video.addEventListener('pause', updateButton); 
