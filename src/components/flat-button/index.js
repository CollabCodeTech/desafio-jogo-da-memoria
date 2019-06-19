const flatButton = (function() {
  const module = {};

  module._id = 0;

  module._style = active => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .flat-button-${module._id}{
        /* if ternario true : false*/
        background-color: ${active ? "#f25a70" : "#eae6da"}; 
        color: ${active ? "#fff" : "#fffcee"}; 
        font-size: 24px;
        font-weight: bold;
        width: 50%;
        height: 170px;
        text-transform: uppercase;
        padding-bottom: 40px;
        cursor: pointer;
      }
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.handleClick = path => {
    window.location.hash = `#/${path}`;
    location.reload(true);
  }

  module.render = (content = "", active = false, path = "")  => {
    module._id++; //a cada render, ele vai adicionar um flat button "unico"
    module._style(active);
    return `<button class="flat-button-${module._id}" onClick="flatButton.handleClick('${path}')">${content}</button>`;
  };
  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
