const linkCollabcode = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
    .link-collabcode{
        display:block;
        text-decoration:none;
        color:#3a4042;
        opacity: 0.5;
        text-align:right;
        margin-top: 40px;
        margin-bottom: 60px;
    }
    `;

    $head.insertBefore($style, null);
  };

  module.render = ({ url = "#", content = "" }) => {
    module._style();
    return `<a class="link-collabcode" href=${url}>${content}</a>`;
  };

  return {
    render: module.render
  };
})();
