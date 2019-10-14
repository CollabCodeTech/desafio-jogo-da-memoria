const inputCollabCode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .input-collabcode{
        font-size: 18px;
        font-weight: bold;
        color: #3a4042;
        width: 100%;
        border-bottom: 2px solid rgba(58, 64, 66,0.5);
        padding: 12px 0 12px 0;
      }
      .input-collabcode.-invalid{
        background-color: rgba(255, 0, 0, 0.41);
      }    
      .input-collabcode.-valid{
        background-color: rgba(0, 128, 0, 0.41);
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = ({ type = "text", placeholder = "", id = ""}) => {
    module._style();

    return `  
      <input id="${id}" type="${type}" class="input-collabcode" placeholder="${placeholder}"/>
    `;
  };

  return {
    render: module.render
  };
})();
