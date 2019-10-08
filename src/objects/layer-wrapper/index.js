const layerWrapper = (function() {
  const module = {};

  module.handleClick = $component => {
    $component.querySelector(".start-button").classList.add("-disable");
    $component.querySelector(".block-layer").classList.add("-disable");
  };

  module.handleTransitionEnd = (event, $component) => {
    if (event.target.classList.contains("block-layer")) {
      $component.remove();
    }
  };

  module.render = content => {
    const $blockLayer = blockLayer.render();
    const $startButton = startButton.render(content);

    return `
            <div class="layer-wrapper" onClick="layerWrapper.handleClick(this)" onTransitionEnd="layerWrapper.handleTransitionEnd(event, this)">
                ${$blockLayer}
                ${$startButton}
            </div>
        `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick,
    handleTransitionEnd: module.handleTransitionEnd
  };
})();
