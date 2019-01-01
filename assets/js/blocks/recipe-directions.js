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
		level: {
			type: 'number',
			default: 3,
		},
		title: {
			type: 'string',
			source: 'html',
			selector: '.rmb-recipe-block__directions-header',
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
		const { directions, level } = attributes;
		const title = attributes.title || __( 'Directions', 'rmb-recipe-block' );

		return (
			<div className="rmb-recipe-block__directions">
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
					tagName={ `h${ level }` }
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
		const { directions, level } = attributes; /* eslint-disable-line react/prop-types */
		const title = attributes.title || __( 'Directions', 'rmb-recipe-block' );

		return (
			<div className="rmb-recipe-block__directions">
				<RichText.Content
					tagName={ `h${ level }` }
					className="rmb-recipe-block__directions-header"
					value={ title }
				/>
				<RichText.Content tagName="ol" value={ directions } multiline="li" />
			</div>
		);
	},
} );
