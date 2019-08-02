const listaCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
    
    .lista-collabcode {
      margin-top: 12%;
    }

    `;

    $head.insertBefore($style, null);
  };

  module.render = ({ itens = [] }) => {
    module._style();
    return `
    <ul class="lista-collabcode">
    ${itens.join("")}
    </ul>
    `;
  };

  return {
    render: module.render
  };
})();
