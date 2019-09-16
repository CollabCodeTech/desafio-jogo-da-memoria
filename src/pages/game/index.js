const game = (function () {
    const $root = document.querySelector('#root');

    // Cria a barra de pontos com o metodo create
    const $pointBar = pointBar.create();
    const $cardsWrapper = cardsWrapper.create();
    const $layerEnd = layerEnd.render();

    // cria o layer e o botão chmando o laye Start com o metodo render.
    const $layerStart = layerStart.render("Vai", "Logout", "login");

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
    const $memoryCardBug = createMemoryCard({
        src: "img/icon-bug.png",
        alt: "Icone de Bug"
    });
    const $memoryCardCabeca = createMemoryCard({
        src: "img/icon-cabeca.png",
        alt: "Icone da cabeça"
    });
    const $memoryCardCelular = createMemoryCard({
        src: "img/icon-celular.png",
        alt: "Icone da celular"
    });
    const $memoryCardResponsivel = createMemoryCard({
        src: "img/icon-responsivo.png",
        alt: "Icone da Responsivel"
    });
    const $memoryCardSettings = createMemoryCard({
        src: "img/icon-Settings.png",
        alt: "Icone da Settings"
    });
    const $memoryCardWoman = createMemoryCard({
        src: "img/icon-Woman.png",
        alt: "Icone da Woman"
    });
    

    function rand0n() {
        return (Math.round(Math.random())-0.5);
    }

    const insertCard = [];
    insertCard[0] = $memoryCardC;
    insertCard[1] = $memoryCardJS;
    insertCard[2] = $memoryCardJava;
    insertCard[3] = $memoryCardPHP;
    insertCard[4] = $memoryCardBug;
    insertCard[5] = $memoryCardCabeca;
    insertCard[6] = $memoryCardCelular;
    insertCard[7] = $memoryCardResponsivel;
    insertCard[8] = $memoryCardSettings;
    insertCard[9] = $memoryCardWoman;
    insertCard[10] = $memoryCardC;
    insertCard[11] = $memoryCardJS;
    insertCard[12] = $memoryCardJava;
    insertCard[13] = $memoryCardPHP;
    insertCard[14] = $memoryCardBug;
    insertCard[15] = $memoryCardCabeca;
    insertCard[16] = $memoryCardCelular;
    insertCard[17] = $memoryCardResponsivel;
    insertCard[18] = $memoryCardSettings;
    insertCard[19] = $memoryCardWoman;

    insertCard.sort(rand0n);

    // const totalInsert = insertCard.length;

    // for (i=0; i<totalInsert; i++) {
    //     $cardsWrapper.insertAdjacentHTML("beforeend", insertCard[i]);
    // }

    insertCard.forEach($element => {
        $cardsWrapper.insertAdjacentHTML("beforeend", $element);
    });


    // $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
    // $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
    // $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPHP);
    // $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
    // $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
    // $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
    // $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
    // $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPHP);

    $root.insertAdjacentElement("beforeend", $cardsWrapper);
    $root.insertAdjacentHTML("afterbegin", $pointBar);
    $root.insertAdjacentHTML("beforeend", $layerStart);
    $root.insertAdjacentHTML("beforeend", $layerEnd);
    

});
