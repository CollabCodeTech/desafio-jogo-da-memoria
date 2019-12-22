const createLayer = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .lock-layer{
        background-color: rgba(58, 64, 66, .5);
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        z-index: 1;
        transition: opacity 300ms 300ms linear;
      }

      .lock-layer.-disable{
        opacity: 0;
      }

    `;
    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();
    return `
      <div class="lock-layer"></div>
    `;
  };

  return {
    render: module.render
  };
})();