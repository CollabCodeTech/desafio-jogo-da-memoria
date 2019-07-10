const inputCollabcode = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .input-collabcode {
        display: block;
        width: 100%;
        color: #3a4042;
        font-size: 18px;
        font-weight: bold;
        border-bottom: 2px solid rgba(58, 64, 66, .5);
        padding: 12px 0;
        background-color: white;          
      }
      
      .message-alert + .label-collabcode { 
        margin-top: 30px;
      }
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = ({ id = "", type = "text", placeholder = "" }) => {
    module._style();
    return `
      <input 
        id="${id}"
        class="input-collabcode" 
        type="${type}" 
        placeholder="${placeholder}"/>
    `;
  };

  return {
    render: module.render
  };
})();
