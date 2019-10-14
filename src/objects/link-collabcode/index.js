const linkCollabCode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .link-collabcode{
        font-size: 14px;
        text-decoration: none;
        color: rgba(58, 64, 66,0.7);
        display: block;
        text-align: right;
        margin: 40px 0 60px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = ({ href = "", content = "" }) => {
    module._style();

    return `
      <a href="${href}" class="link-collabcode">${content}</a>    
    `;
  };

  return {
    render: module.render
  };
})();
