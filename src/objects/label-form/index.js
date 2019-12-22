const labelForm = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .label-form{
        display: block;
        font-size: 16px;
        color: #3a4042;
        opacity: 0.5;
      }

      .input-form + .label-form{
        margin-top: 30px;
      }
      
    `;
    
    $head.insertBefore($style, null);
  };

  module.render = content => {
    module._style();
    return `<label class="label-form"> ${content} </label>`
  };

  return {
    render: module.render
  }
})();