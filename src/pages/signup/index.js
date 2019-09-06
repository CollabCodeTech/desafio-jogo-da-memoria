const signup = (function () {
    const $root = document.querySelector('#root');

    const $loginButton = flatButton.render("log in", false, "login");
    const $signupButton = flatButton.render("sign up", true, "signup");

    const $logoCollabcode = logoCollabcode.render();
    const $titleCollabcode = titleCollabcode.render("Welcome!");
    const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);
    const $formSignup = formSignup.render();

    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signupButton);
    $root.insertAdjacentHTML("beforeend", $logoWrapper);
    $root.insertAdjacentHTML("beforeend", $formSignup)

});