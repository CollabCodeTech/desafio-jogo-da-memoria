const coloredBox = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .colored-box {
        width: 470px;
        height: 280px;
        position: absolute;
        top: 0;
        z-index: -1;
      }


    .colored-box.-black {
      background-color: #3A4042;
      
    }

    .colored-box.-red {
      background-color: #F25A70;
    }

    .colored-box.-first {
      top: -130px;
      left: -125px;
      transform: rotate(-34deg);
    }

    .colored-box.-second {
      z-index: -2;
      left: -71px;
      top: -114px;
      transform: rotate(-40deg);
    }
    `;

    $head.insertBefore($style, null);
  };
  module.render = ({ color = "", variante = "" }) => {
    module._style();
    return `
      <div class="colored-box ${color} ${variante}"></div>
    `;
  };
  return {
    render: module.render
  };
})();
