/**
 * External Dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';

export default [
	{
		attributes: {
			directions: {
				type: 'string',
				source: 'html',
				selector: 'ol',
				multiline: 'li',
				default: '',
			},
			level: {
				type: 'number',
				default: 3,
			},
			title: {
				type: 'string',
				source: 'html',
				selector: '.rmb-recipe-block__directions-header',
				default: __( 'Directions', 'rmb-recipe-block' ),
			},
		},

		save( { attributes } ) {
			const {
				directions,
				level,
				title,
			} = attributes; /* eslint-disable-line react/prop-types */

			return (
				<div className="rmb-recipe-block__directions">
					<RichText.Content
						tagName={ `h${ level }` }
						className="rmb-recipe-block__directions-header"
						value={ title }
					/>
					<RichText.Content
						tagName="ol"
						value={ directions }
						multiline="li"
					/>
				</div>
			);
		},

		migrate( attributes ) {
			return [
				{ directions: attributes.directions },
				[
					createBlock( 'core/heading', {
						content: attributes.title,
						level: attributes.level,
					} ),
				],
			];
		},
	},
];
