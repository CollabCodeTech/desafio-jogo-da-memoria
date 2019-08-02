const cardCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = ``;

    $head.insertBefore($style, null);
  };
  module.render = () => {
    module._style();

    return `
      
    `;
  };

  return {
    render: module.render
  };
})();
