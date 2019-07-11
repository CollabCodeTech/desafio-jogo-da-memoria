const collabButton = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');


    $style.textContent = `
      .collab-btn {
        width: 100%;
        height: 48px;
        background-color: #f25a70;
        color: #fff;
        border-radius: 24px;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.34px;
        cursor: pointer;
      }

      .input-collab + .collab-btn {
        margin-top: 45px;
      }
    `

    $head.insertAdjacentElement('beforeend', $style);
  }

  module.handleClick = (event, path) => {
    event.preventDefault();
    const $inputEmail = document.querySelector('input#email');
    const $inputPassword = document.querySelector('input#password')

    function checkEmail() {
      let regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
      let inputValue = $inputEmail.value;
      return inputValue.match(regex); 
    }

    if(!checkEmail()) {
      $inputEmail.nextElementSibling.style.display = 'block'
      return
    } else if($inputPassword.value.length < 6) {
      $inputEmail.nextElementSibling.style.display = 'none'
      $inputPassword.nextElementSibling.style.display = 'block'
      return
    }else {
      location.hash = `#/${path}`;
      location.reload(true);
    }
  }

  module.render = ({content = "", path = ""}) => {
    module._style();
    return `<input 
              class="collab-btn"
              type="submit" 
              value="${content}" 
              onClick="collabButton.handleClick(event, '${path}')">`
  }

  return {
    render: module.render,
    handleClick: module.handleClick
  }

})();