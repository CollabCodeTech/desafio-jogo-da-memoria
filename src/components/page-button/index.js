const pageButton = (function () {

    const module = {};

    module._style = () => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .page-button {
                width: 100%;
                height: 48px;
                border-radius: 24px;
                background-color: #f25a70;
                font-size: 14px;
                font-weight: bold;
                color: #fff;
                text-transform: uppercase;
                cursor: pointer;
            }

            .input-collabcode + .page-button {
                margin-top: 45px;
            }
        `;

        $head.insertBefore($style, null);
    };

    module.handleClick = (event, path) => {
        event.preventDefault();
        window.location.hash = `/${path}`;
        location.reload(true);
    }

    module.render = (content = "Nome do botão", path = "") => {
        module._style();

        return `
            <button class="page-button" type="submit" onClick="pageButton.handleClick(event, '${path}')">${content}</button>
        `;
    };

    return {
        render: module.render,
        handleClick: module.handleClick
    };

})();