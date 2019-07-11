const eyeCollabCode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head")
    const $style = document.createElement("style");

    $style.textContent = `
      .eye-collabcode {
        display: block;
        width: 24px;
        height: 15px;
        background-image: url(/img/eye.png);
        background-repeat: no-repeat;
        background-position: center;
        text-indent: -99999px;
        cursor: pointer;
        opacity:0.4;
        transition: opacity 400ms linear;
        margin-left: auto;
        transform: translateY(-140%)
      }

      .eye-collabcode.-active {
        opacity: 1
      }
    `

    $head.insertAdjacentElement('beforeend', $style);
  }

  module.handleClick = function() {
    const attrFor = this.getAttribute("for");
    const $input = document.querySelector(`#${attrFor}`)

    if($input.getAttribute("type")  === "text") {
      this.classList.remove('-active')
      $input.setAttribute("type", "password") 
    }else {
      this.classList.add('-active')
      $input.setAttribute("type", "text")
    }
  }

  module.render = ({attrFor = ""}) => {
    module._style();

    return `
      <label
        for="${attrFor}"
        class="eye-collabcode"
        onClick="eyeCollabCode.handleClick.bind(this)()">
        Mostrar Senha
      </label>
    `
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  }
})()