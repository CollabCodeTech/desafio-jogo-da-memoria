// Pontuação no menu

const timeClock = (function() {
	const module = {};

	module._style = active => {
		const $head = document.querySelector("head");
		const $style = document.createElement("style");

    $style.textContent = `
    .timer {
      display: flex;
      flex-wrap: wrap;
      width: 50px;
      justify-content: center;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }  
    .hourglass {
      height: 36px;
      background-color: rgba(74, 249, 255, 0.6);
      padding: 2px 0;
      margin: 5px 0;
      box-sizing: border-box;
      border-radius: 5px;
      -webkit-tap-highlight-color: transparent;
      box-shadow: 1px 3px 0px rgb(52, 165, 169);
    }
    `;

		$head.insertAdjacentElement("beforeend", $style);
  };

	module.render = (seconds) => {
		module._style();

    return `
    <span class="timer">
      <img class="hourglass" src="img/ampulheta/ampulheta1.svg" />
      <legend>
        00:${seconds}
      </legend>
    </span> 
    `;
	};

	return {
		render: module.render
	};
})();
