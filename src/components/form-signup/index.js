const formSignUp = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-signup{
        padding: 0 35px 30px;
      }
      
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module._children = () => {
    const $labelUsername = labelForm.render("Username");
    const $inputUsername = inputForm.render({
      placeholder: "your username here",
      type: "text",
    });

    const $labelEmail = labelForm.render("Email");
    const $inputEmail = inputForm.render({
      placeholder: "example@email.com",
      type: "email",
      id: "email",
    });

    const $labelPassword = labelForm.render("Password");
    const $inputPassword = inputForm.render({
      placeholder: "password must be at least 8 digits",
      type: "password",
    });

    const $labelConfirmPassword = labelForm.render("Confirm password");
    const $inputConfirmPassword = inputForm.render({
      placeholder: "password must be at least 8 digits",
      type: "password",
    });

    const $submitSignUp = submitForm.render({
      content: "submit",
      path: "login",
    });

    return `
      ${$labelUsername + $inputUsername}
      ${$labelEmail + $inputEmail}
      ${$labelPassword + $inputPassword}
      ${$labelConfirmPassword + $inputConfirmPassword}
      ${$submitSignUp}

    `;
  };

  module.createForm = () => {
    module._style();
    return `
      <form action="" method="POST" class="form-signup">
        ${module._children()}
      </form>
    `;
  };

  return {
    render: module.createForm,
  };
})();
