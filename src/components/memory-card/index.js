const memoryCard = (function() {
  const module = {}; //json
  module.create = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
    .memory-card {
      width: 145px;
      height: 145px;
      position: relative;
    }
    .memory-card .card {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f25a70;
      border-radius: 30px;
      box-shadow: 0 3px 6px 0 #00000029;
      margin: 5px;
      cursor: pointer;
      position: absolute;
    }
    .memory-card.-active .card,
    .memory-card.-score .card,
    .memory-card.-noscore .card{
      display: none;
    }
    .memory-card.-active .card.-front,
    .memory-card.-score .card.-front,
    .memory-card.-noscore .card.-front{
      display: flex;
    }
    .memory-card.-noscore .card.-front{
      border-top: 3px inset #ea4335;
      border-left: 3px inset #ea4335;
    }
    .memory-card.-score .card.-front{
      border-top: 3px inset #28cc2e;
      border-left: 3px inset #28cc2e;
    }
    .memory-card .card.-front {
      background-color: #fff;
    }
    .memory-card .card.-front::before {
      position: absolute;
      content: "";
      width: 95px;
      height: 95px;
      background-color: #d4d4d4;
      border-radius: 50%;
    }
    .memory-card .card > .icon {
      width: 100px;
      height: 100px;
    }
    .memory-card .card.-front > .icon {
      position: absolute;
      transform: translateY(-12px);
    }
  `;
    $head.insertBefore($style, null);

    //está retornando o JSON do createMemoryCard da pages
    return ({ src, alt }) => ` 
      <div class="memory-card" onClick="memoryCard.handleClick(this)">
        <article class = "card -front">
          <img
          class="icon"
          src="${src}" 
          alt="${alt}">
        </article>
        <article class = "card">
          <img
          class="icon"
          src="img/icon-collabcode.png" 
          alt="Mascote Gueio da CollabCode">
        </article>
      </div> 
`;
  };
  module.handleClick = $component => {
    if (!$component.classList.contains("-active")) {
      module._activeMemoryCard($component);
      module._checkCards();
    }
  };

  module._activeMemoryCard = $component => {
    // underline significa que é privado, padrao JS
    if (qtdActiveMemoryCard < 2) {
      $component.classList.add("-active");
    }
  };

  module._checkCards = () => {
    // underline significa que é privado, padrao JS
    if (qtdActiveMemoryCard == 1) {
      const $checkCards = Array.from(
        //passando para Array, se nao tiver o metodo Array.from(), é pego como NodeList.
        document.querySelectorAll(".memory-card.-active")
      );

      const check = [
        ...new Set( //objeto Set permite armazenar valores, nesse caso está mapeando e pegando o "src"
          $checkCards.map((
            card
          ) => card.querySelector(".-front .icon").getAttribute("src"))
        )
      ];
      if (check.length == 1) {
        store.score += 50;
        document.querySelector(".point-bar > .number").textContent = `Score: ${store.score}`;
        $checkCards.forEach(card => {
          //arrow function
          card.classList.add("-score");
          card.classList.remove("-active");
        });
      } else {
        console.log("Errou! Tente novamente");
        setTimeout(() => {
          if (store.score === 0) {
            store.score = 0;
          } else {
          store.score -= 10;
        }
          document.querySelector(".point-bar > .number").textContent = `Score: ${store.score}`
          const $activedCards = document.querySelectorAll(
            ".memory-card.-active"
          );
          $activedCards.forEach($memoryCard => {
            $memoryCard.classList.add("-noscore");
          });
        }, 400);
        setTimeout(() => {
          const $activeMemoryCards = document.querySelectorAll(
            ".memory-card.-active"
          );
          $activeMemoryCards.forEach($memoryCard => {
            $memoryCard.classList.remove("-noscore");
            $memoryCard.classList.remove("-active");
          });
          qtdActiveMemoryCard = 0;
        }, 700);
      }
    }
  };
  return {
    //retornando um json de um IIFE
    create: module.create, //arrow function
    handleClick: module.handleClick //arrow function
  };
})();
