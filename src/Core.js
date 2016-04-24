/**
 * Grindstone JavaScript Library v1.2.5
 * https://github.com/DanZiti/GrindstoneJS
 *
 * Copyright (c) 2014, 2016 Dan Zervoudakes
 * Released under the MIT license
 * https://github.com/DanZiti/GrindstoneJS/blob/master/LICENSE
 *
 * Library Core
 *
 * Includes:
 * -Constructor "Grindstone" and selector functions
 * -Any tertiary functions as necessary
 */
	
	// Constructor - gathers the set
	//
	var Grindstone = function(_selector, _context) {
		
		if (_selector) {
			
			var selectedElements, ctx, els, i, j;
			
			if (typeof _selector === "string") {
				
				if (_context) {
					
					ctx = document.querySelectorAll(_context);
					selectedElements = [];
					
					for (i = 0; i < ctx.length; i++) {
						
						els = ctx[i].querySelectorAll(_selector);
						
						for (j = 0; j < els.length; j++) {
							selectedElements.push(els[j]);
						}
					}
					
				}
				
				else {
					selectedElements = document.querySelectorAll(_selector);
				}
				
				if (selectedElements.length > 0) {
					this.set = selectedElements;
				}
				
				else {
					return [];
				}
				
				return this;
				
			}
			
			else if (typeof _selector === "object") {
				this.set = [_selector];
			}
			
		}
		
		else {
			throw new Error("Cannot create new instance of Grindstone without a selector.");
		}
	};
	
	// Shorthand for the above...
	//
	var $ = function(_selector, _context) {
		return new Grindstone(_selector, _context);
	};
	
	// Cut down on repetitive text throughout...
	//
	$.fn = Grindstone.prototype;
	
	/**
	 * The init() method:
	 * Use this throughout each module to collect and loop through the set
	 */
	
	$.fn.init = function(_callback) {
		for (var i = 0; i < this.set["length"]; i++) {
			_callback.call(this.set[i]);
		}
	};
	
	// eq() - returns an element from the set as specified by the corresponding index value
	//
	$.fn.eq = function(_index) {
		return $(this.set[_index]);
	};
