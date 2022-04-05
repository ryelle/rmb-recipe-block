/**
 * External Dependencies
 */
import { __ } from '@wordpress/i18n';
import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import deprecated from './deprecated';
import metadata from './block.json';
import transforms from './transforms';

const { name } = metadata;

registerBlockType( name, {
	deprecated,
	transforms,
	edit( { attributes, setAttributes } ) {
		const { directions } = attributes;
		// eslint-disable-next-line react-hooks/rules-of-hooks -- This is a component.
		const blockProps = useBlockProps( {
			className: 'rmb-recipe-block__directions',
		} );

		return (
			<div { ...blockProps }>
				<InnerBlocks
					template={ [
						[
							'core/heading',
							{
								content: __( 'Directions', 'rmb-recipe-block' ),
								level: 3,
							},
						],
					] }
					templateLock="all"
				/>
				<RichText
					multiline="li"
					tagName="ol"
					onChange={ ( nextValues ) =>
						setAttributes( { directions: nextValues } )
					}
					value={ directions }
					placeholder={ __(
						'Add your directions…',
						'rmb-recipe-block'
					) }
				/>
			</div>
		);
	},
	save( { attributes } ) {
		const {
			directions,
		} = attributes; /* eslint-disable-line react/prop-types */

		return (
			<div
				{ ...useBlockProps.save( {
					className: 'rmb-recipe-block__directions',
				} ) }
			>
				<InnerBlocks.Content />
				<RichText.Content
					tagName="ol"
					value={ directions }
					multiline="li"
				/>
			</div>
		);
	},
} );
