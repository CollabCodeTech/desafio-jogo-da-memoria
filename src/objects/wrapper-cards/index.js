function createCardWrapper() {
  const $wrapperCards = document.createElement("section");
  $wrapperCards.classList.add("wrapper-cards");

  const $head = document.querySelector("head");

  const $style = document.createElement("style");
  $style.textContent = `
  .wrapper-cards {
    width: 350px;
    height: 90vh;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    background-color: #d4d4d4;
    justify-content: space-around;
    align-items: center;
    margin: 50px auto;
    overflow: hidden;
  }
  `;
  $head.insertBefore($style, null);
  $wrapperCards.addEventListener("click", () => {
    store.qtdCardDisable = $wrapperCards.querySelectorAll(
      ".cardBack.-disable"
    ).length;
  });

  return $wrapperCards;
}
