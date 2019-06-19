const errorMessage = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
    .error {
      display: none;
    }
    .error.-active {
      display: block;
      font-size: 15px;
      color: #F25A70;
      margin-top: 12px;
    }
    `;
    $head.insertAdjacentElement("beforeend", $style);
  }

  module.render = id => {
    module._style();
    if (id === "password") {
      msg = "Digite uma senha com o máximo de 8 caracteres";
    } else {
      msg = "Digite um email válido";
    }

    return `<p class="error" id="${id}">${msg}</p>`
  }

  return {
    render: module.render
  };
})();