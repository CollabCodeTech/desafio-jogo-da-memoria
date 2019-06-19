const formLogin = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .form-login {
        padding: 0 35px 40px;
      }  
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module._children = () => {
    const $labelCollabcode = labelCollabcode.render("Username ou e-mail");
    const $inputEmailCollabcode = inputCollabcode.render({ id: "email", placeholder: "example@gmail.com", type: "email" });
    const $errorMessageEmail = errorMessage.render("email");
    const $eyeCollabcode = eyeCollabcode.render({ attrFor: "password" });
    const $passwordCollabcode = labelCollabcode.render("Password");
    const $inputPasswordCollabcode = inputCollabcode.render({ id: "password", placeholder: "********", type: "password" });
    const $errorMessagePassword = errorMessage.render("password");
    const $linkCollab = linkCollab.render({ href: "#", content: "Forget Password ?" });
    const $btnCollabcode = btnCollabcode.render({ content: "Login", path: "game" });

    return `
      ${$labelCollabcode}
      ${$inputEmailCollabcode}
      ${$errorMessageEmail}
      
      ${$passwordCollabcode}
      ${$inputPasswordCollabcode}
      ${$eyeCollabcode}
      ${$errorMessagePassword}
      
      ${$linkCollab}

      ${$btnCollabcode}
    `;
  };

  module.render = () => {
    module._style();

    return `<form class="form-login" action="" method="POST">${module._children()}</form>`;
  };

  return {
    render: module.render
  };
})();
