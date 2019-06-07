//cria o menu e controla suas ações (tempo, score, ampulheta, game start)
const menuWrapper = (function() {
	const module = {};
	let secondsInitial = 50;
	let scoreInitial = 1000;
	let currentSeconds = secondsInitial;
	let currentScore = scoreInitial;

	module.create = () => {
		const $head = document.querySelector("head");

		const $menuWrapper = document.createElement("section");
		$menuWrapper.classList.add("menu");
		$menuWrapper.classList.add("-start");

		const $btnStart = menuBtn.render({
			content: "Start",
			className: "-start",
			handleClick: "menuWrapper.handleClick(this)",
		});
		const $btnBack = menuBtn.render({
			content: "Back",
			className: "-back",
			handleClick: "flatButton.handleClick('login')",
		});
		const $scoreNumber = scoreNumber.render(scoreInitial);
		const $timeClock = timeClock.render(secondsInitial);

		$menuWrapper.insertAdjacentHTML("beforeend", $btnStart);
		$menuWrapper.insertAdjacentHTML("beforeend", $btnBack);
		$menuWrapper.insertAdjacentHTML("beforeend", $scoreNumber);
		$menuWrapper.insertAdjacentHTML("beforeend", $timeClock);

		const $styleMenu = document.createElement("style");
		$styleMenu.textContent = `
      .menu {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100vw;
        margin: 0 0 5px;
        background-color: rgba(0, 151, 230,.6);
        font-family: 'Roboto Mono', monospace;
        color: rgb(255, 255, 255);
        margin-bottom: 10px;
      }
      .menu.-start:before {
        content: "";
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        z-index: 1;
        background-color: rgba(58, 64, 66,.4);
			}
			
      @media (min-width: 675px){
        .menu {
          justify-content: space-between;
        }
        .menu > .btn,
        .menu > .timer,
        .menu  > .timer > .hourglass {
          margin: 5px 25px;
        }
      }
    `;

		$head.insertBefore($styleMenu, null);

		return $menuWrapper;
	};

	module.handleClick = item => {
		const $btnMenu = document.querySelector(".menuBtn");
		const $btnBack = document.querySelector(".menuBtn.-back");
		const $score = document.querySelector(".score");
		const $menuWrapper = document.querySelector(".menu");

		if ($btnMenu.classList.contains("-start")) {
			btnStop = false;
			currentSeconds = secondsInitial;
			currentScore = scoreInitial;
			$btnMenu.classList.add("-startToRestart");

			module._startgame($btnMenu, $btnBack, $score, $menuWrapper);
		} else if ($btnMenu.classList.contains("-restart")) {
			if (timeOver === false) {
				return false;
			} else {
				location.hash = `#/game`;
				location.reload(true);
			}
		}
	};

	module._startgame = ($btnMenu, $btnBack, $score, $menuWrapper) => {
		setTimeout(() => {
			//setTimeout que aguarda a animação do botão de start
			$btnBack.classList.add("-hiddenBackButton");
			$btnBack.setAttribute("disabled", true);
			$btnMenu.textContent = "RESTART";
			$btnMenu.classList.remove("-start");
			$btnMenu.classList.remove("-startToRestart");
			$score.classList.remove("-start");
			$menuWrapper.classList.remove("-start");
			$btnMenu.classList.add("-restart");
			module._controlTimer();
		}, 250);
	};

	module._controlTimer = () => {
		let $timerText = document.querySelector(".timer>legend");
		let frame = 1;
		const countSeconds = setInterval(() => {
			currentSeconds--;
			$timerText.innerText = ` 00:${currentSeconds}`;
		}, 1000);
		const hourglass = setInterval(() => {
			frame >= 6 ? (frame = 1) : frame++;
			path = "img/ampulheta/ampulheta" + frame + ".svg";
			const $hourglass = document.querySelector(".hourglass");
			if (currentSeconds === 0 || btnStop === true) {
				timeOver = true;
				clearInterval(countSeconds);
				clearInterval(hourglass);
			}
			return ($hourglass.src = path);
		}, 250);
	};

	module.changeScore = modificator => {
		const $scoreNumber = document.querySelector(".scoreNumber");
		$scoreNumber.textContent = parseInt($scoreNumber.innerText) + modificator;
	};

	return {
		create: module.create,
		handleClick: module.handleClick,
		changeScore: module.changeScore,
	};
})();
