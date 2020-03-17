const login = function() {
  const $root = document.querySelector("#root");
  const $layerBackground = layerLogin.render();

  $root.insertAdjacentHTML("beforeend", $layerBackground);
};
