const formLogin = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-login{
        padding: 0 35px 30px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module._children = () => {
    const $labelUsername = labelForm.render("Username ou e-mail");
    const $labelPassword = labelForm.render("Password");

    const $userInput = inputForm.render({
      id: "user",
      type: "text",
      placeholder: "example@email.com"
    });

    const $passwordInput = inputForm.render({
      id: "password",
      type: "password",
      placeholder: "Your password"
    });

    const $eyeCollab = eyeCollab.render({attrFor: "password"});
    
    const $submitButton = validationButton.render({content: "Login", path: "game"});

    const $forgetPassword = actionLink.render({
      href: "#",
      content: "Forget Password?"
    });

    return `
      ${$labelUsername}
      ${$userInput}
      ${$labelPassword}
      ${$passwordInput}
      ${$eyeCollab}
      ${$forgetPassword}
      ${$submitButton}
    `
  };


  module.render = () => {
    module._style();
    return `<form class="form-login" action="" method="POST"> ${module._children()}</form>`;
  }

  return {
    render: module.render
  }
})();