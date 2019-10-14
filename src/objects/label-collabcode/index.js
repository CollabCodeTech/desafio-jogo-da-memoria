const labelCollabCode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .label-collabcode{
        display: block;
        font-size: 16px;
        color: rgba(58, 64, 66,0.5);
      }

      .input-collabcode + .label-collabcode{
        margin-top: 30px;
      }
    `;
    $head.insertBefore($style, null);
  };

  module.render = content => {
    module._style();
    return `
      <label class="label-collabcode">${content}</label>
    `;
  };

  return {
    render: module.render
  };
})();
