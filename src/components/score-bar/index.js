const scoreBar = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .score-bar {
        background-color: #3a4042;
        height: 45px;
        width: 100%;
        
        margin-right: auto;
        margin-left: auto;
    
        text-align: right;
        font-family: 'Comfortaa', sans-serif;
        display: flex;
        justify-content: flex-end;
      }

      .score-bar > .score, 
      .score-bar > .timer-collabcode {
        line-height: 45px;
        color: #fff;
        font-weight: bold;
        margin-right:10px;
      }

      .score-bar > .timer-collabcode {
        margin-right: 20px;

      }
    `;

    $head.insertBefore($style, null);
  };

  module.updateScore = () => {
    const $score = document.querySelector(".score");
    $score.textContent = `Placar: ${store.score} pontos`;
  };

  module._children = () => {
    const $timerCollabcode = timerCollabcode.render();

    const $pauseButton = gameButton.render({
      buttonClass: "-pause",
      content: "pausar",
      path: "pause"
    });

    return `
      ${$timerCollabcode}
      ${$pauseButton}
   `;
  };

  module.timer = seconds => {
    const nivel = localStorage.getItem("dificuldade");
    const $timer = document.querySelector(".timer-collabcode");
    const $pauseButton = document.querySelector(".-pause");
    const minutos = 0;
    let segundos = seconds;
    const counter = setInterval(() => {
      if ($pauseButton.classList.contains("-paused")) {
        clearInterval(counter);
        store.tempoPausado = segundos;
      } else {
        if (minutos == 0 && segundos >= 0) {
          $timer.textContent = `Tempo: 0${minutos}:${segundos}`;
          if (segundos < 10) {
            $timer.textContent = `Tempo: 0${minutos}:0${segundos}`;
          }

          if (nivel == 1 && store.score == 40) {
            clearInterval(counter);
            store.tempoPausado = segundos;

            endGame();
          }
          if (nivel == 2 && store.score == 80) {
            clearInterval(counter);
            store.tempoPausado = segundos;

            endGame();
          }
          if (nivel == 3 && store.score == 100) {
            clearInterval(counter);
            store.tempoPausado = segundos;

            endGame();
          }
          segundos = segundos - 1;
        }
      }
    }, 1000);

    if (segundos == 0) {
      clearInterval(counter);
    }
  };

  module.create = () => {
    module._style();
    return `
     <header class="score-bar">
     
      ${module._children()}
      <span class="score">Placar: 0 pontos</span>
     </header>
    `;
  };

  return {
    create: module.create,
    score: module.updateScore,
    timer: module.timer
  };
})();
