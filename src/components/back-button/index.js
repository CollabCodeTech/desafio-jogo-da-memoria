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
            }
        `;

        $head.insertBefore($style, null);
    }

    module.render = () => {
        module._style();

        return `
            <button class="back-button"><i class="fas fa-chevron-circle-left"></i>Voltar</button>
    `;
    };

    return {
        render: module.render
    }
})();