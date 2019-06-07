const buttonsWrapper = (function() {
	const module = {};

	module._style = () => {
		const $head = document.querySelector("head");
		const $style = document.createElement("style");

		$style.textContent = `
      .buttonsWrapper{
        position: fixed;
        bottom: 0;
        width: 100vw;
      }
    `;

		$head.insertAdjacentElement("beforeend", $style);
	};

	module.render = ({contentLogin, activeLogin, pathLogin, contentSignup, activeSignup, pathSignup}) => {
		module._style();

		const $buttonsWrapper = document.createElement("section");
		$buttonsWrapper.classList.add("buttonsWrapper");
		const $buttonLogin = flatButton.render(
			contentLogin,
			activeLogin,
			pathLogin
		);
		const $buttonSignup = flatButton.render(
			contentSignup,
			activeSignup,
			pathSignup
		);
		$buttonsWrapper.insertAdjacentHTML("beforeend", $buttonLogin);
		$buttonsWrapper.insertAdjacentHTML("beforeend", $buttonSignup);

		return $buttonsWrapper;
	};

	return {
		render: module.render
	};
})();
