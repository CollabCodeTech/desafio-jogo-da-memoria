const logo = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .collab-logo {
        background-color: #fff;
        border: 40px solid #fff;
        border-radius: 50%;
        display: inline-block; 
      }  
      
      .collab-logo > .logo {
          width: 171px;
        }
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = () => {
    module._style();
    return `
      <figure class="collab-logo">
        <img class="logo" src="assets/icon-collabcode.png" alt="Ícone do mascote do CollabCode"/>
      </figure>
    `;
  };

  return {
    render: module.render
  };
})();
