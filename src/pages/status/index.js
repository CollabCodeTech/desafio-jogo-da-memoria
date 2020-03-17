const page404 = function() {
  const $root = document.querySelector("#root");
  const $style = document.createElement("style");
  $style.textContent = `
    .page404 {
      font-size: 30em;
      color: white;
    }
  `;
  $root.insertBefore($style, null);

  $root.insertAdjacentHTML("beforeend", `<h1 class="page404" >404</h1>`);
};
