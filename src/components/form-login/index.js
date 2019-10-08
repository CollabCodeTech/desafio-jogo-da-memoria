const formLogin = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-login {
        padding: 0 35px 35px;
      }

      .form-login > .form-icon {
        float: right;
        transform: translate(-10px, calc(-100% - 12px));
      }

      .form-login > .forget-password {
        display: block;
        margin-top: 45px;
        margin-bottom: 100px;
        text-align: right;
      }
      
      .form-login > .forget-password > .form-label {
        font-size: 14px;
        cursor: pointer;
      }
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module._children = () => {
    const $userLabel = formLabel.render("Username or E-mail");
    const $userInput = formInput.render({
      inputType: "text",
      content: "example@email.com",
      inputId: "email"
    });

    const $passwordLabel = formLabel.render("Password");
    const $passwordInput = formInput.render({
      inputType: "password",
      content: "Password",
      inputId: "password"
    });

    const $hiddenIcon = formIcon.render({
      src: "assets/hidden.png",
      alt: "Icon to show or hide password"
    });

    const $formLink = formLink.render({
      href: "#",
      content: "Forget Password?"
    });

    const $submitBtn = submitButton.render("Login", "game");

    return `
      ${$userLabel}
      ${$userInput}

      ${$passwordLabel}
      ${$passwordInput}
      ${$hiddenIcon}
      
      ${$formLink}

      ${$submitBtn}
    `;
  };

  module._validateEmail = email => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  module._validatePassword = password => password.length >= 8;

  module._clearInputs = ($email, $password) => {
    $email.value = "";
    $password.value = "";
  };

  module.validateSubmit = function() {
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const valid =
      module._validateEmail(email.value) &&
      module._validatePassword(password.value);

    module._clearInputs(email, password);

    return valid;
  };

  module.render = () => {
    module._style();

    return `<form class="form-login" action="" method="POST">${module._children()}</form>`;
  };

  return {
    render: module.render,
    validateSubmit: module.validateSubmit
  };
})();
