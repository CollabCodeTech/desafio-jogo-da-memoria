const inputCollabcode = (function() {
  const module = {};

  module._id = 0;

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .input-collabcode.input-${module._id}{
        width: 100%;
        height: 2.2rem;
        font-size: .8rem;
        border-radius: 20px;
        border: 1px #000 solid;
        color: #000;
        text-align: center;
        background-color: #E5E5E5;
        box-sizing: border-box;
      }
    `;

    $head.insertBefore($style, null);
  };
  module.render = ({ id = "", type = "text", placeholder = "" }) => {
    module._id++;
    module._style();
    return `
      <input id="${id}" 
      class="input-collabcode input-${module._id}"
      type="${type}" 
      placeholder="${placeholder}">
    `;
  };

  return {
    render: module.render
  };
})();
