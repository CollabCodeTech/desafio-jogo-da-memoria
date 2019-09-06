const inputCollabcode = (function () {

    const module = {};

    module._style = () => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .input-collabcode {
                display: block;
                width: 100%;
                color: rgb(58, 64, 66);
                font-size: 18px;
                font-weight: bold;
                padding: 12px 0;
                border: none;
                border-bottom: 2px solid rgba(58, 64, 66, .5);
            }
        `

        $head.insertBefore($style, null);
    }

    module.render = () => {
        module._style();

        return ({ type = "", id = "", placeholder = "" }) => `
            <input class="input-collabcode" type="${type}" id="${id}" placeholder="${placeholder}"/>
        `;

    };

    return {
        render: module.render
    };

})();