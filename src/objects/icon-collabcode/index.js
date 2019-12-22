const iconCollabCode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .icon-collabcode{
        display: inline-block;
        border: solid 40px #fff;
        border-radius: 50%;
        background-color: #fff;
      }

      .icon-collabcode > .logo{
        width: 175px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();
    return `
        <figure class="icon-collabcode">
          <img class="logo" src="./img/icon-collabcode.png">
        </figure>
    `;
  };

  return {
    render: module.render
  }
})();