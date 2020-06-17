const formLogin = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-login {
        padding: 0 35px 30px;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module._children = () => {
    const $labelUsernameOrEmail = labelForm.render("Username ou e-mail");
    const $inputUsernameOrEmail = inputForm.render({
      type: "email",
      placeholder: "example@email.com",
      id: "email",
    });

    const $feedbackErrorInputEmail = feedbackInputs.render("email");
    const $labelPassword = labelForm.render("Password");
    const $inputPassword = inputForm.render({
      type: "password",
      placeholder: "password must be at least 8 digits",
      id: "password",
    });
    const $feedbackErroInputPassword = feedbackInputs.render("password");

    const $linkForget = linkForget.render({
      content: "Forget password?",
      href: "#",
    });
    const $eyePassword = eyePassword.render({ attrFor: "password" });
    const $submitLogin = submitForm.render({ content: "Login", path: "game" });

    return `
      ${
        $labelUsernameOrEmail + $inputUsernameOrEmail + $feedbackErrorInputEmail
      }
      ${
        $labelPassword +
        $inputPassword +
        $eyePassword +
        $feedbackErroInputPassword
      }
      ${$linkForget}
      ${$submitLogin}

    `;
  };
  module.createForm = () => {
    module._style();

    return `
      <form method="POST" action="" class="form-login">
        ${module._children()}
      </form> 
    `;
  };

  return {
    render: module.createForm,
  };
})();
