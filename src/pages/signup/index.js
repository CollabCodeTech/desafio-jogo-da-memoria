const signup = (function() {
    const $root = document.querySelector("#root");

    const $loginButton = flatButton.render("Log in", false, "login");
    const $signUpButton = flatButton.render("Sign Up", true, "signup");
    const $iconCollabCode = iconCollabCode.render();
    const $titleForm = titleForm.render("Welcome!");
    const $logoWrapper = logoWrapper.render($iconCollabCode, $titleForm);
    const $formSignup = formSignup.render();

    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signUpButton);
    $root.insertAdjacentHTML("beforeend", $logoWrapper);


    $root.insertAdjacentHTML("beforeend", $formSignup);
});