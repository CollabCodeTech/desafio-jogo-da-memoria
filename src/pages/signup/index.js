const signup = () => {
  const $root = document.querySelector("#root");
  const $titleCollabcode = titleCollabcode.render("Welcome");
  const $logoCollabcode = logoCollabcode.render();
  const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);
  const $formSignup = formSignup.render();
  const $loginButton = flatButton.render("Log in", false, "login");
  const $signupButton = flatButton.render("Sign up", true, "signup");

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $formSignup);
};
