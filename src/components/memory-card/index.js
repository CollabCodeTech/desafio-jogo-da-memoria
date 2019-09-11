const memoryCard = (function () {

    const module = {};

    module.create = () => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
        .memory-card {
            width: 155px;
            height: 155px;
            position: relative;
        }

        .memory-card .card {
            width: 100%;
            height: 100%;
            background-color: #f25a70;
            border-radius: 30px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            position: absolute;
        }

        .memory-card.-active .card,
        .memory-card.-score .card {
            display: none;
        }

        .memory-card.-active .card.-front,
        .memory-card.-score .card.-front {
            display: flex;
        }

        .memory-card .card.-front {
            background-color: #ffffff;
        }

        .memory-card .card.-front::before {
            content: "";
            width: 95px;
            height: 95px;
            background-color: #d4d4d4;
            border-radius: 50%;
            position: absolute;
        }

        .memory-card .card > .icon {
            width: 100px;
            height: 100px;
        }

        .memory-card .card.-front > .icon {
            position: absolute;
            transform: translateY(-12px);
        }
    `;

        $head.insertBefore($style, null);

        return ({ nameClass, src, alt }) => `
        <div class="memory-card" onclick="memoryCard.handleClick(this)">    
            <article class="card -front">
                <img
                    src="${src}"
                    alt="${alt}"
                    class="icon"
                />
            </article>
            <article class="card">
                <img
                    src="img/icon-collabcode.png"
                    alt="Mascote da CollabCode Gueio"
                    class="icon"
                />
            </article>
        </div>
    `;

    };

    module.handleClick = $component => {
        if (!$component.classList.contains('-active')) {
            module._activeMemoryCard($component);
            module._checkSure();
        }
    }

    module._activeMemoryCard = $component => {
        if (activeMemoryCard.qtd < 2) {
            $component.classList.add('-active');
        }
    }

    module._checkSure = () => {
        if (activeMemoryCard.qtd === 1) {
            const $activeMemoryCards = document.querySelectorAll('.memory-card.-active');
            const $pointBarNumber = document.querySelector('.point-bar > .number');

            if ($activeMemoryCards[0].querySelector('.-front .icon').getAttribute('src') ===
                $activeMemoryCards[1].querySelector('.-front .icon').getAttribute('src')) {

                store.score++;
                document.querySelector('.point-bar > .number').textContent = store.score;

                $activeMemoryCards.forEach($memoryCard => {
                    $memoryCard.classList.remove('-active');
                    $memoryCard.classList.add('-score');
                });

            } else {

                setTimeout(() => {
                    $activeMemoryCards.forEach(memoryCard => {
                        memoryCard.classList.remove("-active");
                    });

                    activeMemoryCard.qtd = 0;

                }, 1500);
            }
        }
    }

    return {
        create: module.create,
        handleClick: module.handleClick
    };

})();