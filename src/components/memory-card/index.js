const memoryCard = (function () {
  const module = {};

  module.create = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
        .memory-card {
                width: 155px;
                height: 155px;
                position: relative;

        }
        .memory-card .card {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                background-color: #f25a70;
                border-radius: 30px;
                box-shadow: 0 3px 6px 0 #00000029;
                position: relative;
                cursor: pointer;
                position: absolute;
                margin-top: 10px;
        }

        .memory-card.-active .card,
        .memory-card.-score .card {
                display: none;
        }

        .memory-card.-active .card.-front,
        .memory-card.-score .card.-front {
                display: flex;
        }

        .memory-card .card.-front {
                background-color: #fff;
        }

        .memory-card .card.-front::before {
                position: absolute;
                content:'';
                width: 95px;
                height: 95px;
                background-color: #d4d4d4;
                border-radius: 50%;
        }

        .memory-card .card > .icon {
                width: 110px;
                height: 110px;
        }

        .memory-card .card.-front > .icon {
                position: absolute;
                width: 97px;
                height: 97px;
                transform: translateY(-12px);
        }`;

    $head.insertBefore($style, null);

    return ({ src, alt }) => `
        <div class="memory-card" onclick="memoryCard.handleClick(this)">
                <article class="card -front">
                <img
                        class="icon"
                        src="${src}"
                        alt="${alt}"
                </article>
                <article class="card">
                <img
                        class="icon"
                        src="img/icon-collabcode.png"
                        alt="imagem do galinho da CollabCode"
                </article>
        </div>`;
  };

  module.handleClick = $component => {
    if (!$component.classList.contains("-active")) {
      module._activeMemoryCard($component);
      module._checkCorrect();
    }
  };

  module._activeMemoryCard = $component => {
    if (qtdeMemoryCardActive < 2) {
      $component.classList.add("-active");
    }
  };

  module._checkCorrect = () => {
    if (qtdeMemoryCardActive == 1) {
      const $activeMemoryCards = document.querySelectorAll(
        ".memory-card.-active"
      );
      if (
        $activeMemoryCards[0]
          .querySelector(".-front .icon")
          .getAttribute("src") ===
        $activeMemoryCards[1].querySelector(".-front .icon").getAttribute("src")
      ) {
        store.score++;

        const $counter = document.querySelector(".point-bar > .number");
        $counter.textContent = store.score * 10;

        $activeMemoryCards.forEach($memoryCard => {
          $memoryCard.classList.remove("-active");
          $memoryCard.classList.add("-score");
        });
      } else {
        setTimeout(() => {
          $activeMemoryCards.forEach($memoryCard => {
            $memoryCard.classList.remove("-active");
          });
          qtdeMemoryCardActive = 0;
        }, 1500);
      }
    }
  };

  return {
    create: module.create,
    handleClick: module.handleClick
  };
})();