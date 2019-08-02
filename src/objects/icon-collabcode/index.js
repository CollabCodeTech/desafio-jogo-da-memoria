const iconCollabcode = (function() {
  const module = {};

  module._id = 0;
  module._style = icon => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
    .icon-collabcode.icon-${module._id} {
      background-image: url(img/${icon}.svg);
      background-repeat: no-repeat;
      background-position: center;
      display: block;
      position: absolute;
      text-indent: -9999px;
      width: 30px;
      height: 24px;
      
    }
    `;

    $head.insertBefore($style, null);
  };

  module.render = ({ icon }) => {
    module._id++;
    module._style(icon);
    return `
      <label 
        class="icon-collabcode icon-${icon} icon-${module._id}">
        ${icon}
      </label>
    `;
  };

  return {
    render: module.render
  };
})();
