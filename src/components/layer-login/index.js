const layerLogin = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .layer-background {
        max-width: 360px;
        height: 750px;
        display: flex;
        flex-wrap: wrap;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-image: linear-gradient(180deg, #f25a70 30%, #3a4042)
        
        
      
      }
      .wrapper-login {
        width: 100%;
        height: 40%;
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
        position: absolute;
        top: 35%;
      }

      .singup-link,
      .forget-link  {
        position: absolute;
        font-size: 14px;
        font-family: 'Roboto Mono', monospace;
        text-decoration: none;
        color: #fffcee;
        letter-spacing: 3px;
        bottom: 5%;
        left: 50%;
        transform: translateX(-50%)
      }

      .forget-link {
        width: 145px;
        height: 20px;
        top: 155px;
        letter-spacing: 1px;
        left: 70%;
      }

      .login-media {
        width: 230px;
        position: relative;
        display: flex;
        justify-content: space-around;
        left: 50%;
        transform: translateX(-50%);
        align-items: center;
      }

      .login-media > * {
        cursor: pointer;
      }
      
      .login-social:hover {
        width: 36px;
        height: 36px;
        background: #3a4042;
        background-size: cover;
        border-radius: 50%;
      }
    `;

    $head.insertBefore($style, null);
  };

  module._children = () => {
    const $logoCollabLogin = logoCollab.render();
    const $loginForm = loginForm.render();
    const $socialMedia = socialMedia.render();
    const $loginButton = loginButton.render();

    return {
      logo: $logoCollabLogin,
      login: $loginForm,
      media: $socialMedia,
      button: $loginButton
    };
  };

  module.render = () => {
    module._style();
    return `
      <div class="layer-background">
        ${module._children().logo}
        <div class="wrapper-login">
          ${module._children().login}
          <a href="#" class="forget-link">Recuperar Senha</a>
          <div class="login-media">
            ${module._children().media.github}
            ${module._children().media.facebook}
            ${module._children().media.instagran}
          </div>
        </div>
        ${module._children().button}        
        <a href="#/signup" class="singup-link">Cadastrar</a>
        </div>
        `;
  };
  return {
    render: module.render
  };
})();
