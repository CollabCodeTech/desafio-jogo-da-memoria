const layerStart = (function() {
  const module = {};

  module.handleClick = $component => {
    const $startBtn = $component.querySelector(".start-btn");
    const $backBtn = $component.querySelector(".back-btn");
    const $coverGame = $component.querySelector(".cover-game");
    $startBtn.classList.add("-disable");
    $coverGame.classList.add("-disable");
  };

  module.handleTransitionEnd = (event, $component) => {
    if (event.target.classList.contains("cover-game")) {
      $component.remove();
    }
  };

  module._style = function() {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
  };

  module.render = (content1, content2) => {
    module._style();

    const $coverGame = coverGame.render();
    const $startBtn = startBtn.render(content1);
    const $backBtn = backBtn.render(content2);

    return `
         <div class="layer-start" onClick="layerStart.handleClick(this)" onTransitionEnd="layerStart.handleTransitionEnd(event, this)">
            ${$coverGame}
            ${$startBtn}
            ${$backBtn}
         </div>
      `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick,
    handleTransitionEnd: module.handleTransitionEnd
  };
})();
