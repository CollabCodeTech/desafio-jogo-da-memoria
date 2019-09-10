const passwd = (function () {

    const module = {};

    module.receive = () => {
        const password = document.querySelector('#password').value;
        module._check(password)
    };

    module._check = pass => {

        if (pass.length < 8) {
            document.querySelector('.validation-password').classList.add('-active');
        } else {
            document.querySelector('.validation-password').classList.remove('-active');
        }
    }

    return {
        receive: module.receive
    }
})();