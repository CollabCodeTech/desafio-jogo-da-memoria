const logoCollabcode = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .logo-collabcode{
            background-color: #fff;
            display: inline-block;
            width:175px;
            border: solid 40px #fff;
            border-radius: 50%;
        }

        .logo-collabcode > .logo{
            width: 175px
        }
      `;

    $head.insertBefore($style, null);
  };
  module.render = () => {
    module._style();
    return `
    <figure class="logo-collabcode">
        <img class='logo'
            src='img/icon-collabcode.png'
            alt='Gueio mascote da CollabCode'
        />
    </figure>`;
  };

  return {
    render: module.render
  };
})();
