const formSignup = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-signup {
        padding: 0 35px 40px;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module._children = () => {
    const createInput = inputCollabcode.create();
    const createLabel = labelCollabcode.create();
    const createSpan = spanError.create();

    const $usernameLabel = createLabel({
      content: "Username",
      labelfor: "username"
    });
    const $usernameInput = createInput({
      id: "username",
      required: true,
      placeholder: "seuusername"
    });
    const $usernameSpan = createSpan("username");

    const $emailLabel = createLabel({
      content: "E-mail",
      labelfor: "email"
    });
    const $emailInput = createInput({
      id: "email",
      required: true,
      placeholder: "seuemail@gmail.com",
      type: "email"
    });
    const $emailSpan = createSpan("email");

    const $passwordLabel = createLabel({
      content: "Password",
      labelfor: "password"
    });
    const $passwordInput = createInput({
      id: "password",
      required: true,
      placeholder: "suasenh@",
      type: "password"
    });
    const $passwordSpan = createSpan("password");

    const $confirmPasswordLabel = createLabel({
      content: "Confirm Password",
      labelfor: "confirmpassword"
    });
    const $confirmPasswordInput = createInput({
      id: "confirmpassword",
      required: true,
      placeholder: "suasenha@",
      type: "password"
    });
    const $confirmpasswordSpan = createSpan("confirmpassword");

    const $btnCollabcode = btnCollabcode.render({
      content: "Signup"
    });

    return `
      ${$emailLabel}
      ${$emailInput}
      ${$emailSpan}
      ${$usernameLabel}
      ${$usernameInput}
      ${$usernameSpan}
      ${$passwordLabel}
      ${$passwordInput}
      ${$passwordSpan}
      ${$confirmPasswordLabel}
      ${$confirmPasswordInput}
      ${$confirmpasswordSpan}
      ${$btnCollabcode}
    `;
  };

  module.render = () => {
    module._style();

    return `<form id="form" class="form-signup" method="POST" action="" novalidate>${module._children()}</form>`;
  };

  return {
    render: module.render
  };
})();
