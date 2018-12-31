<?php
/**
 * Implements example command.
 */
class Block_Convert_Command {

	/**
	 * Run over a given post, convert to recipe blocks if they have a given meta field.
	 *
	 * ## OPTIONS
	 *
	 * <id>
	 * : A specific post to convert
	 *
	 * ## EXAMPLES
	 *
	 *     wp recipe convert 604
	 *
	 */
	function convert( $args, $assoc_args ) {
		list( $id ) = $args;
		$post = get_post( $id );
		if ( ! $post ) {
			WP_CLI::error( "Could not find post $id." );
		}

		$result = $this->_run_conversion( $post );

		if ( is_wp_error( $result ) ) {
			$error = $result->get_error_message();
			WP_CLI::error( $error );
		}
		
		WP_CLI::success( "Transformed post $id to the recipe block." );
	}

	/**
	 * Run over all posts, converts to recipe blocks if they have a given meta field.
	 *
	 * ## EXAMPLES
	 *
	 *     wp recipe convert_all
	 *
	 */
	function convert_all( $args, $assoc_args ) {
		$success_count = 0;
		$posts = get_posts( array(
			'posts_per_page' => -1,
			'post_type'      => 'post',
			'post_status'    => 'publish',
		) );

		foreach( $posts as $post ) {
			$result = $this->_run_conversion( $post );

			if ( is_wp_error( $result ) ) {
				$error = $result->get_error_message();
				WP_CLI::warning( $error );
				continue;
			}
			$success_count++;
		}

		WP_CLI::success( sprintf( 'Transformed %d of %d posts to the recipe block.', $success_count, count( $posts ) ) );
	}

	private function _run_conversion( $post ) {
		$id = $post->ID;
		$directions = $post->post_content;
		$ingredients = get_post_meta( $id, 'ingredients', true );
		$recipe_url = get_post_meta( $id, 'recipe_url', true );

		if ( ! $ingredients ) {
			return new WP_Error( 'not-recipe', "Post $id isn't a recipe." );
		}

		$html = $ingredients . "\n\n" . $directions;

		if ( $recipe_url ) {
			$html .= "\n<!-- wp:button -->\n";
			$html .= sprintf( '<div class="wp-block-button"><a class="wp-block-button__link" href="%s">Go to original recipe</a></div>', $recipe_url );
			$html .= "\n<!-- /wp:button -->\n";
		}

		return wp_update_post( array(
			'ID' => $id,
			'post_content' => $html,
		), true );
	}
}

WP_CLI::add_command( 'recipe', 'Block_Convert_Command' );
