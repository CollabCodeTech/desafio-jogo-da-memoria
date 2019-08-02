const formSignup = (function() {
  const module = {};

  module._children = () => {
    const $nomeSignup = inputCollabcode.render({
      placeholder: "Seu nome"
    });

    const $iconAccount = iconCollabcode.render({ icon: "account" });

    const $emailSignup = inputCollabcode.render({
      type: "email",
      placeholder: "Seu email"
    });

    const $iconEmail = iconCollabcode.render({ icon: "email" });

    const $senhaSignup = inputCollabcode.render({
      id: "password",
      type: "password",
      placeholder: "Informe uma senha"
    });

    const $iconLock = iconCollabcode.render({ icon: "lock" });

    const $confirmaSenha = inputCollabcode.render({
      id: "confirmPassword",
      type: "password",
      placeholder: "Repita sua senha"
    });

    const $eyePassword = eyeCollabcode.render({
      attrFor: "password"
    });

    const $eyeConfirmPassword = eyeCollabcode.render({
      attrFor: "confirmPassword"
    });

    const $botaoSignup = buttonCollabcode.render({
      path: "login",
      content: "Cadastrar"
    });
    const $botaoVoltar = buttonCollabcode.render({
      path: "login",
      variacao: "-back",
      content: "Voltar"
    });

    return `
      ${$iconAccount}
      ${$nomeSignup}
      ${$iconEmail}
      ${$emailSignup}
      ${$iconLock}
      ${$senhaSignup}
      ${$eyePassword}
      ${$iconLock}
      ${$confirmaSenha}
      ${$eyeConfirmPassword}
      ${$botaoSignup}
      ${$botaoVoltar}
      
    `;
  };

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-signup {
        margin-top: 7%;
        padding: 0 10px;
      }

      .form-signup > .input-collabcode {
        margin-bottom: 9px;

      }

      .form-signup > .button-collabcode {

        margin-top: 2%;

      }



      .form-signup > .eye-collabcode {
      right: 25px;
      transform: translateY(-180%);
      }

      .form-signup > .icon-collabcode {
        left: 20px;
        transform: translateY(25%);
      }

    `;

    $head.insertBefore($style, null);
  };
  module.render = () => {
    module._style();

    return `
      <form class="form-signup" action="" method="POST">${module._children()}</form>
    `;
  };

  return {
    render: module.render
  };
})();
