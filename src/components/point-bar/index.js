const pointBar = (function() {
  const module = {};
  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .point-bar{
        background-color: #00bfff;
        height: 40px;
        text-align: center;
        font-family: "Roboto", sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .point-bar > .number {
        color: #fff;
        line-height: 40px;
        font-weight: bold;
        margin: 0 120px;
      }
      .point-bar > .return {
        cursor: pointer;
      }
    `;
    $head.insertBefore($style, null);
  };
  
  module.handleClick = path => {
    window.location.hash = `#/${path}`;
    location.reload(true);
  }

  module.create = ({path = ""}) => {
    module._style();
    return `
      <header class="point-bar">
        <span class="number">Score: 0</span>
        <img class="return" src="img/back.png" alt="Botão de voltar" onClick="pointBar.handleClick('${path}')">
      </header>
    `;
  };
  return {
    create: module.create,
    handleClick: module.handleClick
  };
})();
