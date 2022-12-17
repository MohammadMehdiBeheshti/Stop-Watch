let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let milliSecond = document.querySelector(".millisecond");
let allBTNs = document.querySelectorAll(".btn");
let [min, sec, milSec] = [0, 0, 0];
let inter;

allBTNs.forEach((eachElement) => {
	eachElement.addEventListener("click", () => {
		if (eachElement.classList.contains("start")) {
			clearInterval(inter);
			inter = setInterval(timer, 10);
		} else if (eachElement.classList.contains("stop")) {
			clearInterval(inter);
		} else if (eachElement.classList.contains("reset")) {
			clearInterval(inter);

			milSec = 0;
			sec = 0;
			min = 0;

			milliSecond.innerText = String(milSec).padStart(2, "0");
			seconds.innerText = String(sec).padStart(2, "0");
			minutes.innerText = String(min).padStart(2, "0");
		}
	});
});

let timer = () => {
	++milSec;

	if (milSec === 100) {
		++sec;
		milSec = 0;
	}

	if (sec === 60) {
		++min;
		sec = 0;
	}

	milliSecond.innerText = String(milSec).padStart(2, "0");
	seconds.innerText = String(sec).padStart(2, "0");
	minutes.innerText = String(min).padStart(2, "0");
};
