/**
 * External Dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	createBlock,
	registerBlockType,
} from '@wordpress/blocks';
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
		],
	},

	edit( { attributes, setAttributes } ) {
		const { ingredients } = attributes;

		return (
			<div className="rmb-recipe-block__ingredients">
				<h3 className="rmb-recipe-block__ingredients-header">
					{ __( 'Ingredients', 'rmb-recipe-block' ) }
				</h3>
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

	save( props ) {
		const {
			ingredients,
		} = props.attributes; /* eslint-disable-line react/prop-types */

		return (
			<div className="rmb-recipe-block__ingredients">
				<h3 className="rmb-recipe-block__ingredients-header">
					{ __( 'Ingredients', 'rmb-recipe-block' ) }
				</h3>
				<RichText.Content tagName="ul" value={ ingredients } multiline="li" />
			</div>
		);
	},
} );
