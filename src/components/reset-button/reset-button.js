const resetButton = (function() {
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
      top: 5%;
      right: 7px;
      letter-spacing: 0.1em;
      font-size: 0.6em;
      background: #3a4042;
      
    }
    `;
    $head.insertBefore($style, null);
  };
  module.render = () => {
    const $buttonReset = gameButton.render({
      component: "Reset",
      onClick: "resetButton.handleClick()"
    });
    module._style();

    return `      
      ${$buttonReset}    
    `;
  };

  module.handleClick = () => {
    window.location.reload();
  };
  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
