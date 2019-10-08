const memoryCard = (function() {
  const create = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
    .memory-card {
      width: 155px;
      height: 155px;
      position: relative;
    }
    
    .memory-card .card {
      width: 100%;
      height: 100%;
      background-color: #f25a70;
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      cursor: pointer;
      position: absolute;
    }
    
    .memory-card.-active .card,
    .memory-card.-check .card {
      display: none;
    }
    
    .memory-card.-active .card.-flipped,
    .memory-card.-check .card.-flipped {
      display: flex;
    }
    
    .memory-card .card.-flipped,
    .memory-card.-check .card {
      background-color: #fff;
      box-sizing: border-box;
      padding-bottom: 7px;
      position: absolute;
    }
  
    .memory-card .card.-flipped::before {
      content: "";
      background-color: #d4d4d4;
      position: absolute;
      width: 94px;
      height: 94px;
      transform: translateY(10px);
      border-radius: 50%;
    }
    
    .memory-card .card > .icon {
      width: 100px;
      height: 100px;
    }
    
    .memory-card .card.-flipped > .icon {
      position: absolute;
    }
    `;

    $head.insertBefore($style, null);

    return ({ alt, icon }) => `
  <div class="memory-card" onClick="memoryCard.handleClick(this)">
    <article class="card -flipped">
      <img
        src="assets/icon-${icon}.png"
        alt="${alt}"
        class="icon"
      />
    </article>
    <article class="card">
      <img
        src="assets/icon-collabcode.png"
        alt="Icone do mascote da CollabCode"
        class="icon"
      />
    </article>
  </div>
    `;
  };

  const handleClick = $component => {
    if (activeMemoryCards < 2 && canFlip($component)) {
      $component.classList.add("-active");

      if (scoreCheck()) {
        setTimeout(() => {
          const $activeMemoryCards = document.querySelectorAll(
            ".memory-card.-active"
          );

          if (checkCards($activeMemoryCards)) {
            scoreBar.increaseScore();
            $activeMemoryCards.forEach($memoryCard => {
              $memoryCard.classList.add("-check");
            });
          }

          $activeMemoryCards.forEach($memoryCard => {
            $memoryCard.classList.remove("-active");
          });

          activeMemoryCards = 0;
        }, 1000);
      }
    }
  };

  const checkCards = $activeCards =>
    $activeCards[0].querySelector(".icon").getAttribute("src") ===
    $activeCards[1].querySelector(".icon").getAttribute("src");

  const canFlip = $component =>
    !$component.classList.contains("-active") &&
    !$component.classList.contains("-check");

  const scoreCheck = () => activeMemoryCards === 1;

  return {
    create,
    handleClick
  };
})();
