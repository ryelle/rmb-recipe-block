/**
 * External Dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/editor';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'ryelle/recipe-directions', {
	title: __( 'Recipe Directions', 'rmb-recipe-block' ),
	icon: 'create',
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
	},

	edit( { attributes, setAttributes } ) {
		const { directions } = attributes;

		return (
			<div className="rmb-recipe-block__directions">
				<span>{ __( 'Directions', 'rmb-recipe-block' ) }</span>
				<RichText
					multiline="li"
					tagName="ol"
					onChange={ ( nextValues ) => setAttributes( { directions: nextValues } ) }
					value={ directions }
					placeholder={ __( 'Write list…' ) }
				/>
			</div>
		);
	},

	save( props ) {
		const {
			directions,
		} = props.attributes; /* eslint-disable-line react/prop-types */

		return <RichText.Content tagName="ol" value={ directions } multiline="li" />;
	},
} );
