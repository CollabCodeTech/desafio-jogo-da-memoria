const formSignup = (function(){
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-signup{
        padding: 0 35px 30px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module._children = () => {
    const $labelUsername = labelForm.render("Username");
    const $labelEmail = labelForm.render("E-mail");
    const $labelPassword = labelForm.render("Password");
    const $labelPasswordConfirm = labelForm.render("Confirm Password");

    const $userInput = inputForm.render({
      type: "text",
      placeholder: "Name-example"
    });

    const $emailInput = inputForm.render({
      type: "email",
      placeholder: "example@email.com"
    });

    const $passwordInput = inputForm.render({
      type: "password",
      placeholder: "Your password"
    });
    
    const $confirmPasswordInput = inputForm.render({
      type: "password",
      placeholder: "Confirm your password"
    });

    const $submitButton = validationButton.render({content: "Submit", path: "login"});

    return `
      ${$labelUsername}
      ${$userInput}
      ${$labelEmail}
      ${$emailInput}
      ${$labelPassword}
      ${$passwordInput}
      ${$labelPasswordConfirm}
      ${$confirmPasswordInput}
      ${$submitButton}
    `
  };

  module.render = () => {
    module._style();
    return `<form class="form-signup" action="" method="POST"> ${module._children()}</form>`;
  }

  return {
    render: module.render
  }
})();