const spanError = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .span-error {
        width: 100%;
        padding: 0;
      
        font-size: 80%;
        color: white;
        background-color: #900;
        border-radius: 0 0 5px 5px;
      
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: none;
      }
      
      .span-error.-active {
        padding: 0.3em;
        display: initial;
      }   
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module._render = spanfor => {
    return `<span for="${spanfor}" class="span-error" aria-live="polite"></span>`;
  };

  module.create = () => {
    module._style();
    return module._render;
  };

  return {
    create: module.create
  };
})();
