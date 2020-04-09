const game = function() {
  const $root = document.querySelector("#root");
  const $cardsWrapper = createCardsWrapper();
  const createMemoryCard = memoryCard.create();
  const $pointBar = pointBar.create();
  const $backBtn = backBtn.render("Back");
  const $layerStart = layerStart.render("Start", "Back");
  const defaultClass = "-front"

  const $memoryCardC = createMemoryCard({
    src: "img/icon-c.png",
    alt: "imagem do livro de C++",
    nameClass: defaultClass
  });

  const $memoryCardJS = createMemoryCard({
    src: "img/icon-js.png",
    alt: "imagem do livro de Javascript",
    nameClass: defaultClass
  });

  const $memoryCardJava = createMemoryCard({
    src: "img/icon-java.png",
    alt: "imagem do livro de Java",
    nameClass: defaultClass
  });

  const $memoryCardPhp = createMemoryCard({
    src: "img/icon-php.png",
    alt: "imagem do livro de PHP",
    nameClass: defaultClass
  });

  const $memoryCardWoman = createMemoryCard({
    src: "img/icon-woman.png",
    alt: "imagem do livro de mulher codando",
    nameClass: defaultClass
  });

  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);
  $cardsWrapper.insertAdjacentHTML("beforeend", $backBtn);

  $root.insertAdjacentHTML("afterbegin", $pointBar);
  $root.insertAdjacentElement("beforeend", $cardsWrapper);
  $root.insertAdjacentHTML("beforeend", $layerStart);
};
