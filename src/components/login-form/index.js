const loginForm = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .login-form {
        width: 310px;
        height: 270px;
        position: relative;
        left: 50%;
        top: 7%;
        transform: translateX(-50%);
        overflow: hidden;
      }
      .login-form .eye-password {
        top: -16%;
      }
      `;
    $head.insertBefore($style, null);
  };

  module._children = () => {
    const $labelNome = gameLabel.render("Nome");
    const $inputNome = gameInput.render({
      id: "name",
      type: "text",
      placeHolder: "CollabCode"
    });

    const $labelEmail = gameLabel.render("E-mail");
    const $inputEmail = gameInput.render({
      id: "email",
      type: "e-mail",
      placeHolder: "collab@collabcode.com"
    });

    const $labelSenha = gameLabel.render("Senha");
    const $inputSenha = gameInput.render({
      id: "password",
      type: "password",
      placeHolder: "Abcd@123"
    });

    const $labelRepetPassword = gameLabel.render("Repetir Senha");
    const $inputRepetPassword = gameInput.render({
      id: "repetPassword",
      type: "password",
      placeHolder: "Abcd@123"
    });

    const $eyepassword = eyePassword.render({ attrFor: "password" });

    return {
      labelName: $labelNome,
      inputName: $inputNome,
      labelEmail: $labelEmail,
      inputEmail: $inputEmail,
      labelPassword: $labelSenha,
      inputPassword: $inputSenha,
      labelRepetPassword: $labelRepetPassword,
      inputRepetPassword: $inputRepetPassword,
      eyePassword: $eyepassword
    };
  };

  module.render = () => {
    module._style();

    return `      
      <form id="login-form" class="login-form" action="" metod="GET" >
      ${module._children().labelEmail}
      ${module._children().inputEmail}
      ${module._children().labelPassword}
      ${module._children().inputPassword} 
      ${module._children().eyePassword}
      </form>      
    `;
  };

  return {
    render: module.render
  };
})();
