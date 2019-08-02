const cardsWrapper = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
    .cards-wrapper {
      width: 100vw;
      height: 100vh;
      max-height: 620px;
      max-width: 375px;
      box-sizing: border-box;
      overflow-x: hidden;
      margin: 0 auto;
      

      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;

      position: relative;
      background-color: #e5e5e5;
      border: 1px #3A4042 solid;
      z-index: 0;
 
    }
      
    `;

    // .cards-wrapper > .memory-card .card {
    //   margin-bottom: 14px;
    // }

    $head.insertBefore($style, null);
  };

  module._children = () => {
    const $scoreBar = scoreBar.create();

    let $memoryCard = [];

    const $memoryCardC = memoryCard.render({
      src: "img/icons/icon-c.png",
      alt: "Ícone de um livro da linguagem c++",
      nameClass: "-turned"
    });

    const $memoryCardJS = memoryCard.render({
      src: "img/icons/icon-js.png",
      alt: "Ícone de um livro da linguagem JS",
      nameClass: "-turned"
    });

    const $memoryCardJava = memoryCard.render({
      src: "img/icons/icon-java.png",
      alt: "Ícone de um livro da linguagem Java",
      nameClass: "-turned"
    });

    const $memorycardSettings = memoryCard.render({
      src: "img/icons/icon-settings.png",
      alt: "Ícone de Settings",
      nameClass: "-turned"
    });

    const $memorycardBug = memoryCard.render({
      src: "img/icons/icon-bug.png",
      alt: "Ícone de Bug",
      nameClass: "-turned"
    });

    const $memorycardCabeca = memoryCard.render({
      src: "img/icons/icon-cabeca.png",
      alt: "Ícone de Cabeça",
      nameClass: "-turned"
    });

    const $memorycardCelular = memoryCard.render({
      src: "img/icons/icon-celular.png",
      alt: "Ícone de Celular",
      nameClass: "-turned"
    });

    const $memorycardPhp = memoryCard.render({
      src: "img/icons/icon-php.png",
      alt: "Ícone de PHP",
      nameClass: "-turned"
    });

    const $memorycardResponsivo = memoryCard.render({
      src: "img/icons/icon-responsivo.png",
      alt: "Ícone de Responsivo",
      nameClass: "-turned"
    });

    const $memorycardWoman = memoryCard.render({
      src: "img/icons/icon-woman.png",
      alt: "Ícone de Desenvolvedora",
      nameClass: "-turned"
    });

    const nivel = localStorage.getItem("dificuldade");

    if (nivel == 1) {
      for (var i = 0; i < 2; i++) {
        $memoryCard.push($memoryCardC);
        $memoryCard.push($memorycardSettings);
        $memoryCard.push($memoryCardJS);
        $memoryCard.push($memorycardBug);
      }
    } else if (nivel == 2) {
      for (var i = 0; i < 2; i++) {
        $memoryCard.push($memoryCardC);
        $memoryCard.push($memorycardSettings);
        $memoryCard.push($memoryCardJS);
        $memoryCard.push($memorycardBug);
        $memoryCard.push($memorycardCabeca);
        $memoryCard.push($memorycardCelular);
        $memoryCard.push($memorycardPhp);
        $memoryCard.push($memorycardResponsivo);
      }
    } else {
      for (var i = 0; i < 2; i++) {
        $memoryCard.push($memoryCardC);
        $memoryCard.push($memorycardSettings);
        $memoryCard.push($memoryCardJS);
        $memoryCard.push($memorycardBug);
        $memoryCard.push($memorycardCabeca);
        $memoryCard.push($memorycardCelular);
        $memoryCard.push($memorycardPhp);
        $memoryCard.push($memorycardResponsivo);
        $memoryCard.push($memorycardWoman);
        $memoryCard.push($memoryCardJava);
      }
    }

    shuffleCards.shuffle($memoryCard);

    return `
      ${$scoreBar}
      ${$memoryCard.join("")}
    `;
  };

  module.render = () => {
    module._style();

    return `
      <section class="cards-wrapper">${module._children()}</section>
    `;
  };

  return {
    render: module.render
  };
})();
