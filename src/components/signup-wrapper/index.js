const signupWrapper = (function() {
  const module = {};

  module._children = () => {
    const $coloredBox = coloredBox.render({
      color: "-red",
      variante: "-first"
    });
    const $secondColoredBox = coloredBox.render({
      color: "-black",
      variante: "-second"
    });

    const $headerCollabcode = headerCollabcode.render();
    const $titleCollabcode = titleCollabcode.render("Criar Conta");
    const $formSignup = formSignup.render();

    return `
      ${$headerCollabcode}
      ${$coloredBox}
      ${$secondColoredBox}
      ${$titleCollabcode}
      ${$formSignup}
    `;
  };

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `

    .signup-wrapper {
      width: 100vw;
      height: 100vh;
      max-height: 620px;
      max-width: 375px;
      box-sizing: border-box;
      overflow-x: hidden;
      margin-left: auto;
      margin-right: auto;
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
    return `<section class="signup-wrapper">${module._children()}</section>`;
  };

  return {
    render: module.render
  };
})();
