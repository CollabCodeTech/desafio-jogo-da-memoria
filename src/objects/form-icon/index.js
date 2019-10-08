const formIcon = (function() {
  const module = {};

  module.handleClick = $component => {
    $component.classList.toggle("-active");
    const $previous = $component.previousElementSibling;
    $previous.setAttribute(
      "type",
      $previous.type === "password" ? "text" : "password"
    );
  };

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-icon {
        cursor: pointer;
        opacity: 0.3;
      }

      .form-icon.-active {
        opacity: 1;
      }
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = ({ src = "", alt = "" }) => {
    module._style();

    return `<img class="form-icon" src="${src}" alt="${alt}" onClick="formIcon.handleClick(this)"/>`;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
