const signup = function() {
  const $root = document.querySelector("#root");

  const $signupWrapper = signupWrapper.render();

  $root.insertAdjacentHTML("beforeend", $signupWrapper);
};
