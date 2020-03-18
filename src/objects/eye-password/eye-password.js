const eyePassword = (function() {
  module = {};
  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
    .eye-password {
      width: 24px;
      height: 15px;
      display: block;
      text-indent: -9999px;
      background: url(img/icon-eye.svg) no-repeat center;
      background-size: cover;
      cursor: pointer;
      position: relative;
      top: -20%;
      left: 90%;
      opacity: 0.5;
      transition: opacity 200ms linear;
    }

    .eye-password.-active {
      opacity: 1;

    }
    `;
    $head.insertBefore($style, null);
  };

  module.handleClick = function() {
    const $attrFor = this.getAttribute("for");
    const $getInput = document.querySelector(`#${$attrFor}`);

    this.classList.toggle("-active");

    if ($getInput.getAttribute("type") === "text") {
      $getInput.setAttribute("type", "password");
    } else {
      $getInput.setAttribute("type", "text");
    }
  };

  module.render = ({ attrFor = "" }) => {
    module._style();
    return `
      <label 
        for="${attrFor}"
        class="eye-password" 
        onClick="eyePassword.handleClick.bind(this)()">Mostrar Senha</label>
    `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
