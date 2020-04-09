const login = function() {
  const $root = document.querySelector("#root");
  const $formsWrapper = createFormsWrapper();
  const $LoginButton = flatButton.render("Log in", true, "login");
  const $SignupButton = flatButton.render("Sign Up", false, "signup");
  const $logoGueio = logoGueio.render();
  const $titlePage = titlePage.render("Hello!");
  const $logoWrapper = logoWrapper.render($logoGueio, $titlePage);
  const $formLogin = formLogin.render();

  $root.insertAdjacentElement("beforeend", $formsWrapper);
  $formsWrapper.insertAdjacentHTML("beforeend", $LoginButton);
  $formsWrapper.insertAdjacentHTML("beforeend", $SignupButton);
  $formsWrapper.insertAdjacentHTML("beforeend", $logoWrapper);
  $formsWrapper.insertAdjacentHTML("beforeend", $formLogin);
};
