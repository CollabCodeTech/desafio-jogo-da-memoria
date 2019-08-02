const login = function() {
  const $root = document.querySelector("#root");

  const $loginWrapper = loginWrapper.render();

  $root.insertAdjacentHTML("beforeend", $loginWrapper);
};
