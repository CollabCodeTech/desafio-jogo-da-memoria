const titlePage = (function () {
   const module = {}

   module._style = function () {
      const $head = document.querySelector("head")
      const $style = document.createElement("style")
      $style.textContent = `
         .title-page {
            font-size: 24px;
            color: #f25a70;
            text-transform: uppercase;
            letter-spacing: 0.6px;
         }
         `;
      $head.insertBefore($style, null);
   }

   module.render = (content = "Title") => {
      module._style();
      return `
             <h1 class="title-page">${content}</h1>
         `;
   }

   return {
      render: module.render
   }
})();