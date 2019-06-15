(function() {
  const { hash } = window.location;
  paths[hash] ? paths[hash]() : paths["#/404"]();

  window.onpopstate = () => location.reload(true);
})();
