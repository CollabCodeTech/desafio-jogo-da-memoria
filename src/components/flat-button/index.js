const flatButton = (function() {
  const module = {};

  module._id = 0;
  
  module._style = active => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .flat-button-${module._id}{
        background-color: ${active ? "#f25a70" : "#eae6da"};
        width: 186px;
        height: 176px;
        font-size: 24px;
        font-weight: bold;
        color: ${active ? "#fff" : "#fffcee"};
        text-transform: uppercase;
        display: inline-flex;
        justify-content: center;
        padding-top: 60px;
        box-sizing: border-box;
        cursor: pointer;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.handleClick = path => {
    location.hash = `#/${path}`;
    location.reload(true);
  };

  module.render = (content = "", active = false, path = "") => {
    module._id++;
    module._style(active);
    return `
      <button 
        class="flat-button-${module._id}" 
        onclick="flatButton.handleClick('${path}')">${content}</button>
    `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
