/**
 * External Dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/editor';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'ryelle/recipe-meta', {
	title: __( 'Recipe Meta', 'rmb-recipe-block' ),
	icon: 'info',
	category: 'widgets',
	parent: [ 'ryelle/recipe' ],
	attributes: {
		difficulty: {
			type: 'string',
			default: '',
		},
		serving: {
			type: 'string',
			default: '',
		},
		time: {
			type: 'string',
			default: '',
		},
	},

	edit( { attributes, setAttributes } ) {
		const { difficulty, serving, time } = attributes;

		return (
			<div className="rmb-recipe__meta-list">
				<div className="rmb-recipe__meta-item">
					<span className="rmb-recipe__meta-item-label">
						{ __( 'Serving Size:', 'rmb-recipe-block' ) }
					</span>
					<RichText
						multiline={ false }
						placeholder={ __( 'Write serving…', 'rmb-recipe-block' ) }
						onChange={ ( value ) => setAttributes( { serving: value } ) }
						value={ serving }
					/>
				</div>
				<div className="rmb-recipe__meta-item">
					<span className="rmb-recipe__meta-item-label">
						{ __( 'Time:', 'rmb-recipe-block' ) }
					</span>
					<RichText
						multiline={ false }
						placeholder={ __( 'Write time…', 'rmb-recipe-block' ) }
						onChange={ ( value ) => setAttributes( { time: value } ) }
						value={ time }
					/>
				</div>
				<div className="rmb-recipe__meta-item">
					<span className="rmb-recipe__meta-item-label">
						{ __( 'Difficulty:', 'rmb-recipe-block' ) }
					</span>
					<RichText
						multiline={ false }
						placeholder={ __( 'Write difficulty…', 'rmb-recipe-block' ) }
						onChange={ ( value ) => setAttributes( { difficulty: value } ) }
						value={ difficulty }
					/>
				</div>
			</div>
		);
	},

	save( props ) {
		const {
			difficulty,
			serving,
			time,
		} = props.attributes; /* eslint-disable-line react/prop-types */
		return (
			<div className="rmb-recipe__meta-list">
				<div className="rmb-recipe__meta-item">
					<span className="rmb-recipe__meta-item-label">
						{ __( 'Serving Size:', 'rmb-recipe-block' ) }
					</span>
					<RichText.Content tagName="div" value={ serving } />
				</div>
				<div className="rmb-recipe__meta-item">
					<span className="rmb-recipe__meta-item-label">
						{ __( 'Time:', 'rmb-recipe-block' ) }
					</span>
					<RichText.Content tagName="div" value={ time } />
				</div>
				<div className="rmb-recipe__meta-item">
					<span className="rmb-recipe__meta-item-label">
						{ __( 'Difficulty:', 'rmb-recipe-block' ) }
					</span>
					<RichText.Content tagName="div" value={ difficulty } />
				</div>
			</div>
		);
	},
} );
