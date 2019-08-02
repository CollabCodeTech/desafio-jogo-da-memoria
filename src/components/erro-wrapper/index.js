const erroWrapper = (function() {
  const module = {};

  module._children = () => {
    const $coloredBox = coloredBox.render({
      color: "-black",
      variante: "-first"
    });
    const $secondColoredBox = coloredBox.render({
      color: "-red",
      variante: "-second"
    });

    const $headerCollabcode = headerCollabcode.render();
    const $titleCollabcode = titleCollabcode.render("Erro 404");
    const $formErro = formErro.render();

    return `
      ${$headerCollabcode}
      ${$coloredBox}
      ${$secondColoredBox}
      ${$titleCollabcode}
      ${$formErro}
      
      
    `;
  };

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `

    .erro-wrapper {
      width: 100vw;
      height: 100vh;
      max-height: 620px;
      max-width: 375px;
      box-sizing: border-box;
      overflow-x: hidden;
      margin: 0 auto;
      position: relative;
      background-color: #e5e5e5;
      border: 1px #3A4042 solid;
      z-index: 0;
      
    }

    
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();
    return `<section class="erro-wrapper">${module._children()}</section>`;
  };

  return {
    render: module.render
  };
})();
