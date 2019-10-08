const scoreBar = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .score-bar {
            background-color: #3a4042;
            height: 50px;
            text-align: center;
        }

        .score-bar > .return-button {
          position: absolute;
          left: 4px;
          top: 4px;
        }

        .score-bar > .score {
            color: #fff;
            line-height: 50px;
        }
    `;

    $head.insertBefore($style, null);
  };

  module.create = () => {
    module._style();

    const $returnButton = returnButton.render({
      content: "Voltar",
      path: "login"
    });

    return `
    <header class="score-bar">
        ${$returnButton}
        <span class="score">0</span>
    </header>
  `;
  };

  module.increaseScore = () => {
    const $scoreBar = document.querySelector(".score");
    store.score++;
    $scoreBar.textContent = store.score;
  };

  return {
    create: module.create,
    increaseScore: module.increaseScore
  };
})();
