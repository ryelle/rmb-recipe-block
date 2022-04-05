/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/blocks/recipe-directions/deprecated.js":
/*!**********************************************************!*\
  !*** ./assets/js/blocks/recipe-directions/deprecated.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);


/**
 * External Dependencies
 */



/* harmony default export */ __webpack_exports__["default"] = ([{
  attributes: {
    directions: {
      type: 'string',
      source: 'html',
      selector: 'ol',
      multiline: 'li',
      default: ''
    },
    level: {
      type: 'number',
      default: 3
    },
    title: {
      type: 'string',
      source: 'html',
      selector: '.rmb-recipe-block__directions-header',
      default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Directions', 'rmb-recipe-block')
    }
  },

  save({
    attributes
  }) {
    const {
      directions,
      level,
      title
    } = attributes;
    /* eslint-disable-line react/prop-types */

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "rmb-recipe-block__directions"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: `h${level}`,
      className: "rmb-recipe-block__directions-header",
      value: title
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "ol",
      value: directions,
      multiline: "li"
    }));
  },

  migrate(attributes) {
    return [{
      directions: attributes.directions
    }, [(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.createBlock)('core/heading', {
      content: attributes.title,
      level: attributes.level
    })]];
  }

}]);

/***/ }),

/***/ "./assets/js/blocks/recipe-directions/index.js":
/*!*****************************************************!*\
  !*** ./assets/js/blocks/recipe-directions/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deprecated */ "./assets/js/blocks/recipe-directions/deprecated.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./assets/js/blocks/recipe-directions/block.json");
/* harmony import */ var _transforms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transforms */ "./assets/js/blocks/recipe-directions/transforms.js");


/**
 * External Dependencies
 */



/**
 * Internal dependencies
 */




const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_5__;
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)(name, {
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_4__["default"],
  transforms: _transforms__WEBPACK_IMPORTED_MODULE_6__["default"],

  edit({
    attributes,
    setAttributes
  }) {
    const {
      directions
    } = attributes; // eslint-disable-next-line react-hooks/rules-of-hooks -- This is a component.

    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
      className: 'rmb-recipe-block__directions'
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
      template: [['core/heading', {
        content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Directions', 'rmb-recipe-block'),
        level: 3
      }]],
      templateLock: "all"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      multiline: "li",
      tagName: "ol",
      onChange: nextValues => setAttributes({
        directions: nextValues
      }),
      value: directions,
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add your directions…', 'rmb-recipe-block')
    }));
  },

  save({
    attributes
  }) {
    const {
      directions
    } = attributes;
    /* eslint-disable-line react/prop-types */

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
      className: 'rmb-recipe-block__directions'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "ol",
      value: directions,
      multiline: "li"
    }));
  }

});

/***/ }),

/***/ "./assets/js/blocks/recipe-directions/transforms.js":
/*!**********************************************************!*\
  !*** ./assets/js/blocks/recipe-directions/transforms.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External Dependencies
 */


/* harmony default export */ __webpack_exports__["default"] = ({
  to: [{
    type: 'block',
    blocks: ['core/list'],
    transform: ({
      directions
    }) => (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.createBlock)('core/list', {
      values: directions,
      ordered: true
    })
  }, {
    type: 'block',
    blocks: ['ryelle/recipe-ingredients'],
    transform: ({
      directions
    }, innerBlocks) => {
      const heading = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(innerBlocks, {
        name: 'core/heading'
      }, {});
      return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.createBlock)('ryelle/recipe-ingredients', {
        ingredients: directions
      }, [heading]);
    }
  }]
});

/***/ }),

/***/ "./assets/js/blocks/recipe-ingredients/deprecated.js":
/*!***********************************************************!*\
  !*** ./assets/js/blocks/recipe-ingredients/deprecated.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);


/**
 * External Dependencies
 */



/* harmony default export */ __webpack_exports__["default"] = ([{
  attributes: {
    ingredients: {
      type: 'string',
      source: 'html',
      selector: 'ul',
      multiline: 'li',
      default: ''
    },
    level: {
      type: 'number',
      default: 3
    },
    title: {
      type: 'string',
      source: 'html',
      selector: '.rmb-recipe-block__ingredients-header',
      default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Ingredients', 'rmb-recipe-block')
    }
  },

  save({
    attributes
  }) {
    const {
      ingredients,
      level,
      title
    } = attributes;
    /* eslint-disable-line react/prop-types */

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "rmb-recipe-block__ingredients"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: `h${level}`,
      className: "rmb-recipe-block__ingredients-header",
      value: title
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "ul",
      value: ingredients,
      multiline: "li"
    }));
  },

  migrate(attributes) {
    return [{
      ingredients: attributes.ingredients
    }, [(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.createBlock)('core/heading', {
      content: attributes.title,
      level: attributes.level
    })]];
  }

}]);

/***/ }),

/***/ "./assets/js/blocks/recipe-ingredients/index.js":
/*!******************************************************!*\
  !*** ./assets/js/blocks/recipe-ingredients/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deprecated */ "./assets/js/blocks/recipe-ingredients/deprecated.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./assets/js/blocks/recipe-ingredients/block.json");
/* harmony import */ var _transforms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transforms */ "./assets/js/blocks/recipe-ingredients/transforms.js");


/**
 * External Dependencies
 */



/**
 * Internal dependencies
 */




const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_5__;
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)(name, {
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_4__["default"],
  transforms: _transforms__WEBPACK_IMPORTED_MODULE_6__["default"],

  edit({
    attributes,
    setAttributes
  }) {
    const {
      ingredients
    } = attributes; // eslint-disable-next-line react-hooks/rules-of-hooks -- This is a component.

    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
      className: 'rmb-recipe-block__ingredients'
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
      template: [['core/heading', {
        content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Ingredients', 'rmb-recipe-block'),
        level: 3
      }]],
      templateLock: "all"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      multiline: "li",
      tagName: "ul",
      onChange: nextValues => setAttributes({
        ingredients: nextValues
      }),
      value: ingredients,
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add your ingredients…', 'rmb-recipe-block')
    }));
  },

  save({
    attributes
  }) {
    const {
      ingredients
    } = attributes;
    /* eslint-disable-line react/prop-types */

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
      className: 'rmb-recipe-block__ingredients'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "ul",
      value: ingredients,
      multiline: "li"
    }));
  }

});

/***/ }),

/***/ "./assets/js/blocks/recipe-ingredients/transforms.js":
/*!***********************************************************!*\
  !*** ./assets/js/blocks/recipe-ingredients/transforms.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External Dependencies
 */


/* harmony default export */ __webpack_exports__["default"] = ({
  to: [{
    type: 'block',
    blocks: ['core/list'],
    transform: ({
      ingredients
    }) => (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.createBlock)('core/list', {
      values: ingredients,
      ordered: false
    })
  }, {
    type: 'block',
    blocks: ['ryelle/recipe-directions'],
    transform: ({
      ingredients
    }, innerBlocks) => {
      const heading = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(innerBlocks, {
        name: 'core/heading'
      }, {});
      return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.createBlock)('ryelle/recipe-directions', {
        directions: ingredients
      }, [heading]);
    }
  }]
});

/***/ }),

/***/ "./assets/js/blocks/recipe-meta/index.js":
/*!***********************************************!*\
  !*** ./assets/js/blocks/recipe-meta/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./assets/js/blocks/recipe-meta/block.json");


/**
 * External Dependencies
 */





/**
 * Internal dependencies
 */


const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_5__;
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.registerBlockType)(name, {
  edit({
    attributes,
    setAttributes
  }) {
    const {
      difficulty,
      serving,
      showDifficulty,
      showServing,
      showTime,
      time
    } = attributes;
    const showingAny = showDifficulty || showServing || showTime; // eslint-disable-next-line react-hooks/rules-of-hooks -- This is a component.

    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
      className: showingAny ? 'rmb-recipe__meta-list' : 'rmb-recipe__meta-list rmb-recipe__meta-list-empty'
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fields', 'rmb-recipe-block')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: "Show serving size",
      checked: showServing,
      onChange: () => setAttributes({
        showServing: !showServing
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: "Show time",
      checked: showTime,
      onChange: () => setAttributes({
        showTime: !showTime
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: "Show difficulty",
      checked: showDifficulty,
      onChange: () => setAttributes({
        showDifficulty: !showDifficulty
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, showingAny ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, showServing && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "rmb-recipe__meta-item rmb-recipe__meta-item-serving"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "rmb-recipe__meta-item-label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Serving Size:', 'rmb-recipe-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Write serving…', 'rmb-recipe-block'),
      className: "rmb-recipe__meta-item-value",
      onChange: value => setAttributes({
        serving: value
      }),
      value: serving
    })), showTime && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "rmb-recipe__meta-item rmb-recipe__meta-item-time"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "rmb-recipe__meta-item-label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Time:', 'rmb-recipe-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Write time…', 'rmb-recipe-block'),
      className: "rmb-recipe__meta-item-value",
      onChange: value => setAttributes({
        time: value
      }),
      value: time
    })), showDifficulty && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "rmb-recipe__meta-item rmb-recipe__meta-item-difficulty"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "rmb-recipe__meta-item-label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Difficulty:', 'rmb-recipe-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Write difficulty…', 'rmb-recipe-block'),
      className: "rmb-recipe__meta-item-value",
      onChange: value => setAttributes({
        difficulty: value
      }),
      value: difficulty
    }))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Nothing to show. Turn on a meta field, or remove this block.', 'rmb-recipe-block'))));
  },

  save(props) {
    const {
      difficulty,
      serving,
      showDifficulty,
      showServing,
      showTime,
      time
    } = props.attributes;
    /* eslint-disable-line react/prop-types */

    if (!showDifficulty && !showServing && !showTime) {
      return null;
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
      className: 'rmb-recipe__meta-list'
    }), showServing && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "rmb-recipe__meta-item rmb-recipe__meta-item-serving"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "rmb-recipe__meta-item-label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Serving Size:', 'rmb-recipe-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "div",
      value: serving,
      className: "rmb-recipe__meta-item-value"
    })), showTime && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "rmb-recipe__meta-item rmb-recipe__meta-item-time"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "rmb-recipe__meta-item-label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Time:', 'rmb-recipe-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "div",
      value: time,
      className: "rmb-recipe__meta-item-value"
    })), showDifficulty && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "rmb-recipe__meta-item rmb-recipe__meta-item-difficulty"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "rmb-recipe__meta-item-label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Difficulty:', 'rmb-recipe-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "div",
      value: difficulty,
      className: "rmb-recipe__meta-item-value"
    })));
  }

});

/***/ }),

/***/ "./assets/css/editor.scss":
/*!********************************!*\
  !*** ./assets/css/editor.scss ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./assets/js/block.json":
/*!******************************!*\
  !*** ./assets/js/block.json ***!
  \******************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"ryelle/recipe","title":"Recipe","category":"widgets","keywords":["food","cooking","ingredients","directions"],"description":"A recipe block with ingredients, directions, and more.","textdomain":"rmb-recipe-block","supports":{"align":["wide","full"],"spacing":{"blockGap":true,"margin":["top","bottom"],"__experimentalDefaultControls":{"blockGap":true}}},"editorScript":"recipe-block","style":"recipe-block"}');

/***/ }),

/***/ "./assets/js/blocks/recipe-directions/block.json":
/*!*******************************************************!*\
  !*** ./assets/js/blocks/recipe-directions/block.json ***!
  \*******************************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"ryelle/recipe-directions","title":"Directions","icon":"editor-ol","category":"widgets","parent":["ryelle/recipe"],"attributes":{"directions":{"type":"string","source":"html","selector":"ol","multiline":"li","default":""},"level":{"type":"number","default":3}},"editorScript":"recipe-block","style":"recipe-block"}');

/***/ }),

/***/ "./assets/js/blocks/recipe-ingredients/block.json":
/*!********************************************************!*\
  !*** ./assets/js/blocks/recipe-ingredients/block.json ***!
  \********************************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"ryelle/recipe-ingredients","title":"Ingredients","icon":"editor-ul","category":"widgets","parent":["ryelle/recipe"],"attributes":{"ingredients":{"type":"string","source":"html","selector":"ul","multiline":"li","default":""},"level":{"type":"number","default":3}},"editorScript":"recipe-block","style":"recipe-block"}');

/***/ }),

/***/ "./assets/js/blocks/recipe-meta/block.json":
/*!*************************************************!*\
  !*** ./assets/js/blocks/recipe-meta/block.json ***!
  \*************************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"ryelle/recipe-meta","title":"Information","icon":"info","category":"widgets","parent":["ryelle/recipe"],"attributes":{"difficulty":{"type":"string","source":"html","selector":".rmb-recipe__meta-item-difficulty .rmb-recipe__meta-item-value","default":""},"serving":{"type":"string","source":"html","selector":".rmb-recipe__meta-item-serving .rmb-recipe__meta-item-value","default":""},"showDifficulty":{"type":"boolean","default":true},"showServing":{"type":"boolean","default":true},"showTime":{"type":"boolean","default":true},"time":{"type":"string","source":"html","selector":".rmb-recipe__meta-item-time .rmb-recipe__meta-item-value","default":""}},"editorScript":"recipe-block","style":"recipe-block"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***********************************!*\
  !*** ./assets/js/recipe-block.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/editor.scss */ "./assets/css/editor.scss");
/* harmony import */ var _blocks_recipe_directions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/recipe-directions */ "./assets/js/blocks/recipe-directions/index.js");
/* harmony import */ var _blocks_recipe_ingredients__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/recipe-ingredients */ "./assets/js/blocks/recipe-ingredients/index.js");
/* harmony import */ var _blocks_recipe_meta__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/recipe-meta */ "./assets/js/blocks/recipe-meta/index.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./block.json */ "./assets/js/block.json");


/**
 * External Dependencies
 */




/**
 * Internal dependencies
 */






const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_9__;
const BLOCKS_TEMPLATE = [['core/image', {}], ['core/heading', {
  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Recipe Title', 'rmb-recipe-block')
}], ['ryelle/recipe-meta'], ['ryelle/recipe-ingredients'], ['ryelle/recipe-directions']];
const BLOCKS_ALLOWED = ['core/audio', 'core/buttons', 'core/cover', 'core/gallery', 'core/heading', 'core/image', 'core/list', 'core/paragraph', 'core/separator', 'core/spacer', 'core/table', 'core/video', 'ryelle/recipe-meta', 'ryelle/recipe-ingredients', 'ryelle/recipe-directions'];
const BlockSVG = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}));
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.registerBlockType)(name, {
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
    icon: BlockSVG
  }),

  edit() {
    // eslint-disable-next-line react-hooks/rules-of-hooks -- This is a component.
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
      className: 'rmb-recipe-block'
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
      template: BLOCKS_TEMPLATE,
      templateLock: false,
      allowedBlocks: BLOCKS_ALLOWED
    }));
  },

  save() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null));
  }

});
}();
/******/ })()
;
//# sourceMappingURL=recipe-block.js.map