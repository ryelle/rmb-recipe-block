/**
 * External Dependencies
 */
import { __ } from '@wordpress/i18n';
import { find } from 'lodash';
import { InnerBlocks, RichText } from '@wordpress/block-editor';
import { createBlock, registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import metadata from './block.json';
const { name, ...settings } = metadata;

registerBlockType( name, {
	...settings,
	title: __( 'Directions', 'rmb-recipe-block' ),

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
				transform: ( { directions }, innerBlocks ) => {
					const heading = find(
						innerBlocks,
						{ name: 'core/heading' },
						{}
					);

					return createBlock(
						'ryelle/recipe-ingredients',
						{ ingredients: directions },
						[ heading ]
					);
				},
			},
		],
	},

	edit( { attributes, setAttributes } ) {
		const { directions } = attributes;
		return (
			<div className="rmb-recipe-block__directions">
				<InnerBlocks
					template={ [
						[
							'core/heading',
							{
								content: __( 'Directions', 'rmb-recipe-block' ),
								level: 3,
							},
						],
					] }
					templateLock="all"
				/>
				<RichText
					multiline="li"
					tagName="ol"
					onChange={ ( nextValues ) =>
						setAttributes( { directions: nextValues } )
					}
					value={ directions }
					placeholder={ __(
						'Add your directions…',
						'rmb-recipe-block'
					) }
				/>
			</div>
		);
	},

	save( { attributes } ) {
		const {
			directions,
		} = attributes; /* eslint-disable-line react/prop-types */
		return (
			<div className="rmb-recipe-block__directions">
				<InnerBlocks.Content />
				<RichText.Content
					tagName="ol"
					value={ directions }
					multiline="li"
				/>
			</div>
		);
	},

	deprecated: [
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
	],
} );
