/**
 * External Dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { InspectorControls, RichText } from '@wordpress/editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'ryelle/recipe-meta', {
	title: __( 'Information', 'rmb-recipe-block' ),
	icon: 'info',
	category: 'widgets',
	parent: [ 'ryelle/recipe' ],
	attributes: {
		difficulty: {
			type: 'string',
			source: 'html',
			selector:
				'.rmb-recipe__meta-item-difficulty .rmb-recipe__meta-item-value',
			default: '',
		},
		serving: {
			type: 'string',
			source: 'html',
			selector: '.rmb-recipe__meta-item-serving .rmb-recipe__meta-item-value',
			default: '',
		},
		showDifficulty: {
			type: 'boolean',
			default: true,
		},
		showServing: {
			type: 'boolean',
			default: true,
		},
		showTime: {
			type: 'boolean',
			default: true,
		},
		time: {
			type: 'string',
			source: 'html',
			selector: '.rmb-recipe__meta-item-time .rmb-recipe__meta-item-value',
			default: '',
		},
	},

	edit( { attributes, setAttributes } ) {
		const {
			difficulty,
			serving,
			showDifficulty,
			showServing,
			showTime,
			time,
		} = attributes;
		const showingAny = showDifficulty || showServing || showTime;

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Fields', 'rmb-recipe-block' ) }>
						<ToggleControl
							label="Show serving size"
							checked={ showServing }
							onChange={ () => setAttributes( { showServing: ! showServing } ) }
						/>
						<ToggleControl
							label="Show time"
							checked={ showTime }
							onChange={ () => setAttributes( { showTime: ! showTime } ) }
						/>
						<ToggleControl
							label="Show difficulty"
							checked={ showDifficulty }
							onChange={ () =>
								setAttributes( { showDifficulty: ! showDifficulty } )
							}
						/>
					</PanelBody>
				</InspectorControls>
				{ showingAny ? (
					<div className="rmb-recipe__meta-list">
						{ showServing && (
							<div className="rmb-recipe__meta-item rmb-recipe__meta-item-serving">
								<span className="rmb-recipe__meta-item-label">
									{ __( 'Serving Size:', 'rmb-recipe-block' ) }
								</span>
								<RichText
									placeholder={ __( 'Write serving…', 'rmb-recipe-block' ) }
									className="rmb-recipe__meta-item-value"
									onChange={ ( value ) => setAttributes( { serving: value } ) }
									value={ serving }
								/>
							</div>
						) }
						{ showTime && (
							<div className="rmb-recipe__meta-item rmb-recipe__meta-item-time">
								<span className="rmb-recipe__meta-item-label">
									{ __( 'Time:', 'rmb-recipe-block' ) }
								</span>
								<RichText
									placeholder={ __( 'Write time…', 'rmb-recipe-block' ) }
									className="rmb-recipe__meta-item-value"
									onChange={ ( value ) => setAttributes( { time: value } ) }
									value={ time }
								/>
							</div>
						) }
						{ showDifficulty && (
							<div className="rmb-recipe__meta-item rmb-recipe__meta-item-difficulty">
								<span className="rmb-recipe__meta-item-label">
									{ __( 'Difficulty:', 'rmb-recipe-block' ) }
								</span>
								<RichText
									placeholder={ __( 'Write difficulty…', 'rmb-recipe-block' ) }
									className="rmb-recipe__meta-item-value"
									onChange={ ( value ) => setAttributes( { difficulty: value } ) }
									value={ difficulty }
								/>
							</div>
						) }
					</div>
				) : (
					<div className="rmb-recipe__meta-list rmb-recipe__meta-list-empty">
						<em>
							{ __(
								'Nothing to show. Turn on a meta field, or remove this block.',
								'rmb-recipe-block'
							) }
						</em>
					</div>
				) }
			</Fragment>
		);
	},

	save( props ) {
		const {
			difficulty,
			serving,
			showDifficulty,
			showServing,
			showTime,
			time,
		} = props.attributes; /* eslint-disable-line react/prop-types */
		if ( ! showDifficulty && ! showServing && ! showTime ) {
			return null;
		}

		return (
			<div className="rmb-recipe__meta-list">
				{ showServing && (
					<div className="rmb-recipe__meta-item rmb-recipe__meta-item-serving">
						<span className="rmb-recipe__meta-item-label">
							{ __( 'Serving Size:', 'rmb-recipe-block' ) }
						</span>
						<RichText.Content
							tagName="div"
							value={ serving }
							className="rmb-recipe__meta-item-value"
						/>
					</div>
				) }
				{ showTime && (
					<div className="rmb-recipe__meta-item rmb-recipe__meta-item-time">
						<span className="rmb-recipe__meta-item-label">
							{ __( 'Time:', 'rmb-recipe-block' ) }
						</span>
						<RichText.Content
							tagName="div"
							value={ time }
							className="rmb-recipe__meta-item-value"
						/>
					</div>
				) }
				{ showDifficulty && (
					<div className="rmb-recipe__meta-item rmb-recipe__meta-item-difficulty">
						<span className="rmb-recipe__meta-item-label">
							{ __( 'Difficulty:', 'rmb-recipe-block' ) }
						</span>
						<RichText.Content
							tagName="div"
							value={ difficulty }
							className="rmb-recipe__meta-item-value"
						/>
					</div>
				) }
			</div>
		);
	},
} );
