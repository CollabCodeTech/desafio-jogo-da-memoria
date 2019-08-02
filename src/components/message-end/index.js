const messageEnd = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
     .messageEnd {
        z-index: 1;
        position: absolute;
        color: #fff;
        width: 100vw;

        height: 15%;
        background-color: rgba(0, 0, 0, .5);
        left: 50%;
        transform: translateX(-50%);
        top: 20%;
        text-align: center;
        line-height: 90px;
        border-radius: 25px;
     }
    `;

    $head.insertBefore($style, null);
  };

  module._pontuacaoTotal = () => {
    const nivel = localStorage.getItem("dificuldade");
    console.log(nivel);
    const pontosExtra = store.tempoPausado * nivel;
    console.log(pontosExtra);

    const total = store.score + pontosExtra;
    console.log(store.score);
    console.log(total);

    return total;
  };

  module.render = () => {
    module._style();
    return `
     <div class="messageEnd"> Parabéns, você fez ${module._pontuacaoTotal()} pontos!!</div>
    `;
  };

  return {
    render: module.render
  };
})();
