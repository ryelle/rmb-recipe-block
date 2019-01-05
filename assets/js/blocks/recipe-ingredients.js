/**
 * External Dependencies
 */
import { __ } from '@wordpress/i18n';
import { BlockControls, InspectorControls, RichText } from '@wordpress/editor';
import { createBlock, registerBlockType } from '@wordpress/blocks';
import { PanelBody } from '@wordpress/components';

/**
 * Internal dependencies
 */
import HeadingToolbar from './heading-toolbar';

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
		const { ingredients, level, title } = attributes;
		const tagName = 'h' + level;

		return (
			<div className="rmb-recipe-block__ingredients">
				<BlockControls>
					<HeadingToolbar
						minLevel={ 2 }
						maxLevel={ 5 }
						selectedLevel={ level }
						onChange={ ( newLevel ) => setAttributes( { level: newLevel } ) }
					/>
				</BlockControls>
				<InspectorControls>
					<PanelBody title={ __( 'Settings', 'rmb-recipe-block' ) }>
						<p>{ __( 'Level', 'rmb-recipe-block' ) }</p>
						<HeadingToolbar
							minLevel={ 2 }
							maxLevel={ 7 }
							selectedLevel={ level }
							onChange={ ( newLevel ) => setAttributes( { level: newLevel } ) }
						/>
					</PanelBody>
				</InspectorControls>
				<RichText
					tagName={ tagName }
					className="rmb-recipe-block__ingredients-header"
					onChange={ ( nextValues ) => setAttributes( { title: nextValues } ) }
					value={ title }
					placeholder={ __( 'Ingredients…', 'rmb-recipe-block' ) }
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
				<RichText.Content tagName="ul" value={ ingredients } multiline="li" />
			</div>
		);
	},
} );
