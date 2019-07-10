const eyeCollab = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .eye-collab{
        background: url(img/icon-eye.png) no-repeat center;
        display: block;
        text-indent: -9999px;
        width: 24px;
        height: 15px;
        opacity: .5;
        transition: opacity 200ms linear;          
        margin-left: auto;
        transform: translateY(-140%) ;
        cursor: pointer;
      }

      .eye-collab.-active{
        opacity: 1;        
      }
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = ({ attrFor = "" }) => {
    module._style();

    return `
      <label 
        for="${attrFor}"
        class="eye-collab" 
        onClick="eyeCollab.handleClick.bind(this)()">
        Mostrar senha
      </label>
    `;
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

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
