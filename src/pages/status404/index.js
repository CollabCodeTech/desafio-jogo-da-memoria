const page404 = function () {
  const $root = document.querySelector("#root");

  const $status = statusPage.render({
    content:
      "Ahh, que pena!😞 Não encontramos o que você estava procurando. Tente novamente mais tarde.",
    src: "img/back.png",
    alt: "Ícone para voltar a tela",
    path: "login",
  });

  $root.insertAdjacentHTML("beforeend", $status);
};
