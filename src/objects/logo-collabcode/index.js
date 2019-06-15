const logoCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .logo-collabcode {
        background-color: #fff;
        border: 40px solid #fff;
        border-radius: 50%;
        display: inline-block;
      }

      .logo-collabcode > .logo {
        width: 175px;
        height: 175px;
      }
    `;
    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();

    return `
      <figure class="logo-collabcode">
        <img class="logo" src="img/icon-collabcode.png" alt="Gueio: icone da collabcode">
      </figure>
    `;
  };

  return {
    render: module.render
  };
})();
