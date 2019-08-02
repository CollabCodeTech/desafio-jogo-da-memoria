const itemLista = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
    
    .item-lista.item-${module._id + 1} {
      display: flex;
      height: 20px;
      padding: 2% 0;
      
    }
    .item-lista.item-${module._id + 1} .radio-collabcode {
      margin-right: 15px;
      align-self: flex-start;
      margin-top: 0;
    }
    
    .item-lista.item-${module._id + 1} .label-collabcode {
      
      align-self: center;
     
    }
   

    `;

    $head.insertBefore($style, null);
  };

  module._id = 0;

  module.render = ({ radio, label }) => {
    module._style();
    module._id++;
    return `
        <li class="item-lista item-${module._id}">${radio}${label}</li>
      `;
  };

  return {
    render: module.render
  };
})();
