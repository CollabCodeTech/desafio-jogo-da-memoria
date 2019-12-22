function createCardsWrapper(){
  const $cardsWrapper = document.createElement("section");
  $cardsWrapper.classList.add("cards-wrapper");

  const $head = document.querySelector("head");
  const $style = document.createElement("style");
  $style.textContent = `
  .cards-wrapper{
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  
  .cards-wrapper > div{
    margin-top: 15px;
  }
  `;
  
  $head.insertBefore($style, null);

  $cardsWrapper.addEventListener("click", () => qtdActive = $cardsWrapper.querySelectorAll(".memory-card.-active").length);
  
  return $cardsWrapper;
}