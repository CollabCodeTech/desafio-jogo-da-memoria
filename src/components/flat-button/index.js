const flatButton = (function() {
  const module = {};

  module._id = 0;

  module._$style = active => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .flat-button-${module._id}{
        box-sizing: border-box;
        width: 50%;        
        height: 176px;
        padding-top: 60px;
        padding-bottom: 88px;
        background-color: ${active ? "#f25a70" : "#eae6da"};
        color: ${active ? "#ffffff" : "#fffcee"};
        font-size: 24px;
        font-weight: bold;
        letter-spacing: 0.58px;
        border: none;
        text-transform: uppercase;
      }
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.handleClick = $path => {
    window.location.hash = `#/${$path}`;
    window.location.reload();
  };

  module.render = (content = "", active = false, action = "login") => {
    module._id++;
    module._$style(active);
    return `<button class="flat-button-${module._id}" onClick="flatButton.handleClick('${action}')">${content}</button>`;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
