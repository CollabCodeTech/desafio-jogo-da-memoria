const labelCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .label-collabcode {
        display: block;
        color: #3a4042;
        font-size: 16px;
        opacity: 0.5;
      }

      .input-collabcode + .label-collabcode {
        margin-top: 30px;
      }      

      .span-error + .label-collabcode {
        margin-top: 30px;
      }  
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module._render = ({ content, labelfor }) => {
    return `<label for="${labelfor}" class="label-collabcode">${content}</label>`;
  };

  module.create = () => {
    module._style();
    return module._render;
  };

  return {
    create: module.create
  };
})();
