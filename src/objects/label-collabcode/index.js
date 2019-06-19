const labelCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .label-collabcode{
        color: #9c9fa0;
        font-size: 16px;
        display: block;
      }
      `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = content => {
    module._style();

    return `<label class="label-collabcode">${content}</label>`;
  };

  return {
    render: module.render
  };
})();
