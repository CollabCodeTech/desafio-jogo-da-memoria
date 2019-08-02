const formNivel = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-nivel {
        margin-top: 7%;
        padding: 0 10px;
      }

      .form-nivel > .label-collabcode {
        display: inline-block;
        margin: 0;
        width: 90%;
        margin-bottom: 10px;

      }

      .form-nivel > .label-collabcode:first-child {
        margin-bottom: 3%;
        display: block;
      }

      .form-nivel > .button-nivel{
        margin: 5% 0 10px;
        
      }
    `;

    $head.insertBefore($style, null);
  };

  module._children = () => {
    const $labelCollabcode = labelCollabcode.render({
      content: "Escolha um nível de dificuldade:"
    });

    const $radioFacil = radioCollabcode.render({
      dificuldade: "1",
      isCheck: "checked"
    });
    const $labelFacil = labelCollabcode.render({
      content: "Fácil",
      AttrFor: "1"
    });

    const $itemListaFacil = itemLista.render({
      radio: $radioFacil,
      label: $labelFacil
    });

    const $radioIntermediario = radioCollabcode.render({ dificuldade: "2" });
    const $labelIntermediario = labelCollabcode.render({
      content: "Intermediario",
      AttrFor: "2"
    });

    const $itemListaIntermediario = itemLista.render({
      radio: $radioIntermediario,
      label: $labelIntermediario
    });

    const $radioDificil = radioCollabcode.render({ dificuldade: "3" });
    const $labelDificil = labelCollabcode.render({
      content: "Difícil",
      AttrFor: "3"
    });

    const $itemListaDificil = itemLista.render({
      radio: $radioDificil,
      label: $labelDificil
    });

    const $botaoJogar = buttonNivel.render({
      path: "game",
      content: "Jogar"
    });

    const $botaoVoltar = buttonCollabcode.render({
      path: "login",
      variacao: "-back",
      content: "Sair"
    });

    const $listaCollabcode = listaCollabcode.render({
      itens: [$itemListaFacil, $itemListaIntermediario, $itemListaDificil]
    });

    return `
      ${$labelCollabcode}
      ${$listaCollabcode}
      ${$botaoJogar}
      ${$botaoVoltar}
      
    `;
  };

  module.render = () => {
    module._style();

    return `
      <form class="form-nivel" 
      action="" 
      method="POST">${module._children()}</form>
    `;
  };

  return {
    render: module.render
  };
})();
