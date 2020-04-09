const formInput = (function() {
  const module = {};

  module._style = active => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
         .form-input {
            display: block;
            width: 100%;
            font-size: 18px;
            font-weight: bold;
            color: #3A4042;
            border-bottom: 2px rgba(58,64,66, 0.5) solid;
            padding: 12px 0;
            background-repeat: no-repeat;
            background-position: right;
            background-size: 23px;
            cursor: pointer;
         }
         .form-input + .form-label {
            margin-top: 29px;
         }
         `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = ({ id = "", placeholder = "", type = "text" }) => {
    module._style();

    return `
         <input 
         id="${id}" 
         class="form-input" 
         type="${type}" 
         placeholder="${placeholder}" 
         required>
         `;
  };

  return {
    render: module.render
  };
})();
