const erro404 = function() {
  const $root = document.querySelector("#root");

  const $erroWrapper = erroWrapper.render();

  $root.insertAdjacentHTML("beforeend", $erroWrapper);
};
