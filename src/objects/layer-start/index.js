const layerStart = (function() {
  const module = {};

  module.handleClick = ($component) => {
    const $children = $component.querySelectorAll("*");

    $children.forEach($item => $item.classList.add("-disable"));
  };

  module.handleTransitionEnd = (event, $component) => {
    if(event.target.classList.contains("lock-layer")){
      $component.remove();
    }
  };

  module.render = (content) => {
    const $lockLayer = createLayer.render();
    const $gameButton = gameButton.render(content);

    return `
      <div class="layer-start" onClick="layerStart.handleClick(this)" onTransitionEnd="layerStart.handleTransitionEnd(event, this)">
        ${$lockLayer}
        ${$gameButton}
      </div>
    `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick,
    handleTransitionEnd: module.handleTransitionEnd
  };
})();