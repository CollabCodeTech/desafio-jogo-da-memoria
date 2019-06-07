const game = function() {
	const $root = document.querySelector("#root");
	const $createRoot = createRoot.create();

	const $cardsWrapper = cardsWrapper.create();
	const $menuWrapper = menuWrapper.create();
	const shuffleCards = modifyOrder.start($cardsWrapper);

	$root.insertAdjacentElement("beforeend", $menuWrapper);
	$root.insertAdjacentElement("beforeend", $cardsWrapper);
};
