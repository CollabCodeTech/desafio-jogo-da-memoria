const layerEnd = (function() {
    const module = {};

    module._style = () => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .layer-end {
                box-sizing: border-box;
                position: absolute;
                top: 5%;
                z-index: 9999;
                background: #fff;
                width: 100vw;
                height: 80vh;
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

            .layer-end > .button {
                    position: absolute;
                    top: 0.5em;
                    left: 10em;
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
        `;

        $head.insertBefore($style, null);
    }

    module.render = () => {
        const $backButton = backButton.render("Logout");
        module._style();

        return `<div class="layer-end">
                    <img class="image" src="img/you-win.jpg">
                    <button class="button" onclick="location.reload(true)">Restart game</button>
                    ${$backButton}
                </div>`
    };

    return {
        render: module.render
    };

})();
