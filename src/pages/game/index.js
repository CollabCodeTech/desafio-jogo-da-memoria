const game = function() {
  const $root = document.querySelector("#root");

  const $cardsWrapper = cardsWrapper.render();
  const $gameLayer = gameLayer.render();

  const $startButton = gameButton.render({
    buttonClass: "-start",
    content: "Iniciar",
    path: "start"
  });
  const $backButton = gameButton.render({
    buttonClass: "-exit",
    content: "Sair",
    path: "exit"
  });

  $root.insertAdjacentHTML("beforebegin", $gameLayer);
  $root.insertAdjacentHTML("beforebegin", $startButton);
  $root.insertAdjacentHTML("beforebegin", $backButton);
  $root.insertAdjacentHTML("beforeend", $cardsWrapper);
};
