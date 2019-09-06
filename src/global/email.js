const email = (function () {

    const module = {};

    // Recebe o Email da input
    module.receive = () => {
        const email = document.querySelector('input[type="text"]').value;
        module._check(email);
    }

    // Checa se o email é valido
    module._check = (email) => {

        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (regex.test(email)) {
            console.log("Email valido");
        } else {
            console.log("Email Invalido")
        }
    }

    return {
        receive: module.receive
    }

})();