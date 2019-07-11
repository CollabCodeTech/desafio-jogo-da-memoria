const labelCollab = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
      .label-collab {
        display: block;
        color: #3a4042;
        font-size: 16px;
        opacity: 0.5;
      }
      
      .input-collab + .label-collab,
      .collab-error + .label-collab {
        margin-top: 30px;
      }
    `

    $head.insertAdjacentElement('beforeend', $style);
  }

  module.render = (content) => {
    module._style();

    return `
      <label class="label-collab">${content}</label>
    `
  }

  return {
    render: module.render
  }

})();