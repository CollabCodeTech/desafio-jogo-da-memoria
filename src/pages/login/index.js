const login = (function(){
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("Log in", true, "login");
  const $signupButton = flatButton.render("Sign Up", false, "signup");
  const $iconCollabCode = iconCollabCode.render();
  const $titleForm = titleForm.render("Hello!");
  const $logoWrapper = logoWrapper.render($iconCollabCode, $titleForm);

  const $formLogin = formLogin.render();

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);

  $root.insertAdjacentHTML("beforeend", $formLogin);
  
});