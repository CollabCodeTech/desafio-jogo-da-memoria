const btnCollabcode = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .btn-collabcode{
          background-color:#f25a70;
          color:#fff;
          font-size: 14px;
          text-transform: uppercase;
          width:100%;
          height:48px;
          border-radius: 24px;
          font-weight: bold;
          cursor:pointer;
      }
      .input-collabcode + .btn-collabcode{
          margin-top:45px;
      }
      
      `;

    $head.insertBefore($style, null);
  };

  module.render = ({ content = "", path = "" }) => {
    module._style();
    return `<input 
    class="btn-collabcode"
    type="submit" 
    value="${content}""
    />`;
    //onClick="btnCollabcode.handleClick(event,'${path}')
  };

  module.handleClick = (event, path) => {
    event.preventDefault();
   // window.location.hash = `/${path}`;
  };

  return {
    render: module.render,
    handleClick: module.handleClick,
  };
})();
