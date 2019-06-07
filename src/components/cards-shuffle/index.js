//Pega as cartas criadas pelo create-cards, embaralha e joga na tela

const modifyOrder = (function() {
	const module = {};

	module.start = $cardsWrapper => {
		const $cards = cards.createCards();

		let tempArray = [
			$cards.memoryCardJS,
			$cards.memoryCardJava,
			$cards.memoryCardPhp,
			$cards.memoryCardC,
			$cards.memoryCardJS,
			$cards.memoryCardJava,
			$cards.memoryCardPhp,
			$cards.memoryCardC
		];

		tempArray.forEach((name, i) => {
			const randomIndex = Math.floor(Math.random() * (i + 1));
			const itemAtIndex = tempArray[randomIndex];
			tempArray[randomIndex] = tempArray[i];
			tempArray[i] = itemAtIndex;
		});

		tempArray.forEach(cartao =>
			$cardsWrapper.insertAdjacentHTML("beforeend", cartao)
		);
	};
	return {
		start: module.start
	};
})();
