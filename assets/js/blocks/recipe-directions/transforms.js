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
};
