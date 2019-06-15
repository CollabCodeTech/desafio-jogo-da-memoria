const btnCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .btn-collabcode {
        height: 48px;
        border-radius: 24px;
        width: 100%;
        color: white;
        font-size: 14px;
        text-transform: uppercase;
        background-color: #f25a70;
        cursor: pointer;
      }

      .input-collabcode + .btn-collabcode {
        margin-top: 45px;
      }

      .span-error + .btn-collabcode {
        margin-top: 45px;
      }      
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = ({ content = "" }) => {
    module._style();

    return `<button 
              class="btn-collabcode">${content}</button>`;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
