const guiWrapper = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .gui-wrapper {
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #3a4042;
        height: 7vh;
        
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.createGuiWrapper = (...$children) => {
    module._style();

    return `
      <header class="gui-wrapper">
        ${$children.join("")}  
      </header>
    `;
  };

  return {
    render: module.createGuiWrapper,
  };
})();
