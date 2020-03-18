const logoCollab = (function() {
  const module = {};
  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .logo-collab {
        width: 100%;
        height: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      

      .logo-login {
        width: 150px;
        height: 155px;
      }

      .logo-login::after {
        content: "";
        width: 100px;
        height: 6px;
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 10%);
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.25%);
      }
    
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();

    return `
    <div class="logo-collab">
      <img class="logo-login" src="img/logo-collab-1.svg"/>
    </div>
    `;
  };
  return {
    render: module.render
  };
})();
