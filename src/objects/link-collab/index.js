const linkCollab = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .link-collab {
        display: block;
        color: #3a4042;
        text-decoration: none;
        opacity: .7;
        font-size: 14px;
        text-align: right;
        margin: 40px auto 60px;
      }
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = ({ href, content }) => {
    module._style();

    return `
      <a 
        class="link-collab" 
        href="${href}">
        ${content}
      </a>
    `;
  };

  return {
    render: module.render
  };
})();
