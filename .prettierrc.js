// This just exports the default config, but fixes a bug with projects that
// don't provide this file.
// See https://github.com/WordPress/gutenberg/issues/25048
const defaultConfig = require( '@wordpress/scripts/config/.prettierrc.js' );

module.exports = defaultConfig;
