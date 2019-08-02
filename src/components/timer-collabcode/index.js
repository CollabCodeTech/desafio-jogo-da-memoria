const timerCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .timer-collabcode {
        width: 120px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();

    return `
      <span class="timer-collabcode">Tempo: 01:00</span>
    `;
  };

  return {
    render: module.render
  };
})();
