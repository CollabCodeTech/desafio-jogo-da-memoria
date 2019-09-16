const formLogin = (function () {

    const module = {};

    module._style = () => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .form-login {
                width: 50%;
                margin: 0 auto;
                padding: 0 34px 40px;
                transform: translateY(-30px);
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

        const $checkEmail = validationText.render({
            style: "email",
            content: "Invalid email"
            });

        const $checkPassword = validationText.render ({
            style: "password",
            content: "Invalid password, minimum 8 digitis"
        })

        const $eyeCollabcode = eyeCollabcode.render({ attrFor: "password" });
        const $linkCollabcode = linkCollabcode.render({ href: "teste", content: "Forget password ?" });
        const $pageButton = pageButton.render("login", "game");

        return `
            ${$loginLabel}
            ${$loginInput}
            ${$checkEmail}
            ${$passwordLabel}
            ${$passwordInput}
            ${$eyeCollabcode}
            ${$checkPassword}
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