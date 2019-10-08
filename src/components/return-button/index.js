const returnButton = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .return-button {
        width: 50px;
        height: 40px;
        border-radius: 2px;
        font-weight: bold;
        cursor: pointer;
      }
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.handleClick = $path => {
    location.hash = `#/${$path}`;
    location.reload();
  };

  module.render = ({ content = "", path = "login" }) => {
    module._style();
    return `<button class="return-button" onClick="returnButton.handleClick('${path}')">${content}</button>`;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
