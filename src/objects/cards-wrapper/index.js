let qtdCardsActive = 0;

function createCardsWrapper() {
  const $cardsWrapper = document.createElement("section");
  $cardsWrapper.classList.add("cards-wrapper");

  $cardsWrapper.addEventListener("click", () => {
    qtdCardsActive = $cardsWrapper.querySelectorAll(".memory-card.-active")
      .length;
  });

  const $head = document.querySelector("head");

  const $style = document.createElement("style");
  $style.textContent = `
    .cards-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 10px;
    width: 100%;
  }

    .cards-wrapper > .memory-card {
    margin-bottom: 10px;
  }
`;

  $head.insertBefore($style, null);

  return $cardsWrapper;
}
