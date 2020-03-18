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
        background-image: linear-gradient(#000, #82828260, #000);
        z-index: 1;
        transition: opacity 300ms linear;

      }
      .button${store.buttonId} {
        position: absolute;
        border: 2px solid;
        color: #fffcee;
        font-family: 'comfortaa', sans-sarif;
        top: 90%;
        left: 50%;
        transform: translateX(-50%);
        letter-spacing: 0.1em;
        font-size: 0.7em;
        background: none;
        z-index: 9;
      }    
    `;
    $head.insertBefore($style, null);
  };
  module.create = () => {
    const $startButton = startButton.render();
    const $returnButton = exitButton.render();
    module._style();
    return `
    <div class="shield" 
    onTransitionEnd="layerShield.handleTransitionEnd(this)">
    ${$startButton}
    ${$returnButton}
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
