// Pontuação no menu

const scoreNumber = (function() {
	const module = {};

	module._style = active => {
		const $head = document.querySelector("head");
		const $style = document.createElement("style");

    $style.textContent = `
      .score.-start{
        margin-left: 35%;
      }
    `;

		$head.insertAdjacentElement("beforeend", $style);
  };

	module.render = (score) => {
		module._style();

    return `
    <p class="score -start">
      Score
      <p class="scoreNumber">
        ${score}
      </p>
    </p> 
    `;
	};

	return {
		render: module.render
	};
})();
