const blockLayer = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .block-layer {
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.5);
        }

        .block-layer.-disable {
            opacity: 0;
            transition: all 300ms 200ms linear;
        }
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();

    return `
            <div class="block-layer"></div>
        `;
  };

  return {
    render: module.render
  };
})();
