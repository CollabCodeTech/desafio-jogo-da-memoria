const validationButton = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .validation-button{
        width: 100%;
        height: 48px;
        border-radius: 24px;
        background-color: #f25a70;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
      }

      .input-form + .validation-button{
        margin-top: 45px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.handleClick = (event, path) => {
    event.preventDefault();

    if(path === "game"){
      module._validateUser();
      module._validatePass();
      if(module._validateUser() && module._validatePass()){
        location.hash = `#/${path}`;
        location.reload(true);
      }
    }else{
      location.hash = `#/${path}`;
      location.reload(true);
    }
  };

  module._validateUser = () => {
    const $email = document.querySelector("input[id=user]").value;
    const $inputEmail = document.querySelectorAll(".input-form");
    const validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if($email === 0 || !validEmail.test($email)){
      $inputEmail[0].classList.add("-invalid");
      return false;
    }else{
      return true;
    };
  };

  module._validatePass = () => {
    const $pass = document.querySelector("input[id=password]").value;
    const $inputPass = document.querySelectorAll(".input-form");
    const validPass = /([a-zA-Z0-9]{8,})/;

    if(!validPass.test($pass)){
      $inputPass[1].classList.add("-invalid");
      return false;
    }else{
      return true;
    };
  };


  module.render = ({content = "", path = ""}) => {
    module._style();
    return `<input type="submit"
                   value="${content}"
                   class="validation-button"
                   onClick="validationButton.handleClick(event, '${path}')"
            >`
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  }
})();