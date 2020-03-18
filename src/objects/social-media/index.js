const socialMedia = (function() {
  const module = {};
  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      
      `;

    $head.insertBefore($style, null);
  };
  module.render = () => {
    // module._style();
    const $github = `<a href="http://github.com" target="_blank" ><img class="login-social" src="img/icon-git.svg"/></a>`;
    const $facebook = `<a href="http://www.facebook.com" target="_blank" ><img class="login-social" src="img/icon-face.svg"/></a>`;
    const $instagran = `<a href="http://www.instagram.com" target="_blank" ><img class="login-social" src="img/icon-insta.svg"/></a>`;

    return {
      github: $github,
      facebook: $facebook,
      instagran: $instagran
    };
  };

  return {
    render: module.render
  };
})();
