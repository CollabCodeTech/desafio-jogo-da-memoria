const memoryCard = (() => {
  const module = {};
  module.create = () => {
    const $head = document.querySelector("head");
    const $styles = document.createElement("style");
    $styles.textContent = `
    
    .memory-card {
      position: relative;
      width: 155px;
      height: 155px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      cursor: pointer;
      transform-style: preserve-3d;
      transition: all 0.5s ease;
      border-radius: 30px;
    }
    
    .memory-card.-active{
      transform: rotateY(180deg)
    }
    
    .memory-card .icon {
      width: 100px;
      height: 100px;
    }
    
    .memory-card > .thefront,
    .memory-card > .theback{
      position:absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 30px;
      backface-visibility: hidden;
    }
    
    .memory-card > .thefront{
      background-color: #f25a70;
    }
    
    .memory-card > .theback{
      background-color: #fff;
      transform: rotateY(180deg);
    }
    
    .memory-card > .thefront::before {
      content: "";
      height: 95px;
      width: 95px;
      background-color: rgba(0, 0, 0, 0.16);
      border-radius: 50%;
      position: absolute;
    }
    
    .memory-card > .thefront > .icon {
      position: absolute;
      transform: translateY(-12px);
    }
  `;
    $head.insertBefore($styles, null);

    return ({ src, alt, nameClass = "" }) => `
    <article 
      class="memory-card ${nameClass}"
      onclick="memoryCard.handleClick(this)">
      <div class="thefront">     
      <img 
        class='icon'
        src='img/icon-collabcode.png'
        alt='Gueio mascote da CollabCode'
      />
    </div>
    <div class="theback">
    <img 
    class='icon -active'
    src='${src}'
    alt=${alt}
    /> 
    </div>    
    </article>`;
  };

  module.handleClick = $component => {
    if (!$component.classList.contains("-active")) {
      module.activeMemoryCard($component);
      store.$MemoryCardsActive.push($component);
    }
  };

  module.activeMemoryCard = $component => {
    if (store.$MemoryCardsActive.length < 2) {
      $component.classList.add("-active");
    }
  };

  return {
    create: module.create,
    handleClick: module.handleClick
  };
})();
