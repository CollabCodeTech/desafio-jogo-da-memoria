const btnCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .btn-collabcode {
        width: 100%;
        height: 48px;
        text-transform: uppercase;
        background-color: #f25a70;
        color: #fff;
        border-radius: 24px;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
        cursor: pointer;
      }
      .input-collabcode + .btn-collabcode {
        margin-top: 45px;
      }
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.handleClick = (event, path) => {
    module._validEmail();
    module._validPassword()
    event.preventDefault();
    const $btn = document.querySelector(".btn-collabcode");
    $btn.addEventListener("click", () => {
      location.hash = `#/${path}`;
      location.reload(true);
    });
  }

  module._validEmail = () => {
    const $email = document.querySelector("input[type='email']");
    const $msgEmail = document.querySelector("p[id='email']");
    const formatEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if($email.value.match(formatEmail)) {
      $msgEmail.classList.remove("-active");
    } else {
      $msgEmail.classList.add("-active");
    }
  }

  module._validPassword = () => { 
    const $password = document.querySelector("input[type='password']").value;
    const $msgPassword = document.querySelector("p[id='password']");
    const pass = $password.length;

    if (pass > 8 || pass == 0) {
      $msgPassword.classList.add("-active");
    } else {
      $msgPassword.classList.remove("-active");
    }
  }

  module.render = ({content = "", path = ""}) => {
    module._style();

    return `<input class="btn-collabcode" type="submit" value=${content} onClick="btnCollabcode.handleClick(event, '${path}')">`;   
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
