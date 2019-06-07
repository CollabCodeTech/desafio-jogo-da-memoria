//Botões inferiores das páginas de Login, Signup e Error

const flatButton = (function() {
	const module = {};

	module._id = 0;

	module._style = active => {
		const $head = document.querySelector("head");
		const $style = document.createElement("style");

		$style.textContent = `
      .flatButton-${module._id}{
        width: 50%;
        height: ${active ? "67px" : "60px"};
        padding: ${active ? "10px" : "0"};
        box-sizing: ${active ? "border-box" : "content-box"};
        font-family: 'Fjalla One', sans-serif;
        background-color: ${active ? "#71cff3" : "#fffae1"};
        color: ${active ? "#3a4042" : "#7c8e94"};
        font-size: ${active ? "2.5em" : "2em"};
        border: none;
        border-radius: ${active ? "8px 8px 0 0" : "0"};
      }
    `;

		$head.insertAdjacentElement("beforeend", $style);
  };

  module.handleClick = path => {
    location.hash = `#/${path}`;
    location.reload(true);
  }

	module.render = (content = "", active = false, path = "") => {
		module._id++;
		module._style(active);

    return `<button onclick="flatButton.handleClick(${path})" class="flatButton-${module._id}">${content}</button>`;
	};

	return {
		render: module.render,
		handleClick: module.handleClick
	};
})();
