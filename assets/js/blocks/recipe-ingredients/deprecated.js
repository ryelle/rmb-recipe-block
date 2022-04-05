/**
 * External Dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';

export default [
	{
		attributes: {
			ingredients: {
				type: 'string',
				source: 'html',
				selector: 'ul',
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
				selector: '.rmb-recipe-block__ingredients-header',
				default: __( 'Ingredients', 'rmb-recipe-block' ),
			},
		},

		save( { attributes } ) {
			const {
				ingredients,
				level,
				title,
			} = attributes; /* eslint-disable-line react/prop-types */

			return (
				<div className="rmb-recipe-block__ingredients">
					<RichText.Content
						tagName={ `h${ level }` }
						className="rmb-recipe-block__ingredients-header"
						value={ title }
					/>
					<RichText.Content
						tagName="ul"
						value={ ingredients }
						multiline="li"
					/>
				</div>
			);
		},

		migrate( attributes ) {
			return [
				{ ingredients: attributes.ingredients },
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
