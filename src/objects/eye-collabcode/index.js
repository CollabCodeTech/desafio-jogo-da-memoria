const eyeCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .eye-collabcode {
        background-image: url(/img/eye.png);
        background-repeat: no-repeat;
        background-position: center;
        width: 24px;
        height: 15px;
        display: block;
        text-indent: -9999px;
        cursor: pointer;
        opacity: 0.5;
        transition: opacity 200ms linear;
        transform: translateY(-140%);
        float: right;
        margin-right: 4px;
      }
      .eye-collabcode.-active {
        opacity: 1;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.handleClick = function() {
    const attrFor = this.getAttribute("for");
    const $input = document.querySelector(`#${attrFor}`);

    if ($input.getAttribute("type") === "text") {
      $input.setAttribute("type", "password");
    } else {
      $input.setAttribute("type", "text");
    }
    this.classList.toggle("-active");
  };

  module.render = ({ attrFor = "" }) => {
    module._style();

    return `
      <label 
        for="${attrFor}" 
        class="eye-collabcode"
        onClick="eyeCollabcode.handleClick.bind(this)()"></label>
    `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
