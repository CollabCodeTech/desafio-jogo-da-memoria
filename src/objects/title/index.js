const title = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .title {
        font-size: 24px;
        line-height: 27px;
        color: #f25a70;
        text-transform: uppercase;
        font-weight: bold;
      }
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = (text = "") => {
    module._style();
    return `<h1 class="title">${text}</h1>`;
  };

  return {
    render: module.render
  };
})();
