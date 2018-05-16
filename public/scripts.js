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

function skip(){
	// look at data-skip in dom
	console.log(this.dataset.skip);
	video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate(){
	video[this.name] = this.value; 
	// console.log(this.name)
	// console.log(this.value);
}

function handleProgress(){
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	// console.log(e);
	video.currentTime = scrubTime;
}
// 3. Hook up the event listeners

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);

video.addEventListener('play', updateButton); 
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

// all skip buttons - runs skip function at end
skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);












