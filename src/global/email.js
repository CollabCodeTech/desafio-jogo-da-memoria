const validEmail = (function () {

    const module = {};

    module.valid = $element => {
        if (!module._emailTest($element)) {
            document.querySelector('.input-form.-span').innerHTML = "Email invalido";
        }
    }

    module.focusEmail = () => {
        document.querySelector('.input-form.-span').innerHTML = "";
    }

    module._emailTest = $element => {
        const email = $element.value;
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const teste = regex.test(email);
        return teste;

    }

    return {
        valid: module.valid,
        focusEmail: module.focusEmail
    }
})();