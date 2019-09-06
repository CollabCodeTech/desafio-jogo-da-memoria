const backButton = (function () {

    const module = {};

    module._style = () => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .back-button {
                position: absolute;
                top: 0.5em;
                left: 1em;
                padding: 5px;
                cursor: pointer;
                background-color: #2ed573;
                border: 1px solid #fffecc;
                border-radius: 10px;
                color: #FFF;
                font-weight: bold;
                text-decoration: underline;
                letter-spacing: 0.2em;
                transition: all 300ms linear 
            }

            .back-button.-disable {
                opacity: 0;
                pointer-events: none;
            }
        `;

        $head.insertBefore($style, null);
    }

    module.handleClick = (path) => {
        window.location.hash = path;
        window.location.reload(true);
    }

    module.render = (content = "Voltar", path = "login") => {
        module._style();

        return `
            <button class="back-button" onClick="backButton.handleClick('#/${path}')"><i class="fas fa-chevron-circle-left"></i>${content}</button>
        `;
    };

    return {
        render: module.render,
        handleClick: module.handleClick
    }
})();