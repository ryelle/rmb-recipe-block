/**
 * External Dependencies
 */
import { find } from 'lodash';
import { createBlock } from '@wordpress/blocks';

export default {
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
};
