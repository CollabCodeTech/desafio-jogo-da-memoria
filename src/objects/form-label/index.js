const formLabel = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-label {
        display: block;
        font-size: 16px;
        color: #3a4042;
        opacity: 0.5;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = content => {
    module._style();

    return `<label class="form-label">${content}</label>`;
  };

  return {
    render: module.render
  };
})();
