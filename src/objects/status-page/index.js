const statusPage = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .status-container { 
        display: flex;
        text-align: center;
        flex-direction: column;
        height: 100vh;
        justify-content: center;
        align-items: center;
        background-color: #eae6da;
      }

      .status-page{
        color: #393f41;
        font-size: 40px;
        margin: 0 10px;
      }

      .icon-status {
        height: 8vh;
        margin: 0 10px;
      }

      
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.goBack = () => {};

  module.handleClick = (path) => {
    module.goBack();

    location.hash = `#/${path}`;

    location.reload(true);
  };

  module.createStatus = ({ content = "", src, alt, path = "" }) => {
    module._style();
    return `
      <div class="status-container"> 
        <h1 class="status-page">
        ${content}
        </h1>
        <input type="image" class="icon-status" src="${src}" alt="${alt}" onClick="statusPage.handleClick('${path}')"/>
      </div>
      
    `;
  };

  return {
    render: module.createStatus,
    handleClick: module.handleClick,
  };
})();
