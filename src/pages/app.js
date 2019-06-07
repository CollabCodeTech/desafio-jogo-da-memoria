
(function() {
	const { hash } = window.location;
	const paths = [];
	paths[""] = login;
	paths["#/login"] = login;
	paths["#/signup"] = signup;
	paths["#/game"] = game;
	paths["#/error404"] = error;

	if (paths[hash]) {
		paths[hash]();
	} else {
		paths["#/error404"]();
	}

	window.addEventListener("hashchange", ()=>{
		location.reload(true)
	});
})();