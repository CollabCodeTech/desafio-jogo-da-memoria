(function() {
  const $root = document.querySelector("#root");

  const $cardsWrapper = createCardsWrapper();
  const createMemoryCard = memoryCard.create();
  const $scoreBar = scoreBar.create();

  const $layerWrapper = layerWrapper.render("Go!");

  const $memoryCardCpp = createMemoryCard({
    icon: "c",
    alt: "Icone de livro de C++"
  });
  const $memoryCardJs = createMemoryCard({
    icon: "js",
    alt: "Icone de livro de JS"
  });
  const $memoryCardWoman = createMemoryCard({
    icon: "woman",
    alt: "Icone de mulher programando"
  });
  const $memoryCardBug = createMemoryCard({
    icon: "bug",
    alt: "Icone de bug"
  });

  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCpp);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCpp);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);

  $root.insertAdjacentHTML("afterbegin", $scoreBar);
  $root.insertAdjacentElement("beforeend", $cardsWrapper);
  $root.insertAdjacentHTML("beforeend", $layerWrapper);
})();
