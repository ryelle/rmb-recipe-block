/**
 * External Dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	createBlock,
	registerBlockType,
} from '@wordpress/blocks';
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
		],
	},

	edit( { attributes, setAttributes } ) {
		const { directions } = attributes;

		return (
			<div className="rmb-recipe-block__directions">
				<h3 className="rmb-recipe-block__directions-header">
					{ __( 'Directions', 'rmb-recipe-block' ) }
				</h3>
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

	save( props ) {
		const {
			directions,
		} = props.attributes; /* eslint-disable-line react/prop-types */

		return (
			<div className="rmb-recipe-block__directions">
				<h3 className="rmb-recipe-block__directions-header">
					{ __( 'Directions', 'rmb-recipe-block' ) }
				</h3>
				<RichText.Content tagName="ol" value={ directions } multiline="li" />
			</div>
		);
	},
} );
