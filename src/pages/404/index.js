const err404 = (function(){
  const $root = document.querySelector("#root");

  const $h1 = document.createElement("h1");
  const $h2 = document.createElement("h2");

  $h1.textContent = `Error 404: `;
  $h2.textContent = `The requested URL was not found`

  $root.insertAdjacentElement("beforeend", $h1);
  $root.insertAdjacentElement("beforeend", $h2);
});