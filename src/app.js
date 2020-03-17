(function() {
  const { hash } = location;

  const paths = [];
  paths[""] = login;
  paths["#/login"] = login;
  paths["#/signup"] = signup;
  paths["#/game"] = game;
  paths["#/404"] = page404;

  if (paths[hash] === undefined) {
    paths["#/404"]();
    return;
  }

  paths[hash]();

  window.onpopstate = () => {
    location.reload(true);
  };
})();
