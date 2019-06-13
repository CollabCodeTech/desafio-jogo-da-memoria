const formEye = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-eye {
         display: block;
         text-indent: -9999px;
         background-image: url("../../img/hidden.svg");
         background-repeat: no-repeat;
         background-position: center;
         width: 24px;
         height: 15px;
         cursor: pointer;
         opacity: 0.5;
         transition: opacity 200ms linear;
         margin-left: auto;
         transform: translateY(-150%);
      }
      .form-eye.-active {
         opacity: 1;
      }
      `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.handleClick = function() {
    const attrFor = this.getAttribute("for");
    const $input = document.querySelector(`#${attrFor}`);

    if ($input.getAttribute("type") === "text") {
      this.classList.remove("-active");
      $input.setAttribute("type", "password");
    } else {
      this.classList.add("-active");
      $input.setAttribute("type", "text");
    }
  };

  module.render = ({ attrFor = "" }) => {
    module._style();

    return `
      <label 
        for="${attrFor}"
        class="form-eye" 
        onClick="formEye.handleClick.bind(this)()">Mostrar senha</label>
      `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
