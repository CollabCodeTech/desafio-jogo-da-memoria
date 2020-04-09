const coverGame = (function() {
  const module = {};

  module._style = function() {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
        .cover-game {
            position: absolute;
            width: 100vw;
            height: 100vh;
            background-color: #626262;
            opacity: 0.95;
            top:0;
        }
        .cover-game > .title {
            font-family: 'Comfortaa', sans-serife;
            font-size: 40px;
            font-weight: bold;
            text-align: center;
            color: #fffcee;
            line-height: 100vh;
        }
        .cover-game.-disable {
            opacity: 0;
            transition: opacity 300ms 300ms linear;
         }`;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();

    return `
         <div class="cover-game">
            <h1 class="title">Jogo da Memória</h1>
         </div>`;
  };

  return {
    render: module.render
  };
})();
