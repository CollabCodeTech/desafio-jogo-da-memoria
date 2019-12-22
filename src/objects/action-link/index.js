const actionLink = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .action-link{
        display: block;
        font-size: 14px;
        opacity: 0.73;
        color: #3a4042;
        text-decoration: none;
        margin-top: 40px;
        margin-bottom: 60px;
        text-align: right;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = ({href, content}) => {
    module._style();
    return `<a href="${href}" class="action-link"> ${content} </a>`;
  };

  return {
    render: module.render
  }
})();