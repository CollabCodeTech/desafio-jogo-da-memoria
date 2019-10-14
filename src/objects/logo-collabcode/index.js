const logoCollabCode = (function() {
  const module = {};

  module._style = () => {
    const $style = document.createElement("style");
    const $head = document.querySelector("head");

    $style.textContent = `
      .logo-collabcode{
        background-color: #fff;
        display: inline-block;
        border: solid 40px #fff;
        border-radius: 50%;
      }

      .logo-collabcode > .logo{
        width: 175px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();
    return `
    <figure class="logo-collabcode">
      <img class="logo" src="img/icon-collabcode.png" alt="Logo CollabCode"/>  
    </figure>
    `;
  };

  return {
    render: module.render
  };
})();
