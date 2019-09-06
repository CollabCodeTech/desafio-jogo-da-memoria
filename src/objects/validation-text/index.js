const validationText = (function () {

    const module = {};

    module._style = () => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .validation-text {
                color: red;
                font-size: 14px;
                font-weight: bold;
                visibility: hidden;
            }

            .validation-text.-active {
                visibility: visible;
            }
        `;

        $head.insertBefore($style, null);
    }

    module.render = content => {
        module._style()

        return `
            <span class="validation-text">${content}</span>
        `
    }

    return {
        render: module.render
    }

})();