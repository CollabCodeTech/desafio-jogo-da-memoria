const transparencyLayer = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .transparency-layer {
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        background-color: #3a4042b3;
        transition: opacity 300ms 500ms linear;  
      }

      .transparency-layer.-disable {
        opacity: 0;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();
    return `
      <div class="transparency-layer"></div>
    `;
  };

  return {
    render: module.render
  };
})();
