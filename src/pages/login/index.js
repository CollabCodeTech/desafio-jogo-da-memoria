const login = (function () {

    const $root = document.querySelector('#root');

    const $loginButton = flatButton.render("log in", true, "login");
    const $signupButton = flatButton.render("sign up", false, "signup");

    const $logoCollabcode = logoCollabcode.render();
    const $titleCollabcode = titleCollabcode.render("hello !!")
    const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);

    const $formLogin = formLogin.render();


    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signupButton);
    $root.insertAdjacentHTML("beforeend", $logoWrapper);
    $root.insertAdjacentHTML("beforeend", $formLogin);

});