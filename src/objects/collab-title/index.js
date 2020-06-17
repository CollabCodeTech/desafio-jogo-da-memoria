const collabTitle = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `

      .collab-title{
        font-size: 24px;
        font-weight: bold;
        letter-spacing: 0.58px;
        color: #f25a70;
        text-transform: uppercase;   
      }
      
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.createTitle = (content) => {
    module._style();

    return `
      <h1 class="collab-title"> ${content}</h1>
    `;
  };

  return {
    render: module.createTitle,
  };
})();
