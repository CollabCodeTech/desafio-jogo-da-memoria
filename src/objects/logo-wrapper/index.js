const logoWrapper = (function() {
	const module = {};

	module._style = () => {
		const $head = document.querySelector("head");
		const $style = document.createElement("style");

		$style.textContent = `
      .logo{
        width: 35vw;
        height: 35vw;
        display: block;
        margin: 0 auto;
      }
      .titlelogo{
        width: 50vw;
        font-family: Righteous;
        font-size: 2.5em;
        display: block;
        margin: 0 auto;
      }
      .titlelogo.-memory{
        height: 25px;
        color: #1abc9c;
        text-transform: uppercase;
        -webkit-text-stroke: 1px #0e5647;
        -moz-text-stroke: 1px #0e5647;
      }
      .titlelogo.-game{
        text-align: end;
        color: #ffb74f;
        -webkit-text-stroke: 1px #6a4a1c;
        -moz-text-stroke: 1px #6a4a1c;
      }
    `;

		$head.insertAdjacentElement("beforeend", $style);
	};

	module.render = (title1 = "Memory", title2 = "game") => {
		module._style();

		return `
    <img class="logo" src="img/cards/icon-collabcode.png"/>
    <h1 class="titlelogo -memory">${title1}</h1>
    <h1 class="titlelogo -game">${title2}</h1>
    `;
	};

	return {
		render: module.render
	};
})();
