(function() {
  const {hash} = window.location;
  const paths = [];
  paths[""] = login;
  paths["#/404"] = status404;
  paths["#/login"] = login;
  paths["#/signup"] = signup;
  paths["#/game"] = game;

 paths[hash] ? paths[hash]() : paths["#/404"]();
  
})();

window.addEventListener("hashchange", event => {
  location.reload();
});
