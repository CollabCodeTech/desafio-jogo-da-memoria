const layerStart = (function() {
  const module = {};

  module.handleClick = $component => {
    //$component é a div que está no return.
    const $children = $component.querySelectorAll("*"); //* = significa que está pegando todos os filhos do $component

    $children.forEach($item => $item.classList.add("-disable")); // para cada $item do $component, está adicionando o seletor css -disable
  };

  module.handleTransitionEnd = (event, $component) => {
    if (event.target.classList.contains("transparecy-layer")) {
      $component.remove();
    }
  };

  module.render = content => {
    const $transparecyLayer = transparecyLayer.render();
    const $gameButton = gameButton.render(content);

    return `
      <div class="layer-start" onClick="layerStart.handleClick(this)" onTransitionEnd="layerStart.handleTransitionEnd(event, this)">
        ${$transparecyLayer}
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
