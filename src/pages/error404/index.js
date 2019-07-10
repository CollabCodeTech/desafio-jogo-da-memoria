const error404 = () => {
  const $root = document.querySelector("#root");

  $root.insertAdjacentHTML("beforeend", `<h1>404 - Page not Found</h1>`);
};
