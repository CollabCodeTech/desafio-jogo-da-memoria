const pointBar = (function () {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .point-bar {
                background-color: #3a4042;
                height: 40px;
                text-align: center;
                font-family: "comfortaa", sans-serif;
            }

            .point-bar > .number-hit, .point-bar > .number-miss {
                color: #FFF;
                line-height: 40px;
                font-weight: bold;
            }
        `

        $head.insertBefore($style, null);
    }

    module.create = () => {
        module._style();

        return `
            <header class="point-bar">
                <span class="number-hit">Acertos: 0</span>
                <span class="number-hit">/</span>
                <span class="number-miss">Erros: 0</span>
            </header>
        `;
    };

    return {
        create: module.create,
    }

})();