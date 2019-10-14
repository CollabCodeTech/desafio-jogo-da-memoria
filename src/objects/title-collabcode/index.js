const titleCollabCode = (function() {
  const module = {};

  module._style = () => {
    const $style = document.createElement("style");
    const $head = document.querySelector("head");

    $style.textContent = `

      .title-collabcode{
        font-size: 24px;
        color: #f25a70;
        text-transform: uppercase;
        letter-spacing: 0.6px;
      }
    
    `;

    $head.insertBefore($style, null);
  };

  module.render = content => {
    module._style();
    return `    
      <h1 class="title-collabcode">${content}</h1>
    `;
  };

  return {
    render: module.render
  };
})();
