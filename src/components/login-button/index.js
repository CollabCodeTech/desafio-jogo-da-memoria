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
    const logInButton = gameButton.render("Entrar");
    module._style();
    return `
    <div class="login-button" onClick="loginButton.handleClick(this)">
    ${logInButton}
    </div>
    
    `;
  };

  module.handleClick = () => {
    window.location.hash = "/game";
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
