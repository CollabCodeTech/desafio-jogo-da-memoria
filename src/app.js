(function () {
  const {hash} = window.location;
  const paths = [];
  paths[""] = login;
  paths["#/login"] = login;
  paths["#/signup"] = signup;
  paths["#/game"] = game;
  paths["#/404"] = page404;

  if (paths[hash] === undefined){
    paths["#/404"]();
  } else {
    paths[hash]();
  }
  window.onpopstate = () => location.reload(true);

})();
