const eyeCollabcode = (function() {
  const module = {};

  module._id = 0;

  module.handleClick = component => {
    const $attrFor = component.getAttribute("for");
    const $input = document.querySelector(`#${$attrFor}`);

    if ($input.getAttribute("type") == "password") {
      $input.setAttribute("type", "text");
      component.classList.add("-active");
    } else {
      $input.setAttribute("type", "password");
      component.classList.remove("-active");
    }
  };

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
    .eye-collabcode.eye-${module._id} {
      background-image: url(img/eye-slash.svg);
      background-repeat: no-repeat;
      background-position: center;
      display: block;
      position: absolute;
      text-indent: -9999px;
      width: 30px;
      height: 20px;
      opacity: .5;
      
    }

    .eye-collabcode.-active {
      background-image: url(img/eye.svg);
    }
    `;

    $head.insertBefore($style, null);
  };
  module.render = ({ attrFor = "" }) => {
    module._id++;
    module._style();

    return `
      <label 
        for="${attrFor}" 
        class="eye-collabcode eye-${module._id}"
        onclick="eyeCollabcode.handleClick(this)">
        Mostrar Senha
      </label>
    `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
