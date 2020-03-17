const startButton = (function() {
  const module = {};
  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
    .start-button {
      width: 100px;
      height: 100px;
      display: block;
      position: relative;        
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .button${store.buttonId} {
      width: 90px;
      height: 90px;
      border: 4px solid #fffcee;
      border-radius: 50%;
      font-size: 1.5em;
      box-shadow: 0 0 6px 5px rgba(0, 0, 0, 0.5);
      background: #3a4042;
    }
    `;
    $head.insertBefore($style, null);
  };
  module.render = () => {
    const $buttonStart = gameButton.render("start");
    module._style();
    return `
      <div class="start-button" onClick="startButton.handleClick(this)">
      ${$buttonStart}
      </div>
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
