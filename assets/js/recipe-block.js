/**
 * External Dependencies
 */
import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';
import { Icon } from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import '../css/editor.scss';
import './blocks/recipe-meta';
import './blocks/recipe-ingredients';
import './blocks/recipe-directions';
import metadata from './block.json';

const { name, ...settings } = metadata;

const BLOCKS_TEMPLATE = [
	[ 'core/image', {} ],
	[
		'core/heading',
		{ placeholder: __( 'Recipe Title', 'rmb-recipe-block' ) },
	],
	[ 'ryelle/recipe-meta' ],
	[ 'ryelle/recipe-ingredients' ],
	[ 'ryelle/recipe-directions' ],
];

const BLOCKS_ALLOWED = [
	'core/audio',
	'core/buttons',
	'core/cover',
	'core/gallery',
	'core/heading',
	'core/image',
	'core/list',
	'core/paragraph',
	'core/separator',
	'core/spacer',
	'core/table',
	'core/video',
	'ryelle/recipe-meta',
	'ryelle/recipe-ingredients',
	'ryelle/recipe-directions',
];

const BlockSVG = (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z" />
		<path d="M0 0h24v24H0z" fill="none" />
	</svg>
);

registerBlockType( name, {
	...settings,
	title: __( 'Recipe', 'rmb-recipe-block' ),
	icon: <Icon icon={ BlockSVG } />,
	description: __(
		'A recipe block with ingredients, directions, and more.',
		'rmb-recipe-block'
	),
	keywords: [
		__( 'food', 'rmb-recipe-block' ),
		__( 'cooking', 'rmb-recipe-block' ),
		__( 'ingredients', 'rmb-recipe-block' ),
		__( 'directions', 'rmb-recipe-block' ),
	],

	edit( { className } ) {
		const classes = [ className, 'rmb-recipe-block' ];

		return (
			<div className={ classes.join( ' ' ) }>
				<InnerBlocks
					template={ BLOCKS_TEMPLATE }
					templateLock={ false }
					allowedBlocks={ BLOCKS_ALLOWED }
				/>
			</div>
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
