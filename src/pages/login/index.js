const login = function () {
  const $root = document.querySelector("#root");

  const $flatButtonLogin = flatButton.render("login", true, "login");
  const $flatButtonSignUp = flatButton.render("sign up", false, "signup");

  const $collabLogo = collabLogo.render();

  const $collabTitle = collabTitle.render("hello!");

  const $logoWrapper = logoWrapper.render($collabLogo, $collabTitle);

  const $formLogin = formLogin.render();

  $root.insertAdjacentHTML("beforeend", $flatButtonLogin);
  $root.insertAdjacentHTML("beforeend", $flatButtonSignUp);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $formLogin);
};
