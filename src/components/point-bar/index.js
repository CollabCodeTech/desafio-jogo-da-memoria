const pointBar = (function() {
   const module = {}
   let points = 0;
   module._style = function() {
      const $head = document.querySelector("head")
      const $style = document.createElement("style")
      $style.textContent = `
         .point-bar {
            background-color: #3a4042;
            height: 40px;
            text-align: center;
            font-family: 'Comfortaa', sans-serife;
         }
         .point-bar > .number {
            line-height: 40px;
            text-align: inherit;
            font-size: 20px;
            color: #fff;
            font-weight: bold;
         }`;
      $head.insertBefore($style, null);
   }

   module.create = () => {
      module._style();
      return `
         <header class="point-bar">
            <span class="number">0</span>
         </header>`;
   }

   return {
      create: module.create
   }
})();