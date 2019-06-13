const msgError = (function() {
  const module = {};

  module._style = active => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
         .msg-error + .form-label {
            margin-top: 29px;
         }
         .msg-error {
           display: none;
            font-size: 15px;
            color: #F25A70;
            margin-top: 5px;
         }
         .-show {
            display: block;
         }
         `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = id => {
    module._style();
    if (id === "email") {
      msg = "* Digite um e-mail válido!";
    } else {
      msg = "* Digite uma senha válida!";
    }

    return `
         <p id=${id} class="msg-error">${msg}</p>
         `;
  };

  return {
    render: module.render
  };
})();
