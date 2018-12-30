/**
 * External Dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	BlockAlignmentToolbar,
	BlockControls,
	InnerBlocks,
} from '@wordpress/editor';
import { Fragment } from '@wordpress/element';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import '../css/editor.scss';
import './blocks/recipe-meta';
import './blocks/recipe-ingredients';
import './blocks/recipe-directions';

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
		const { align } = attributes;
		const classes = [ className, 'rmb-recipe-block' ];

		const template = [
			[ 'core/image', {} ],
			[ 'core/heading', { placeholder: __( 'Recipe Title', 'rmb-recipe-block' ) } ],
			[ 'ryelle/recipe-meta' ],
			[ 'ryelle/recipe-ingredients' ],
			[ 'ryelle/recipe-directions' ],
		];
		const allowedBlocks = [
			'core/cover',
			'core/gallery',
			'core/heading',
			'core/image',
			'core/list',
			'core/paragraph',
			'core/separator',
			'core/spacer',
			'core/video',
			'ryelle/recipe-meta',
			'ryelle/recipe-ingredients',
			'ryelle/recipe-directions',
		];

		return (
			<Fragment>
				<BlockControls>
					<BlockAlignmentToolbar
						controls={ [ 'wide' ] }
						value={ align }
						onChange={ ( nextAlign ) => setAttributes( { align: nextAlign } ) }
					/>
				</BlockControls>
				<div className={ classes.join( ' ' ) }>
					<InnerBlocks
						template={ template }
						templateLock={ false }
						allowedBlocks={ allowedBlocks }
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
