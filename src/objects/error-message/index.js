const errorMessage = (function() {
	const module = {};

	module._style = () => {
		const $head = document.querySelector("head");
		const $style = document.createElement("style");

		$style.textContent = `
      .errorHeader{
        width: 90vw;
        border-radius: 8px;
        box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.25);
        background-color: #ffffff;
        margin: 1vh auto;
        display: flex;
        flex-direction: column;
        padding: 10px 0;
        box-sizing: border-box;
      }
      .title{
        font-family: 'Fjalla One', sans-serif;
        font-size: 3em;
        letter-spacing: -1px;
        color: #3a4042;
        padding: 10px;
        font-weight: normal;
        margin: 25% auto;
      }
    `;

		$head.insertAdjacentElement("beforeend", $style);
	};

	module.render = contentTitle => {
		module._style();

		return `
    <h2 class="errorHeader title">
      ${contentTitle}
    </h2>
    `;
	};
	return {
		render: module.render
	};
})();
