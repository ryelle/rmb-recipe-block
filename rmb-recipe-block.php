<?php
/**
 * Plugin Name: Recipe Block
 * Plugin URI: https://github.com/ryelle/rmb-recipe-block
 * Description: A block for displaying recipe content on your site.
 * Version: 1.1.2
 * Author: Kelly Choyce-Dwan
 * Author URI: https://ryelle.codes
 * Text Domain: rmb-recipe-block
 *
 * @package rmb-recipe-block
 */

defined( 'ABSPATH' ) || die();
define( 'RMB_RECIPE_VERSION', '1.1.2' );

/**
 * Load up the assets if the assets file exists
 */
function rmb_recipe_initialize() {
	$file_exists = file_exists( plugin_dir_path( __FILE__ ) . '/build/recipe-block.asset.php' );
	if ( $file_exists ) {
		add_action( 'init', 'rmb_recipe_register_block' );
	}
}
add_action( 'plugins_loaded', 'rmb_recipe_initialize' );

/**
 * Register the recipe block and its scripts.
 */
function rmb_recipe_register_block() {
	$path        = plugin_dir_path( __FILE__ ) . '/build/recipe-block.js';
	$deps_path   = plugin_dir_path( __FILE__ ) . '/build/recipe-block.asset.php';
	$script_info = require $deps_path;

	wp_register_script(
		'rmb-recipe-block-editor',
		plugins_url( 'build/recipe-block.js', __FILE__ ),
		$script_info['dependencies'],
		$script_info['version']
	);
	wp_set_script_translations( 'rmb-recipe-block-editor', 'rmb-recipe-block' );

	wp_register_style(
		'rmb-recipe-block',
		plugins_url( 'build/recipe-block.css', __FILE__ ),
		array(),
		$script_info['version']
	);

	register_block_type(
		'ryelle/recipe',
		array(
			'editor_script' => 'rmb-recipe-block-editor',
			'style'         => 'rmb-recipe-block',
		)
	);
}
