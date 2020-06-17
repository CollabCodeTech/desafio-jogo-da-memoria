const submitForm = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .submit-form{
        width: 100%;
        height: 48px;
        border-radius: 24px;
        background-color: #f25a70;
        font-size: 14px;
        text-transform: uppercase;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
      }
      
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module._validaEmail = () => {
    const $inputEmail = document.querySelector('input[type="email"]').value;
    const $feedbackEmail = document.querySelector('div[id="email"]');

    const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if ($inputEmail.match(regexEmail)) {
      $feedbackEmail.classList.remove("-active");
      return true;
    }
    $feedbackEmail.classList.add("-active");
    return false;
  };

  module._validaSenha = () => {
    const $inputPassword = document.querySelector('input[type="password"]')
      .value.length;
    const $feedbackPassword = document.querySelector('div[id="password"]');

    if ($inputPassword >= 8) {
      $feedbackPassword.classList.remove("-active");
      return true;
    }
    $feedbackPassword.classList.add("-active");
    return false;
  };

  module.handleClick = (event, path) => {
    module._validaEmail();
    module._validaSenha();
    event.preventDefault();
    if (module._validaEmail() && module._validaSenha()) {
      location.hash = `#/${path}`;
      location.reload(true);
    }
  };

  module.createSubmit = ({ content, path }) => {
    module._style();

    return `
      <input type="submit" class="submit-form" value= "${
        content || ""
      }" onClick="submitForm.handleClick(event, '${path || ""}')">
    `;
  };

  return {
    render: module.createSubmit,
    handleClick: module.handleClick,
  };
})();
