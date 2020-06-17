const signup = function () {
  const $root = document.querySelector("#root");

  const $flatButtonLogin = flatButton.render("log in", false, "login");
  const $flatButtonSignUp = flatButton.render("sign up", true, "signup");

  const $collabLogo = collabLogo.render();
  const $collabTitle = collabTitle.render("welcome!");

  const $logoWrapper = logoWrapper.render($collabLogo, $collabTitle);

  const $formSignUp = formSignUp.render();

  $root.insertAdjacentHTML("beforeend", $flatButtonLogin);
  $root.insertAdjacentHTML("beforeend", $flatButtonSignUp);

  $root.insertAdjacentHTML("beforeend", $logoWrapper);

  $root.insertAdjacentHTML("beforeend", $formSignUp);
};
