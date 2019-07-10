const btnCollabcode = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .btn-collabcode {
        color: #fff;
        width: 100%;
        height: 48px;
        border-radius: 24px;
        font-size: 14px;
        text-transform: uppercase;
        background-color: #f25a70;
        cursor: pointer;
      }

      .input-collabcode + .btn-collabcode {
        margin-top: 45px;
      }

      .cards-wrapper + .btn-collabcode {          
        margin: 30px 50%;
        transform: translateX(-50%);
        width: 85vw;          
      }
      .layer-start + .btn-collabcode {
        display: none
      }
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module._verifyEmail = () => {
    const $messageAlert = document.querySelector("#email");
    const email = document.querySelector("input[type='email']").value;
    const validationEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (validationEmail.test(email)) {
      $messageAlert.classList.remove("-visible");
      return true;
    } else {
      $messageAlert.classList.add("-visible");
      document.querySelector("input[type='email']").focus();
      return false;
    }
  };

  module._verifypassword = () => {
    const $messageAlert = document.querySelector("#password");
    const password = document.querySelector("input[type='password']").value;
    const validationPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    const email = document.querySelector("input[type='email']").value;
    const validationEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (validationEmail.test(email) && password === "") {
      $messageAlert.classList.remove("-visible");
      if (validationPassword.test(password)) {
        $messageAlert.classList.remove("-visible");
        return true;
      } else {
        $messageAlert.classList.add("-visible");
        document.querySelector("input[type='password']").focus();
        return false;
      }
    }
    return true;
  };

  module.handleClick = function(event, path, id) {
    event.preventDefault();

    const $backButton = document.querySelector("#backButton");

    if ($backButton) {
      location.hash = `#/${path}`;
      location.reload();
    } else {
      const verifyEmail = module._verifyEmail();
      const verifyPassword = module._verifypassword();

      if (verifyEmail && verifyPassword) {
        location.hash = `#/${path}`;
        location.reload();
      }
    }
  };

  module.render = ({ content = "", path = "", id = "" }) => {
    module._style();

    return `
      <input 
        id="${id}"       
        class="btn-collabcode" 
        type="submit" 
        value="${content}"
        onClick="btnCollabcode.handleClick(event, '${path}')"
      /> 
    `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
