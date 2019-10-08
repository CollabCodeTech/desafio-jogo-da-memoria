const formSignup = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-signup {
        padding: 0 35px 35px;
      }

      .form-signup > .form-icon {
        float: right;
        transform: translate(-10px, calc(-100% - 12px));
      }
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module._children = () => {
    const $userLabel = formLabel.render("Username");
    const $userInput = formInput.render({
      inputType: "text",
      content: "Name-example"
    });

    const $emailLabel = formLabel.render("E-mail");
    const $emailInput = formInput.render({
      inputType: "email",
      content: "example@email.com"
    });

    const $passwordLabel = formLabel.render("Password");
    const $passwordInput = formInput.render({
      inputType: "password",
      content: "Password"
    });

    const $hiddenIcon = formIcon.render({
      src: "assets/hidden.png",
      alt: "Icon to show or hide password"
    });

    const $confirmPasswordLabel = formLabel.render("Confirm Password");
    const $confirmPasswordInput = formInput.render({
      inputType: "password",
      content: "Comfirm Password"
    });

    const $confirmHiddenIcon = formIcon.render({
      src: "assets/hidden.png",
      alt: "Icon to show or hide password"
    });

    const $submitButton = submitButton.render("Submit", "login");

    return `
      ${$userLabel}
      ${$userInput}

      ${$emailLabel}
      ${$emailInput}

      ${$passwordLabel}
      ${$passwordInput}
      ${$hiddenIcon}

      ${$confirmPasswordLabel}
      ${$confirmPasswordInput}
      ${$confirmHiddenIcon}

      ${$submitButton}
    `;
  };

  module.render = () => {
    module._style();

    return `<form class="form-signup" action="" method="POST">${module._children()}</form>`;
  };

  return {
    render: module.render
  };
})();
