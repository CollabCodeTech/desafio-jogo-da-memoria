const modalWin = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .modal-container{
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,.5);
        position: fixed;
        top: 0px;
        left: 0px;
        z-index: 2000;
        display: none;
        justify-content: center;
        align-items: center;

      }
      .modal-container.-show{
        display: flex;
      }

      .modal{
        background: #3a4042;
        width: 60%;
        min-width: 270px;
        padding: 40px;
        border: 10px solid #f25a70;
        box-shadow: 0 0 0 10px #3a4042;
        position: relative;
        display: block;
        text-align: center;
      }

      @keyframes modal {
        from {
          opacity: 0;
          transform: translate3d(0, -60px, 0);
        }
        to {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      }

      .-show .modal{
        animation: modal .3s;
      }

      .close {
        position: absolute;
        font-size: 1.2em;
        top: -30px;
        right: -30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 4px solid #3a4042;
        background: #f25a70;
        color: #3a4042;
        cursor: pointer;
        box-shadow: 0 4px 4px 0 rgba(0,0,0,.3);
      }

      .subtitle{
        font-size: 30px;
        text-align: center;
        text-transform: uppercase;
        color: white;
      }


      
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.showModal = () => {
    const modal = document.getElementById("modal");
    if (store.score === 7) {
      console.log("chegou", store.score);
      modal.classList.add("-show");
    }

    if (modal) {
      modal.addEventListener("click", (event) => {
        if (event.target.id == "modal" || event.target.className == "close") {
          modal.classList.remove("-show");
        }
      });
    }
  };

  module.createModal = ({ $buttonRefresh, content }) => {
    module._style();

    return `
      <div id="modal" class="modal-container">
        <div class="modal">
          <button class="close">x</button>
          <h3 class="subtitle"> ${content || ""} </h3>
          ${$buttonRefresh}
        </div>
      </div>
    `;
  };

  return {
    render: module.createModal,
    showModal: module.showModal,
  };
})();
