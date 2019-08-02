const headerText = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .header-text {
        font-family: Barlow, sans-serif;
        font-size: 25px;
        font-weight: 600;
        line-height: 26px;
        text-transform: uppercase;
        color: #F2F2F2;
      }

      .header-text.-second {
        font-size: 12px;
        line-height: 14px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();
    return `
      <h1 class="header-text">Memory Game</h1>
      <h2 class="header-text -second">Collabcode</h2>
    `;
  };

  return {
    render: module.render
  };
})();
