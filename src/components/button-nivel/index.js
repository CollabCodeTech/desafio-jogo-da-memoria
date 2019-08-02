const buttonNivel = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
    
      .button-nivel{
        width: 100%;
        height: 40px;
        background-color: #F25A70;
        border-radius: 20px;
        color: #f2f2f2;
        font-weight: bold;
        font-size: .8rem;
      }

      .button-nivel:hover {
        cursor: pointer;
      }

    `;

    $head.insertBefore($style, null);
  };

  module.handleClick = (event, path) => {
    event.preventDefault();
    window.location.hash = `#/${path}`;
    window.location.reload();

    const radioButtons = document.querySelectorAll(".radio-collabcode");

    radioButtons.forEach(radioButton => {
      if (radioButton.checked) {
        localStorage.setItem("dificuldade", radioButton.value);
      }
    });
  };

  module.render = ({ content = "", path = "login" }) => {
    module._id++;
    module._style();

    return `
      <input 
        class="button-nivel" 
        type="submit" 
        value="${content}"
        onclick="buttonNivel.handleClick(event, '${path}')">
    `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
