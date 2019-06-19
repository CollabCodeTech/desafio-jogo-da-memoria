const transparecyLayer = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .transparecy-layer{
        width: 100%;
        height: 100%;
        background-color: #e9e9e9;
        position: fixed;
        top: 0;
        opacity: 0.7;
        transition: opacity 250ms 200ms ease-out;
      }
      .transparecy-layer.-disable{
        opacity: 0;
      }
      `;
    $head.insertBefore($style, null);
  };
  module.render = () => {
    module._style();
    return `
      <div class="transparecy-layer"></div>
    `;
  };
  return {
    render: module.render
  };
})();
