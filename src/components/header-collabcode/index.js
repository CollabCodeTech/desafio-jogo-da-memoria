const headerCollabcode = (function() {
  const module = {};

  module._children = () => {
    const $headerText = headerText.render();
    const $headerGueio = headerGueio.render();

    return `
      ${$headerText}
      ${$headerGueio}
    `;
  };

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .header-collabcode {
        
        width: 100px;
        margin-top: 36px;
        margin-left: 6px;
      }

      .header-collabcode > .header-gueio {
        position: absolute;
        top: 23px;
        left: 125px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();
    return `
      <header class="header-collabcode">
        ${module._children()}
      </header>
    `;
  };

  return {
    render: module.render
  };
})();
