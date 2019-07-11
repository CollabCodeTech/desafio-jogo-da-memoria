const mailValidation = (function() {
  const $mail = document.querySelector('.input-form[type="email"]');
  const $testButton = document.querySelector('.test');

  function checkMail () {
    let mailValue = $mail.value;
    if(mailValue.match(/^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/) ) {
      console.log("E-mail válido!")
    }else {
      console.log("E-mail inválido");
    };
  };
  
  $testButton.addEventListener('click', checkMail);

})();