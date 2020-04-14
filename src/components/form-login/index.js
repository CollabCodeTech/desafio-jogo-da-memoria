const formLogin = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .form-login {
            padding: 0 35px 35px;
        }`;

    $head.insertBefore($style, null);
  };

  module._children = () => {
    const $labelEmail = labelCollabcode.render("Username ou e-mail");
    const $inputEmail = inputCollabcode.render({
      id: "email",
      placeholder: "example@email.com",
    });

    const $labelPassword = labelCollabcode.render("Password");
    const $inputPassword = inputCollabcode.render({
      id: "password",
      placeholder: "8 digite",
      type: "password",
    });
    const $eyeCollabcode = ayeCollabcode.render({ attrFor: "password" });

    const $forgetPassword = linkCollabcode.render({
      content: "Forget Password ?",
    });

    const $btnCollabcode = btnCollabcode.render({
      content: "Login",
      path: "game",
    });

    return `
    ${$labelEmail}
    ${$inputEmail}

    ${$labelPassword}
    ${$inputPassword}
    ${$eyeCollabcode}
    ${$forgetPassword}

    ${$btnCollabcode}
    `;
  };

  module.render = () => {
    module._style();
    return `
        <form 
          class="form-login"
          method="POST" 
          onSubmit="formLogin.submit(event, this)"
        >
           ${module._children()}
        </form>
        `;
  };

  module.submit = (event, $form) => {
    event.preventDefault();
    const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const $email = $form.querySelector("#email");
    const $password = $form.querySelector("#password");

    if ($email.value.length === 0 || !emailRegExp.test($email.value)) {
      alertCollabcode.showAlert({
        content: "Please enter a valid email",
        type: "error",
      });
    } else if ($password.value.length < 8) {
      alertCollabcode.showAlert({
        content: "Password must be longer than 8 digits",
        type: "error",
      });
    } else {
      window.location.hash = "/game";
    }
  };

  return {
    render: module.render,
    submit: module.submit,
  };
})();
