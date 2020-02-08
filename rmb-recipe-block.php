<?php
/**
 * Plugin Name: Recipe Block
 * Plugin URI: https://github.com/ryelle/rmb-recipe-block
 * Description: A block for displaying recipe content on your site.
 * Version: 1.1.0
 * Author: Kelly Dwan & Mel Choyce
 * Author URI: https://ryelle.codes
 * Text Domain: rmb-recipe-block
 * Domain Path: /languages
 *
 * @package rmb-recipe-block
 */

defined( 'ABSPATH' ) || die();

define( 'RMB_RECIPE_VERSION', '1.1.0' );
// Our dev mode depends on SCRIPT_DEBUG, but you can also override this
// by setting `RMB_RECIPE_DEV_MODE` in wp-config.php.
if ( ! defined( 'RMB_RECIPE_DEV_MODE' ) ) {
	define( 'RMB_RECIPE_DEV_MODE', defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG );
}

/**
 * Load up the assets if Gutenberg exists
 */
function rmb_recipe_initialize() {
	$files_exist = file_exists( plugin_dir_path( __FILE__ ) . '/build/recipe-block.js' );
	if ( $files_exist && function_exists( 'register_block_type' ) ) {
		add_action( 'init', 'rmb_recipe_register_block' );
		add_action( 'init', 'rmb_recipe_register_scripts' );
	}
}
add_action( 'plugins_loaded', 'rmb_recipe_initialize' );

/**
 * Register the recipe block and its scripts.
 */
function rmb_recipe_register_block() {
	register_block_type(
		'ryelle/recipe',
		array(
			'editor_script' => 'rmb-recipe-block-editor',
			'style'         => 'rmb-recipe-block',
		)
	);
}

/**
 * Register extra scripts needed.
 */
function rmb_recipe_register_scripts() {
	$path        = plugin_dir_path( __FILE__ ) . '/build/recipe-block.js';
	$deps_path   = plugin_dir_path( __FILE__ ) . '/build/recipe-block.asset.php';
	$script_info = file_exists( $deps_path )
		? require $deps_path
		: array(
			'dependencies' => array(),
			'version'      => filemtime( $path ),
		);

	wp_register_script(
		'rmb-recipe-block-editor',
		plugins_url( 'build/recipe-block.js', __FILE__ ),
		$script_info['dependencies'],
		$script_info['version']
	);

	wp_register_style(
		'rmb-recipe-block',
		plugins_url( 'build/recipe-block.css', __FILE__ ),
		array(),
		rmb_recipe_get_file_version( '/build/recipe-block.css' )
	);
}

/**
 * Get the file modified time as a cache buster if we're in dev mode.
 *
 * @param string $file Local path to the file.
 * @return string The cache buster value to use for the given file.
 */
function rmb_recipe_get_file_version( $file ) {
	if ( RMB_RECIPE_DEV_MODE ) {
		return filemtime( plugin_dir_path( __FILE__ ) . $file );
	}
	return RMB_RECIPE_VERSION;
}
