const buttonGUI = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .button-gui {
        height: 5vh;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.handleClick = (path) => {
    location.hash = `#/${path}`;
    location.reload(true);
  };

  module.createNewButton = ({ src, alt, path = "" }) => {
    module._style();
    return `
      <input type="image" src="${src}" alt="${alt}" class="button-gui" onClick="buttonGUI.handleClick('${path}')"></input>
    `;
  };

  return {
    render: module.createNewButton,
    handleClick: module.handleClick,
  };
})();
