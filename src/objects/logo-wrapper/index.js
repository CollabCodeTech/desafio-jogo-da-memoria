const logoWrapper = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .avatar-wrapper {
        text-align: center;
        transform: translateY(-15%);
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.createWrapper = (...$children) => {
    module._style();

    return `
      <div class="avatar-wrapper">
        ${$children.join("")}  
      </div>
    `;
  };

  return {
    render: module.createWrapper,
  };
})();
