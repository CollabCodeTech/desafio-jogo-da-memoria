const signupButton = (function() {
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
        transition: border 200ms linear, color 200ms linear;
      }

      .button${store.buttonId}:hover {
        border: 3px solid #fffcee;
        color: #fffcee;
        
        
      }
      
    
    `;
    $head.insertBefore($style, null);
  };

  module.render = () => {
    const $signupButton = gameButton.render("Enviar");
    module._style();
    return `
    <div onClick="signupButton.handleClick(this)" class="login-button">
    ${$signupButton}
    </div>
    
    `;
  };

  module.handleClick = () => {
    window.location.hash = "";
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
