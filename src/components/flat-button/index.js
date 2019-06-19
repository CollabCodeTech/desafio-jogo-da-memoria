const flatButton = (function() {
  const module = {};

  module._id = 0;

  module._style = active => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
         .flat-button-${module._id} {
            background-color: ${active ? "#F25A70" : "#EAE6DA"};
            color: ${active ? "#FFFFFF" : "#FFFCEE"};
            font-size: 24px;
            font-weight: bold;
            width: 50%;
            height: 176px;
            text-transform: uppercase;
            padding-bottom: 20px;
            border: none;
            cursor: pointer;
            letter-spacing: 0.6px;
         }
         .flat-button-${module._id}:hover {
            color: #FFFFFF;
            background-color: #F25A70;            
         }
      `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.handleClick = path => {
    location.hash = `#/${path}`;
    location.reload(true);
  };

  module.render = (content = "teste", active = false, path) => {
    module._id++;
    module._style(active);

    return `<button class="flat-button-${module._id}"
         onclick="flatButton.handleClick('${path}')">
            ${content}
         </button>`;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
