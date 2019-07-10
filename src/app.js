(() => {
  const { hash } = window.location;
  const paths = [];
  paths[""] = login;
  paths["#/login"] = login;
  paths["#/signup"] = signup;
  paths["#/game"] = game;
  paths["#/404"] = error404;

  paths[hash] ? paths[hash]() : paths["#/404"]();
  window.onpopstate = () => location.reload(true);
})();
