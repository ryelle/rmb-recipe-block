/**
 * External Dependencies
 */
import { getPhrasingContentSchema } from '@wordpress/blocks';

const listContentSchema = {
	...getPhrasingContentSchema(),
	ul: {},
	ol: { attributes: [ 'type' ] },
};

// Recursion is needed.
// Possible: ul > li > ul.
// Impossible: ul > ul.
[ 'ul', 'ol' ].forEach( ( tag ) => {
	listContentSchema[ tag ].children = {
		li: {
			children: listContentSchema,
		},
	};
} );

export default listContentSchema;
