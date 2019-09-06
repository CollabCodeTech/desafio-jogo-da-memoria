const linkCollabcode = (function () {

    const module = {};

    module._style = () => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .link-collabcode {
                text-decoration: none;
                display: block;
                width: 100%;
                font-size: 14px;
                color: #3a4042;
                opacity: 0.7;
                text-align: right;
                padding-top: 40px;
                padding-bottom: 60px;
            }
        `;

        $head.insertBefore($style, null);
    };

    module.render = ({ href = "#", content = "" }) => {
        module._style();

        return `
            <a href="${href}" class="link-collabcode">${content}</a>
        `;

    };

    return {
        render: module.render
    }
})();