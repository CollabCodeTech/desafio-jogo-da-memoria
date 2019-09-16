const validationText = (function () {

    const module = {};

    module._style = style => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .validation-${style} {
                color: red;
                font-size: 14px;
                font-weight: bold;
                visibility: hidden;
            }

            .validation-${style}.-active {
                visibility: visible;
            }
        `;

        $head.insertBefore($style, null);
    }

    module.render = ({style, content}) => {
        module._style(style)

        return `
            <span class="validation-${style}">${content}</span>
        `
    }

    return {
        render: module.render
    }

})();