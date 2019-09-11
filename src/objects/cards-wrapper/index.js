const createCardsWrapper = (function () {
    
    const module = {};

    module._style = () => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .cards-wrapper {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                padding: 10px 0;
                width: 100vw;
            }
            
            .cards-wrapper > .memory-card {
                margin-top: 10px;
            }
        `;

        $head.insertBefore($style, null);
    }

    module.create = () => {
        module._style();

        const $cardsWrapper = document.createElement('section');
        $cardsWrapper.classList.add('cards-wrapper');

        $cardsWrapper.addEventListener('click', () => {
            activeMemoryCard.qtd = $cardsWrapper.querySelectorAll(".memory-card.-active").length;
    });

    return $cardsWrapper;
};

    return {
        create: module.create,
    }

})();





// function createCardsWrapper() {

//     const $cardsWrapper = document.createElement('section');
//     $cardsWrapper.classList.add('cards-wrapper');

//     const $head = document.querySelector('head');
//     const $style = document.createElement('style');

//     $style.textContent = `
//         .cards-wrapper {
//             display: flex;
//             flex-wrap: wrap;
//             justify-content: space-around;
//             padding: 10px 0;
//             width: 100vw;
//         }
        
//         .cards-wrapper > .memory-card {
//             margin-top: 10px;
//         }
//     `;

//     $head.insertBefore($style, null);

//     $cardsWrapper.addEventListener('click', () => {
//         qtdActiveMemoryCard = $cardsWrapper.querySelectorAll(".memory-card.-active").length;
//     })

//     return $cardsWrapper;
// }