/** @format */
/**
 * External dependencies
 */
const path = require( 'path' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const NODE_ENV = process.env.NODE_ENV || 'development';

const externals = {
	'@wordpress/api-fetch': { this: [ 'wp', 'apiFetch' ] },
	'@wordpress/blocks': { this: [ 'wp', 'blocks' ] },
	'@wordpress/components': { this: [ 'wp', 'components' ] },
	'@wordpress/compose': { this: [ 'wp', 'compose' ] },
	'@wordpress/editor': { this: [ 'wp', 'editor' ] },
	'@wordpress/element': { this: [ 'wp', 'element' ] },
	'@wordpress/i18n': { this: [ 'wp', 'i18n' ] },
};

/**
 * Config for compiling Gutenberg blocks JS.
 */
const GutenbergBlocksConfig = {
	mode: NODE_ENV,
	entry: {
		'recipe-block': './assets/js/recipe-block.js',
	},
	output: {
		path: path.resolve( __dirname, './build/' ),
		filename: '[name].js',
		libraryTarget: 'this',
	},
	externals,
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.s[c|a]ss$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins: [ require( 'autoprefixer' )( { browsers: [ '>1%' ] } ) ],
						},
					},
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin( 'build', {} ),
		new MiniCssExtractPlugin( {
			filename: '[name].css',
		} ),
	],
};

module.exports = [ GutenbergBlocksConfig ];
