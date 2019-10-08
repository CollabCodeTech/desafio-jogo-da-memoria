(function() {
  const $root = document.querySelector("#root");

  const $loginBtn = flatButton.render("Log In", true);
  const $signupBtn = flatButton.render("Sign In");
  const $logo = logo.render();
  const $title = title.render("Hello!");
  const $logoWrapper = logoWrapper.render($logo, $title);
  const $loginForm = formLogin.render();

  $root.insertAdjacentHTML("beforeend", $loginBtn);
  $root.insertAdjacentHTML("beforeend", $signupBtn);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $loginForm);
})();
