const login = () => {
  const $root = document.querySelector("#root");
  const $loginButton = flatButton.render("Log in", true, "login");
  const $signupButton = flatButton.render("Sign up", false, "signup");
  const $titleCollabcode = titleCollabcode.render("Hello");
  const $logoCollabcode = logoCollabcode.render();
  const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);
  const $formLogin = formLogin.render();

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $formLogin);
};
