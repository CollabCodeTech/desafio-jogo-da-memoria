const messageAlert = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .message-alert {
        display: none;
        color: #f25a70;
        font-size: 24px;
        text-align: center;
        padding: 10px;            
      }

      .message-alert.-visible {
        display: block;            
      }

      .message-alert.-visible + .label-collabcode {
        margin: 0;
      }
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = ({ content = "", id = "" }) => {
    module._style();

    return `
      <p
        id="${id}"
        class="message-alert">
        ${content}
      </p>    
    `;
  };

  return {
    render: module.render
  };
})();
