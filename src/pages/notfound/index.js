const notfound = function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("Log in", false, "login");
  const $signinButton = flatButton.render("Sign up", false, "signup");
  const $logoCollabcode = logoCollabcode.render();
  const $titleCollabcode = titleCollabcode.render(
    "404 - Página não encontrada!"
  );
  const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signinButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
};
