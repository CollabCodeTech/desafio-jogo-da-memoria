const submitButton = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
         .submit-button {
            height: 48px;
            width: 100%;

            background-color: #f25a70;
            opacity: 0.9;
            border-radius: 24px;
            cursor: pointer;

            font-size: 14px;
            font-weight: bold;
            color: white;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            text-align: center;

         }
         .submit-button:hover {
            opacity: 1;
         }
         .form-input + .submit-button {
            margin-top: 45px;
         }
     `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module._validaEmail = () => {
    const $email = document.querySelector('input[type="email"]');
    const $msgEmail = document.querySelector('p[id="email"]');
    const emailValue = $email.value;
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (emailValue.match(mailFormat)) {
      $msgEmail.classList.remove("-show");
      return true;
    } else {
      $msgEmail.classList.add("-show");
      return false;
    }
  };

  module._validaSenha = () => {
    const $pass = document.querySelector('input[type="password"]').value;
    const $msgPass = document.querySelector('p[id="password"]');
    const numDig = $pass.length;

    if (numDig >= 8) {
      $msgPass.classList.remove("-show");
      return true;
    } else {
      $msgPass.classList.add("-show");
      return false;
    }
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

  module.render = ({ content = "", path = "" }) => {
    module._style();

    return `
         <input 
            class="submit-button" 
            type="submit" 
            value=${content}
            onclick="submitButton.handleClick(event, '${path}')">`;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
