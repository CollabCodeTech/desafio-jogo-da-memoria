const formSignup = (() => {
  const module = {};

  module._children = () => {
    const $usernameLabel = labelCollabcode.render("Username");
    const $usernameInput = inputCollabcode.render({
      id: "username",
      placeholder: "Name-example",
    });

    const $emailLabel = labelCollabcode.render("E-mail");
    const $emailInput = inputCollabcode.render({
      id: "email",
      placeholder: "example@email.com",
    });

    const $passwordLabel = labelCollabcode.render("Password");
    const $passwordInput = inputCollabcode.render({
      id: "password",
      placeholder: "*********",
      type: "password",
    });

    const $confirmPasswordLabel = labelCollabcode.render("Confirm password");
    const $confirmPasswordInput = inputCollabcode.render({
      id: "confirmPassword",
      placeholder: "*********",
      type: "password",
    });
    const $btnCollabcode = btnCollabcode.render({
      content: "Sign up",
      path: "login",
    });

    return `
    ${$usernameLabel}
    ${$usernameInput}

    ${$emailLabel}
    ${$emailInput}

    ${$passwordLabel}
    ${$passwordInput}

    ${$confirmPasswordLabel}
    ${$confirmPasswordInput}

    ${$btnCollabcode}
    `;
  };

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
    .form-signup{
      padding: 0 35px 30px;
    }
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();
    return `
    <form 
      class="form-signup" 
      method="POST" 
      action=""
      onSubmit= "formSignup.submit(event)"
    >
    ${module._children()}
    </form>`;
  };

  module._validateEmail = () => {
    const $email = document.getElementById("email");
    const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if ($email.value.length === 0 || !emailRegExp.test($email.value)) {
      alertCollabcode.showAlert({
        content: "Please enter a valid email",
        type: "error",
      });
      return false;
    }
    return true;
  };

  module._validatePassword = () => {
    const $password = document.getElementById("password");
    const $confirmPassword = document.getElementById("confirmPassword");

    if ($password.value !== $confirmPassword.value) {
      alertCollabcode.showAlert({
        content: "Password are not matching",
        type: "error",
      });
      return false;
    } else if (
      $password.value.length < 8 &&
      $confirmPassword.value.length < 8
    ) {
      alertCollabcode.showAlert({
        content: "Password must be longer than 8 digits",
        type: "error",
      });
      return false;
    }
    return true;
  };

  module._validateUsername = () => {
    const $username = document.getElementById("username");

    if ($username.value.length === 0) {
      alertCollabcode.showAlert({
        content: "Please enter a valid username",
        type: "error",
      });
      return false;
    }
    return true;
  };
  module.submit = (event) => {
    event.preventDefault();

    if (
      module._validateUsername() &&
      module._validateEmail() &&
      module._validatePassword()
    ) {
      window.location.hash = '/login'
    }
  };

  return {
    render: module.render,
    submit: module.submit,
  };
})();
