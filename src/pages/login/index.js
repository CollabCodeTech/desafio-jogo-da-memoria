const login = (function() {
  const $root = document.querySelector('#root');

  const $signupButton = flatButton.render('Signup', false, "signup");
  const $loginButton = flatButton.render('Login', true, "login");

  const $gueiLogo = gueioLogo.render();
  const $titleCollabcode = titleCollabcode.render('Hello!');
  const $logoWrapper = logoWrapper.render($gueiLogo, $titleCollabcode);

  const $formLogin = formLogin.render();


  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $formLogin);
});