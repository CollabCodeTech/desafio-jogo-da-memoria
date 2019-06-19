const game = (function() {
  //IIFE função anonima envolvendo o escopo e logo em seguida ela é executada
  const $root = document.querySelector("#root");

  const $cardsWrapper = createCardsWrapper();

  const createMemoryCard = memoryCard.create();

  const $pointBar = pointBar.create({
    path: "login"
  });

  const $layerStart = layerStart.render("Start");

  const $memoryCardBug = createMemoryCard({
    alt: "Icone de Bug",
    src: "img/icon-bug.png"
  });
  const $memoryCardJS = createMemoryCard({
    src: "img/icon-js.png",
    alt: "Icone JavaScript"
  });
  const $memoryCardC = createMemoryCard({
    alt: "Icone do C++",
    src: "img/icon-c.png"
  });
  const $memoryCardPHP = createMemoryCard({
    alt: "Icone do PHP",
    src: "img/icon-php.png"
  });

  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPHP);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPHP);

  $root.insertAdjacentHTML("beforeend", $pointBar);
  $root.insertAdjacentElement("beforeend", $cardsWrapper);
  $root.insertAdjacentHTML("beforeend", $layerStart);
});
//caminho dos parametros na ordem `alt, src, nameClass`
//page passa informação para o components
