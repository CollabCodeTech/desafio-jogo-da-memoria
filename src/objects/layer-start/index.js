const layerStart = (() => {
  const module = {};

  module.handleClick = $component => {
    const $children = $component.querySelectorAll("*");
    $children.forEach($item => $item.classList.add("-hidden"));
  };

  module.handleTransitionEnd = (event, $component) => {
    if (event.target.classList.contains("transparent-layer")) {
      $component.remove();
    }
  };

  module.render = content => {
    const $transparentLayer = transparentLayer.render();
    const $gameButton = gameButton.render(content);

    return `
      <div 
        class="layer-start" 
        onClick="layerStart.handleClick(this)" 
        onTransitionEnd="layerStart.handleTransitionEnd(event, this)">
        ${$transparentLayer}
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
