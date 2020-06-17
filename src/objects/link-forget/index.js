const linkForget = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .link-forget {
        display: block;
        text-decoration: none; 
        font-size: 14px;
        color: #3a4042;
        opacity: 0.7;
        text-align: right;
        margin-top: 43px;
        margin-bottom: 70px;
      }

    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.createLinkForget = ({ content, href }) => {
    module._style();
    return `
      <a href="${href || "#"}" class="link-forget">${content}</a>
    `;
  };

  return {
    render: module.createLinkForget,
  };
})();
