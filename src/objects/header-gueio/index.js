const headerGueio = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .header-gueio {
        width: 80px;
        height: 83px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();
    return `
      <img class="header-gueio" src="img/icons/icon-collabcode.png" alt="Gueio, mascote daCollabCode">
    `;
  };

  return {
    render: module.render
  };
})();
