const routes = (function() {
  const module = {};

  module.login = () => {
    const $root = document.querySelector("#root");
    $root.innerHTML = "";

    const $loginBtn = flatButton.render("Log In", true, "login");
    const $signupBtn = flatButton.render("Sign In", false, "signup");
    const $logo = logo.render();
    const $title = title.render("Hello!");
    const $logoWrapper = logoWrapper.render($logo, $title);
    const $loginForm = formLogin.render();

    $root.insertAdjacentHTML("beforeend", $loginBtn);
    $root.insertAdjacentHTML("beforeend", $signupBtn);
    $root.insertAdjacentHTML("beforeend", $logoWrapper);
    $root.insertAdjacentHTML("beforeend", $loginForm);
  };

  module.signup = () => {
    const $root = document.querySelector("#root");
    $root.innerHTML = "";

    const $flatButtonLogin = flatButton.render("Log in", false, "login");
    const $flatButtonSignup = flatButton.render("Sign up", true, "signup");
    const $logo = logo.render();
    const $title = title.render("Welcome!");
    const $logoWrapper = logoWrapper.render($logo, $title);
    const $formSignup = formSignup.render();

    $root.insertAdjacentHTML("beforeend", $flatButtonLogin);
    $root.insertAdjacentHTML("beforeend", $flatButtonSignup);
    $root.insertAdjacentHTML("beforeend", $logoWrapper);
    $root.insertAdjacentHTML("beforeend", $formSignup);
  };

  module.game = () => {
    const $root = document.querySelector("#root");
    $root.innerHTML = "";

    const $cardsWrapper = createCardsWrapper();
    const createMemoryCard = memoryCard.create();
    const $scoreBar = scoreBar.create();

    const $layerWrapper = layerWrapper.render("Go!");

    const $memoryCardCpp = createMemoryCard({
      icon: "c",
      alt: "Icone de livro de C++"
    });
    const $memoryCardJs = createMemoryCard({
      icon: "js",
      alt: "Icone de livro de JS"
    });
    const $memoryCardWoman = createMemoryCard({
      icon: "woman",
      alt: "Icone de mulher programando"
    });
    const $memoryCardBug = createMemoryCard({
      icon: "bug",
      alt: "Icone de bug"
    });

    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCpp);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCpp);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);

    $root.insertAdjacentHTML("afterbegin", $scoreBar);
    $root.insertAdjacentElement("beforeend", $cardsWrapper);
    $root.insertAdjacentHTML("beforeend", $layerWrapper);
  };

  module.notFound = () => {
    const $root = document.querySelector("#root");
    $root.innerHTML = "";

    const $notFound = title.render("Página não encontrada");

    $root.insertAdjacentHTML("beforeend", $notFound);
  };

  return {
    login: module.login,
    signup: module.signup,
    game: module.game,
    notFound: module.notFound
  };
})();
