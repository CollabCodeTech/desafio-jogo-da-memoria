const startButton = (function() {
  const module = {};
  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
        
    .button${store.buttonId} {
      width: 90px;
      height: 90px;
      display: block;
      position: relative;        
      border-radius: 50%;
      font-size: 1.2em;
      box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.5);
      background: #3a4042;
      margin: 3px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    `;
    $head.insertBefore($style, null);
  };
  module.render = () => {
    const $buttonStart = gameButton.render({
      component: "Start",
      onClick: "startButton.handleClick(this)"
    });
    module._style();
    return `      
      ${$buttonStart}
      `;
  };

  module.handleClick = () => {
    const $button = document.querySelector(".shield");
    $button.classList.add("-disable");
  };
  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
