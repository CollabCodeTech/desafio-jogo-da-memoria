const login = function() {
	const $root = document.querySelector("#root");

	const $createRoot = createRoot.create();
	const $logoWrapper = logoWrapper.render();
	const $buttonsWrapper = buttonsWrapper.render({
		contentLogin: "LogIn",
		activeLogin: true,
		pathLogin: "'login'",
		contentSignup: "SignUp",
		activeSignup: false,
		pathSignup: "'signup'",
	});
	const $loginForm = loginForm.render("Login");

	$root.insertAdjacentHTML("beforeend", $logoWrapper);
	$root.insertAdjacentHTML("beforeend", $loginForm);
	$root.insertAdjacentElement("beforeend", $buttonsWrapper);
};
