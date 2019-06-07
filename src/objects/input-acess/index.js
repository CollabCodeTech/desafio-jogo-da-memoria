const inputAcess = (function() {
	const module = {};

	module.handleClick = $eye => {
		event.preventDefault();
		
		$eye.classList.toggle("-inactive");
		$eye.classList.toggle("-active");
		const inputThis = $eye.parentNode.children[0];

		inputThis.type == "password"
			? (inputThis.type = "text")
			: (inputThis.type = "password");
	};

	module.render = props => {
		const { mainClass = "", modifyClass = "", type = "text", placeholder = "", value = "", path = "", handleClick = "" } = props;

		if (type == "password") {
			return `
			<div class="inputPass" >
				<input 
					class="${mainClass} ${modifyClass}" 
					type="${type}" 
					placeholder="${placeholder}" 
					value="${value}" 
					pattern=".{8}" 
					required title="Digite, no minimo, 8 caracteres" 
				/><a 
				href="#" 
				class="showPass -inactive" 
				onclick="inputAcess.handleClick(this)"
				>
					Mostra Senha
				</a>
      </div>`;
		} else if (type == "submit") {
			return `
			<input 
				class="${mainClass} ${modifyClass}" 
				type="${type}" 
				placeholder="${placeholder}" 
				value="${value}"
			/>
			`;
		} else if (type == "email") {
			return `
			<input 
				class="${mainClass} ${modifyClass}" 
				type="${type}" 
				placeholder="${placeholder}" 
				required title="Por favor, utilize um e-mail válido"
			/>
			`;
		} else {
			return `
			<input 
				class="${mainClass} ${modifyClass}" 
				type="${type}" 
				placeholder="${placeholder}"
			/>
			`;
		}
	};

	return {
		render: module.render,
		handleClick: module.handleClick,
		checkValidity: module.checkValidity
	};
})();
