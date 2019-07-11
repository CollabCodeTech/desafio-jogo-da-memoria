const signup = (function() {
  const $root = document.querySelector('#root');

  const $signupButton = flatButton.render('Signup', true, 'signup');
  const $loginButton = flatButton.render('Login', false, 'login');

  
  const $gueioLogo = gueioLogo.render();
  const $titleCollabcode = titleCollabcode.render();
  const $logoWrapper = logoWrapper.render($gueioLogo, $titleCollabcode);

  const $formSignUp = formSignUp.render();

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $formSignUp);
});