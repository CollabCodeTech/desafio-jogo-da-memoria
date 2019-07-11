const formWrapper = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
      .form-wrapper {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
      }
    
    `

    $head.insertAdjacentElement('beforeend', $style);
  }

  module.render = (...$children) => {
    module._style();
    return `
      <div class="form-wrapper">${$children.join('')}</div>
    `
  }

  return {
    render: module.render
  }

})();