const endGame = function() {
  const $root = document.querySelector("#root");

  const $gameLayer = gameLayer.render();
  const $messageEnd = messageEnd.render();

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
  $root.insertAdjacentHTML("beforebegin", $messageEnd);

  $root.insertAdjacentHTML("beforebegin", $restartButton);
  $root.insertAdjacentHTML("beforeend", $exitButton);

  // $root.insertAdjacentHTML("beforebegin", $startButton);
};
