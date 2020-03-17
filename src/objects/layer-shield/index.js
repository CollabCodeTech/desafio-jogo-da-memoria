const layerShield = (function() {
  const module = {};
  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .shield.-disable {
        opacity: 0;
      }
      .shield{
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        border-radius: 30px;
        background-image: linear-gradient(#000, #82828260, #000);
        z-index: 1;
        transition: opacity 300ms linear;

      }      
    `;
    $head.insertBefore($style, null);
  };
  module.create = () => {
    const $startButton = startButton.render();
    module._style();
    return `
    <div class="shield" 
    onTransitionEnd="layerShield.handleTransitionEnd(this)">
    ${$startButton}
    </div>
    `;
  };

  module.handleTransitionEnd = $component => {
    $component.remove();
  };

  return {
    create: module.create,
    handleTransitionEnd: module.handleTransitionEnd
  };
})();
