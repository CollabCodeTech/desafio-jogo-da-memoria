const pointBar = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .point-bar{
        font-size: 18px;
        text-align: center;
        font-family: 'Balsamiq Sans', sans-sarif;
      }

      .point-bar > .counter{
        color: #f25a70;
        line-height: 40px;
        font-weight: bold;

      }

      .point-bar > .plays { 
        margin-left: 20px;
        color: #FFF;
        line-height: 40px;
        font-weight: bold;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.scoreBarCount = () => {
    const $counter = document.querySelector(".point-bar > .counter");
    const $counterPlays = document.querySelector(".point-bar > .plays");

    $counter.textContent = `Pontos: ${store.score}`;
    $counterPlays.textContent = `Jogadas: ${store.plays}`;
  };

  module.createBar = () => {
    module._style();
    return `
      <div class="point-bar">
        <span class="counter">Pontos: 0</span>
        <span class="plays">Jogadas: 0</span>
      </div>
    `;
  };

  return {
    render: module.createBar,
    scoreBar: module.scoreBarCount,
  };
})();
