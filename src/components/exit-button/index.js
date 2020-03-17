const exitButton = (function() {
  const module = {};
  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
    
    .button${store.buttonId} {
      width: 45px;
      height: 45px;
      position: absolute;
      border-radius: 25px;
      color: #fffcee;
      font-family: 'comfortaa', sans-sarif;
      top: 7%;
      left: 5%;
      letter-spacing: 0.1em;
      font-size: 0.7em;
      background: #3a4042;
    }
    `;
    $head.insertBefore($style, null);
  };
  module.render = () => {
    const $buttonExit = gameButton.render({
      component: "Exit",
      onClick: "exitButton.handleClick()"
    });
    module._style();

    return `
      ${$buttonExit}    
    `;
  };

  module.handleClick = () => {
    location.hash = "#/login";
    location.reload();
  };
  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
