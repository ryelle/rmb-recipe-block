/**
 * External Dependencies
 */
import { __ } from '@wordpress/i18n';
import { createBlock, registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/editor';

registerBlockType( 'ryelle/recipe-directions', {
	title: __( 'Recipe Directions', 'rmb-recipe-block' ),
	icon: 'editor-ol',
	category: 'widgets',
	parent: [ 'ryelle/recipe' ],
	attributes: {
		directions: {
			type: 'string',
			source: 'html',
			selector: 'ol',
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
				transform: ( { directions } ) =>
					createBlock( 'core/list', {
						values: directions,
						ordered: true,
					} ),
			},
			{
				type: 'block',
				blocks: [ 'ryelle/recipe-ingredients' ],
				transform: ( { directions, title } ) =>
					createBlock( 'ryelle/recipe-ingredients', {
						ingredients: directions,
						title,
					} ),
			},
		],
	},

	edit( { attributes, setAttributes } ) {
		const { directions } = attributes;
		const title = attributes.title || __( 'Directions', 'rmb-recipe-block' );

		return (
			<div className="rmb-recipe-block__directions">
				<RichText
					tagName="h3"
					className="rmb-recipe-block__directions-header"
					onChange={ ( nextValues ) => setAttributes( { title: nextValues } ) }
					value={ title }
				/>
				<RichText
					multiline="li"
					tagName="ol"
					onChange={ ( nextValues ) => setAttributes( { directions: nextValues } ) }
					value={ directions }
					placeholder={ __( 'Write your directions…', 'rmb-recipe-block' ) }
				/>
			</div>
		);
	},

	save( { attributes } ) {
		const { directions } = attributes; /* eslint-disable-line react/prop-types */
		const title = attributes.title || __( 'Directions', 'rmb-recipe-block' );

		return (
			<div className="rmb-recipe-block__directions">
				<RichText.Content
					tagName="h3"
					className="rmb-recipe-block__directions-header"
					value={ title }
				/>
				<RichText.Content tagName="ol" value={ directions } multiline="li" />
			</div>
		);
	},
} );
