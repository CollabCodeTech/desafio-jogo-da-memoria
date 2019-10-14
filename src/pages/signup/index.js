const signup = (function() {
  const $root = document.querySelector("#root");
  const $loginButton = flatButton.render("Log in", false, "login");
  const $signupButton = flatButton.render("Sign Up", true, "signup");
  const $logoCollabCode = logoCollabCode.render();
  const $titleCollabCode = titleCollabCode.render("Welcome!");

  const $logoWrapper = logoWrapper.render($logoCollabCode, $titleCollabCode);
  const $formSignup = formSignup.render();

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $formSignup);
});
