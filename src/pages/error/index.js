const error = function() {
	const $root = document.querySelector("#root");
	const $createRoot = createRoot.create();

	const $logoWrapper = logoWrapper.render("Error", "404");
	const $buttonsWrapper = buttonsWrapper.render({
		contentLogin: "LogIn",
		activeLogin: false,
		pathLogin: "'login'",
		contentSignup: "SignUp",
		activeSignup: false,
		pathSignup: "'signup'",
	});
	const $errorMessage = errorMessage.render("Page Not Found");

	$root.insertAdjacentHTML("beforeend", $logoWrapper);
	$root.insertAdjacentHTML("beforeend", $errorMessage);
	$root.insertAdjacentElement("beforeend", $buttonsWrapper);

	return false;
};
