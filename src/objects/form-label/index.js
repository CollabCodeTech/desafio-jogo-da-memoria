const formLabel = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
         .form-label {
            display: block;
            font-family: 'Comfortaa', sans-serife;
            font-size: 16px;
            color: #3A4042;
            opacity: 0.5;
            text-align: left;
         }
         `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = label => {
    module._style();
    return `
            <label class="form-label">${label}</label>
         `;
  };

  return {
    render: module.render
  };
})();
