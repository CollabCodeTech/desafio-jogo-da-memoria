const formSignup = (function () {

    const module = {};

    module._style = () => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .form-signup {
                padding: 0 35px 40px;
            }
        `;

        $head.insertBefore($style, null);
    };

    module._chilldren = () => {
        const createInput = inputCollabcode.render();

        const $usernameLabel = labelCollabcode.render("Username");

        const $usernameInput = createInput({
            type: "text",
            id: "inputUsername",
            placeholder: "Name-example",

        });

        const $emailLabel = labelCollabcode.render("E-mail");

        const $emailInput = createInput({
            type: "email",
            id: "emailInput",
            placeholder: "example@email.com",
        });

        const $passwordLabel = labelCollabcode.render("Password")

        const $passwordInput = createInput({
            type: "password",
            id: "inputPassword",
            placeholder: "********"
        });

        const $confirmPasswordLabel = labelCollabcode.render("Confirm Password")

        const $confirmPasswordInput = createInput({
            type: "password",
            id: "confirmPassword",
            placeholder: "********"
        });

        const $pageButton = pageButton.render('Submit', 'login');

        return `
            ${$usernameLabel}
            ${$usernameInput}

            ${$emailLabel}
            ${$emailInput}

            ${$passwordLabel}
            ${$passwordInput}

            ${$confirmPasswordLabel}
            ${$confirmPasswordInput}

            ${$pageButton}
        `;
    };

    module.render = () => {
        module._style();

        return `
            <form class="form-signup" action="#" method="POST">${module._chilldren()}</form>
        `;
    };

    return {
        render: module.render
    };
})();