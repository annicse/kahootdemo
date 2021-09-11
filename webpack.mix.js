const mix = require('laravel-mix');
require('laravel-mix-versionhash');
const localProxy = process.env.MIX_PROXY;
let productionSourceMaps = true;
const svgtofont = require('svgtofont');
const path = require('path');

mix.setPublicPath('./assets/build');

mix.webpackConfig({
	externals: {
		jquery: 'jQuery',
	},
	module: {
		rules: [
			{
				test: /.scss/,
				enforce: 'pre',
				loader: 'import-glob-loader'
			}
		]
	}
});

mix.options({
	processCssUrls: false,
});

if (localProxy) {
	mix.browserSync({
		proxy: process.env.MIX_HOMEURL,
		injectChanges: true,
		open: true,
		files: [
			'assets/build/**/*.{css,js}',
			{
				match: ['*.php'],
			},
		],
	});
}

mix.js('assets/js/app.js', 'js')
	.sourceMaps(productionSourceMaps, 'source-map');

mix.sass('assets/scss/app.scss', 'css')
	.sourceMaps(productionSourceMaps, 'source-map');

if (mix.inProduction()) {
	//mix.versionHash();
	mix.sourceMaps();

	svgtofont({
		src: path.resolve('assets/', 'icons'),
		dist: path.resolve('assets/build/fonts/', 'icons'),
		fontName: 'icon',
		startUnicode: 0x0410,
		svgicons2svgfont: {
			fontHeight: 1000,
			normalize: true,
		},
		css: {
			output: 'assets/scss/util/',
			fileName: '_icons',
			cssPath: '../fonts/icons/',
			include: '\\.(scss)$',
		},
	}).then(() => {
		console.log('Icon font generated!');
	});
}
