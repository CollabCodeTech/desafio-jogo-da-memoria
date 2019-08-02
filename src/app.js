(function() {
  const { hash } = window.location;
  const path = [];

  path[""] = login;
  path["#/login"] = login;
  path["#/signup"] = signup;
  path["#/404"] = erro404;
  path["#/nivel"] = nivel;
  path["#/game"] = game;

  // Descomentar quando tiver a página de erro criada
  path[hash] ? path[hash]() : path["#/404"]();

  window.onpopstate = () => {
    location.reload(true);
  };
})();
