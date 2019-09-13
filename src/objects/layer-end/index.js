const layerEnd = (function() {
    const module = {};

    module._style = () => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .layer-end {
                box-sizing: border-box;
                position: absolute;
                top: 0;
                z-index: 9999;
                background: #fff;
                width: 100vw;
                height: 100vh;
                text-align: center;
                padding-top: 200px;
                display: none;
            }

            .layer-end.-active {
                display: inline-block;
            }

            .layer-end > .image {
                width: 25vw;    
            }
        `;

        $head.insertBefore($style, null);
    }

    module.render = () => {
        module._style();

        return `<div class="layer-end">
                    <img class="image" src="../img/you-win.jpg">
                </div>`
    };

    return {
        render: module.render
    };

})();