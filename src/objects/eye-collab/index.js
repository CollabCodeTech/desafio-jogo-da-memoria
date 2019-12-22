const eyeCollab = (function(){
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .eye-collab{
        background-image: url(/img/eye.svg);
        background-repeat: no-repeat;
        background-position: center;
        display: block;
        text-indent: -999px;
        opacity: 0.3;
        width: 23px;
        height: 15px;
        cursor: pointer;
        transition: opacity 200ms linear;
        float: right;
        transform: translateY(-140%);
        margin-right: 4px;
      }
      .eye-collab.-active{
        opacity: 1;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.handleClick = function(){
    const attrFor = this.getAttribute("for");
    const $input = document.querySelector(`#${attrFor}`);
    
    if($input.getAttribute("type") === "password"){
      this.classList.remove("-active");
      $input.setAttribute("type", "text");
    } else {
      this.classList.add("-active");
      $input.setAttribute("type", "password");
    }
  };

  module.render = ({attrFor = ""}) => {
    module._style();
    return `
      <label 
        for="${attrFor}"
        class="eye-collab"
        onClick="eyeCollab.handleClick.bind(this)()">
        Mostrar Senha
      </label>
    `
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  }
})();