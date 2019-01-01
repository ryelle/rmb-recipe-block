/**
 * External Dependencies
 */
import { __ } from '@wordpress/i18n';
import { createBlock, registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/editor';

registerBlockType( 'ryelle/recipe-ingredients', {
	title: __( 'Recipe Ingredients', 'rmb-recipe-block' ),
	icon: 'editor-ul',
	category: 'widgets',
	parent: [ 'ryelle/recipe' ],
	attributes: {
		ingredients: {
			type: 'string',
			source: 'html',
			selector: 'ul',
			multiline: 'li',
			default: '',
		},
		title: {
			type: 'string',
			source: 'html',
			selector: 'h2,h3,h4,h5,h6',
			default: '',
		},
	},

	transforms: {
		to: [
			{
				type: 'block',
				blocks: [ 'core/list' ],
				transform: ( { ingredients } ) =>
					createBlock( 'core/list', {
						values: ingredients,
						ordered: false,
					} ),
			},
			{
				type: 'block',
				blocks: [ 'ryelle/recipe-directions' ],
				transform: ( { ingredients, title } ) =>
					createBlock( 'ryelle/recipe-directions', {
						directions: ingredients,
						title,
					} ),
			},
		],
	},

	edit( { attributes, setAttributes } ) {
		const { ingredients } = attributes;
		const title = attributes.title || __( 'Ingredients', 'rmb-recipe-block' );

		return (
			<div className="rmb-recipe-block__ingredients">
				<RichText
					tagName="h3"
					className="rmb-recipe-block__ingredients-header"
					onChange={ ( nextValues ) => setAttributes( { title: nextValues } ) }
					value={ title }
				/>
				<RichText
					multiline="li"
					tagName="ul"
					onChange={ ( nextValues ) => setAttributes( { ingredients: nextValues } ) }
					value={ ingredients }
					placeholder={ __( 'Add your ingredients…', 'rmb-recipe-block' ) }
				/>
			</div>
		);
	},

	save( { attributes } ) {
		const { ingredients } = attributes; /* eslint-disable-line react/prop-types */
		const title = attributes.title || __( 'Ingredients', 'rmb-recipe-block' );

		return (
			<div className="rmb-recipe-block__ingredients">
				<RichText.Content
					tagName="h3"
					className="rmb-recipe-block__ingredients-header"
					value={ title }
				/>
				<RichText.Content tagName="ul" value={ ingredients } multiline="li" />
			</div>
		);
	},
} );
