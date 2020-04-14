const alertCollabcode = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .alert-collabcode{
          display: flex;
          align-items: center;
          height: 30px;
          width: 80%;
          padding: 5px 10px;
          position: fixed;
          top: 10%;
          right:0;
          border: 1px solid #ba6f75;
          border-radius: 24px;
          transition: opacity 1500ms linear;
          font-weight:bold;
      }

      .alert-collabcode.-error{
          background-color: #ff919a;
          color:#721C24;
      }
      
      .alert-collabcode.-accept{
        background-color: green;
      }

      .alert-collabcode.-close{
        opacity: 0;
      }
      `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();
  };


  module.handleTransitionEnd = ($component) => {
    $component.remove();
  };

  module.showAlert = ({ content = "", type = "" }) => {
    const $root = document.getElementById("root");
    $root.insertAdjacentHTML(
      "beforeend",
      `
    <div
        class="alert-collabcode -${type === "accept" ? "accept" : "error"}"
        onTransitionEnd="alertCollabcode.handleTransitionEnd(this)"
    >
        <span class="content">${content}</span
    </div>`
    );
    setTimeout(() => {
      document.querySelectorAll('.alert-collabcode').forEach($alert => $alert.classList.add('-close'))
    }, 1500);
  };

  return {
    render: module.render,
    showAlert: module.showAlert,
    handleTransitionEnd:module.handleTransitionEnd
  };
})();
