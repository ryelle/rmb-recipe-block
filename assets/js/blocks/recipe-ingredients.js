/**
 * External Dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/editor';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'ryelle/recipe-ingredients', {
	title: __( 'Recipe Ingredients', 'rmb-recipe-block' ),
	icon: 'create',
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

	edit( { attributes, setAttributes } ) {
		const { ingredients } = attributes;

		return (
			<div className="rmb-recipe-block__ingredients">
				<span>{ __( 'Ingredients', 'rmb-recipe-block' ) }</span>
				<RichText
					multiline="li"
					tagName="ul"
					onChange={ ( nextValues ) => setAttributes( { ingredients: nextValues } ) }
					value={ ingredients }
					placeholder={ __( 'Write list…' ) }
				/>
			</div>
		);
	},

	save( props ) {
		const {
			ingredients,
		} = props.attributes; /* eslint-disable-line react/prop-types */

		return <RichText.Content tagName="ul" value={ ingredients } multiline="li" />;
	},
} );
