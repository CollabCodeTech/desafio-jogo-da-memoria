const transparentLayer = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .transparent-layer {
        background-color: rgb(58, 64, 66, .9);
        width: 100vw;
        height:100vh;
        position:absolute;
        top:0;
        transition: opacity 300ms linear;
      }

      .transparent-layer.-hidden {
        opacity: 0;
      }
    `;
    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();

    return `
      <div class="transparent-layer"></div>
    `;
  };

  return {
    render: module.render
  };
})();
