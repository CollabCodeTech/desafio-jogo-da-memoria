//form da página de login

const loginForm = (function() {
	const module = {};

	module._style = () => {
		const $head = document.querySelector("head");
		const $style = document.createElement("style");

		$style.textContent = `
      .loginForm{
        width: 90vw;
        height: 50vh;
        border-radius: 8px;
        box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.25);
        background-color: #ffffff;
        margin: 1vh auto;
        display: flex;
        flex-direction: column;
        padding: 10px 0;
        box-sizing: border-box;
      }
      .titleForm{
        font-family: 'Fjalla One', sans-serif;
        font-size: 3em;
        letter-spacing: -1px;
        color: #3a4042;
        padding: 10px;
      }
      .fields{
        padding: 15px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 50%;
        position: relative;
      }
      .userData{
        border: 0;
        border-bottom: 1px solid #f25a70;
        height: 30px;
      }
      .userData.-text{
        width: 100%;
      }
      .userData.-pass{
        width: 70%;
      }
      .showPass{
        display: inline-block;
        width: 30px;
        line-height: 25px;
        vertical-align: bottom;
        background-repeat: no-repeat;
        background-position: center;
        border-bottom: 1px solid #f25a70;
        text-indent: -9999px;
      }
      .showPass.-active{
        background-image: url("img/eye-show.svg");
      }
      .showPass.-inactive{
        background-image: url("img/eye-hidden.svg");
      }
      .submitBtn{
        width: 50px;
        height: 50px;
        margin: 0 10px;
        border-radius: 5px;
        border: solid 1px rgba(0, 0, 0, 0.2);
        background-color: #fffae1;
        background-image: url(img/arrowSubmit.svg);
        background-repeat: no-repeat;
        background-position: center;
        position: absolute;
        bottom: 22%;
        right: 10px;
      }
      .forgotPass,
      .separator {
        text-decoration: none;
        color: rgba(0, 0, 0, 0.5);
        font-family: Roboto;
        margin: auto;
      }
      .separator {
        text-transform: uppercase;
      }
      .separator:after,
      .separator:before{
        content: " ----------------------------- ";
        margin: auto;
      }
      .facebookLogin{
        display: flex;
        align-items: center;
        margin: auto;
        font-family: Roboto;
        color: #3897f0;
        text-decoration: none;
      }
      .facebookLogin img{
        margin: 0 10px;
      }
    `;

		$head.insertAdjacentElement("beforeend", $style);
	};

	module._children = () => {
		const $usernameInput = inputAcess.render({
			mainClass: "userData",
			modifyClass: "-text",
			type: "email",
			placeholder: "Email",
		});

		const $passwordInput = inputAcess.render({
			mainClass: "userData",
			modifyClass: "-pass",
			type: "password",
			placeholder: "Password",
		});

		const $submitBtn = inputAcess.render({
			mainClass: "submitBtn",
			type: "submit",
			path: "'game'",
		});

		const $linkForgotPass = linkForgotPass.render({
			mainClass: "forgotPass",
			href: "#",
			content: "Forgot your password?",
		});

		const $linkFacebooklogin = linkFacebooklogin.render({
			mainClass: "facebookLogin",
			href: "#",
			img: "<img src='img/facebook-icon.svg'/>",
			content: "Continue with Facebook",
		});

		return `
      <div class="fields">
        ${$usernameInput}
        ${$passwordInput}
        ${$submitBtn}
      </div>
      ${$linkForgotPass}
      <span class="separator">or</span>
      ${$linkFacebooklogin}
    `;
	};

	module.render = contentTitle => {
		module._style();

		return `
    <form class="loginForm" onsubmit="flatButton.handleClick('game')">
      <legend class="titleForm">${contentTitle}</legend>
        ${module._children()}
      </form>
    `;
	};
	return {
		render: module.render,
	};
})();
