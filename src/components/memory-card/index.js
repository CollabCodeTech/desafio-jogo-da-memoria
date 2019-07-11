const memoryCard = (function() {
  const module = {};

  module.create = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `

    .memory-card { 
      width: 150px;
      height: 150px;
      padding: 5px;
      position: relative;
    }
    
    .card {
      width: 100%;
      height: 100%;      
      background-color: #f25a70;
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      float: left;
      cursor: pointer;
      position: absolute;
      transition: all 700ms;
    }
    
    .memory-card.-active .card,
    .memory-card.-score .card {
      display: none;
    }

    .memory-card.-active .card.-front,
    .memory-card.-score .card.-front {
      display: flex;
      background-color: #fff;
      transform: rotateY(180deg);
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
      transform: rotateY(180deg);
    }

    .memory-card .card.-front  .icon {
      position: absolute;
    }
`;

    $head.insertBefore($style, null);

    return ({ src, alt, data }) => `
    <div class="memory-card" onClick="memoryCard.handleClick(this)" data-card="${data}"> 
      <article class="card -front">  
        <img 
          src='img/${src}.png'
          alt='${alt}' 
          class='icon'
        />
      </article>
      <article class="card">
        <img class="icon gueio-card"
          src='img/icon-collabcode.png'
          alt='Gueio mascote da CollabCode' 
        />  
      </article>  
    </div>
  `;
  };

  module.activeMemoryCard = $component => {
    if (qtdCardsActive < 2) {
      $component.classList.add("-active");
    }
  };

  module.handleClick = $component => {
    if (!$component.classList.contains("-active")) {
      module.activeMemoryCard($component);
      module.checkCard();
    }
  };

  module.checkCard = () => {
    if (qtdCardsActive === 1) {
      const $activeMemoryCards = document.querySelectorAll(
        ".memory-card.-active"
      );
      const firstCard = $activeMemoryCards[0];
      const secondCard = $activeMemoryCards[1];

      if (firstCard.dataset.card === secondCard.dataset.card) {
        store.score += 10;
        addScoreClass($activeMemoryCards);
        document.querySelector(".point-bar > .number").textContent =
          store.score;
      } else {
        setTimeout(() => {
          resetCards($activeMemoryCards);
          qtdCardsActive = 0;
        }, 1500);
      }
    }
  };

  const addScoreClass = cards => {
    cards.forEach(card => {
      card.classList.add("-score");
      card.classList.remove("-active");
    });
  };

  const resetCards = cards => {
    cards.forEach(card => {
      card.classList.remove("-active");
    });
  };

  return {
    create: module.create,
    handleClick: module.handleClick
  };
})();
