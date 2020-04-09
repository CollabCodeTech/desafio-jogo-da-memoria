const logoGueio = (function () {
   const module = {}

   module._style = function () {
      const $head = document.querySelector("head")
      const $style = document.createElement("style")
      $style.textContent = `
         .bkglogo {
            display: inline-block;
            background-color: white;
            border: solid 40px white;
            border-radius: 50%;
         }
         .bklogo > .logo {
            width: 175px;
         }
         `;
      $head.insertBefore($style, null);
   }

   module.render = () => {
      module._style();
      return `
            <div class="bkglogo">
               <img class="logo" src="../../img/icon-collabcode.png">
            </div>
         `;
   }

   return {
      render: module.render
   }
})();