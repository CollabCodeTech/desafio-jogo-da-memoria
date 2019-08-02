const buttonCollabcode = (function() {
  const module = {};

  module._id = 0;

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
    
      .button-collabcode.button-${module._id} {
        width: 100%;
        height: 40px;
        background-color: #F25A70;
        border-radius: 20px;
        color: #f2f2f2;
        font-weight: bold;
        font-size: .8rem;
      }

      .button-collabcode:hover {
        cursor: pointer;
      }

      .button-collabcode.-back {
        background-color: #3A4042;

      }
    `;

    $head.insertBefore($style, null);
  };

  module.handleClick = (event, path) => {
    event.preventDefault();
    window.location.hash = `#/${path}`;
    window.location.reload();
  };

  module.render = ({ variacao = "", content = "", path = "login" }) => {
    module._id++;
    module._style();

    return `
      <input 
        class="button-collabcode ${variacao} button-${module._id}" 
        type="submit" 
        value="${content}"
        onclick="buttonCollabcode.handleClick(event, '${path}')">
    `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
