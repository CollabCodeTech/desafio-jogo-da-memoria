const game = (function () {
    const $root = document.querySelector('#root');

    // Cria a barra de pontos com o metodo create
    const $pointBar = pointBar.create();
    // const $cardsWrapper = createCardsWrapper();
    const $cardsWrapper = createCardsWrapper.create();

    // cria o layer e o botão chmando o laye Start com o metodo render.
    const $layerStart = layerStart.render("Vai", "Voltar", "login");

    const createMemoryCard = memoryCard.create();

    const $memoryCardC = createMemoryCard({
        src: "img/icon-c.png",
        alt: "Livro de programação C++"
    });
    const $memoryCardJS = createMemoryCard({
        src: "img/icon-js.png",
        alt: "Livro de programação JavaScript"
    });
    const $memoryCardPHP = createMemoryCard({
        src: "img/icon-php.png",
        alt: "livro de programação PHP"
    });
    const $memoryCardJava = createMemoryCard({
        src: "img/icon-java.png",
        alt: "livro de programação JAVA"
    });

    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPHP);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPHP);

    $root.insertAdjacentElement("beforeend", $cardsWrapper);
    $root.insertAdjacentHTML("afterbegin", $pointBar);
    $root.insertAdjacentHTML("beforeend", $layerStart);

});
