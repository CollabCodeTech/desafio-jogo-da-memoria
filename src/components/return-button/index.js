const returnButton = (function(){

  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .return-button{
        background-color: transparent;
        position: absolute;    
        top: 5px;
        left: 5px;
        font-size: 20px;
        font-weight: bold;
        color: #fff;
        text-transform: uppercase;
        padding: 5px;
        cursor: pointer;
      }

      .return-button.-active{
        opacity: none;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.handleClick = path => {
    console.log("Clicou no botão return");
    location.hash = `#/${path}`;
    location.reload(true);
  };

  module.render = (path = "") => {
    module._style();
    return `
      <button 
        class="return-button"
        onclick="returnButton.handleClick('${path}')">
        <i class="fas fa-arrow-left"></i>
      </button>
    `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };


})();