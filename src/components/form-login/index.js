const formLogin = (function() {
  const module ={};

  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
      .form-login {
        padding: 0 35px 40px;
      }
    `

    $head.insertAdjacentElement("beforeend", $style);
  };

  module._children = () => {
    const $loginLabel = labelCollab.render('Username ou e-mail');
    const $loginInput = inputCollab.render({
      placeholder: 'example@email.com.br',
      type: 'email',
      id: 'email'});
    
    const $userError = collabError.render('email');
    const $passwordError = collabError.render('password'); 

    const $passwordLabel = labelCollab.render('Password');
    const $passwordInput = inputCollab.render({
      id: 'password',
      placeholder: 'Seu password',
      type: 'password'
    });

    const $eyeCollabCode = eyeCollabCode.render({
      attrFor: 'password'
    }); 

    const $recoverPassword = recoverPassword.render();

    const $collabButton = collabButton.render({
      content: 'Login',
      path: 'game'
    });

    return `
      ${$loginLabel}
      ${$loginInput}
      ${$userError}

      ${$passwordLabel}
      ${$passwordInput}
      ${$passwordError}

      ${$eyeCollabCode}

      ${$recoverPassword}

      ${$collabButton}

    `
  };

  module.render = () => {
    module._style();
    return `<form class="form-login" action="" method="POST">${module._children()}
    </form>`
  }

  return {
    render: module.render
  }

})();