/**
 * External Dependencies
 */
import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { Icon } from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import '../css/editor.scss';
import './blocks/recipe-directions';
import './blocks/recipe-ingredients';
import './blocks/recipe-meta';
import metadata from './block.json';

const { name } = metadata;

const BLOCKS_TEMPLATE = [
	[ 'core/image', {} ],
	[ 'core/heading', { placeholder: __( 'Recipe Title', 'recipe-block' ) } ],
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
	icon: <Icon icon={ BlockSVG } />,
	edit() {
		// eslint-disable-next-line react-hooks/rules-of-hooks -- This is a component.
		const blockProps = useBlockProps( { className: 'rmb-recipe-block' } );
		return (
			<div { ...blockProps }>
				<InnerBlocks
					template={ BLOCKS_TEMPLATE }
					templateLock={ false }
					allowedBlocks={ BLOCKS_ALLOWED }
				/>
			</div>
		);
	},
	save() {
		return (
			<div { ...useBlockProps.save() }>
				<InnerBlocks.Content />
			</div>
		);
	},
} );
