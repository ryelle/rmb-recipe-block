<?php
/**
 * Plugin Name: Recipe Block
 * Plugin URI: https://github.com/ryelle/rmb-recipe-block
 * Description: Recipe block for gutenberg.
 * Version: 1.0.0
 * Author: Kelly Dwan & Mel Choyce
 * Author URI: https://ryelle.codes
 * Text Domain: rmb-recipe-block
 * Domain Path: /languages
 */

defined( 'ABSPATH' ) || die();

define( 'RMB_RECIPE_VERSION', '1.0.0' );
define( 'RMB_RECIPE_DEV_MODE', true );

if ( class_exists( 'WP_CLI' ) ) {
	require_once( 'bin/cli-command.php' );
}

/**
 * Load up the assets if Gutenberg exists
 */
function rmb_recipe_initialize() {
	$files_exist = file_exists( plugin_dir_path( __FILE__ ) . '/build/recipe-block.js' );
	if ( $files_exist && function_exists( 'register_block_type' ) ) {
		add_action( 'init', 'rmb_recipe_register_block' );
		add_action( 'init', 'rmb_recipe_gutenberg_scripts' );
		add_action( 'wp_enqueue_scripts', 'rmb_recipe_theme_style' );
	}
}
add_action( 'plugins_loaded', 'rmb_recipe_initialize' );

/**
 * Register the recipe block and its scripts.
 */
function rmb_recipe_register_block() {
	register_block_type( 'ryelle/recipe', array(
		'editor_script' => 'rmb-recipe-block-editor',
		'editor_style'  => 'rmb-recipe-block-editor',
	) );
}

/**
 * Register extra scripts needed.
 */
function rmb_recipe_gutenberg_scripts() {
	wp_register_script(
		'rmb-recipe-block-editor',
		plugins_url( 'build/recipe-block.js', __FILE__ ),
		array( 'wp-i18n', 'wp-element', 'wp-editor', 'wp-blocks' ),
		rmb_recipe_get_file_version( '/build/recipe-block.js' )
	);

	wp_register_style(
		'rmb-recipe-block-editor',
		plugins_url( 'build/recipe-block.css', __FILE__ ),
		array(),
		rmb_recipe_get_file_version( '/build/recipe-block.css' )
	);
}

/**
 * Add the (structural) stylesheet to the front end of the site.
 */
function rmb_recipe_theme_style() {
	wp_enqueue_style( 'rmb-recipe-block-editor' );
}

/**
 * Get the file modified time if we're using SCRIPT_DEBUG.
 *
 * @param string $file Local path to the file.
 */
function rmb_recipe_get_file_version( $file ) {
	if ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) {
		return filemtime( plugin_dir_path( __FILE__ ) . $file );
	}
	return RMB_RECIPE_VERSION;
}
