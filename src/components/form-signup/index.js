const formSignup = (function() {
  const module = {};

  module._children = () => {
    const $labelUser = formLabel.render("User name");
    const $inputUser = formInput.render({
      placeholder: "Name-example"
    });
    const $labelEmail = formLabel.render("E-mail");
    const $inputEmail = formInput.render({
      placeholder: "example@email.com",
      type: "email"
    });
    const $labelPass = formLabel.render("Password");
    const $inputPass = formInput.render({
      placeholder: "*********",
      type: "password",
      variation: "hidden"
    });
    const $labelCPass = formLabel.render("Confirm password");
    const $inputCPass = formInput.render({
      placeholder: "*********",
      type: "password",
      variation: "hidden"
    });
    const $submitButton = submitButton.render({
      content: "Signup",
      path: "login"
    });

    return `
         ${$labelUser + $inputUser}
         ${$labelEmail + $inputEmail}
         ${$labelPass + $inputPass}
         ${$labelCPass + $inputCPass}
         ${$submitButton}
      `;
  };

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
         .form-signup {
            width: 100%;
            padding:0 35px 40px;
         }
      `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = () => {
    module._style();

    return `<form class="form-signup" action="" method="POST">${module._children()}</form>`;
  };

  return {
    render: module.render
  };
})();
