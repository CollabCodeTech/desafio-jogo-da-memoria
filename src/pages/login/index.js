const login = function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("Log in", true, "login");
  const $signinButton = flatButton.render("Sign up", false, "signup");
  const $logoCollabcode = logoCollabcode.render();
  const $titleCollabcode = titleCollabcode.render("Hello!");
  const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);
  const $formLogin = formLogin.render();

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signinButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $formLogin);

  //Adicionando as validações da página
  const $form = document.querySelector("#form");

  const $email = document.querySelector("#email");
  const $emailError = document.querySelector("span[for='email']");

  const $password = document.querySelector("#password");
  $password.setAttribute("minlength", "8");
  $password.setAttribute("maxlength", "8");
  const $passwordError = document.querySelector("span[for='password']");

  $email.addEventListener("input", () => {
    if ($email.validity.valid) {
      $emailError.textContent = "";
      $emailError.classList.remove("-active");
    }
  });

  $password.addEventListener("input", () => {
    if ($password.validity.valid) {
      $passwordError.textContent = "";
      $passwordError.classList.remove("-active");
    }
  });

  $form.addEventListener("submit", event => {
    event.preventDefault();

    if ($email.validity.valid && $password.validity.valid) {
      location.hash = `#/game`;
      location.reload(true);
      return true;
    }

    if (!$email.validity.valid) {
      $emailError.textContent = "E-mail inválido!";
      $emailError.classList.add("-active");
    }

    if (!$password.validity.valid) {
      $passwordError.textContent = "Sua senha deve conter 8 caracteres!";
      $passwordError.classList.add("-active");
    }
  });
};
