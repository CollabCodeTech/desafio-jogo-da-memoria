(function () {
    const { hash } = window.location;

    const paths = [];

    paths[""] = login;
    paths["#/login"] = login;
    paths["#/signup"] = signup;
    paths["#/game"] = game;
    paths["#/404"] = status404

    paths[hash] ? paths[hash]() : paths["#/404"]();

    // if (paths[hash]) {
    //     paths[hash]();
    // } else {
    //     paths["#/404"]();
    // }


    // Função aplicado ao navegador que executa reload ao trocar o hash da pagina
    window.onhashchange = () => {
        location.reload(true);
    }

    // window.addEventListener('hashchange', () => {
    //     location.reload(true);
    // }, false);

})();