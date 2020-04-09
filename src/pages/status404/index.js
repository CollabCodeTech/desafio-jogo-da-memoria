const status404 = function() {
  const $root = document.querySelector("#root");

  $root.insertAdjacentHTML("beforeend", `<h1>Erro 404<br>Page not Found</h1>`);
};
