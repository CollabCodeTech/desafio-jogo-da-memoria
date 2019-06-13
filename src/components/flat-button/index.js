const flatButton = (function() {
  const module = {};

  module._id = 0;

  module._style = active => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
         .flat-button-${module._id} {
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 50%;
            height: 176px;
            padding-bottom: 20px;
            font-size: 24px;
            font-weight: bold;
            text-transform: uppercase;
            text-align: center;
            border: none;
            cursor: pointer;
            letter-spacing: 0.6px;
            color: ${active ? "#FFFFFF" : "#FFFCEE"};
            background-color: ${active ? "#F25A70" : "#EAE6DA"};
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

    return `<!--
         --><button 
         class="flat-button-${module._id}" 
         onclick="flatButton.handleClick('${path}')">
            ${content}
         </button><!--
         -->`;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
