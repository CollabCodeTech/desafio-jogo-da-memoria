const collabLogo = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `

      .collab-logo {
        display: inline-block;
        border: 40px solid #fff;
        border-radius: 50%;
        background-color: #fff;

      } 

      .collab-code > .logo {
        width: 175px;
      }

    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.createLogo = () => {
    module._style();

    return `
      <figure class='collab-logo'>
        <img src="img/icon-collabcode.png"
          alt='O mascote da collabCode'
          class="logo"
        />  
      </figure>  
    `;
  };

  return {
    render: module.createLogo,
  };
})();
