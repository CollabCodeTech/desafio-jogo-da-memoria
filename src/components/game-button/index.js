const gameButton = (function() {
  const module = {};
  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .game-button{
        position: absolute;
        width: 90px;
        height: 90px;
        text-transform: uppercase;
        border-radius: 50%;
        background-color: #2E8B57;
        color: #fff;
        border: 2px solid #FFF0F5;
        font-weight: bold;
        font-family: "Roboto", sans-serif;
        cursor: pointer;
        bottom: 120px;
        left: 50%;
        transform: translateX(-50%);
        transition: transform 200ms linear, opacity 200ms ease-in;
        transform-origin: bottom 2cm;
      }
      .game-button.-disable {
        opacity: 0;
        transform: translateX(-50%) scale(2.5);
      }
    `;
    $head.insertBefore($style, null);
  };

  module.render = content => {
    module._style();
    
    return `
      <button class="game-button">${content}</button>
    `;
  };

  return {
    render: module.render
  };
})();
