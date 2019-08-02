const nivel = function() {
  const $root = document.querySelector("#root");

  const $nivelWrapper = nivelWrapper.render();

  $root.insertAdjacentHTML("beforeend", $nivelWrapper);
};
