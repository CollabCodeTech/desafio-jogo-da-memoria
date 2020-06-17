const fabButton = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .fab-button {
        width: 100px;
        height: 100px;
        background-color: #f25a70;
        border-radius: 50%;
        border: 2px solid #3a4042;
        outline: none;
        color: #fff ;
        font-family: 'Balsamiq Sans', sans-sarif;
        font-size: 1.05em;
        font-weight: bold;
        text-transform: uppercase;
        position: absolute;
        left: 50%;
        bottom: 20px;
        transform: translateX(-50%);
        cursor: pointer;
        box-shadow: 0px 4px 8px #3c4244;
        transition: opacity 200ms linear, transform 200ms linear; 

      }

      .fab-button.-disable { 
        opacity: 0;
        transform: translate(-50%, -35%) scale(2);
        
      }
      
    `;

    $head.insertBefore($style, null);
  };

  module.createFab = (content) => {
    module._style();

    return `
      <button class="fab-button">${content}</button>
    `;
  };

  return {
    createNewFab: module.createFab,
  };
})();
