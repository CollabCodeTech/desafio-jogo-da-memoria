const feedbackInputs = (function () {
  const module = {};

  module._style = (active) => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
         .feedback-inputs + .label-form {
            margin-top: 30px;
         }
         .feedback-inputs {
            display: none;
            font-size: 15px;
            color: #f25a70;
            margin-top: 5px;
         }
         .feedback-inputs.-active {
            display: block;
 
         }
         `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.createMsg = (id) => {
    module._style();

    id === "email"
      ? (content = ">> Enter a valid email address! << ")
      : (content = ">> Enter a valid password! << ");

    return `
         <div class="feedback-inputs" id=${id} >${content}</div>
         `;
  };

  return {
    render: module.createMsg,
  };
})();
