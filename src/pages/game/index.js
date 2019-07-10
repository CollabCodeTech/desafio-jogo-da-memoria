const game = () => {
  const $root = document.querySelector("#root");
  const $pointBar = pointBar.create();
  const $cardsWrapper = createCardsWrapper();
  const createMemoryCard = MemoryCard.create();
  const $layerStart = layerStart.render("start");
  const $backButton = btnCollabcode.render({
    content: "Voltar",
    path: "login",
    id: "backButton"
  });

  const $CardCsharp = createMemoryCard({
    src: "img/icon-c.png",
    alt: "Ícone de um livro da linguagem C++"
  });
  const $CardPHP = createMemoryCard({
    src: "img/icon-php.png",
    alt: "Ícone de um livro de PHP"
  });
  const $CardJS = createMemoryCard({
    src: "img/icon-js.png",
    alt: "Ícone de um livro de Javascript"
  });
  const $CardCabeca = createMemoryCard({
    src: "img/icon-cabeca.png",
    alt: "Imagem de uma cabeça com tag dentro"
  });

  $cardsWrapper.insertAdjacentHTML("beforeend", $CardCsharp);
  $cardsWrapper.insertAdjacentHTML("beforeend", $CardPHP);
  $cardsWrapper.insertAdjacentHTML("beforeend", $CardCabeca);
  $cardsWrapper.insertAdjacentHTML("beforeend", $CardJS);
  $cardsWrapper.insertAdjacentHTML("beforeend", $CardPHP);
  $cardsWrapper.insertAdjacentHTML("beforeend", $CardJS);
  $cardsWrapper.insertAdjacentHTML("beforeend", $CardCsharp);
  $cardsWrapper.insertAdjacentHTML("beforeend", $CardCabeca);

  $root.insertAdjacentHTML("afterbegin", $pointBar);
  $root.insertAdjacentElement("beforeend", $cardsWrapper);
  $root.insertAdjacentHTML("beforeend", $layerStart);
  $root.insertAdjacentHTML("beforeend", $backButton);
};
