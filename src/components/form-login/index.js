const formLogin = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-login {
        padding: 0 35px 40px;
        position: relative
      }    
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module._children = () => {
    const $labelEmail = labelCollabcode.render("E-mail");
    const $inputEmail = inputCollabcode.render({
      type: "email",
      placeholder: "example@email.com"
    });

    const $labelPassword = labelCollabcode.render("Password");
    const $inputPassword = inputCollabcode.render({
      id: "password",
      type: "password",
      placeholder: "........"
    });

    const $messageAlertEmail = messageAlert.render({
      content: "Digite seu melhor e-mail",
      id: "email"
    });
    const $messageAlertPassword = messageAlert.render({
      content: "Digite sua senha",
      id: "password"
    });

    const $linkCollab = linkCollab.render({ href: "#", content: "Forget password?" });

    const $eyeCollab = eyeCollab.render({ attrFor: "password" });

    const $btn = btnCollabcode.render({ content: "Login", path: "game" });

    return `
      ${$messageAlertEmail}
      ${$labelEmail}
      ${$inputEmail}
      
      ${$messageAlertPassword}
      ${$labelPassword}        
      ${$inputPassword}   
      ${$eyeCollab}    

      ${$linkCollab}

      ${$btn}
    `;
  };

  module.render = () => {
    module._style();

    return `
      <form 
        class="form-login" 
        action="#" 
        method="POST">
        ${module._children()}
      </form>`;
  };

  return {
    render: module.render
  };
})();
