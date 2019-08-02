const labelCollabcode = (function() {
  const module = {};

  module._id = 0;

  // module._style = () => {
  //   const $head = document.querySelector("head");
  //   const $style = document.createElement("style");

  //   $style.textContent = ``;

  //   $head.insertBefore($style, null);
  // };
  module.render = ({ content, AttrFor = "" }) => {
    module._id++;
    // module._style();

    return `<label 
              class="label-collabcode label-${module._id}"
              for="${AttrFor}">
              ${content}
            </label>`;
  };

  return {
    render: module.render
  };
})();
