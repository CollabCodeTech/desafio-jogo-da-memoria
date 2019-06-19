const inputCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .input-collabcode{
        font-size: 18px;
        padding-top: 12px;
        padding-bottom: 12px;
        border-bottom: 1px solid #9c9fa0;
        display: block;
        width: 100%;
      }
      .input-collabcode + .label-collabcode {
        margin-top: 30px;
      }
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = ({ id = "", placeholder = "", type = "text" }) => {
    module._style();

    return `<input class="input-collabcode" id="${id}" placeholder="${placeholder}" type="${type}" required>`;
  };

  return {
    render: module.render
  };
})();
