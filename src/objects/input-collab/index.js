const inputCollab = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .input-collab {
        display: block;
        width: 100%;
        color: #3a4042;
        font-size: 18px;
        font-weight: bold;
        border-bottom: 2px solid rgba(58, 64, 66, 0.5);
        padding-bottom: 12px;
        padding-top: 12px;
      }
    `
    
    $head.insertAdjacentElement("beforeend", $style);
  }

  module.render = ({placeholder = "", type = 'text', id = ""}) => {
    module._style();
    return `<input 
              id="${id}"
              class="input-collab" 
              type="${type}" 
              placeholder="${placeholder}" 
            />`
  }

  return {
    render: module.render
  }

})();