(function() {
  const $root = document.querySelector("#root");
  const $flatButtonLogin = flatButton.render("Log in");
  const $flatButtonSignup = flatButton.render("Sign up", true);
  const $logo = logo.render();
  const $title = title.render("Welcome!");
  const $logoWrapper = logoWrapper.render($logo, $title);
  const $formSignup = formSignup.render();

  $root.insertAdjacentHTML("beforeend", $flatButtonLogin);
  $root.insertAdjacentHTML("beforeend", $flatButtonSignup);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $formSignup);
})();
