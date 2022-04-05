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
		const { ingredients } = attributes;
		// eslint-disable-next-line react-hooks/rules-of-hooks -- This is a component.
		const blockProps = useBlockProps( {
			className: 'rmb-recipe-block__ingredients',
		} );

		return (
			<div { ...blockProps }>
				<InnerBlocks
					template={ [
						[
							'core/heading',
							{
								content: __(
									'Ingredients',
									'rmb-recipe-block'
								),
								level: 3,
							},
						],
					] }
					templateLock="all"
				/>
				<RichText
					multiline="li"
					tagName="ul"
					onChange={ ( nextValues ) =>
						setAttributes( { ingredients: nextValues } )
					}
					value={ ingredients }
					placeholder={ __(
						'Add your ingredients…',
						'rmb-recipe-block'
					) }
				/>
			</div>
		);
	},
	save( { attributes } ) {
		const {
			ingredients,
		} = attributes; /* eslint-disable-line react/prop-types */

		return (
			<div
				{ ...useBlockProps.save( {
					className: 'rmb-recipe-block__ingredients',
				} ) }
			>
				<InnerBlocks.Content />
				<RichText.Content
					tagName="ul"
					value={ ingredients }
					multiline="li"
				/>
			</div>
		);
	},
} );
