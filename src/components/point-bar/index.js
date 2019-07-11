const pointBar = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .point-bar {
        background-color: #3a4042;
        height: 40px;
        text-align: center;
        font-family: 'Comfortaa', sans-serif;
        position: relative;
      }
      .point-bar > .number {
        font-size: 20px;
        line-height: 40px;
        color: #FFF;
        font-weight: bold;
      }
      `;

    $head.insertBefore($style, null);
  };

  module.create = (element) => {
    module._style();

    return `
      <header class="point-bar">
        ${element}
        <span class="number">0</span>
      </header>
    `;
  };

  return {
    create: module.create
  };
})();
