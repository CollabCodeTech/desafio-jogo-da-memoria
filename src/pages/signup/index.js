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

  //Adicionando as validações da página
  const $form = document.querySelector("#form");

  $form.addEventListener("submit", event => {
    event.preventDefault();
    location.hash = `#/login`;
    location.reload(true);

    // if ($email.validity.valid && $password.validity.valid) {
    //   location.hash = `#/game`;
    //   location.reload(true);
    //   return true;
    // }

    // if (!$email.validity.valid) {
    //   $emailError.innerHTML = "E-mail inválido!";
    //   $emailError.className = "error active";
    // }

    // if (!$password.validity.valid) {
    //   $passwordError.innerHTML = "Sua senha deve conter 8 caracteres!";
    //   $passwordError.className = "error active";
    // }
  });
};
