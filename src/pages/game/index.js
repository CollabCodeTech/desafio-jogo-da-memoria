const game = function () {
  const $root = document.querySelector("#root");

  const $cardsWrapper = createCardsWrapper();
  const createMemoryCard = memoryCard.render();

  const $pointBar = pointBar.render();
  const $buttonRefresh = buttonGUI.render({
    src: "img/refresh.png",
    alt: "ícone de atualização",
    path: "game",
  });

  const $buttonExit = buttonGUI.render({
    src: "img/close.png",
    alt: "ícone de sair",
    path: "login",
  });

  const $guiWrapper = guiWrapper.render($pointBar, $buttonRefresh, $buttonExit);
  const $layerStart = layerStart.render("Start");

  const $modalWin = modalWin.render({
    $buttonRefresh,
    content: "Você venceu! 🎉",
  });

  const $memoryCardFrontC = createMemoryCard({
    src: "img/icon-c.png",
    alt: "Icone de um livro da linguagem C++",
  });

  const $memoryCardFrontPHP = createMemoryCard({
    src: "img/icon-php.png",
    alt: "Icone de um livro da linguagem PHP",
  });

  const $memoryCardFrontJava = createMemoryCard({
    src: "img/icon-java.png",
    alt: "Icone de um livro da linguagem Java",
  });

  const $memoryCardFrontJs = createMemoryCard({
    src: "img/icon-js.png",
    alt: "Icone de um livro da linguagem JavaScript",
  });

  const $memoryCardFrontBug = createMemoryCard({
    src: "img/icon-bug.png",
    alt: "Ícone de um bug",
  });

  const $memoryCardFrontSettings = createMemoryCard({
    src: "img/icon-settings.png",
    alt: "Ícone com engrenagens",
  });

  const $memoryCardFrontWoman = createMemoryCard({
    src: "img/icon-woman.png",
    alt: "Ícone de uma programadora",
  });

  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontSettings);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontPHP);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontBug);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJava);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJs);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontPHP);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontC);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJs);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontSettings);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJava);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontWoman);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontC);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontBug);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontWoman);

  $root.insertAdjacentHTML("afterbegin", $guiWrapper);
  $root.insertAdjacentElement("beforeend", $cardsWrapper);
  $root.insertAdjacentHTML("beforeend", $layerStart);
  $root.insertAdjacentHTML("beforeend", $modalWin);
};
