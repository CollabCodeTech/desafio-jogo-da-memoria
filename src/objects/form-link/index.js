const formLink = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-link {
        margin-top: 45px;
        margin-bottom: 100px;
        display: block;
        text-align: right;
        font-size: 14px;
        color: #3a4042;
        opacity: 0.75;
        cursor: pointer;
      }
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };
  module.render = ({ href = "#", content = "" }) => {
    module._style();

    return `<a class="form-link" href="${href}">${content}</a>`;
  };

  return {
    render: module.render
  };
})();
