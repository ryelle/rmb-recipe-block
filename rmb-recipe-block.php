<?php
/**
 * Plugin Name: Recipe Block
 * Plugin URI: https://github.com/ryelle/rmb-recipe-block
 * Description: Recipe block for gutenberg.
 * Version: 1.0.0
 * Author: Kelly Dwan & Mel Choyce
 * Author URI: https://ryelle.codes
 * Text Domain:  rmb-recipe-block
 * Domain Path:  /languages
 */

defined( 'ABSPATH' ) || die();

define( 'RMB_RECIPE_VERSION', '1.1.2' );

define( 'RMB_RECIPE_DEV_MODE', true );

/**
 * Load up the assets if Gutenberg is active.
 */
function rmb_recipe_initialize() {
	if ( function_exists( 'register_block_type' ) ) {
		add_action( 'init', 'rmb_recipe_register_block' );
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
		array( 'wp-element', 'wp-components', 'wp-i18n' ),
		defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? filemtime( plugin_dir_path( __FILE__ ) . '/build/recipe-block.js' ) : RMB_RECIPE_VERSION
	);
	// wp_enqueue_script( 'rmb-recipe-block-editor' );

	wp_register_style(
		'rmb-recipe-block-editor',
		plugins_url( 'build/recipe-block.css', __FILE__ ),
		array(),
		defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? filemtime( plugin_dir_path( __FILE__ ) . '/build/recipe-block.css' ) : RMB_RECIPE_VERSION
	);
}
add_action( 'enqueue_block_editor_assets', 'rmb_recipe_gutenberg_scripts' );
