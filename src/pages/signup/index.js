const signup = function() {
  const $root = document.querySelector("#root");
  const $formsWrapper = createFormsWrapper();
  const $LoginButton = flatButton.render("Log in", false, "login");
  const $SignupButton = flatButton.render("Sign Up", true, "signup");
  const $logoGueio = logoGueio.render();
  const $titlePage = titlePage.render("Welcome!");
  const $logoWrapper = logoWrapper.render($logoGueio, $titlePage);
  const $formSignup = formSignup.render();

  $root.insertAdjacentElement("beforeend", $formsWrapper);
  $formsWrapper.insertAdjacentHTML("beforeend", $LoginButton);
  $formsWrapper.insertAdjacentHTML("beforeend", $SignupButton);
  $formsWrapper.insertAdjacentHTML("beforeend", $logoWrapper);
  $formsWrapper.insertAdjacentHTML("beforeend", $formSignup);
};
