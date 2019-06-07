//cria o modelo dos cards
const memoryCard = (function() {
	const module = {};

	module._style = () => {
		const $head = document.querySelector("head");
		const $style = document.createElement("style");

		$style.textContent = `
    .memory-card {
      width: 45vw;
      height: 20vh;
      position: relative;
      -webkit-tap-highlight-color: transparent;
    }
    .memory-card .card{
      width: inherit;
      height: inherit;
      display: flex;
      background-color: #f25a70;
      border-radius: 15px;
      justify-content: center;
      align-items: center;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      position: relative;
      cursor: pointer;
      position: absolute;
      transition: transform 150ms linear;
      transform: rotateY(0deg);
      box-sizing: border-box;
    }
    .memory-card.-active .card{
      visibility: hidden;
      transform: rotateY(180deg);
    }
    .memory-card.-active.-correct{
      box-shadow: 3px 3px 10px 0 #25d366;
      border-radius: 15px;
      transform: scale(1.02);
    }
    .memory-card.-active.-incorrect{
      box-shadow: 3px 3px 10px 0 #DB4437;
      border-radius: 15px;
    }
    .memory-card.-active .card.-front{
      visibility: visible;
      transform: rotateY(180deg);
    }
    .memory-card .card.-front {
      background-color: #fff;
      }
    .memory-card .card.-front::before {
      content: "";
      width: 95px;
      height: 95px;
      background-color: #d4d4d4;
      border-radius: 50%;
      position: absolute;
    }
    .memory-card .card > .icon {
      width: 100px;
      height: 100px;
    }
    .memory-card .card.-front > .icon {
      position: absolute;
      transform: translateY(-12px) rotateY(-180deg);
    }
    @media (max-height: 480px){
      .memory-card .card > .icon {
        width: 75px;
        height: 75px;
      }
      .memory-card .card.-front::before {
        width: 70px;
        height: 70px;
      } 
    }
    @media (min-width: 768px){
      .memory-card {
        width: 40vw;
      }
      .memory-card .card > .icon {
        width: 150px;
        height: 150px;
      }
      .memory-card .card.-front::before {
        width: 145px;
        height: 145px;
      }  
    }
    `;

		$head.insertAdjacentElement("beforeend", $style);
	};

	module.create = () => {
		module._style();

		return ({ src, alt, nameClass }) => `
      <div class="memory-card" onClick="cardsWrapper.handleClick(this)">
        <article class="card ${nameClass}">
          <img src="${src}" alt="${alt}" class="icon" />
        </article>
        <article class="card">
          <img src="img/cards/icon-collabcode.png" alt="Gueio mascote CollabCode" class="icon" />
        </article>
      </div>
    `;
	};

	return {
		create: module.create
	};
})();
