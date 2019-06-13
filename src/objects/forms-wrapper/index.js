function createFormsWrapper() {
  const $formsWrapper = document.createElement("section");
  $formsWrapper.classList.add("forms-wrapper");

  const $head = document.querySelector("head");
  const $style = document.createElement("style");
  $style.textContent = `
        .forms-wrapper {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-content: flex-start;
            width: 372px;
            height: auto;
            margin: 0 auto;
            border: 1px #dadada solid;
        }`;

  $head.insertBefore($style, null);

  return $formsWrapper;
}
