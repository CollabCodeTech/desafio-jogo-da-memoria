(() => {
  let { hash } = window.location;
  
  const paths = [];
  paths[""] = login;
  paths["#/login"] = login;
  paths["#/signup"] = singnup;
  paths["#/game"] = game;

  paths[hash] ? paths[hash]() : page404();

  window.onhashchange = () => {
    let { hash } = window.location;
    document.getElementById('root').innerHTML = ''
    paths[hash] ? paths[hash]() : page404();
  };
})();
