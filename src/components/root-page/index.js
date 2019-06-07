const createRoot = (function() {
	const module = {};

	module.create = () => {
		const $head = document.querySelector("head");
		const $styleRoot = document.createElement("style");

		$styleRoot.textContent = `
      #root{
				background-color: #e2e1db;
				width: 100vw;
        height: 100vh;
        background-image: url(img/backgroundAccess.svg);
			}
			.-root-game{
				background-color: rgba(179, 237, 249, 0.1);
				height: 100vh;
				background-image: url(img/backgroundAccess.svg);
				display: flex;
				flex-wrap: wrap;
			}
    `;

		$head.insertBefore($styleRoot, null);

		return $styleRoot;
	};
	return {
		create: module.create
	};
})();
