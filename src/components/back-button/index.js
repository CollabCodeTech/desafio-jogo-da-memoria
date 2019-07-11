const backButton = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
      .back-btn {
        background-color: #fff;
        padding: 5px 5px 5px 10px;
        position: absolute;
        left: 0;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        transform: translateY(30%) translateX(-35%);
        transition: all 400ms cubic-bezier(0,0,.75,1.8);
        cursor: pointer;
      }

      .back-btn:hover {
        color: #F25A70;
        transform: translateY(30%) translateX(-10%);
      }
    `;
    $head.insertAdjacentElement('beforeend', $style);
  };

  module.handleClick = path => {
    location.hash = `#/${path}`;
    location.reload(true);
  }

  module.render = ( path) => {
    module._style();

    return `<button class="back-btn" onClick="backButton.handleClick('${path}')"><<  Voltar</button>`
  }

  return {
    render: module.render,
    handleClick: module.handleClick
  }

}());