const aliasPlugin = require('esbuild-plugin-path-alias');
const path = require('path');

module.exports = [
	aliasPlugin({
		// add any aliases you want here.
		'@utils': path.resolve(__dirname, 'utils/'),
		'@services': path.resolve(__dirname, 'services/'),
		'@mocks': path.resolve(__dirname, '__mocks__/'),
	}),
];
