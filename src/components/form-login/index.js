const formLogin = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-login{
        padding: 0 35px 40px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module._children = () => {
    const $usernameOrEmailLabel = labelCollabCode.render("Username or e-mail");
    const $usernameOrEmailInput = inputCollabCode.render({
      placeholder: "example@email.com",
      id: "email"
    });

    const $passwordLabel = labelCollabCode.render("Password");
    const $passwordInput = inputCollabCode.render({
      type: "password",
      placeholder: "********",
      id: "password"
    });

    const $linkCollabCode = linkCollabCode.render({
      href: "#",
      content: "Forgot password?"
    });

    const $eyeCollabCode = eyeCollabCode.render({ attrFor: "password" });

    const $btn = btnCollabCode.render({
      content: "Login",
      path: "game"
    });

    return `
      ${$usernameOrEmailLabel}
      ${$usernameOrEmailInput}

      ${$passwordLabel}
      ${$passwordInput}

      ${$eyeCollabCode}

      ${$linkCollabCode}

      ${$btn}   
    `;
  };

  module.render = () => {
    module._style();

    return `
      <form action="" method="GET" class="form-login">
        ${module._children()}
      </form>    
    `;
  };

  return {
    render: module.render
  };
})();
