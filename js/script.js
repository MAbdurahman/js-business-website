/*-----Javascript for js-business-website */
$(document).ready(function () {
	/*=============================================
            navbar
================================================*/
	const menu = document.querySelector('.menu');
	const navbar = document.querySelector('.navbar');

	menu.addEventListener('click', () => {
		navbar.classList.toggle('change');
		menu.classList.toggle('change');
	});

	/*=============================================
            section 2 video
================================================*/
	const video = document.querySelector('.video');
	const btn = document.querySelector('#fa-play-circle');
	const bar = document.querySelector('.video-bar');

	const playPause = () => {
		if (video.paused) {
			video.play();
			btn.className = 'fa-pause-circle';
			/* btn.classList.add('fa-pause-circle'); */
			video.style.opacity = '.7';
		} else {
			/* btn.classList.remove('fa-pause-circle'); */
			video.pause();
			btn.className = 'fa-play-circle';
			/* btn.classList.add('fa-play-circle'); */
			video.style.opacity = '.3';
		}
	};

	btn.addEventListener('click', () => {
		playPause();
	});

	video.addEventListener('timeupdate', () => {
		// console.log(video.currentTime, video.duration);
		const barWidth = video.currentTime / video.duration;
		bar.style.width = `${barWidth * 100}%`;
		if (video.ended) {
			btn.className = 'fa-play-circle';
			video.style.opacity = '.3';
		}
	});

	/*=============================================
            swiper
================================================*/

	var swiper = new Swiper('.swiper-container', {
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		coverflowEffect: {
			rotate: 70,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: true,
		},
	});
});
