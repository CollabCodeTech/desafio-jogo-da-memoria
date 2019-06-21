const signup = function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("Log in", false, "login");
  const $signinButton = flatButton.render("Sign up", true, "signup");
  const $logoCollabcode = logoCollabcode.render();
  const $titleCollabcode = titleCollabcode.render("Welcome!");
  const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);

  const $formSignup = formSignup.render();

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signinButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $formSignup);

  const $form = document.querySelector("#form");

  $form.addEventListener("submit", event => {
    event.preventDefault();
    location.hash = `#/login`;
    location.reload(true);
  });
};
