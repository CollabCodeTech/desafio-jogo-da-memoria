const backBtn = (function() {
  const module = {};

  module._style = function() {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
         .back-btn {
            position: absolute;
            width: 50px;
            height: 50px;
            bottom: 10px;
            left: 10px;

            line-height: 50px;
            text-align: inherit;
            font-size: 16px;
            color: #f25a70;
            font-weight: bold;
            text-decoration: none;

            text-align: center;
            font-family: 'Comfortaa', sans-serife;

            background-color: #fff;
            box-shadow: 0 5px 15px 0 rgba(0,0,0, 0.4);
            border-radius: 50%;
            opacity: 0.8;

            cursor: pointer;
         }
         .back-btn:hover {
            opacity: 1;
         }
         `;

    $head.insertBefore($style, null);
  };

  module.handleClick = () => {
    location.hash = `#/login`;
    location.reload(true);
  };

  module.render = content => {
    module._style();

    return `
         <buttom class="back-btn" onClick="backBtn.handleClick()">${content}</buttom>
      `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
