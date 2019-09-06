const flatButton = (function () {

    const module = {};

    module._id = 0;

    module._style = (active) => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        // O valor do active é passado por paramentro vindo lá da page.
        // IF ternario no Background, se active for true recebe cor vermelha caso contrario cor branca

        $style.textContent = `
            .flat-button-${module._id} {
                position: relative;
                background-color: ${active ? "#f25a70" : "#eae6da"};
                color: ${active ? "#fff" : "#fffcee"};
                width: 50%;
                height: 176px;
                font-size: 24px;
                font-weight: bold;
                text-transform: uppercase;
                cursor: pointer;
            }

            .flat-button-${module._id} > .text {
                position: absolute;
                left: 20%;
                top: 35%;
            }
        `;

        $head.insertBefore($style, null);
    }

    module.handleClick = (path) => {
        window.location.hash = path
        location.reload(true);
    }

    module.render = (content = "", active = false, path = "") => {
        module._id++;
        module._style(active);

        return `<button class="flat-button-${module._id}" onClick="flatButton.handleClick('#/${path}')"><span class="text">${content}</span></button>`;
    };

    return {
        render: module.render,
        handleClick: module.handleClick
    };

})();