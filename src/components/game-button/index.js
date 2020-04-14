const gameButton = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
    .game-button{
      width: 80px;
      height: 80px;
      border: 2px solid #fffcee;
      border-radius: 50%;
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      color: #fffcee;
      background-color:#2ed573;
      font-weight: bold;
      text-transform: uppercase;
      font-size: 1.05em;
      cursor:pointer;
      box-shadow: 0px 4px 8px #3a4042;
      transition: opacity 200ms linear, transform 200ms linear;
    }
    .game-button:hover{
      background-color:#2b9f5b;
    }
    
    .game-button.-disable{
      opacity: 0;
      overflow: hidden;
      transform:  translate(-50%,-35%) scale(2);
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
