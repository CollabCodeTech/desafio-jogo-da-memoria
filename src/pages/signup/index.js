const signup = function() {
		const $root = document.querySelector("#root");

		const $createRoot = createRoot.create();
		const $logoWrapper = logoWrapper.render();
		const $buttonsWrapper = buttonsWrapper.render({
			contentLogin: "LogIn",
			activeLogin: false,
			pathLogin: "'login'",
			contentSignup: "SignUp",
			activeSignup: true,
			pathSignup: "'signup'",
		});
		const $signupForm = signupForm.render("Signup");

		$root.insertAdjacentHTML("beforeend", $logoWrapper);
		$root.insertAdjacentHTML("beforeend", $signupForm);
		$root.insertAdjacentElement("beforeend", $buttonsWrapper);
};
