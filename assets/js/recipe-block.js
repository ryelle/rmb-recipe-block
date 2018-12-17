/**
 * External Dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import {
	BlockAlignmentToolbar,
	BlockControls,
	InnerBlocks,
	RichText,
} from '@wordpress/editor';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import '../css/recipe-block.scss';

registerBlockType( 'ryelle/recipe', {
	title: __( 'Recipe Block', 'rmb-recipe-block' ),
	icon: 'create',
	category: 'widgets',
	description: __( 'Show people how to cook!', 'rmb-recipe-block' ),
	attributes: {
		align: {
			type: 'string',
		},
	},

	getEditWrapperProps( attributes ) {
		const { align } = attributes;
		if ( -1 !== [ 'wide', 'full' ].indexOf( align ) ) {
			return { 'data-align': align };
		}
	},

	edit( { attributes, setAttributes, className } ) {
		const { align, difficulty, directions, ingredients, serving, time } = attributes;

		const classes = [ className, 'rmb-recipe-block' ];

		const template = [
			[ 'core/image', {} ],
			[ 'core/heading', { placeholder: __( 'Recipe Title', 'rmb-recipe-block' ) } ],
		];

		return (
			<Fragment>
				<BlockControls>
					<BlockAlignmentToolbar
						controls={ [ 'wide', 'full' ] }
						value={ align }
						onChange={ ( nextAlign ) => setAttributes( { align: nextAlign } ) }
					/>
				</BlockControls>
				<div className={ classes.join( ' ' ) }>
					<InnerBlocks template={ template } templateLock="insert" />
					<div className="rmb-recipe__meta-list">
						<div className="rmb-recipe__meta-item">
							<span>{ __( 'Serving Size:', 'rmb-recipe-block' ) }</span>
							<RichText
								tagname="span"
								placeholder={ __( 'Write serving…', 'rmb-recipe-block' ) }
								onChange={ ( value ) => setAttributes( { serving: value } ) }
								value={ serving }
							/>
						</div>
						<div className="rmb-recipe__meta-item">
							<span>{ __( 'Time:', 'rmb-recipe-block' ) }</span>
							<RichText
								tagname="span"
								placeholder={ __( 'Write time…', 'rmb-recipe-block' ) }
								onChange={ ( value ) => setAttributes( { time: value } ) }
								value={ time }
							/>
						</div>
						<div className="rmb-recipe__meta-item">
							<span>{ __( 'Difficulty:', 'rmb-recipe-block' ) }</span>
							<RichText
								tagname="span"
								placeholder={ __( 'Write difficulty…', 'rmb-recipe-block' ) }
								onChange={ ( value ) => setAttributes( { difficulty: value } ) }
								value={ difficulty }
							/>
						</div>
					</div>
					<span>{ __( 'Ingredients', 'rmb-recipe-block' ) }</span>
					<RichText
						multiline="li"
						tagName="ul"
						onChange={ ( nextValues ) => setAttributes( { ingredients: nextValues } ) }
						value={ ingredients }
						placeholder={ __( 'Write list…' ) }
					/>
					<span>{ __( 'Directions', 'rmb-recipe-block' ) }</span>
					<RichText
						multiline="li"
						tagName="ol"
						onChange={ ( nextValues ) => setAttributes( { directions: nextValues } ) }
						value={ directions }
						placeholder={ __( 'Write list…' ) }
					/>
				</div>
			</Fragment>
		);
	},

	save( props ) {
		const {
			align,
		} = props.attributes; /* eslint-disable-line react/prop-types */
		return (
			<div className={ align ? `align${ align }` : '' }>
				<InnerBlocks.Content />
			</div>
		);
	},
} );
