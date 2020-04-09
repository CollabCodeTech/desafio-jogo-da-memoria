const formLogin = (function() {
  const module = {};

  module._children = () => {
    const $labelEmail = formLabel.render("E-mail");
    const $inputEmail = formInput.render({
      placeholder: "example@email.com",
      type: "email"
    });
    const $msgErrorEmail = msgError.render("email");
    const $labelPass = formLabel.render("Password");
    const $inputPass = formInput.render({
      id: "password",
      placeholder: "8 digits",
      type: "password"
    });
    const $msgErrorPass = msgError.render("password");
    const $eyePass = formEye.render({ attrFor: "password" });
    const $forgetLink = forgetLink.render({
      href: "#",
      content: "Forget password?"
    });
    const $submitButton = submitButton.render({
      content: "Login",
      path: "game"
    });

    return `
         ${$labelEmail + $inputEmail + $msgErrorEmail}
         ${$labelPass + $inputPass + $msgErrorPass}
         ${$eyePass}
         ${$forgetLink}
         ${$submitButton}
      `;
  };

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
         .form-login {
            display: flex;
            flex-direction: column;
            width: 100%;
            padding:0 35px 40px;
         
          `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = () => {
    module._style();

    return `<form class="form-login" action="" method="POST">${module._children()}</form>`;
  };

  return {
    render: module.render
  };
})();
