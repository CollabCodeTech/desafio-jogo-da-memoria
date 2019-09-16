const layerStart = (function () {

    const module = {};

    // Adiciona animação para sumir o botão e a layer.
    module.handleClick = $component => {
        const $children = $component.querySelectorAll('*');

        $children.forEach($item => $item.classList.add('-disable'));

    };

    // Após a animação, dispara um evento que remove o botão e o layer-transparente
    module.handleTransitionEnd = (event, $component) => {

        if (event.target.classList.contains('transparent-layer')) {
            $component.remove();
        };

    };

    // Cria o botão e a layer
    module.render = (gameContent, backContent, pathContent) => {
        const $transparentLayer = transparentLayer.render();
        const $gameButton = gameButton.render(gameContent);
        const $backButton = backButton.render(backContent, pathContent);

        return `
            <div class="layer-start" onclick="layerStart.handleClick(this)" ontransitionend="layerStart.handleTransitionEnd(event, this)">
                ${$transparentLayer}
                ${$gameButton}
                ${$backButton}
            </div>
        `
    }

    // Retorna para o pages.js
    return {
        render: module.render,
        handleClick: module.handleClick,
        handleTransitionEnd: module.handleTransitionEnd
    }

})();