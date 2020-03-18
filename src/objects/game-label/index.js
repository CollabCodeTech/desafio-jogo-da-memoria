const gameLabel = (function() {
  const module = {};
  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .label {
        color: #fffcee;
        margin: 10px;

      }
    `;
    $head.insertBefore($style, null);
  };

  module.render = $content => {
    module._style();

    return `
      <label class="label">${$content}</label>
    `;
  };
  return {
    render: module.render
  };
})();
