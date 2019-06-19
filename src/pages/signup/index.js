const signup = (function () {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("Login", false, "login"); //content que está no flatbutton
  const $signupButton = flatButton.render("Sign up", true, "signup"); //content que está no flatbutton

  const $logoCollabCode = logoCollabCode.render();
  const $titleCollabCode = titleCollabCode.render("Welcome!");
  const $logoWrapper = logoWrapper.render($logoCollabCode, $titleCollabCode);
  const $formSignup = formSignup.render();

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $formSignup);
});
