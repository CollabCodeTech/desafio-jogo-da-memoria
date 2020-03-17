const pointBar = (function() {
  const module = {};
  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
        .pointBar {
          display: flex;        
          width: 100%;
          height: 50px;
          font-family: 'Comfortaa', sans-serif;
          justify-content: space-between;
          align-items: center;
          position: relative;
          color: #fff;
          background-color: #3a4042;
  
        }
        .count {
          display: flex;
          flex-direction: column;
          width: 100px;
          height: 80%;
          justify-content: center;
          align-items: center;
          
        }
        .lable {
          margin-bottom: 5px;
          font-size: 1em;
          font-weight: lighter;
        }
        .numbers {
          font-weight: bold;
  
        }

        .layer-button {
          width: 65px;
          height: 65px;
          display: block;
          position: relative;
          background-color: #d4d4d4;
          border-radius: 50%;
          
        }
    `;

    $head.insertBefore($style, null);
  };

  module.create = () => {
    const $resetButton = resetButton.render();
    module._style();
    return `
      <header class="pointBar">
        <div class="count -score">
          <h3 class="lable">Pontos</h3>
          <span class="numbers -point">0</span>
        </div>
        <div class="layer-button">          
          ${$resetButton}        
        </div>
        <div class="count -attempt">
          <h3 class="lable">Jogadas</h3>
          <span class="numbers -attempt">0</span>
        </div>
      </hearder>
    `;
  };
  return {
    create: module.create
  };
})();
