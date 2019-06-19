const logoWrapper = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
    .logo-wrapper{
      text-align: center;
      transform: translateY(-25%);
    }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = (...$children) => {
    //spread operator pega varios elementos e transforma num array
    module._style();

    return `
      <div class="logo-wrapper">
        ${$children.join("")}
      </div>`;
  };
  return {
    render: module.render
  };
})();
/*.join("") serve para tirar qualquer tipo de caracter que esteja atrapalhando com o uso do spread operator*/
