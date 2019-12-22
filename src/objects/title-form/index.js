const titleForm = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .title-form{
        font-size: 24px;
        letter-spacing: 0.6px;
        text-transform: uppercase;
        color: #f25a70;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = content => {
    module._style();
    return `
      <h1 class="title-form"> ${content} </h1>
    `;
  };

  return {
    render: module.render
  }
})();