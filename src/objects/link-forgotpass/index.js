const linkForgotPass = (function() {
	const module = {};

	module.render = props => {
		const { mainClass, href, content } = props;

		return `
		<a class="${mainClass}" href="${href}">
			${content}
		</a>
		`;
	};

	return {
		render: module.render
	};
})();
