const logoWrapper = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `    
      .logoWrapper {
        text-align: center;
        transform: translateY(-30%)
      }
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = (...$children) => {
    module._style();

    return `
      <div 
        class="logoWrapper">  
        ${$children.join("")}
      </div>
    `;
  };

  return {
    render: module.render
  };
})();
