"use strict";

var play_btn = document.getElementById("play_btn");

var limePaddle = document.getElementsByClassName("limePaddle")[0];

var indigoPaddle = document.getElementsByClassName("indigoPaddle")[0];

var pingPongBall = document.getElementsByClassName("pingPongBall")[0];

var isPlaying = false;

play_btn.addEventListener("click", function() {
	limePaddle.classList.toggle("limeTap");
	indigoPaddle.classList.toggle("indigoTap");
	
	if (!isPlaying) {
		pingPongBall.style.animation = "rally 0.75s linear alternate infinite";
		play_btn.innerHTML = "Stop Playing";
		isPlaying = true;
	} else {
		pingPongBall.style.animation = "none";
		play_btn.innerHTML = "Play Again?";
		isPlaying = false;
	}
});