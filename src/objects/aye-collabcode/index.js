const ayeCollabcode = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
    .aye-collabcode{
        background-image: url(/img/icon-eye.png);
        background-repeat: no-repeat;
        background-position: center;
        display: block;
        text-indent: -9999px;
        width:24px;
        height:15px;
        cursor:pointer;
        opacity: 0.5;
        transition: opacity 200ms linear;
        /* margin-left:auto; */
        float: right;
        transform: translateY(-170%);
    }
    .aye-collabcode.-active{
        opacity:1;
    }
    `;

    $head.insertBefore($style, null);
  };

  module.handleClick = function() {
    const attrFor = this.getAttribute("for");
    const $input = document.getElementById(attrFor);

    if ($input.getAttribute("type") === "text") {
      this.classList.remove("-active");
      $input.setAttribute("type", "password");
    } else {
      $input.setAttribute("type", "text");
      this.classList.add("-active");
    }
  };

  module.render = ({ attrFor = "" }) => {
    module._style();
    return `
        <label 
            for="${attrFor}"
            class="aye-collabcode"
            onClick="ayeCollabcode.handleClick.bind(this)()"
        >
        Show password
        </label>`;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
