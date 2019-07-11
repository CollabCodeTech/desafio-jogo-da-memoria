const gameButton = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .game-button {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #2ed573;
        text-transform: uppercase;
        font-weight: bold;
        color: #fff;
        box-shadow: 2px 5px 12px #3a4042;
        cursor: pointer;
        transition: all 500ms linear;
      }

      .game-button.-disable {
        opacity: 0;
        transform: translate(-50%, -35%) scale(2.5);
        transform-origin: bottom;
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
    render: module.render,
    handleClick: module.handleClick
  };
})();
