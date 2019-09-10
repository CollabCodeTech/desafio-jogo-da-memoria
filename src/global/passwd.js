const passwd = (function () {

    const module = {};

    module.receive = () => {
        const password = document.querySelector('#password').value;
        return module._check(password);
    };

    module._check = pass => {

        if (pass.length >= 8) {
            document.querySelector('.validation-password').classList.remove('-active');
            return true;
        } else {
            document.querySelector('.validation-password').classList.add('-active');
        }
    }

    return {
        receive: module.receive
    }
})();