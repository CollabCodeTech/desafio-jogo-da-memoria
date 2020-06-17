const transparencyLayer = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .transparency-layer {
        position: absolute;
        top: 0; 
        background-color: rgba(58,64,66, 0.5); 
        width: 100vw;
        height: 150vh;
        transition: opacity 300ms 200ms linear; 

      }

      .transparency-layer.-disable{
        opacity: 0;

      }
    `;

    $head.insertBefore($style, null);
  };

  module.createLayer = () => {
    module._style();
    return `
      <div class="transparency-layer"></div>
    `;
  };

  return {
    createNewTransparencyLayer: module.createLayer,
  };
})();
