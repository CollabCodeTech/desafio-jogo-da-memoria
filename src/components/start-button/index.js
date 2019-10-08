const startButton = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .start-button {
        width: 80px;
        height: 80px;
        border: none;
        border-radius: 50%;
        position: absolute;
        bottom: 60px;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 1px 2px 8px #000;
        cursor: pointer;
        background-color:#1fab89;
        color: #fff;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        font-size: 18px;
        text-transform: uppercase;
      }

      .start-button.-disable {
        opacity: 0;
        transform: scale(3) translateX(-50%);
        transform-origin: left;
        transition: opacity 200ms linear, transform 200ms linear;
      }
      `;

    $head.insertBefore($style, null);
  };

  module.render = content => {
    module._style();
    return `
        <button class="start-button">
            ${content}
        </button>
    `;
  };

  module.handleClick = () => {
    const $layer = document.querySelector(".block-layer");
    const $button = document.querySelector(".start-button");

    $button.classList.add("-active");
    setTimeout(() => {
      $layer.classList.add("-active");
    }, 200);
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
