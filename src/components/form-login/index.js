const formLogin = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-login {
        margin-top: 7%;
        padding: 0 10px;
        
      }

      .form-login > .input-collabcode[type="email"]{
        margin-bottom: 7%;
      }

      .form-login > .text-collabcode {
        text-align: center;
        margin-top: 11px;
        
        margin-right: auto;
        margin-left: auto;
        width: 40%;
      }

      .form-login > .eye-collabcode {
        right: 25px;
        transform: translateY(-140%);
      }
      
      .form-login > .icon-collabcode {
        left: 20px;
        transform: translateY(25%);
      }
      .form-login > .button-collabcode {

        margin-top: 12%;

      }

      .form-login > .label-collabcode {
        display: block;
        margin-bottom: 5px;
        margin-left: 5px;
      }

    `;

    $head.insertBefore($style, null);
  };

  module._children = () => {
    const $emailLabel = labelCollabcode.render({ content: "Email" });
    const $emailLogin = inputCollabcode.render({
      type: "email",
      placeholder: "diego.cezar@exemplo.com"
    });

    const $iconEmail = iconCollabcode.render({ icon: "email" });

    const $senhaLabel = labelCollabcode.render({ content: "Senha" });
    const $senhaLogin = inputCollabcode.render({
      id: "password",
      type: "password",
      placeholder: "Digite sua senha"
    });

    const $iconLock = iconCollabcode.render({ icon: "lock" });

    const $eyePassword = eyeCollabcode.render({
      attrFor: "password"
    });

    const $esqueceuSenha = textCollabcode.render({
      content: "Esqueceu a senha?"
    });

    const $botaoLogin = buttonCollabcode.render({
      content: "Entrar",
      path: "nivel"
    });

    const $criarConta = textCollabcode.render({
      href: "signup",
      content: "Criar conta grátis"
    });

    return `
    ${$emailLabel}
      ${$iconEmail}
      ${$emailLogin}
      ${$senhaLabel}
      ${$iconLock}
      ${$senhaLogin}
      ${$eyePassword}
      ${$esqueceuSenha}
      ${$botaoLogin}
      ${$criarConta}
    `;
  };

  module.render = () => {
    module._style();

    return `
      <form class="form-login" action="" method="GET">${module._children()}</form>
    `;
  };

  return {
    render: module.render
  };
})();
