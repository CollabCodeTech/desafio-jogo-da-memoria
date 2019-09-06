const eyeCollabcode = (function () {

    const module = {};

    module._style = () => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .eye-collabcode {
                display: block;
                text-indent: -9999px;
                background-image: url("../img/eye.png");
                background-repeat: no-repeat;
                background-position: center;
                width: 24px;
                height: 15px;
                cursor: pointer;
                opacity: 0.5;
                transition: opacity 200ms linear;
                transform: translateY(-200%);
                float: right;
                margin-right: 5px;
            }

            .eye-collabcode.-active {
                opacity: 1
            }
        `;

        $head.insertBefore($style, null);
    };

    module.handleClick = function () {
        const attrFor = this.getAttribute("for")
        const $input = document.querySelector(`#${attrFor}`)

        if ($input.getAttribute('type') === "text") {
            $input.setAttribute('type', 'password')
            this.classList.remove('-active')
        } else {
            $input.setAttribute('type', 'text')
            this.classList.add('-active');
        }

    }

    module.render = ({ attrFor = "" }) => {
        module._style();

        return `
            <label class=eye-collabcode for="${attrFor}" onClick="eyeCollabcode.handleClick.bind(this)()">Mostrar Senha</label>
        `;
    };

    return {
        render: module.render,
        handleClick: module.handleClick
    };

})();