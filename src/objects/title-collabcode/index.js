const titleCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .title-collabcode {
        font-size: 1.4rem;
        text-transform: uppercase;
        color: #F25A70;
        margin-top: 48%;
        text-align: center;        
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
