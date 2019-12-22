const leftArrow = (function(){
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .left-arrow{
        width: 30px;
        height: 30px;
        position: absolute;
        top: 5px;
        left: 10px;
        cursor: pointer;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();
    return `
      <figure> 
        <img src="./img/left-arrow.svg" class="left-arrow" onClick="leftArrow.handleClick()">
      </figure>
    `;
  };

  module.handleClick = () => {
    window.location.hash = "#/login";
    window.location.reload();
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  }
})();