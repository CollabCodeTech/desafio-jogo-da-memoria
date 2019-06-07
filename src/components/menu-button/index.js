//Botões inferiores das páginas de Login, Signup e Error

const menuBtn = (function() {
	const module = {};

	module._style = active => {
		const $head = document.querySelector("head");
		const $style = document.createElement("style");

		$style.textContent = `
      .menuBtn{
        height: 50px;
        margin: 5px;
        padding: 10px;
        border: 0;
        border-radius: 10%;
        color: inherit;
        text-transform: uppercase;
        font-weight: bold;
        background-color: rgb(26, 188, 156);
        box-shadow: 0 4px 0px rgb(18, 134, 111);
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        outline: none;
        cursor: pointer;
      }
      .translated-ltr>body>#root>.menu > .menuBtn.-start{
        width: 90px;
        height: 90px;
      }
      .menuBtn.-start {
        transform: scale(2) translateX(-25%);
        width: 80px;
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 2;
        margin: auto; 
      }
      .menuBtn.-back {
        width: 120px;
        height: 80px;
        font-size: 1.2em;
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 2;
        margin: auto;
        transform: translateX(-50%) translateY(150%);
        background-color: #b1b1b1;
        padding: 5px;
        box-shadow: 0 4px 0px #868686;
      }
      .menuBtn.-start.-startToRestart {
        transform: translate(-40vw, -45vh) scale(1);
        transition: transform 200ms linear;
        animation: btnhidden 100ms 1;
      }
      .menuBtn.-back.-hiddenBackButton {
        display: none
      }
      .menuBtn.-restart {
        transform: scale(1);
        position: initial;    
        background-color: rgb(255, 183, 79);
        box-shadow: 0 4px 0px rgb(191, 138, 60); 
        animation: btnshow 250ms 1;
      }

      /*@keyframes btnhidden {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }

      @keyframes btnshow {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }*/
    `;

		$head.insertAdjacentElement("beforeend", $style);
  };

	module.render = ({ content="" , className ="", handleClick=""}) => {
		module._style();

    return `<button class="menuBtn ${className}" onclick="${handleClick}"> ${content} </button>`;
	};

	return {
		render: module.render
	};
})();
