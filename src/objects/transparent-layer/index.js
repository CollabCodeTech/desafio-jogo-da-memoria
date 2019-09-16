const transparentLayer = (function () {
    const module = {};

    module._style = () => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .transparent-layer {
                position: absolute;
                height: 100vh;
                width: 100vw;
                top: 0;
                background-color: rgba(58, 64, 66, 0.5);
                transition: opacity 300ms 200ms linear; /* Propriedade, tempo da animação, dalay do inicio da animação, tipo da animação */
            }

            .transparent-layer.-disable {
                opacity: 0;
                pointer-events: none;
            }
        `;

        $head.insertBefore($style, null);
    }


    module.render = () => {
        module._style();

        return `
            <div class="transparent-layer"></div>
        `;
    };

    return {
        render: module.render
    }

})();