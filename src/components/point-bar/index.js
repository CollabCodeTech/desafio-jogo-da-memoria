const pointBar = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .point-bar{
        position:relative;
        background-color: #3a4042;
        height: 40px;
        text-align: center
      }
      
      .point-bar > .number{
        color:#fff;
        line-height: 40px;
        font-family: "Comfortaa", sans-serif;
        font-weight: bold;
      }

      .point-bar > .return {
        position:absolute;
        left:0;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.create = () => {
    module._style();
    return `
        <header class="point-bar">
            <span class="number">0</span>
            <a href="#/login" class="return">
              <img src="img/icon-arrow.png"/>
            </a>
        </header>
    `;
  };

  module.updateScore = () =>{
    const $number = document.querySelector('.point-bar > .number')
    $number.textContent = store.score
  }
  return {
    create: module.create,
    updateScore: module.updateScore
  };
})();
