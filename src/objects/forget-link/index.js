const forgetLink = (function () {
   const module = {};

   module._style = () => {
      const $head = document.querySelector("head");
      const $style = document.createElement("style");
      $style.textContent = `
         .forget-link {
            display: block;
            text-decoration: none;
            color: rgba(58,64,66, 0.5);
            font-size: 14px;
            margin: 50px 0 100px;
            text-align: right;
         }
         .forget-link:hover {
            color: rgba(58,64,66, 1);               
         }
         `;
      $head.insertAdjacentElement("beforeend", $style);
   };

   module.render = ({ href, content}) => {
      module._style();
      return `
         <a class="forget-link" href=${href}>${content}<a/>
         `;
   };

   return {
      render: module.render,
   };
})();
