/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	if (typeof AFRAME === 'undefined') {
	  throw new Error('Component attempted to register before AFRAME was available.');
	}

	/**
	 * Fence component for A-Frame.
	 *
	 * Thanks to Don McCurdy <https://github.com/donmccurdy>
	 * for his initial code
	 * and ngokevin's Component Boilerplate <https://github.com/ngokevin/aframe-component-boilerplate>
	 *
	 */
	AFRAME.registerComponent('fence', {
	  schema: {
	      width: {
	          type: 'number',
	          default: 10
	      },
	      depth: {
	          type: 'number',
	          default: 10
	      },
	      x0: {
	          type: 'number',
	          default: 0
	      },
	      z0: {
	          type: 'number',
	          default: 0
	      }
	  },


	  tick: function() {
	      var data = this.data;
	      var thiswidth = data.width;
	      var thisdepth = data.depth;
	      var x0 = data.x0;
	      var z0 = data.z0;

	      minX = thiswidth / 2 + x0;
	      maxX = ( -1 * thiswidth / 2 ) + x0;

	      minZ = thisdepth / 2 + z0;
	      maxZ = ( -1 * thisdepth / 2 ) + z0;

	      var position = this.el.getComputedAttribute('position');

	      position.x = Math.min( minX, position.x);
	      position.x = Math.max( maxX, position.x);

	      position.z = Math.min( minZ, position.z);
	      position.z = Math.max( maxZ, position.z);

	      this.el.setAttribute('position', position);
	  },

	});


/***/ }
/******/ ]);