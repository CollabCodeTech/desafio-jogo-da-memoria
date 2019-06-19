const formSignup = (function () {
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
    const $labelCollabcode = labelCollabcode.render("E-mail");
    const $inputCollabcode = inputCollabcode.render({
      id: "email",
      placeholder: "example@gmail.com",
      type: "email"
    });

    const $userCollabcode = labelCollabcode.render("Username");
    const $inputUserCollabcode = inputCollabcode.render({
      placeholder: "Name-example"
    });

    const $passwordCollabcode = labelCollabcode.render("Password");
    const $inputPasswordCollabcode = inputCollabcode.render({
      id: "password",
      placeholder: "********",
      type: "password"
    });

    const $confirmCollabcode = labelCollabcode.render("Confirm Password");
    const $inputconfirmCollabcode = inputCollabcode.render({
      id: "password",
      placeholder: "********",
      type: "password"
    });

    const $btnCollabcode = btnCollabcode.render({
      content: "Submit",
      path: "login"
      });

    return `
      ${$labelCollabcode}
      ${$inputCollabcode}
      
      ${$userCollabcode}
      ${$inputUserCollabcode}

      ${$passwordCollabcode}
      ${$inputPasswordCollabcode}

      ${$confirmCollabcode}
      ${$inputconfirmCollabcode}

      ${$btnCollabcode}
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
