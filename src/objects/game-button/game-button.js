const gameButton = (function() {
  const module = {};
  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
    .button${store.buttonId} {
      width: 50px;
      height: 50px;
      font-weight: bold;
      color: #f25a70;
      border: 2px solid #f25a70;
      box-sizing: content-box;
      border-radius: 50%;
      letter-spacing: 2px;
      text-transform: uppercase;
      cursor: pointer;
      
    }

    .button${store.buttonId}:focus {
      outline: 0;
    }
    `;

    $head.insertBefore($style, null);
  };
  module.render = ({ component = "Enviar", type = "", onClick = "" }) => {
    store.buttonId--;
    module._style();
    return `
        <button class="button${store.buttonId}" onClick="${onClick}" type="${type}" >${component}</button>
      `;
  };

  return {
    render: module.render
  };
})();
