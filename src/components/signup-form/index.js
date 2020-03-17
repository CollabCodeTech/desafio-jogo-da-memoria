const signupForm = function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .login-form {
        width: 310px;
        height: 290px;
        position: relative;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        overflow: hidden;
      }

      .login-form .eye-password {
        top: -15%;
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
    const $eyePassword = eyePassword().render({ attrFor: "password" });

    const $labelRepetPassword = gameLabel.render("Repetir Senha");
    const $inputRepetPassword = gameInput.render({
      id: "repetPassword",
      type: "password",
      placeHolder: "Abcd@123"
    });

    const $eyePassRepet = eyePassword().render({ attrFor: "repetPassword" });

    return {
      labelName: $labelNome,
      inputName: $inputNome,
      labelEmail: $labelEmail,
      inputEmail: $inputEmail,
      labelPassword: $labelSenha,
      inputPassword: $inputSenha,
      eyePassword: $eyePassword,
      labelRepetPassword: $labelRepetPassword,
      inputRepetPassword: $inputRepetPassword,
      eyePassRepet: $eyePassRepet
    };
  };

  module.render = () => {
    module._style();

    return `      
      <form class="login-form" action="" metod="" >
      ${module._children().labelName}
      ${module._children().inputName}

      ${module._children().labelEmail}
      ${module._children().inputEmail}

      ${module._children().labelPassword}
      ${module._children().inputPassword}

      ${module._children().eyePassword}
      
      ${module._children().labelRepetPassword}
      ${module._children().inputRepetPassword}

      ${module._children().eyePassRepet}
      </form>
      
    `;
  };

  return {
    render: module.render
  };
};
