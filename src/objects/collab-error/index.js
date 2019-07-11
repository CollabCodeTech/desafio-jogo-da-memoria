const collabError = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
      .collab-error {
        display: none;
        font-size: 14px;
        color: pink;
        float: right;
      }
    `;
    $head.insertAdjacentElement('beforeend', $style)
  };


  module.render = (type) => {
    module._style();
    return `<span class="collab-error">Seu ${type} está errado.</span>`
  }

  return {
    render: module.render
  }

})();