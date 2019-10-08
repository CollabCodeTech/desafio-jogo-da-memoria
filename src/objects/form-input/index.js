const formInput = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-input {
        display: block;
        width: 100%;
        border-bottom: 1px solid rgba(58, 64, 66, 0.5);
        font-size: 18px;
        font-weight: bold;
        padding-bottom: 12px; 
        padding-top: 12px; 
      }

      .form-input::placeholder {
        color: #3a4042;
        opacity: 0.3;
      }

      .form-input + .form-label{
        margin-top: 30px;
      }

      .form-input + .submit-button {
        margin-top: 45px;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.validateEmail = email => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  module.render = ({ inputType = "text", content = "", inputId = "" }) => {
    module._style();

    return `
      <input class="form-input" id="${inputId}" type="${inputType}" placeholder="${content}" required />
    `;
  };

  return {
    render: module.render,
    validateEmail: module.validateEmail
  };
})();
