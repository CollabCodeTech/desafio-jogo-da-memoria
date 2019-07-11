const game = (function() {
  const $root = document.querySelector("#root");

  const $cardsWrapper = createCardsWrapper();

  const createMemoryCard = memoryCard.create();

  const $backButton = backButton.render('login');

  const $pointBar = pointBar.create($backButton);

  const $layerStart = layerStart.render("Start");

  const cardJs = {
    data: "javascript",
    src: "icon-js",
    alt: "Livro da Linguagem JavaScript"
  };

  const cardC = {
    data: "c",
    src: "icon-c",
    alt: "Livro da Linguagem C++"
  };
  const cardHead = {
    data: "head",
    src: "icon-cabeca",
    alt: "Card com a imagem de uma cabeça"
  };
  const cardCelPhone = {
    data: "celphone",
    src: "icon-celular",
    alt: "Card com a imagem de um celular"
  };
  const cardJava = {
    data: "java",
    src: "icon-java",
    alt: "Livro da Linguagem JAVA"
  };
  const cardPhp = {
    data: "php",
    src: "icon-php",
    alt: "Livro da Linguagem PHP"
  };
  const cardResponsive = {
    data: "responsive",
    src: "icon-responsivo",
    alt: "Imagem referente a responsividade"
  };
  const cardWoman = {
    data: "woman",
    src: "icon-woman",
    alt: "Imagem de uma mulher desenvolvedora"
  };

  $cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard(cardJs));
  $cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard(cardJs));
  $cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard(cardJava));
  $cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard(cardJava));
  $cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard(cardPhp));
  $cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard(cardPhp));
  $cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard(cardWoman));
  $cardsWrapper.insertAdjacentHTML("beforeend", createMemoryCard(cardWoman));

  $root.insertAdjacentHTML("afterbegin", $pointBar);
  $root.insertAdjacentHTML("afterend", $layerStart);
  $root.insertAdjacentElement("beforeend", $cardsWrapper);

  const $cards = document.querySelectorAll(".memory-card");
});
