const memoryCard = (function() {
  const module = {};

  module._id = 0;

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    const nivel = localStorage.getItem("dificuldade");

    $style.textContent = `
      .memory-card.memory-card-${module._id} {
        width: ${nivel == 1 ? "125px" : "80px"} ;
        height: ${nivel == 1 ? "115px" : "85px"} ;
        position: relative;
        border-radius: 20px;
      }
      
      .memory-card .card-${module._id} {
        width: ${nivel == 1 ? "125px" : "80px"};
        height: ${nivel == 1 ? "115px" : "85px"};
        background-color: #f25a70;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
        position: relative;
        cursor: pointer;
        position: absolute;
      }
      
      .memory-card .card-${module._id}.-turned {
        background-color: #fff;
      }
    
      .memory-card.-active .card-${module._id} {
        display: none;
      }
      
      .memory-card.-active .card-${module._id}.-turned {
        display: flex;
        cursor: default;
      }
    
      .card-${module._id}.-turned::before {
        content: "";
        width: ${nivel == 1 ? "90px" : "60px"};
        height: ${nivel == 1 ? "90px" : "60px"};
        position: absolute;
        background-color: #d4d4d4;
        border-radius: 50%;
      }
      
      .card-${module._id} > .icon {
        width: ${nivel == 1 ? "80px" : "57px"};;
        position: absolute;
      }
      .card-${module._id}.-turned > .icon {
        position: absolute;
        transform: translateY(-14px);
      }
    
      .memory-card-${module._id}.-right {
        box-shadow: 0 3px 6px #2ed573;
        animation: right 300ms 1;
       
      }
    
      @keyframes right {
        0%    {transform: translateY(0)}
        25%   {transform: translateY(10%)}
        50%   {transform: translateY(-10%)}
        75%   {transform: translateY(10%)}
        100%  {transform: translateY(0)}
      }
    
      .memory-card-${module._id}.-wrong {
        box-shadow: 0 3px 6px rgb(242, 90, 112);
        animation: wrong 300ms 1;
      }
    
      @keyframes wrong {
        0%    {transform: translateX(0)}
        25%   {transform: translateX(10%)}
        50%   {transform: translateX(-10%)}
        75%   {transform: translateX(10%)}
        100%  {transform: translateX(0)}
      }
    `;

    $head.insertBefore($style, null);
  };

  module.handleClick = $component => {
    if (
      !$component.classList.contains("-active") &&
      store.cardsClicados.length < 2
    ) {
      module._activeMemoryCard($component);
      store.cardsClicados.push($component);
      store.imgCardsClicados.push(
        $component.querySelector(".-turned .icon").getAttribute("src")
      );

      module._isRight();
    }
  };

  module._activeMemoryCard = $component => {
    store.cardsClicados.length < 2 ? $component.classList.add("-active") : "";
  };

  module._isRight = () => {
    if (store.cardsClicados.length === 2) {
      let $activeMemoryCards = store.cardsClicados;
      let $imgCardsClicados = store.imgCardsClicados;

      if ($imgCardsClicados[0] === $imgCardsClicados[1]) {
        $activeMemoryCards[0].classList.add("-right");
        $activeMemoryCards[1].classList.add("-right");
        store.score += 10;
        scoreBar.score();
        store.cardsClicados = [];
        store.imgCardsClicados = [];
        console.log("pontuação: ", store.score);
      } else {
        $activeMemoryCards.forEach($memoryCard => {
          $memoryCard.classList.add("-wrong");
          setTimeout(() => {
            $memoryCard.classList.remove("-active", "-wrong");

            store.cardsClicados = [];
            store.imgCardsClicados = [];
          }, 700);
        });
      }
    }
  };

  module.render = ({ src, alt }) => {
    module._id++;
    module._style();

    return `

    <div class="memory-card memory-card-${
      module._id
    }" onClick="memoryCard.handleClick(this)">
    <article class="card -turned card-${module._id}">
      <img 
          src='${src}' 
          alt= '${alt}'
          class='icon' >
      </img> 
    </article>
    <article class="card card-${module._id}">
    <img 
        src='img/icons/icon-collabcode.png' 
        alt= 'Mascote da CollabCode'
        class='icon' ">
    </img> 
  </article>
  </div>

    `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
