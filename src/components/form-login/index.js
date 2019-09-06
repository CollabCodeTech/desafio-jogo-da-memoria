const formLogin = (function () {

    const module = {};

    module._style = () => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .form-login {
                padding: 0 34px 40px;
            }
        `

        $head.insertBefore($style, null);

    };

    module._children = () => {
        const createInput = inputCollabcode.render();

        const $loginLabel = labelCollabcode.render("Username or E-mail");

        const $loginInput = createInput({
            type: "text",
            name: "login",
            placeholder: "exaple@email.com"
        });

        const $passwordLabel = labelCollabcode.render("Password");

        const $passwordInput = createInput({
            type: "password",
            id: "password",
            placeholder: "******"
        });

        const $eyeCollabcode = eyeCollabcode.render({ attrFor: "password" });

        const $linkCollabcode = linkCollabcode.render({ href: "teste", content: "Forget password ?" });

        const $pageButton = pageButton.render("login", "game");

        return `
            ${$loginLabel}
            ${$loginInput}
            ${$passwordLabel}
            ${$passwordInput}
            ${$eyeCollabcode}
            ${$linkCollabcode}
            ${$pageButton}
        `;

    };

    module.render = () => {
        module._style();
        return `<form action="#" method="POST" class="form-login">${module._children()}</form>`;

    };

    return {
        render: module.render
    };

})();