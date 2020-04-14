const singnup = () => {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render({
    content: "Login",
    path: "login"
  });
  const $signupButton = flatButton.render({
    content: "Sign up",
    active: true,
    path: "signup"
  });

  alertCollabcode.render()
  const $logoCollabcode = logoCollabcode.render();
  const $titleLogin = titleLogin.render("Welcome!");
  const $logoWrapper = logoWrapper.render($logoCollabcode, $titleLogin);
  const $formSignup = formSignup.render();

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $formSignup);
};
