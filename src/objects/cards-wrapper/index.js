const cardsWrapper = (function() {
	const module = {};

	let wrongCards = [];
	const activeCards = [];

	module.create = () => {
		const $head = document.querySelector("head");
		const $cardsWrapper = document.createElement("section");
		$cardsWrapper.classList.add("cards-wrapper");
		const $styleHead = document.createElement("style");

		$styleHead.textContent = `
      .cards-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 100vw;
        align-self: start;
      }
      .cards-wrapper > .memory-card {
        margin-bottom: 10px;
      }
      @media (min-width: 675px){
        .cards-wrapper {
          padding-top: 0;
          width: 90vw;
        }
      }
      @media (max-height: 670px){
        .cards-wrapper > .memory-card {
          margin-bottom: 10px;
        }
      }
    `;

		$head.insertBefore($styleHead, null);

		return $cardsWrapper;
	};

	module.handleClick = $component => {
		const totalCards = document.querySelectorAll(".memory-card");

		if (
			timeOver == true ||
			$component.classList.contains("-active") ||
			$component.classList.contains("-correct") ||
			clickedCards.length > 2
		) {
			// Verifica se o tempo já terminou
			// Verifica se a carta já está virada
			// Verifica se a carta já foi combinada com alguma outra
			// Verifica o limite de 2 cartas abertas, por vez
			return;
		} else {
			$component.classList.add("-active");

			if ($component.classList.contains("-active")) {
				// Se a carta tem a classe '-active', adiciona a mesma nos arrays de cartas ativas e de cartas clicadas
				activeCards.push($component), clickedCards.push($component);
			}

			if (activeCards.length == 2) {
				// Quando 2 cartas foram clicadas, chama a função que valida se elas combinam e limpa o array de cartas ativas 
				validateCards = activeCards.slice();
				module._matchCards(validateCards);
				activeCards.splice(0, activeCards.length);
			}
		}
		if (countCards.length === totalCards.length) {
			// Se o numero de cartas combinadas é igual ao número total de cartas, finaliza o jogo 
			btnStop = true;
		}
	};

	module._matchCards = validateCards => {
		const classListCard = [];

		validateCards.forEach(card => {
			// Pega a classe das 2 cartas ativas e as salva em um array 
			const answerClass = card.children[0].classList.value;
			classListCard.push(answerClass);
		});

		if (classListCard[0] === classListCard[1]) {
			//Valida se as cartas são iguais
			validateCards.forEach(card => {
				card.classList.add("-correct");
				menuWrapper.changeScore(100);
				countCards.push(card);
			});
			clickedCards.splice(0, clickedCards.length);
			// Se verdadeiro, limpa o array das cartas clicadas
		} else {
			validateCards.forEach(card => {
				card.classList.add("-incorrect");
				menuWrapper.changeScore(-100);
			});
			wrongCards = wrongCards.concat(validateCards);
			validateCards.splice(0, validateCards.length);
			// Se falso, passa o conteúdo de 'validateCards' para 'wrongCards' e limpa a primeira 
		}
		classListCard.splice(0, classListCard.length); // Após o loop, limpa o array com a classe das cartas ativas 
		setTimeout(closeWrongCards, 500); // Espera .5ms para desvirar as cartas

		function closeWrongCards() {
			// Fecha as cartas que passou no loop e não combinavam 
			wrongCards.forEach(card => {
				card.classList.contains("-incorrect") &&
					(card.classList.remove("-active"),
					card.classList.remove("-incorrect"));
			});
			clickedCards.splice(0, clickedCards.length);
		}

	};

	return {
		create: module.create,
		handleClick: module.handleClick
	};
})();
