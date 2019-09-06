const gameButton = (function () {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .game-button {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                position: absolute;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                background-color: #2ed573;
                border: 3px solid #fffecc;
                color: #fffecc;
                font-weight: bold;
                text-transform: uppercase;
                font-size: 1.05em;
                box-shadow: 0px 4px 8px #3a4042;
                cursor: pointer;
                transition: all 300ms linear;
            }

            .game-button.-disable {
                opacity: 0;
                transform: scale(2.5);
                transform-origin: right center;
                pointer-events: none;
            }
        `

        $head.insertBefore($style, null);
    }

    module.render = content => {
        module._style();

        return `
            <button class="game-button">${content}</button>
        `;
    }



    return {
        render: module.render,
    }

})();