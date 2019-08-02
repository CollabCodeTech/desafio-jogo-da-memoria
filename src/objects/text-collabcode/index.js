const textCollabcode = (function() {
  const module = {};

  module._id = 0;

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .text-collabcode.text-${module._id} {
        display: block;
        font-size: .8rem;
        text-decoration: none;
        color: #000;
        
      }

      .text-collabcode:hover {
        text-decoration: underline;
      }

    `;

    $head.insertBefore($style, null);
  };

  module.render = ({ href = "login", content }) => {
    module._id++;
    module._style();
    return `
      <a class="text-collabcode text-${
        module._id
      }" href="#/${href}">${content}</a>
    `;
  };

  return {
    render: module.render
  };
})();
