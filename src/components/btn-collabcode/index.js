const btnCollabCode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .btn-collabcode{
        background-color: #f25a70;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        text-transform: uppercase;
        line-height: 15px;
        width: 100%;
        height: 48px;
        border-radius: 24px;
        cursor: pointer;
      }

      .input-collabcode + .btn-collabcode{
        margin-top: 45px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module._validateEmail = () => {
    const $email = document.querySelector("input[id=email]").value;
    const $invalid = document.querySelectorAll(".input-collabcode");
    const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if($email == 0 || !regexEmail.test($email)){
      $invalid[0].classList.add("-invalid");
      return false;
    }else{
      $invalid[0].classList.remove("-invalid");
      $invalid[0].classList.add("-valid");
      return true;
    };
  };

  module._validatePassword = () => {
    const $password = document.querySelector("input[id=password]").value;
    const $invalid = document.querySelectorAll(".input-collabcode");
    const regexPassword = /([a-zA-Z0-9]{8,})/;
    
    if(!regexPassword.test($password)){
      $invalid[1].classList.add("-invalid");
      return false;
    }else{
      $invalid[1].classList.remove("-invalid");
      $invalid[1].classList.add("-valid");
      return true;
    };
  };

  module.handleClick = (event, path) => {
    event.preventDefault()
    if(path == "game"){
      module._validateEmail();
      module._validatePassword();
      if(module._validateEmail() && module._validatePassword()){
        location.hash = `#/${path}`;
        location.reload(true);
      };
    }else{
      location.hash = `#/${path}`;
      location.reload(true);
    }
  };

  module.render = ({content = "", path = ""}) => {
    module._style();
    return `
      <input 
        type="submit" 
        class="btn-collabcode" 
        value="${content}"
        onclick = "btnCollabCode.handleClick(event, '${path}')"
      />    
    `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
