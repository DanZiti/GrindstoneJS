/* JS Library Core
 *
 * Includes full selector; global object "El"; "Elem" selector (for IDs only)
 * Includes detector to remove class "over" on touch-enabled devices
 * Leverages Sizzle.js
 */
	
	// Global object
	
	var El = El || {};
	
	El.global = this;
	
	// Simple selector: IDs only
	
	Elem = function(element){
		return document.getElementById(element);
	};
	
	// Selector: single elements (returns the first element that matches the selector)
	
	El.getDOM = function (selector,context){ // Favor this over "document.querySelectorAll()" for IE 7 support
		var typeOf = typeof selector;
		if (typeOf === "string") {
			return El.global.Sizzle(selector,context)[0];
		} else {
			if (selector.nodeType === 1 || selector.nodeType === 9){
				return selector;
			} else {
				if (typeOf === "object" && typeOf.setInterval !== "undefined"){
					return selector;
				} else {
					return undefined;
				}
			}
		}
	};
	
	// Selector: array (returns an array of elements that match the selector)
	
	El.getDOMList = function (selector,context){ // Favor this over "document.querySelectorAll()" for IE 7 support
		if (typeof selector === "string"){
			return El.global.Sizzle(selector,context);
		} else {
			return [];
		}
	};
	
	// Test parameters function: to be used for checking if a parameter is undefined
	
	function testParam(parameter){
		return parameter != undefined && parameter != "";
	};