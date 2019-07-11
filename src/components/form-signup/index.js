const formSignUp = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
      .form-signup {
        padding: 0 35px 40px;
      }
    `


    $head.insertAdjacentElement('beforeend', $style);
  }

  module._children = () => {
    const $emailLabel = labelCollab.render('E-mail');
    const $emailInput = inputCollab.render('seuemail@exemplo.com', 'email');

    const $usernameLabel = labelCollab.render('Username');
    const $usernameInput = inputCollab.render('Username');

    const $passwordLabel = labelCollab.render('Password');
    const $passwordInput = inputCollab.render('Sua senha', 'password');

    const $confirmPasswordLabel = labelCollab.render('Confirme Password');
    const $confirmPasswordInput = inputCollab.render('De novo para não esquecer', 'password');

    const $collabButton = collabButton.render({
      content: 'Submit',
      path: 'login'
    });
  
    return `
      ${$emailLabel}
      ${$emailInput}

      ${$usernameLabel}
      ${$usernameInput}

      ${$passwordLabel}
      ${$passwordInput}

      ${$confirmPasswordLabel}
      ${$confirmPasswordInput}

      ${$collabButton}

    `
  }

  module.render = () => {
    module._style();
    return `<form class="form-signup" action="" method="POST">${module._children()}</form>`
  }

  return {
    render: module.render
  }

})();