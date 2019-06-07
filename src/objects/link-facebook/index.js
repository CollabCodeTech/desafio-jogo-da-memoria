const linkFacebooklogin = (function() {
	const module = {};

	module.render = props => {
		const { mainClass, href = "#", img, content } = props;

		return `
		<a class="${mainClass}" href="${href}">
			${img}${content}
		</a>
		`;
	};

	return {
		render: module.render
	};
})();
