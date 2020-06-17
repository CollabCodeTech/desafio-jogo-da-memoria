(function () {
  const { hash } = window.location;
  const paths = [];
  paths[""] = login;
  paths["#/login"] = login;
  paths["#/signup"] = signup;
  paths["#/game"] = game;
  paths["#/404"] = page404;

  paths[hash] ? paths[hash]() : paths["#/404"]();

  window.addEventListener("hashchange", () => {
    location.reload();
  });
})();
