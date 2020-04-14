const inputCollabcode = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .input-collabcode{
            display:block;
            width: 100%;
            color:#3a4042;
            font-size: 18px;
            font-weight: bold;
            padding: 12px 0;
            border-bottom: 2px solid rgba(58,64,66,0.5);
        }

        .input-collabcode::placeholder{
            color: #3a4042;
            opacity:0.5;
        }
        `;

    $head.insertBefore($style, null);
  };

  module.render = ({id="", placeholder = "", type = "text" }) => {
    module._style();
    return `
    <input 
      id="${id}"
      type="${type}"
      placeholder="${placeholder}"
      class="input-collabcode"/>`;
  };
  return {
    render: module.render
  };
})();
