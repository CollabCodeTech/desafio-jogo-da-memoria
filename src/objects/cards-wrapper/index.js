function createCardsWrapper() {
  const $head = document.querySelector("head");
  const $style = document.createElement("style");
  $style.textContent = `
    .cards-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-top: 10px;
    }
  
    .cards-wrapper > .memory-card {
      margin-bottom: 10px;
    }`;

  $head.insertBefore($style, null);

  const $cardsWrapper = document.createElement("section");
  $cardsWrapper.classList.add("cards-wrapper");

  $cardsWrapper.addEventListener("click", event => {
    checkSure();
  });

  function checkSure() {
    if (store.$MemoryCardsActive.length === 2) {
      let $icon1 = store.$MemoryCardsActive[0].querySelector(".icon.-active");
      let $icon2 = store.$MemoryCardsActive[1].querySelector(".icon.-active");
      if ($icon1.getAttribute("src") === $icon2.getAttribute("src")) {
        store.score++;
        pointBar.updateScore();
        store.$MemoryCardsActive = [];
      } else {
        setTimeout(() => {
          store.$MemoryCardsActive.forEach($memoryCard => {
            $memoryCard.classList.remove("-active");
          });
          store.$MemoryCardsActive = [];
        }, 1500);
      }
    }
  }
  return $cardsWrapper;
}
