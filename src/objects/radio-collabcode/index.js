const radioCollabcode = (function() {
  const module = {};

  module._id = 0;

  // module._style = () => {
  //   const $head = document.querySelector("head");
  //   const $style = document.createElement("style");

  //   $style.textContent = `
  //     .radio-collabcode.radio-${module._id} {

  //     }
  //   `;

  //   $head.insertBefore($style, null);
  // };

  module.handleClick = component => {
    store.dificuldade = component.value;
  };

  module.render = ({ dificuldade, isCheck = "" }) => {
    module._id++;
    // console.log(dificuldade);
    return `
      <input 
      class="radio-collabcode radio-${module._id}" 
      ${isCheck}
      type="radio" name="dificuldade" 
      id="${dificuldade}"
      onclick="radioCollabcode.handleClick(this)"
      value="${dificuldade}" > 
    `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
