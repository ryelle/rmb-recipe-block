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
	title: __( 'Ingredients', 'rmb-recipe-block' ),

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
				transform: ( { ingredients }, innerBlocks ) => {
					const heading = find(
						innerBlocks,
						{ name: 'core/heading' },
						{}
					);

					return createBlock(
						'ryelle/recipe-directions',
						{ directions: ingredients },
						[ heading ]
					);
				},
			},
		],
	},

	edit( { attributes, setAttributes } ) {
		const { ingredients } = attributes;

		return (
			<div className="rmb-recipe-block__ingredients">
				<InnerBlocks
					template={ [
						[
							'core/heading',
							{
								content: __(
									'Ingredients',
									'rmb-recipe-block'
								),
								level: 3,
							},
						],
					] }
					templateLock="all"
				/>
				<RichText
					multiline="li"
					tagName="ul"
					onChange={ ( nextValues ) =>
						setAttributes( { ingredients: nextValues } )
					}
					value={ ingredients }
					placeholder={ __(
						'Add your ingredients…',
						'rmb-recipe-block'
					) }
				/>
			</div>
		);
	},

	save( { attributes } ) {
		const {
			ingredients,
		} = attributes; /* eslint-disable-line react/prop-types */

		return (
			<div className="rmb-recipe-block__ingredients">
				<InnerBlocks.Content />
				<RichText.Content
					tagName="ul"
					value={ ingredients }
					multiline="li"
				/>
			</div>
		);
	},

	deprecated: [
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
	],
} );
