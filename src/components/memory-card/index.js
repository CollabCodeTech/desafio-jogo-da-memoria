const MemoryCard = (() => {
  const module = {};

  module.create = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .memory-card{
        width: 135px;
        height: 135px;
        position: relative;
      }
      .memory-card > .card {
        width: 135px;
        height: 135px;
        background-color: #f25a70;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);    
        position:absolute;
      }

      .memory-card.-front .card,
      .memory-card.-score .card{
        display: none;
        transition: transform 100ms linear;
        transform: rotateX(360deg);
      }

      .memory-card .card.-active,
      .memory-card .card.-score {
        background-color: #fff;
        display: flex;
      }

      .memory-card .card.-active::before {
        content: "";
        width: 95px;
        height: 95px;
        background-color: #d4d4d4;
        border-radius: 50%;
        position: absolute;
      }

      .memory-card.-score .card.-active::before{
        background-color: rgba(0, 230, 64, .6);
      }

      .memory-card.-score > .card{
        box-shadow: 0 3px 6px 0 rgba(0, 230, 64, .3);
      }

      .memory-card.-error .card.-active::before{
        background-color: rgba(242, 38, 19, .9);
      }

      .memory-card.-error > .card{
        box-shadow: 0 3px 6px 0 rgba(242, 38, 19, .3);
      }

      .memory-card .card>.icon {
        width: 100px;
        height: 100px;
      }

      .memory-card .card.-active>.icon {
        position: absolute;
        transform: translateY(-12px);
      }
    `;
    $head.insertBefore($style, null);

    return ({ src, alt }) => `
      <article class="memory-card" onclick= "MemoryCard.handleClick(this)">
        <div class='card -active' >
          <img
            class="icon"
            src= "${src}"
            alt="${alt}"/>
        </div>
        <div class='card'>
          <img
            class="icon "
            src= "img/icon-collabcode.png"
            alt="Gueio mascote da CollabCode"/>
        </div>
      </article>
    `;
  };

  module.handleClick = $card => {
    if (!$card.classList.contains("-front")) {
      module._activeMemoryCard($card);
      module._checkCorrectPair();
    }
  };

  module._activeMemoryCard = $card => {
    if (store.$cardTurned < 2) {
      $card.classList.add("-front");
    }
  };

  module._checkCorrectPair = () => {
    if (store.$cardTurned === 1) {
      const $frontCards = document.querySelectorAll(".memory-card.-front");
      if (
        $frontCards[0].querySelector(".-active .icon").getAttribute("src") ===
        $frontCards[1].querySelector(".-active .icon").getAttribute("src")
      ) {
        store.score++;
        document.querySelector(".point-bar > .number").textContent = store.score;
        $frontCards.forEach($memoryCard => {
          $memoryCard.classList.add("-score");
          $memoryCard.classList.remove("-front");
        });
      } else {
        $frontCards.forEach($memoryCard => {
          $memoryCard.classList.add("-error");
        });
        setTimeout(() => {
          $frontCards.forEach($memoryCard => {
            $memoryCard.classList.remove("-front");
            $memoryCard.classList.remove("-error");
          });

          store.$cardTurned = 0;
        }, 1500);
      }
    }
  };

  return {
    create: module.create,
    handleClick: module.handleClick
  };
})();
