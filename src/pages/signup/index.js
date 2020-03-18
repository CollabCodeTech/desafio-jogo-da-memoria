const signup = function() {
  const $root = document.querySelector("#root");
  const $layerSignup = layersignup.render();

  $root.insertAdjacentHTML("beforeend", $layerSignup);
};
