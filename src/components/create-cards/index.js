//cria as cartas baseado no arquivos memory-card (modulos ainda não utilizados vão servir pra deixar as cartas a serem criadas sempre diferentes) 

const cards = (function() {
	const module = {};

	module._bug = createMemoryCard => {
		return createMemoryCard({
			nameClass: "-front -bug",
			src: "img/cards/icon-bug.png",
			alt: "Ícone de um bug no código"
		});
	};
	module._cpp = createMemoryCard => {
		return createMemoryCard({
			nameClass: "-front -c++",
			src: "img/cards/icon-c.png",
			alt: "Ícone de um livro da linguagem C++"
		});
	};
	module._cabeca = createMemoryCard => {
		return createMemoryCard({
			nameClass: "-front -cabeca",
			src: "img/cards/icon-cabeca.png",
			alt: "Ícone de um cabeca com uma tag HTML"
		});
	};
	module._celular = createMemoryCard => {
		return createMemoryCard({
			nameClass: "-front -celular",
			src: "img/cards/icon-celular.png",
			alt: "Ícone de um celular"
		});
	};
	module._java = createMemoryCard => {
		return createMemoryCard({
			nameClass: "-front -java",
			src: "img/cards/icon-java.png",
			alt: "Ícone de um livro da linguagem Java"
		});
	};
	module._js = createMemoryCard => {
		return createMemoryCard({
			nameClass: "-front -js",
			src: "img/cards/icon-js.png",
			alt: "Ícone de um livro da linguagem JavaScript"
		});
	};
	module._php = createMemoryCard => {
		return createMemoryCard({
			nameClass: "-front -php",
			src: "img/cards/icon-php.png",
			alt: "Ícone de um livro da linguagem php"
		});
	};
	module._responsive = createMemoryCard => {
		return createMemoryCard({
			nameClass: "-front -responsive",
			src: "img/cards/icon-resposivo.png",
			alt: "Ícone de responsivo"
		});
	};
	module._settings = createMemoryCard => {
		return createMemoryCard({
			nameClass: "-front -settings",
			src: "img/cards/icon-settings.png",
			alt: "Ícone de uma engrenagem"
		});
	};
	module._woman = createMemoryCard => {
		return createMemoryCard({
			nameClass: "-front -woman",
			src: "img/cards/icon-woman.png",
			alt: "Ícone de um mina codando"
		});
	};

	module.createCards = () => {
		const createMemoryCard = memoryCard.create();

		const memoryCardJS = module._js(createMemoryCard);
		const memoryCardJava = module._java(createMemoryCard);
		const memoryCardPhp = module._php(createMemoryCard);
		const memoryCardC = module._cpp(createMemoryCard);

		return {
			memoryCardJS,
			memoryCardJava,
			memoryCardPhp,
			memoryCardC
		};
	};

	return {
		createCards: module.createCards
	};
})();
