const loginButton = (function() {
  const module = {};
  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `

      .button${store.buttonId} {
        position: absolute;
        width: 90%;
        height: 50px;
        border-radius: 25px;
        border: 3px solid #f25a70;
        color: #f25a70;
        font-family: 'comfortaa', sans-sarif;
        top: 80%;
        left: 50%;
        letter-spacing: 5px;
        font-size:16px;
        background: transparent;
        transform: translateX(-50%);
      }

      .button${store.buttonId}:hover {
        border: 3px solid #fffcee;
        color: #fffcee;
      
      }    
    `;
    $head.insertBefore($style, null);
  };

  module.render = () => {
    const logInButton = gameButton.render({
      component: "Entrar",
      type: "submit",
      onClick: "loginButton.handleClick(this)"
    });
    module._style();
    return `  
    ${logInButton}    
    `;
  };

  module.handleClick = () => {
    const $email = document.getElementById("email").value;
    const $password = document.getElementById("password").value;
    const validEmail = $content => {
      const emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

      return emailPattern.test($content);
    };
    const validPassword = $content => {
      const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

      return passwordPattern.test($content);
    };

    if (validEmail($email) === true && validPassword($password) === true) {
      if ($email === "collab@collabcode.com" && $password === "Abcd@123") {
        location.hash = "/game";
      } else {
        alert("Email ou Senha incorreto! Por Favor tente novamente.");
      }
    } else {
      alert(
        `E-MAIL e / ou SENHA inválido!\n\n
          Verifique se o E-mail está correto,

          se a senha tem 8 digitos,

          letras maiúsculas e minúsculas,

          Números e Caracteres especiais.\n\n
                        Tente novamente!`
      );
    }
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
