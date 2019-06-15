const memoryCard = (function() {
  const module = {};

  module.create = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = ` 
    .memory-card {
      transition: transform 700ms;
      transform-style: preserve-3d;
      position: relative;
      width: 155px;
      height: 155px;
      padding-top: 10px;
      -webkit-tap-highlight-color: transparent;
    }

    .memory-card.-active {
      transform: rotateY(180deg);
    }
  
    .memory-card > .card {
      width: 155px;
      height: 155px;
      background-color: #f25a70;
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      position: absolute;
      cursor: pointer;
      backface-visibility: hidden;
    }
 
    .memory-card > .card.-front {
      background-color: #fff;
      transform: rotateY(180deg);
    }
  
    .memory-card > .card.-front::before {
      content: "";
      width: 95px;
      height: 95px;
      background-color: #d4d4d4;
      border-radius: 50%;
      position: absolute;
    }
  
    .memory-card > .card > .icon {
      width: 100px;
      height: 100px;
    }

    .memory-card > .card > .icon::selection {
      opacity: 0;
      color: transparent;
      display: none;
      -webkit-tap-highlight-color: transparent;
    }
  
    .memory-card > .card.-front > .icon {
      position: absolute;
      transform: translateY(-12px);
    }
  `;

    $head.insertBefore($style, null);

    return ({ src, alt }) => `
    <div class="memory-card" onClick="memoryCard.handleClick(this)">
      <article class="card">
        <img  
          src="img/icon-collabcode.png"
          alt="Gueio: icone da collabcode"
          class="icon"
        />
      </article>
      <article class="card -front">
        <img  
          src="${src}"
          alt="${alt}"
          class="icon"
        />          
      </article>  
    </div>
  `;
  };

  module.handleClick = $component => {
    if ($component.classList.contains("-active") || qtdActiveMemoryCard >= 2)
      return;

    module._activeMemoryCard($component);
    module._verifySelection();
  };

  module._activeMemoryCard = $component => {
    $component.classList.add("-active");
  };

  module._verifySelection = () => {
    if (qtdActiveMemoryCard == 1) {
      const $activeMemoryCards = document.querySelectorAll(
        ".memory-card.-active:not(.-ok)"
      );

      if ($activeMemoryCards[0].isEqualNode($activeMemoryCards[1])) {
        $activeMemoryCards.forEach($memoryCard => {
          $memoryCard.classList.add("-ok");
        });
        store.score++;
        return;
      }

      setTimeout(() => {
        $activeMemoryCards.forEach($memoryCard => {
          $memoryCard.classList.remove("-active");
        });

        qtdActiveMemoryCard = 0;
      }, 700);
    }
  };

  return {
    create: module.create,
    handleClick: module.handleClick
  };
})();
