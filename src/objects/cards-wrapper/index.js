let qtdActiveMemoryCard = 0;

function createCardsWrapper() {
  const $cardsWrapper = document.createElement("section");
  $cardsWrapper.classList.add("cards-wrapper");

  const $head = document.querySelector("head");
  const $style = document.createElement("style");
  $style.textContent = `
    .cards-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      width: 100vw;
      margin-bottom: 10px;
    }
    
    .cards-wrapper > .memory-card > .card {
      margin-bottom: 10px;
    }
  `;

  $head.insertBefore($style, null);

  $cardsWrapper.addEventListener("click", () => {
    qtdActiveMemoryCard = $cardsWrapper.querySelectorAll(
      ".memory-card.-active:not(.-ok)"
    ).length;

    const $pointBarNumber = document.querySelector(".point-bar > .number");
    $pointBarNumber.textContent = store.score;
  });

  return $cardsWrapper;
}
