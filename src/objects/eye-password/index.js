const eyePassword = (function () {
  const module = {};

  module.handleClick = function () {
    const attrFor = this.getAttribute("for");
    const $inputType = document.querySelector(`#${attrFor}`);

    if ($inputType.getAttribute("type") === "password") {
      this.classList.add("-active");
      $inputType.setAttribute("type", "text");
    } else {
      this.classList.remove("-active");

      $inputType.setAttribute("type", "password");
    }
  };

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .eye-password {
        display: block;
        text-indent: -9999px;
        background-image: url(/img/hidden.png);
        background-repeat: no-repeat;
        background-position: center;
        width: 24px;
        height: 15px;
        cursor: pointer; 
        opacity: 0.5;
        transition: opacity 200ms linear;
        float: right;
        transform: translateY(-200%);
        margin-right: 4px;
      }

      .eye-password.-active {
        opacity: 1;
      }

      
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.createEyePassword = ({ attrFor }) => {
    module._style();
    return `
      <label  
        class="eye-password" 
        onClick="eyePassword.handleClick.bind(this)()"
        for="${attrFor || ""}"
        >Mostrar senha
        </label>
    `;
  };
  return {
    render: module.createEyePassword,
    handleClick: module.handleClick,
  };
})();
