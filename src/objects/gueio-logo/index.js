const gueioLogo = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
      .logo-collabcode {
        background-color: #fff;
        display: inline-block;
        border: solid 40px white;
        border-radius: 50%;
      }
      .logo-collabcode > .logo {
        width: 175px;
      }
    `

    $head.insertAdjacentElement('beforeend', $style);
  }

  module.render = (src = 'img/icon-collabcode.png', alt = 'Gueio mascote da collabcode') => {
    module._style();

    return `
      <figure class="logo-collabcode">
        <img class="logo" src="${src}" alt="${alt}">
      </figure>
    `
  }

  return {
    render: module.render
  }
})();