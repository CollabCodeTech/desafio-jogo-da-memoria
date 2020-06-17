const layerStart = (function () {
  const module = {};

  module.handleClick = ($component) => {
    const $children = $component.querySelectorAll("*");

    $children.forEach(($item) => $item.classList.add("-disable"));
  };

  module.handleTransitionEnd = (event, $component) => {
    if (event.target.classList.contains("transparency-layer")) {
      $component.remove();
    }
  };

  module.createLayer = (content) => {
    const $transparencyLayerStart = transparencyLayer.createNewTransparencyLayer();
    const $fabStart = fabButton.createNewFab(content);
    return `
      <div class="layer-start" onClick="layerStart.handleClick(this)" 
      onTransitionEnd="layerStart.handleTransition(event, this)">
        ${$transparencyLayerStart}
        ${$fabStart}
      </div>
    `;
  };

  return {
    render: module.createLayer,
    handleClick: module.handleClick,
    handleTransition: module.handleTransitionEnd,
  };
})();
