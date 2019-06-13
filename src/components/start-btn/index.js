const startBtn = (function() {
   const module = {}

   module._style = function() {
      const $head = document.querySelector("head")
      const $style = document.createElement("style")
      $style.textContent = `
         .start-btn {
            position: absolute;
            width: 70px;
            height: 70px;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);

            line-height: 70px;
            text-align: inherit;
            font-size: 20px;
            color: #fff;
            font-weight: bold;
            text-decoration: none;

            text-align: center;
            font-family: 'Comfortaa', sans-serife;

            background-color: #2ed573;
            box-shadow: 0 5px 15px 0 rgba(0,0,0, 0.4);
            border-radius: 50%;
            opacity: 0.8;

            cursor: pointer;
         }
         .start-btn:hover {
            opacity: 1;
         }
         .start-btn.-disable {
            opacity: 0;
            transform: translateX(-50%) scale(2);
            transform-origin: bottom center;
            transition: opacity 300ms linear, transform 300ms linear;
         }`;

      $head.insertBefore($style, null)
   }

   module.render = content => {
      module._style();

      return `
         <buttom class="start-btn">${content}</buttom>
      `;
   }

   return {
      render: module.render
   }
})();