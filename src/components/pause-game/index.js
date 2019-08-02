const pauseGame = function() {
  const $root = document.querySelector("#root");

  const $gameLayer = gameLayer.render();

  const $backButton = gameButton.render({
    buttonClass: "-back",
    content: "Voltar",
    path: "back"
  });

  const $restartButton = gameButton.render({
    buttonClass: "-restart",
    content: "Reiniciar",
    path: "restart"
  });

  const $exitButton = gameButton.render({
    buttonClass: "-exit-paused",
    content: "Sair",
    path: "exit"
  });

  $root.insertAdjacentHTML("beforebegin", $gameLayer);
  $root.insertAdjacentHTML("beforebegin", $backButton);
  $root.insertAdjacentHTML("beforebegin", $restartButton);
  $root.insertAdjacentHTML("beforeend", $exitButton);

  // $root.insertAdjacentHTML("beforebegin", $startButton);
};
