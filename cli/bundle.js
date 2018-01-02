(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["library"] = factory();
	else
		root["library"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 *
 * @author JarveinR
 *
 */

var propertiesMgr = __webpack_require__(6);
var loadModule = __webpack_require__(4);
var path = __webpack_require__(2);
var validator = __webpack_require__(8);
var autotesting = __webpack_require__(5);
var config = __webpack_require__(15);

exports.getResponse = __webpack_require__(16).getResponse;
exports.error = __webpack_require__(17);
exports.loadModule = loadModule.loadModule;
exports.cleanAllModulesCache = loadModule.cleanAllModulesCache;
exports.cleanModuleCache = loadModule.cleanModuleCache;
exports.validator = validator;
exports.config = config.config;
exports.LOG = __webpack_require__(19).log;
exports.autotesting = __webpack_require__(5);
exports.REQUIRED = function (moduleName) {
    if (!autotesting.isAutotestingEnable()) return loadModule.loadModule(path.join(__dirname, '../../node_modules/', moduleName));else return loadModule.loadModule(path.join(__dirname, '../../autotesting/', moduleName));
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.connect = exports.error = undefined;

var _bzUtil = __webpack_require__(0);

var _bzUtil2 = _interopRequireDefault(_bzUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var error = exports.error = function error(done) {
    return function (err) {
        var errorMessage = _bzUtil2.default.error('GLB.EXCEPTION', [{
            error: err.message,
            status: 500,
            success: false
        }, 500, err.message]);

        done(_bzUtil2.default.getResponse(null, {
            error: err.message,
            status: 500,
            success: false
        }, 500, errorMessage));
    };
};

var connect = exports.connect = function connect(MongoClient, _ref) {
    var _ref$url = _ref.url,
        url = _ref$url === undefined ? 'mongodb://localhost:27017' : _ref$url;

    return new Promise(function (resolve, reject) {
        MongoClient.connect(url, function (err, client) {
            if (err) {
                reject(err);
                return;
            }
            resolve(client);
        });
    });
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 *
 * @author JarveinR
 *
 */

var MODULES = {};

function loadModule(modulePath) {
    if (modulePath in MODULES) {
        return MODULES[modulePath];
    } else {
        var module = !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
        MODULES[modulePath] = module;
        return module;
    }
}

function cleanAllModulesCache() {
    MODULES = {};
}

function cleanModuleCache(modulePath) {
    delete MODULES[modulePath];
}

exports.loadModule = loadModule;
exports.cleanAllModulesCache = cleanAllModulesCache;
exports.cleanModuleCache = cleanModuleCache;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fs = __webpack_require__(3);
var path = __webpack_require__(2);

function isAutotestingEnable() {
    return fs.existsSync(path.join(__dirname, '../../../../autotesting/inputData.json')) && fs.existsSync(path.join(__dirname, '../../../../autotesting/outputData.json')) && fs.existsSync(path.join(__dirname, '../../../../autotesting/errorData.json'));
}

function getInputData() {
    var data = fs.readFileSync(path.join(__dirname, '../../../../autotesting/inputData.json'), 'utf8');
    return JSON.parse(data.toString('utf-8'));
}

function getOutputData() {
    var data = fs.readFileSync(path.join(__dirname, '../../../../autotesting/outputData.json'), 'utf8');
    return JSON.parse(data.toString('utf-8'));
}

function getErrorData() {
    var data = fs.readFileSync(path.join(__dirname, '../../../../autotesting/errorData.json'), 'utf8');
    return JSON.parse(data.toString('utf-8'));
}

exports.isAutotestingEnable = isAutotestingEnable;
exports.getInputData = getInputData;
exports.getOutputData = getOutputData;
exports.getErrorData = getErrorData;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fs = __webpack_require__(3);

function Iterator(text) {
	var pos = 0,
	    length = text.length;

	this.peek = function (num) {
		num = num || 0;
		if (pos + num >= length) {
			return null;
		}

		return text.charAt(pos + num);
	};
	this.next = function (inc) {
		inc = inc || 1;

		if (pos >= length) {
			return null;
		}

		return text.charAt((pos += inc) - inc);
	};
	this.pos = function () {
		return pos;
	};
}

var rWhitespace = /\s/;
function isWhitespace(chr) {
	return rWhitespace.test(chr);
}
function consumeWhiteSpace(iter) {
	var start = iter.pos();

	while (isWhitespace(iter.peek())) {
		iter.next();
	}

	return { type: "whitespace", start: start, end: iter.pos() };
}

function startsComment(chr) {
	return chr === "!" || chr === "#";
}
function isEOL(chr) {
	return chr == null || chr === "\n" || chr === "\r";
}
function consumeComment(iter) {
	var start = iter.pos();

	while (!isEOL(iter.peek())) {
		iter.next();
	}

	return { type: "comment", start: start, end: iter.pos() };
}

function startsKeyVal(chr) {
	return !isWhitespace(chr) && !startsComment(chr);
}
function startsSeparator(chr) {
	return chr === "=" || chr === ":" || isWhitespace(chr);
}
function startsEscapedVal(chr) {
	return chr === "\\";
}
function consumeEscapedVal(iter) {
	var start = iter.pos();

	iter.next(); // move past "\"
	var curChar = iter.next();
	if (curChar === "u") {
		// encoded unicode char
		iter.next(4); // Read in the 4 hex values
	}

	return { type: "escaped-value", start: start, end: iter.pos() };
}
function consumeKey(iter) {
	var start = iter.pos(),
	    children = [];

	var curChar;
	while ((curChar = iter.peek()) !== null) {
		if (startsSeparator(curChar)) {
			break;
		}
		if (startsEscapedVal(curChar)) {
			children.push(consumeEscapedVal(iter));continue;
		}

		iter.next();
	}

	return { type: "key", start: start, end: iter.pos(), children: children };
}
function consumeKeyValSeparator(iter) {
	var start = iter.pos();

	var seenHardSep = false,
	    curChar;
	while ((curChar = iter.peek()) !== null) {
		if (isEOL(curChar)) {
			break;
		}

		if (isWhitespace(curChar)) {
			iter.next();continue;
		}

		if (seenHardSep) {
			break;
		}

		seenHardSep = curChar === ":" || curChar === "=";
		if (seenHardSep) {
			iter.next();continue;
		}

		break; // curChar is a non-separtor char
	}

	return { type: "key-value-separator", start: start, end: iter.pos() };
}
function startsLineBreak(iter) {
	return iter.peek() === "\\" && isEOL(iter.peek(1));
}
function consumeLineBreak(iter) {
	var start = iter.pos();

	iter.next(); // consume \
	if (iter.peek() === "\r") {
		iter.next();
	}
	iter.next(); // consume \n

	var curChar;
	while ((curChar = iter.peek()) !== null) {
		if (isEOL(curChar)) {
			break;
		}
		if (!isWhitespace(curChar)) {
			break;
		}

		iter.next();
	}

	return { type: "line-break", start: start, end: iter.pos() };
}
function consumeVal(iter) {
	var start = iter.pos(),
	    children = [];

	var curChar;
	while ((curChar = iter.peek()) !== null) {
		if (startsLineBreak(iter)) {
			children.push(consumeLineBreak(iter));continue;
		}
		if (startsEscapedVal(curChar)) {
			children.push(consumeEscapedVal(iter));continue;
		}
		if (isEOL(curChar)) {
			break;
		}

		iter.next();
	}

	return { type: "value", start: start, end: iter.pos(), children: children };
}
function consumeKeyVal(iter) {
	return {
		type: "key-value",
		start: iter.pos(),
		children: [consumeKey(iter), consumeKeyValSeparator(iter), consumeVal(iter)],
		end: iter.pos()
	};
}

var renderChild = {
	"escaped-value": function escapedValue(child, text) {
		var type = text.charAt(child.start + 1);

		if (type === "t") {
			return "\t";
		}
		if (type === "r") {
			return "\r";
		}
		if (type === "n") {
			return "\n";
		}
		if (type === "f") {
			return "\f";
		}
		if (type !== "u") {
			return type;
		}

		return String.fromCharCode(parseInt(text.substr(child.start + 2, 4), 16));
	},
	"line-break": function lineBreak(child, text) {
		return "";
	}
};
function rangeToBuffer(range, text) {
	var start = range.start,
	    buffer = [];

	for (var i = 0; i < range.children.length; i++) {
		var child = range.children[i];

		buffer.push(text.substring(start, child.start));
		buffer.push(renderChild[child.type](child, text));
		start = child.end;
	}
	buffer.push(text.substring(start, range.end));

	return buffer;
}
function rangesToObject(ranges, text) {
	var obj = Object.create(null); // Creates to a true hash map

	for (var i = 0; i < ranges.length; i++) {
		var range = ranges[i];

		if (range.type !== "key-value") {
			continue;
		}

		var key = rangeToBuffer(range.children[0], text).join("");
		var val = rangeToBuffer(range.children[2], text).join("");
		obj[key] = val;
	}

	return obj;
}

function stringToRanges(text) {
	var iter = new Iterator(text),
	    ranges = [];

	var curChar;
	while ((curChar = iter.peek()) !== null) {
		if (isWhitespace(curChar)) {
			ranges.push(consumeWhiteSpace(iter));continue;
		}
		if (startsComment(curChar)) {
			ranges.push(consumeComment(iter));continue;
		}
		if (startsKeyVal(curChar)) {
			ranges.push(consumeKeyVal(iter));continue;
		}

		throw Error("Something crazy happened. text: '" + text + "'; curChar: '" + curChar + "'");
	}

	return ranges;
}

function isNewLineRange(range) {
	if (!range) {
		return false;
	}

	if (range.type === "whitespace") {
		return true;
	}

	if (range.type === "literal") {
		return isWhitespace(range.text) && range.text.indexOf("\n") > -1;
	}

	return false;
}

function Editor(text, path) {
	text = text || "";

	var ranges = stringToRanges(text);
	var obj = rangesToObject(ranges, text);
	var keyRange = Object.create(null); // Creates to a true hash map

	for (var i = 0; i < ranges.length; i++) {
		var range = ranges[i];

		if (range.type !== "key-value") {
			continue;
		}

		var key = rangeToBuffer(range.children[0], text).join("");
		keyRange[key] = range;
	}

	this.addHeadComment = function (comment) {
		if (comment == null) {
			return;
		}

		ranges.unshift({ type: "literal", text: "# " + comment.replace(/\n/g, "\n# ") + "\n" });
	};

	this.get = function (key) {
		return obj[key];
	};
	this.set = function (key, val, comment) {
		if (val == null) {
			this.unset(key);return;
		}

		obj[key] = val;

		var range = keyRange[key];
		if (!range) {
			keyRange[key] = range = { type: "literal", text: key + "=" + val };

			var prevRange = ranges[ranges.length - 1];
			if (prevRange != null && !isNewLineRange(prevRange)) {
				ranges.push({ type: "literal", text: "\n" });
			}
			ranges.push(range);
		}

		// comment === null deletes comment. if comment === undefined, it's left alone
		if (comment !== undefined) {
			range.comment = comment && "# " + comment.replace(/\n/g, "\n# ") + "\n";
		}

		if (range.type === "literal") {
			range.text = key + "=" + val;
			if (range.comment != null) {
				range.text = range.comment + range.text;
			}
		} else if (range.type === "key-value") {
			range.children[2] = { type: "literal", text: val };
		} else {
			throw "Unknown node type: " + range.type;
		}
	};
	this.unset = function (key) {
		if (!(key in obj)) {
			return;
		}

		var range = keyRange[key];
		var idx = ranges.indexOf(range);

		ranges.splice(idx, isNewLineRange(ranges[idx + 1]) ? 2 : 1);

		delete keyRange[key];
		delete obj[key];
	};
	this.valueOf = this.toString = function () {
		var buffer = [],
		    stack = [].concat(ranges);

		var node;
		while ((node = stack.shift()) != null) {
			switch (node.type) {
				case "literal":
					buffer.push(node.text);
					break;
				case "key":
				case "value":
				case "comment":
				case "whitespace":
				case "key-value-separator":
				case "escaped-value":
				case "line-break":
					buffer.push(text.substring(node.start, node.end));
					break;
				case "key-value":
					Array.prototype.unshift.apply(stack, node.children);
					if (node.comment) {
						stack.unshift({ type: "literal", text: node.comment });
					}
					break;
			}
		}

		return buffer.join("");
	};
	this.save = function (newPath, callback) {
		if (typeof newPath === 'function') {
			callback = newPath;
			newPath = path;
		}
		newPath = newPath || path;

		if (!newPath) {
			callback("Unknown path");
		}

		fs.writeFile(newPath, this.toString(), callback || function () {});
	};
}
function createEditor(path, callback) {
	if (!path) {
		return new Editor();
	}

	if (!callback) {
		return new Editor(fs.readFileSync(path).toString(), path);
	}

	return fs.readFile(path, function (err, text) {
		if (err) {
			return callback(err, null);
		}

		text = text.toString();
		return callback(null, new Editor(text, path));
	});
}

function parse(text) {
	text = text.toString();
	var ranges = stringToRanges(text);
	return rangesToObject(ranges, text);
}

function read(path, callback) {
	if (!callback) {
		return parse(fs.readFileSync(path));
	}

	return fs.readFile(path, function (err, data) {
		if (err) {
			return callback(err, null);
		}

		return callback(null, parse(data));
	});
}

module.exports = { parse: parse, read: read, createEditor: createEditor };

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 7;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 *
 * @author JarveinR
 *
 */

var iz = __webpack_require__(13);
var bizagiUtil = __webpack_require__(0);

function requiredParameters(parameters) {
    var parameterName;

    for (parameterName in parameters) {
        var parameter = parameters[parameterName];
        if (!iz(parameter).required().valid) {
            var error = bizagiUtil.getResponse(null, null, -400, bizagiUtil.error('VAL.REQUIRED_PARAM', [parameterName]));
            return error;
        }
    }
};

function isValidGlobalsJson(globals) {
    try {
        var error = requiredParameters({ 'globals': globals });
        if (error) {
            return error;
        }
        globals = escapeString(globals);
        globals = JSON.parse(globals);

        if (typeof globals.authdata === 'undefined') {
            var error = bizagiUtil.getResponse(null, null, -200, bizagiUtil.error('VAL.REQUIRED_ELEMENT', ['globals.authdata', 'globals']));
            return error;
        }

        if (typeof globals.systemproperties === 'undefined') {
            var error = bizagiUtil.getResponse(null, null, -200, bizagiUtil.error('VAL.REQUIRED_ELEMENT', ['globals.systemproperties', 'globals']));
            return error;
        }

        if (typeof globals.projectname === 'undefined') {
            var error = bizagiUtil.getResponse(null, null, -200, bizagiUtil.error('VAL.REQUIRED_ELEMENT', ['globals.projectname', 'globals']));
            return error;
        }

        for (key in globals.authdata) {
            globals.authdata[key] = escapeString(globals.authdata[key]);
        }

        for (key in globals.systemproperties) {
            globals.systemproperties[key] = escapeString(globals.systemproperties[key]);
        }

        var success = bizagiUtil.getResponse(globals, null, 200);
        return success;
    } catch (exception) {
        var error = bizagiUtil.getResponse(null, exception, -200, bizagiUtil.error('VAL.PARAM_TYPE', ['globals', 'JSON']));
        return error;
    }
};

function isValidDataJson(json) {
    try {
        var name = Object.keys(json)[0];
        var jsonStr = escapeString(json[name]);
        var data = JSON.parse(jsonStr);
        var success = bizagiUtil.getResponse(data, null, 200);
        return success;
    } catch (exception) {
        var error = bizagiUtil.getResponse(null, null, -200, bizagiUtil.error('VAL.PARAM_TYPE', [name, 'JSON']));
        return error;
    }
};

function escapeString(str) {
    str = deleteInvalidCharacteres(str);
    var strEscape = '';

    if (str.match(/^%7B/)) {
        str = str.replace(/\+/g, ' ');
        var pattern = /%/g;
        var match;
        var startIndex = 0;
        var pivotIndex = 0;

        while ((match = pattern.exec(str)) !== null) {
            var encodeNum = str.substr(match.index + 1, 2);
            var character = getUnescapeCharacter(encodeNum);
            strEscape += str.substring(pivotIndex, match.index) + character;
            pivotIndex = match.index + 3;
        }
    } else {
        strEscape = str;
    }

    return unescape(strEscape);
};

function deleteInvalidCharacteres(str) {
    // the pattern looks for invalid characteres
    var pattern = /[\b\f\n\r\t\v]/g;

    var array = str.split("");
    var match;
    while ((match = pattern.exec(str)) !== null) {
        array.splice(match.index, 1, '');
    }

    return array.join('');
};

function getUnescapeCharacter(encodeNum) {

    var unescapeCh = numCharacters[encodeNum];

    if (unescapeCh === undefined) {
        unescapeCh = '%' + encodeNum;
    }

    return unescapeCh;
};

var characters = {
    '2C': ',',
    '3A': ':',
    '20': ' ',
    '22': '"',
    '7B': '{',
    '7D': '}'
};

exports.requiredParameters = requiredParameters;
exports.isValidGlobalsJson = isValidGlobalsJson;
exports.isValidDataJson = isValidDataJson;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*global module, exports, require */
var validators = __webpack_require__(10);

(function () {
    'use strict';

    var iz;

    /**
     * @param value
     * @param error_messages
     * @constructor
     */
    function Iz(value, error_messages) {
        var self = this;

        if ((typeof error_messages === 'undefined' ? 'undefined' : _typeof(error_messages)) === 'object') {
            this.error_messages = error_messages;
        } else {
            this.error_messages = {};
        }

        this._not = false;
        this._calledValidations = {};

        function not() {
            self._not = true;
            return self;
        }

        function revalidate() {
            self.errors = [];
            self.valid = true;

            for (var key in self._calledValidations) {
                var rule = self._calledValidations[key];

                if (self._calledValidations.hasOwnProperty(key)) {
                    if (rule.not) {
                        self.not();
                    }

                    validator_partial(rule.validation).apply(self, rule.args);
                }
            }
            return self;
        }

        function setValue(value) {
            self.value = value;
            self.revalidate();
            return self;
        }

        /**
         * Formats a string using the args index as the key
         * @param {String} string
         * @param {Array|Object} args
         */
        function format(string, args) {
            for (var i in args) {
                string = string.replace(new RegExp('\{\{\\s*' + i + '\\s*\}\}', 'gim'), args[i]);
            }
            return string;
        }

        this.not = not;
        this.value = value;
        this.setValue = setValue;
        this.revalidate = revalidate;
        this.errors = [];
        this.valid = true;

        /**
         * Partial application with currying into a validation function. Pushes to error array if an error exists.
         * If an error_message is specified for some specific check then that message is used. Otherwise just the function name.
         * Also sets valid to false if an error is found. It can't ever set valid to true.
         * @param fn
         */
        function validator_partial(fn) {
            var fnName = Array.prototype.slice.call(arguments)[0],
                args = Array.prototype.slice.call(arguments, 1);
            args.unshift(value); //add value to the front
            return function () {
                var argArray = Array.prototype.slice.call(arguments),
                    allArguments = [self.value].concat(argArray),
                    result = validators[fn].apply(null, allArguments),
                    key = (self._not ? 'not_' : '') + fnName;

                //save rules that have been called
                self._calledValidations[key] = {
                    not: self._not,
                    validation: fn,
                    args: argArray
                };

                //2 failed validation cases
                if (!this._not && !result || this._not && result) {
                    //change error message based on not and if an error message is specified
                    if (!this._not && typeof this.error_messages[fn] !== 'undefined') {
                        this.errors.push(format(this.error_messages[fn], allArguments));
                    } else if (this._not && typeof this.error_messages['not_' + fn] !== 'undefined') {
                        this.errors.push(format(this.error_messages['not_' + fn], allArguments));
                    } else if (this._not) {
                        this.errors.push('Not ' + fn);
                    } else {
                        this.errors.push(fn);
                    }
                    //all of these cases result in non-validity
                    this.valid = false;
                }
                //set not back for the next test
                this._not = false;
                //chain
                return this;
            };
        }

        for (var fn in validators) {
            if (validators.hasOwnProperty(fn)) {
                this[fn] = validator_partial(fn);
            }
        }
    }

    /**
     * Factory for creating chained checking objects
     * @param value{*}
     * @param error_messages{Object}
     * @return {Object} of type Iz
     */
    iz = function iz(value, error_messages) {
        return new Iz(value, error_messages);
    };

    for (var fn in validators) {
        if (validators.hasOwnProperty(fn)) {
            iz[fn] = validators[fn];
        }
    }

    iz.addValidator = function (name, func, force) {
        validators.addValidator(name, func, force);
        iz[name] = func;
    };

    // Export module
    if (true) {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = iz;
        }
        exports.iz = iz;
    }
})();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*global module, exports */
(function () {
    'use strict';

    function addValidator(name, validator, force) {
        if (typeof validators[name] !== 'undefined' && force !== true) {
            throw new Error('Not adding validator because ' + name + ' already exists');
        }

        if (name === 'addValidator') {
            throw new Error('Cannot override addValidator');
        }

        validators[name] = validator;
    }

    var validators = {};

    function izAlphaNumeric(value) {
        return (/^[a-z0-9]+$/i.test(value)
        );
    }

    function izString(value) {
        return typeof value === 'string' || value instanceof String;
    }

    function izNumber(val) {
        if ((typeof val === 'string' || typeof val === 'number') && !isNaN(val % 1)) {
            return true;
        }
        return false;
    }

    function izBetween(val, start, end) {
        if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' || typeof val === 'function' || (typeof start === 'undefined' ? 'undefined' : _typeof(start)) === 'object' || typeof start === 'function' || (typeof end === 'undefined' ? 'undefined' : _typeof(end)) === 'object' || typeof end === 'function') {
            return false;
        }

        if (val >= start && val <= end) {
            return true;
        }
        return false;
    }

    function izBoolean(value) {
        if (typeof value === 'boolean' || typeof value === 'number' && (value === 0 || value === 1)) {
            return true;
        }
        return false;
    }

    function izInt(value, allowDecimal) {
        if (typeof allowDecimal !== 'boolean') {
            allowDecimal = false;
        }

        if (!allowDecimal) {
            return (/^\s*(\+|-)?\d+\s*$/.test(value)
            );
        } else if (izNumber(value) && value % 1 === 0) {
            return true;
        }
        return false;
    }

    /**
     * @author Phil Green (ShirtlessKirk) https://gist.github.com/2134376
     */
    function luhnChk(luhn) {
        var len = luhn.length,
            mul = 0,
            prodArr = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]],
            sum = 0;

        while (len--) {
            sum += prodArr[mul][parseInt(luhn.charAt(len), 10)];
            mul ^= 1;
        }

        return sum % 10 === 0 && sum > 0;
    }

    /**
     * Returns the name of the class that the object is
     * @author http://blog.magnetiq.com/post/514962277/finding-out-class-names-of-javascript-objects
     * @param obj{Object}
     * @return String name of the class
     */
    function izGetObjectClass(obj) {
        if (obj && obj.constructor && obj.constructor.toString) {
            var arr = obj.constructor.toString().match(/function\s*(\w+)/);

            if (arr && arr.length === 2) {
                return arr[1];
            }
        }

        return undefined;
    }

    function izCc(value) {
        if (typeof value !== 'string' && typeof value !== 'number') {
            return false;
        }

        value = value.replace(/[ \-]/g, ''); // normalizing
        if (izInt(value)) {
            return luhnChk(value);
        }
        return false;
    }

    /**
     * TODO: maybe provide format and use: http://www.mattkruse.com/javascript/date/source.html
     * but that seems in elegant. Then again dates in general are in elegant... *shrug*
     * @param value
     * @return {Boolean}
     */
    function izDate(value) {
        return izGetObjectClass(value) === 'Date' || new Date(value).toString() !== 'Invalid Date' || !isNaN(new Date(value));
    }

    function izDecimal(value) {
        return izNumber(value) && !izInt(value, false);
    }

    /**
     * Basically just expects the @ symbol. There was a full discussion about it here:
     * http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
     *
     * Might make this more complicated in the future... or not *shrug*
     * @param value
     * @return {Boolean}
     */
    function izEmail(value) {
        return !(typeof value !== 'string') && /\S+@\S+/.test(value);
    }

    /**
     * True if the parameter is empty. length > 0 for objects (if exists) or arrays, Functions/Objects have no properties,
     * or the type is primitive.
     * @param value of any type
     * @return {Boolean}
     */
    function izEmpty(value) {
        var type = typeof value === 'undefined' ? 'undefined' : _typeof(value),
            key;
        //arrays and objects with length properties
        if (value.hasOwnProperty('length') && type !== 'function' && value.length > 0) {
            return false;
        } else if (type === 'function' || type === 'object') {
            for (key in value) {
                if (value.hasOwnProperty(key)) {
                    return false; //on first valid key, return false;
                }
            }
        }

        //primitives are empty as are objects without properties and empty arrays
        return true;
    }

    function izBlank(value) {
        if (typeof value === 'string') {
            return izEmpty(value);
        }

        return false;
    }

    /**
     * Strictly Equal
     * @param value
     * @param value2
     * @return {Boolean}
     */
    function izEqual(value, value2) {
        var valueType = typeof value === 'undefined' ? 'undefined' : _typeof(value),
            value2Type = typeof value2 === 'undefined' ? 'undefined' : _typeof(value2),
            key;

        if ((valueType === 'object' || valueType === 'function') && typeof value.equals === 'function') {
            if (value2Type === 'object' || value2Type === 'function') {
                //value2 does not need the equals method, if an exception is thrown here that is the implementor
                //catching it returning false might result in a bug that is hard to track
                return value.equals(value2);
            }
        } else if (valueType === 'object' || valueType === 'function') {
            for (key in value) {
                if (value.hasOwnProperty(key) && !value2.hasOwnProperty(key) && key !== 'equals') {
                    //if property is an object then recursively check
                    if (_typeof(value[key]) === 'object' || typeof value[key] === 'function' && !izEqual(value[key], value2[key])) {
                        return false;
                    } else if (value[key] !== value2[key]) {
                        //if not object or function
                        return false;
                    }
                }
            }
            return true;
        }

        return value === value2;
    }

    /**
     * Is obj1 and extension of obj2? True if this is the case.
     * @param obj1
     * @param obj2
     * @return {Boolean}
     */
    function izExtension(obj1, obj2) {
        var key;
        if ((typeof obj1 === 'undefined' ? 'undefined' : _typeof(obj1)) !== 'object' || (typeof obj2 === 'undefined' ? 'undefined' : _typeof(obj2)) !== 'object') {
            return false;
        }

        for (key in obj2) {
            if (obj2.hasOwnProperty(key) && typeof obj1[key] === 'undefined') {
                return false;
            }
        }

        return true;
    }

    /**
     * Accepts anything.anything.anything.ext.ext and matches the last ext
     * @param value a file extension of a file name
     */
    function izFileExtension(value, validExtensions) {
        var ext;

        if ((typeof validExtensions === 'undefined' ? 'undefined' : _typeof(validExtensions)) !== 'object' || typeof validExtensions.indexOf === 'undefined' || typeof value !== 'string') {
            return false;
        }

        ext = value.split('.').pop().toLowerCase(); //split by '.' and get me the last thing, then lowercase it
        if (validExtensions.indexOf(ext) !== -1) {
            return true;
        }
        return false;
    }

    function izFileExtensionAudio(value) {
        var validExtensions = ['mp3', 'ogg', 'aac', 'wav'];
        return izFileExtension(value, validExtensions);
    }

    function izFileExtensionImage(value) {
        var validExtensions = ['gif', 'png', 'jpeg', 'jpg', 'svg', 'bmp'];
        return izFileExtension(value, validExtensions);
    }

    function izFileExtensionVideo(value) {
        var validExtensions = ['mp4', 'ogv', 'm4v', 'mov', 'avi'];
        return izFileExtension(value, validExtensions);
    }

    function izInArray(value, arr) {
        if ((typeof arr === 'undefined' ? 'undefined' : _typeof(arr)) !== 'object' || typeof arr.indexOf === 'undefined') {
            return false;
        }

        if (arr.indexOf(value) !== -1) {
            return true;
        }
        return false;
    }

    function izAnArray(arr) {
        return Object.prototype.toString.call(arr) === '[object Array]';
    }

    /**
     * Matches IPv4, IPv6 or hostname
     * @author Mikulas Dite http://stackoverflow.com/questions/9208814/validate-ipv4-ipv6-and-hostname
     * @param str
     * @return boolean
     */
    function izIp(str) {
        var re = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^(?:(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){6})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:::(?:(?:(?:[0-9a-fA-F]{1,4})):){5})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})))?::(?:(?:(?:[0-9a-fA-F]{1,4})):){4})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,1}(?:(?:[0-9a-fA-F]{1,4})))?::(?:(?:(?:[0-9a-fA-F]{1,4})):){3})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,2}(?:(?:[0-9a-fA-F]{1,4})))?::(?:(?:(?:[0-9a-fA-F]{1,4})):){2})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,3}(?:(?:[0-9a-fA-F]{1,4})))?::(?:(?:[0-9a-fA-F]{1,4})):)(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,4}(?:(?:[0-9a-fA-F]{1,4})))?::)(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,5}(?:(?:[0-9a-fA-F]{1,4})))?::)(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,6}(?:(?:[0-9a-fA-F]{1,4})))?::))))$/;
        return re.test(str);
    }

    function izMinLength(val, len) {
        if ((typeof val === 'string' || (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') && typeof val.length !== 'undefined' && izInt(len) && val.length >= len) {
            return true;
        }

        return false;
    }

    function izMaxLength(val, len) {
        if ((typeof val === 'string' || (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') && typeof val.length !== 'undefined' && izInt(len) && val.length <= len) {
            return true;
        }

        return false;
    }

    function izMultiple(num, multiple) {
        if (typeof num !== 'number' || typeof multiple !== 'number') {
            return false;
        }
        if (num % multiple === 0) {
            return true;
        }

        return false;
    }

    function izOfType(obj, type) {
        if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && typeof obj.length === 'undefined' && typeof type === 'string') {
            //is truly an object
            if (izGetObjectClass(obj) === type) {
                return true;
            }
        }
        return false;
    }

    function izPhone(str) {
        var cleanedStr = '',
            numbers = [];
        if (typeof str === 'string') {
            cleanedStr = str.replace(/[^x0-9]/g, '');
            numbers = cleanedStr.split('x');
            //first and last array elements are numbers, this allows for multiple x's between the phone number and extension (if exists)
            if (numbers.length > 0 && izInt(numbers[0]) && ( // has at least 1 value in the array and it is an integer
            numbers[0].length === 10 || numbers[0].length === 11) && // it has an extension with or without country code
            izInt(numbers.pop())) {
                //if it is has an extension it is a valid number
                return true;
            }
        }
        return false;
    }

    function izPostal(str) {
        var cleanedStr = '';
        if (typeof str === 'string') {
            //removing everything but numbers
            cleanedStr = str.replace(/[^0-9]/g, '');
            //is either a 5 or 9 digit zip code...
            if (izInt(cleanedStr) && (cleanedStr.length === 5 || cleanedStr.length === 9)) {
                return true;
            }
        }
        return false;
    }

    function izSsn(str) {
        var cleanedStr = '';
        if (typeof str === 'string') {
            cleanedStr = str.replace(/[^0-9]/g, '');
            //There are varying rules depending on date of issuance. I will say that having 9 digits is all that is needed for now.
            if (izInt(cleanedStr) && cleanedStr.length === 9) {
                return true;
            }
        }
        return false;
    }

    function izRequired(obj) {
        return obj !== undefined && obj !== null && obj !== '';
    }

    function izRequiredOr(validator) {
        return function (val) {
            return !izRequired(val) || validator.apply(this, Array.prototype.slice.call(arguments));
        };
    }

    //Expose some methods, this is done to preserve function names in all browsers
    validators.alphaNumeric = izRequiredOr(izAlphaNumeric);
    validators.string = izRequiredOr(izString);
    validators.between = izRequiredOr(izBetween);
    validators.blank = izRequiredOr(izBlank);
    validators.boolean = izRequiredOr(izBoolean);
    validators.cc = izRequiredOr(izCc);
    validators.date = izRequiredOr(izDate);
    validators.decimal = izRequiredOr(izDecimal);
    validators.email = izRequiredOr(izEmail);
    validators.empty = izRequiredOr(izEmpty);
    validators.equal = izRequiredOr(izEqual);
    validators.extension = izExtension;
    validators.fileExtension = izRequiredOr(izFileExtension);
    validators.fileExtensionAudio = izRequiredOr(izFileExtensionAudio);
    validators.fileExtensionImage = izRequiredOr(izFileExtensionImage);
    validators.fileExtensionVideo = izRequiredOr(izFileExtensionVideo);
    validators.inArray = izInArray;
    validators.anArray = izRequiredOr(izAnArray);
    validators.int = izRequiredOr(izInt);
    validators.ip = izRequiredOr(izIp);
    validators.minLength = izRequiredOr(izMinLength);
    validators.maxLength = izRequiredOr(izMaxLength);
    validators.multiple = izRequiredOr(izMultiple);
    validators.number = izRequiredOr(izNumber);
    validators.ofType = izRequiredOr(izOfType);
    validators.phone = izRequiredOr(izPhone);
    validators.postal = izRequiredOr(izPostal);
    validators.required = izRequired;
    validators.ssn = izRequiredOr(izSsn);

    validators.addValidator = addValidator;

    // Export module
    if (true) {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = validators;
        }
        exports.validators = validators;
    }
})();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _addUser = __webpack_require__(12);

Object.defineProperty(exports, 'addUser', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_addUser).default;
  }
});

var _buildInfo = __webpack_require__(22);

Object.defineProperty(exports, 'buildInfo', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_buildInfo).default;
  }
});

var _command = __webpack_require__(23);

Object.defineProperty(exports, 'command', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_command).default;
  }
});

var _listDatabases = __webpack_require__(24);

Object.defineProperty(exports, 'listDatabases', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_listDatabases).default;
  }
});

var _ping = __webpack_require__(25);

Object.defineProperty(exports, 'ping', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ping).default;
  }
});

var _removeUser = __webpack_require__(26);

Object.defineProperty(exports, 'removeUser', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_removeUser).default;
  }
});

var _repISetGetStatus = __webpack_require__(27);

Object.defineProperty(exports, 'repISetGetStatus', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_repISetGetStatus).default;
  }
});

var _serverInfo = __webpack_require__(28);

Object.defineProperty(exports, 'serverInfo', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_serverInfo).default;
  }
});

var _serverStatus = __webpack_require__(29);

Object.defineProperty(exports, 'serverStatus', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_serverStatus).default;
  }
});

var _setProfilingLevel = __webpack_require__(30);

Object.defineProperty(exports, 'setProfilingLevel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_setProfilingLevel).default;
  }
});

var _validateCollection = __webpack_require__(31);

Object.defineProperty(exports, 'validateCollection', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_validateCollection).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bzUtil = __webpack_require__(0);

var _bzUtil2 = _interopRequireDefault(_bzUtil);

var _util = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (MongoClient) {
    return function (deps) {
        var globals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { authdata: {} };
        var actionName = arguments[2];
        var data = arguments[3];
        var authenticationType = arguments[4];
        var logger = arguments[5];
        var done = arguments[6];
        var _data$inputs$input = data.inputs.input,
            user = _data$inputs$input.user,
            pwd = _data$inputs$input.pwd,
            role = _data$inputs$input.role,
            _data$inputs$input$da = _data$inputs$input.database,
            database = _data$inputs$input$da === undefined ? 'test' : _data$inputs$input$da;

        (0, _util.connect)(MongoClient, globals.authdata).then(function (client) {
            client.db(database).addUser(user, pwd, {
                roles: [{ role: role, db: database }]
            }).then(function (res) {
                done(_bzUtil2.default.getResponse({ response: "User has ben created." }, null, 200, null));
                client.close();
            }).catch((0, _util.error)(done));
        }).catch((0, _util.error)(done));
    };
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*global require, module */

(function () {
    'use strict';

    // serves as our bootstrap into other node apps

    var iz = __webpack_require__(9),
        are = __webpack_require__(14),
        validators = __webpack_require__(10);

    iz.are = are;
    iz.validators = validators;

    module.exports = iz;
})();

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*global module, exports */

var iz = __webpack_require__(9);

(function () {
    'use strict';

    var are;

    function Are(rules) {
        var self = this,
            currentRule,
            rule,
            errors,
            key;

        self.fields = {};

        for (key in rules) {
            if (!rules.hasOwnProperty(key)) {
                continue;
            }

            // if is an iz object just add rule directly, if not assemble an iz object
            if (typeof rules[key].revalidate !== 'undefined') {
                self.fields[key] = rules[key];
            } else {
                errors = {};

                // make errors dictionary
                for (rule in rules[key]) {
                    if (!rules[key].hasOwnProperty(rule)) {
                        continue;
                    }

                    if (rules[key][rule].error) {
                        errors[rules[key][rule].rule] = rules[key][rule].error;
                    }
                }

                currentRule = iz(0, errors);

                // call rule
                for (rule in rules[key]) {
                    if (!rules[key].hasOwnProperty(rule)) {
                        continue;
                    }

                    // handle 'not_'
                    if (rules[key][rule].rule.indexOf('not_') > -1) {
                        currentRule.not();
                    }

                    currentRule[rules[key][rule].rule.replace('not_', '')].apply(currentRule, rules[key][rule].args || []);
                }

                self.fields[key] = currentRule;
            }
        }

        this.valid = function () {
            for (var key in self.fields) {
                if (!self.fields[key].hasOwnProperty(key)) {
                    continue;
                }

                self.fields[key].revalidate();
                if (!self.fields[key].valid) {
                    return false;
                }
            }

            return true;
        };

        this.validFor = function (values) {
            var field,
                i = 0,
                fieldKeys,
                currentValue,
                areAllRulesValid = true;

            for (field in self.fields) {
                if (!self.fields.hasOwnProperty(field)) {
                    continue;
                }

                fieldKeys = field.split('.');
                currentValue = values[fieldKeys[0]];

                // account for chained field names
                for (i = 1; i < fieldKeys.length; i++) {
                    // we'll get an out of bounds error if the field doesn't exist
                    // let's treat this as an undefined
                    try {
                        currentValue = currentValue[fieldKeys[i]];
                    } catch (e) {
                        currentValue = undefined;
                    }
                }

                self.fields[field].setValue(currentValue);

                if (!self.fields[field].valid) {
                    areAllRulesValid = false;
                }
            }

            if (!areAllRulesValid) {
                return false;
            }

            return true;
        };

        this.getInvalidFields = function () {
            var errorFields = {},
                key;

            for (key in self.fields) {
                if (self.fields[key].errors && self.fields[key].errors.length) {
                    errorFields[key] = self.fields[key].errors;
                }
            }

            return errorFields;
        };
    }

    are = function are(rules) {
        return new Are(rules);
    };

    // Export module
    if (true) {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = are;
        }
        exports.are = are;
    }
})();

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 *
 * @author JarveinR
 *
 */

var propertiesMgr = __webpack_require__(6);
var loadModule = __webpack_require__(4);
var path = __webpack_require__(2);
var fs = __webpack_require__(3);

var config = eval(fs.readFileSync('../../etc/config.js', "utf8"));
config.logsPath = path.join(__dirname, config.backingDownLogDirectory || 'tmp/', 'Temporary/Connectors/');
config.schema = "http";
config.server = "localhost";
config.port = 16541;
config.maxRequestLengthSize = "10mb";
config.clusterWorkerNumber = "auto";
config.nodeJSExecutablePath = "C:\\BizagiJEE\\nodejs\\0.12.5\\node.exe";
config.forceEnableLogger = false;
config.logsPath = config.logsPath;

var configPropertiesPath = path.join(__dirname, config.backingDownConfigFile || 'tmp/', 'config.properties');
if (fs.existsSync(configPropertiesPath)) {
    var properties = propertiesMgr.read(configPropertiesPath);

    if (properties.schema) config.schema = properties.schema;

    if (properties.server) config.server = properties.server;

    if (properties.port) config.port = properties.port;

    if (properties.maxRequestLengthSize) config.maxRequestLengthSize = properties.maxRequestLengthSize;

    if (properties.clusterWorkerNumber) config.clusterWorkerNumber = properties.clusterWorkerNumber;

    if (properties.nodeJSExecutablePath) config.nodeJSExecutablePath = properties.nodeJSExecutablePath;

    if (properties.forceEnableLogger) config.forceEnableLogger = properties.forceEnableLogger;

    if (properties.logsDirectoryPath) config.logsPath = properties.logsDirectoryPath;
}

Object.defineProperty(exports, "config", { value: config });

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 *
 * @author JarveinR
 *
 */

var autotesting = __webpack_require__(5);

function getResponse(response, error, connectorStatusCode, errorMessage) {
    var success = true;

    if (response) {
        if ((typeof response === 'undefined' ? 'undefined' : _typeof(response)) !== 'object') {
            try {
                response = JSON.parse(response);
                success = true;
            } catch (e) {
                response = {};
                errorMessage = "The response must be a valid JSON: " + response;
                success = false;
            }
        }
    } else {
        response = {};
    }

    if (error) {
        if ((typeof error === 'undefined' ? 'undefined' : _typeof(error)) !== 'object') {
            try {
                error = JSON.parse(error);
            } catch (e) {
                error = {};
                errorMessage = "The error must be a valid JSON: " + error;
                success = false;
            }
        }
        if (!isEmpty(error)) {
            success = false;
        }
    } else {
        error = {};
    }

    if (errorMessage) {
        if ((typeof errorMessage === 'undefined' ? 'undefined' : _typeof(errorMessage)) === 'object') {
            errorMessage = JSON.stringify(errorMessage);
        } else {
            errorMessage = errorMessage.toString();
        }
    } else {
        if (!isEmpty(error)) {
            errorMessage = JSON.stringify(error);
        } else {
            errorMessage = "";
        }
    }

    if (errorMessage != "") {
        success = false;
    }

    if (!connectorStatusCode && success) {
        connectorStatusCode = 200;
    }

    if (!connectorStatusCode && !success) {
        connectorStatusCode = -200;
    }

    var outputs = {
        response: {
            outputs: {
                output: response,
                error: error
            }
        },
        success: success,
        connectorstatuscode: connectorStatusCode,
        errormessage: errorMessage
    };

    outputs.autotestingenabled = false;
    if (autotesting.isAutotestingEnable()) {
        outputs.autotestingenabled = true;
    }

    return outputs;
}

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

exports.getResponse = getResponse;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 *
 * @author JarveinR
 *
 */

var util = __webpack_require__(18);
var path = __webpack_require__(2);
var errors;

module.exports = function (error, parameters) {
    if (!errors) {
        try {
            errors = defaultErrors();
            var userErrors = !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
            if (userErrors) {
                for (var key in userErrors) {
                    if (!errors[key]) {
                        errors[key] = userErrors[key];
                    }
                }
            }
        } catch (exception) {
            errors = defaultErrors();
        }
    }

    if (error in errors) {
        if (typeof parameters !== 'undefined' && parameters.constructor === Array) {
            if (parameters.length > 0) {
                var param = '';
                for (var i = 0; i < parameters.length; i++) {
                    var value = parameters[i];
                    if (value instanceof Object) {
                        value = JSON.stringify(value);
                    } else if (value instanceof Error) {
                        value = value.message;
                    } else {
                        value = String(value);
                    }

                    if (value) {
                        value = value.replace(/\"/g, "");
                        value = value.replace(/\'/g, "");
                        value = value.replace(/\\/g, "/");
                    }
                    param += "'" + value + "'";
                    if (i != parameters.length - 1) {
                        param += ",";
                    }
                }

                var call = "util.format('" + errors[error] + "', " + param + ");";
                var msg = eval(call);

                return msg;
            }
        }
        return errors[error];
    }
    return "";
};

function defaultErrors() {
    errors = {
        "GLB.EXCEPTION": "Exception Error, %s, %s, location: %s",
        "GLB.IS_NOT_A": "%s is not a %s",
        "GLB.IS_NOT_AN": "%s is not an %s",
        "GLB.UNKNOW_ACTION": "Unknown action: %s",
        "GLB.RESOURCE_REDIRECT": "Server is requesting the client to perform a redirect, the HttpCode is: %s",
        "GLB.RESOURCE_NOT_FOUND": "Resource not found: %s",
        "GLB.RESPONSE_ERROR": "An error was obtained by processing the request, the HttpCode is : %s, the server response was: %s",
        "VAL.REQUIRED_PARAM": "The Parameter -%s- is required",
        "VAL.REQUIRED_ELEMENT": "The element -%s- is required in -%s-",
        "VAL.REQUIRED_PARAMS": "The Parameters are required: %s",
        "VAL.PARAM_TYPE": "The -%s- parameter must be a valid %s"
    };

    return errors;
}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 *
 * @author JarveinR
 *
 */

var loggers = __webpack_require__(20);
var loadModule = __webpack_require__(4).loadModule;
var validator = __webpack_require__(8);
var path = __webpack_require__(2);
var bizagiUtil = __webpack_require__(0);
var config = bizagiUtil.config;

function log(logname, enabled) {
    enabled = String(enabled) === "true";
    if (config.forceEnableLogger) {
        var forceEnableLogger = String(config.forceEnableLogger) === "true";
        if (forceEnableLogger === true) {
            enabled = true;
        }
    }

    if (enabled === true) {
        var error = validator.requiredParameters({ 'globals.projectname': logname });
        if (error) {
            throw error;
        }
        var log = loggers(logname + '.log');
        return log;
    } else {
        return loadModule(path.join(__dirname, 'emptyLogger'));;
    }
}

exports.log = log;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 *
 * @author JarveinR
 *
 */

var LOGGERS = {};

module.exports = function (loggername) {
    try {
        if (loggername in LOGGERS) {
            return LOGGERS[loggername];
        } else {
            var BizagiLogger = __webpack_require__(21).BizagiLogger;
            LOGGERS[loggername] = new BizagiLogger(loggername);
            return LOGGERS[loggername];
        }
    } catch (e) {
        throw e;
    }
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Invalid number (23:44)\n\n\u001b[0m \u001b[90m 21 | \u001b[39m        \u001b[36mvar\u001b[39m loggerDirectory \u001b[33m=\u001b[39m path\u001b[33m.\u001b[39mjoin(config\u001b[33m.\u001b[39mlogsPath)\u001b[33m;\u001b[39m\n \u001b[90m 22 | \u001b[39m        \u001b[36mif\u001b[39m (\u001b[33m!\u001b[39mfs\u001b[33m.\u001b[39mexistsSync(loggerDirectory)){\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 23 | \u001b[39m            fsmk\u001b[33m.\u001b[39mmkdirSync(loggerDirectory\u001b[33m,\u001b[39m \u001b[35m0666\u001b[39m\u001b[33m,\u001b[39m \u001b[36mtrue\u001b[39m)\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m                                            \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 24 | \u001b[39m        }\n \u001b[90m 25 | \u001b[39m\n \u001b[90m 26 | \u001b[39m        \u001b[36mvar\u001b[39m configuration \u001b[33m=\u001b[39m {\u001b[0m\n");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bzUtil = __webpack_require__(0);

var _bzUtil2 = _interopRequireDefault(_bzUtil);

var _util = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (MongoClient) {
    return function (deps) {
        var globals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { authdata: {} };
        var actionName = arguments[2];
        var data = arguments[3];
        var authenticationType = arguments[4];
        var logger = arguments[5];
        var done = arguments[6];
        var _data$inputs$input$da = data.inputs.input.database,
            database = _data$inputs$input$da === undefined ? 'test' : _data$inputs$input$da;

        (0, _util.connect)(MongoClient, globals.authdata).then(function (client) {
            client.db(database).command({ buildInfo: 1 }).then(function (res) {
                done(_bzUtil2.default.getResponse(res, null, 200, null));
                client.close();
            }).catch((0, _util.error)(done));
        }).catch((0, _util.error)(done));
    };
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bzUtil = __webpack_require__(0);

var _bzUtil2 = _interopRequireDefault(_bzUtil);

var _util = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (MongoClient) {
    return function (deps) {
        var globals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { authdata: {} };
        var actionName = arguments[2];
        var data = arguments[3];
        var authenticationType = arguments[4];
        var logger = arguments[5];
        var done = arguments[6];
        var _data$inputs$input = data.inputs.input,
            _data$inputs$input$da = _data$inputs$input.database,
            database = _data$inputs$input$da === undefined ? 'test' : _data$inputs$input$da,
            command = _data$inputs$input.command;

        (0, _util.connect)(MongoClient, globals.authdata).then(function (client) {
            client.db(database).command(command).then(function (res) {
                done(_bzUtil2.default.getResponse(res, null, 200, null));
                client.close();
            }).catch((0, _util.error)(done));
        }).catch((0, _util.error)(done));
    };
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bzUtil = __webpack_require__(0);

var _bzUtil2 = _interopRequireDefault(_bzUtil);

var _util = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (MongoClient) {
    return function (deps) {
        var globals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { authdata: {} };
        var actionName = arguments[2];
        var data = arguments[3];
        var authenticationType = arguments[4];
        var logger = arguments[5];
        var done = arguments[6];
        var _data$inputs$input = data.inputs.input,
            _data$inputs$input$da = _data$inputs$input.database,
            database = _data$inputs$input$da === undefined ? 'test' : _data$inputs$input$da,
            command = _data$inputs$input.command;

        (0, _util.connect)(MongoClient, globals.authdata).then(function (client) {
            client.db(database).admin().listDatabases(function (err, _ref) {
                var databases = _ref.databases;

                if (err) {
                    (0, _util.error)(done)(err);
                    return;
                }
                client.close();
                done(_bzUtil2.default.getResponse(databases, null, 200, null));
            });
        }).catch((0, _util.error)(done));
    };
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bzUtil = __webpack_require__(0);

var _bzUtil2 = _interopRequireDefault(_bzUtil);

var _util = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (MongoClient) {
    return function (deps) {
        var globals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { authdata: {} };
        var actionName = arguments[2];
        var data = arguments[3];
        var authenticationType = arguments[4];
        var logger = arguments[5];
        var done = arguments[6];
        var _data$inputs$input = data.inputs.input,
            _data$inputs$input$da = _data$inputs$input.database,
            database = _data$inputs$input$da === undefined ? 'test' : _data$inputs$input$da,
            command = _data$inputs$input.command;

        (0, _util.connect)(MongoClient, globals.authdata).then(function (client) {
            client.db(database).admin().ping(function (err, _ref) {
                var databases = _ref.databases;

                if (err) {
                    (0, _util.error)(done)(err);
                    return;
                }
                client.close();
                done(_bzUtil2.default.getResponse(databases, null, 200, null));
            });
        }).catch((0, _util.error)(done));
    };
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bzUtil = __webpack_require__(0);

var _bzUtil2 = _interopRequireDefault(_bzUtil);

var _util = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (MongoClient) {
    return function (deps) {
        var globals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { authdata: {} };
        var actionName = arguments[2];
        var data = arguments[3];
        var authenticationType = arguments[4];
        var logger = arguments[5];
        var done = arguments[6];
        var _data$inputs$input = data.inputs.input,
            user = _data$inputs$input.user,
            pwd = _data$inputs$input.pwd,
            role = _data$inputs$input.role,
            _data$inputs$input$da = _data$inputs$input.database,
            database = _data$inputs$input$da === undefined ? 'test' : _data$inputs$input$da;

        (0, _util.connect)(MongoClient, globals.authdata).then(function (client) {
            var db = client.db(database);
            db.removeUser(user).then(function (res) {
                done(_bzUtil2.default.getResponse({ response: "User has ben deleted." }, null, 200, null));
                client.close();
            }).catch((0, _util.error)(done));
        }).catch((0, _util.error)(done));
    };
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bzUtil = __webpack_require__(0);

var _bzUtil2 = _interopRequireDefault(_bzUtil);

var _util = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (MongoClient) {
    return function (deps) {
        var globals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { authdata: {} };
        var actionName = arguments[2];
        var data = arguments[3];
        var authenticationType = arguments[4];
        var logger = arguments[5];
        var done = arguments[6];
        var _data$inputs$input = data.inputs.input,
            _data$inputs$input$da = _data$inputs$input.database,
            database = _data$inputs$input$da === undefined ? 'test' : _data$inputs$input$da,
            command = _data$inputs$input.command;

        (0, _util.connect)(MongoClient, globals.authdata).then(function (client) {
            client.db(database).admin().replSetGetStatus(function (err, response) {
                if (err) {
                    (0, _util.error)(done)(err);
                    return;
                }
                client.close();
                done(_bzUtil2.default.getResponse(response, null, 200, null));
            });
        }).catch((0, _util.error)(done));
    };
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bzUtil = __webpack_require__(0);

var _bzUtil2 = _interopRequireDefault(_bzUtil);

var _util = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (MongoClient) {
    return function (deps) {
        var globals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { authdata: {} };
        var actionName = arguments[2];
        var data = arguments[3];
        var authenticationType = arguments[4];
        var logger = arguments[5];
        var done = arguments[6];
        var _data$inputs$input = data.inputs.input,
            _data$inputs$input$da = _data$inputs$input.database,
            database = _data$inputs$input$da === undefined ? 'test' : _data$inputs$input$da,
            command = _data$inputs$input.command;

        (0, _util.connect)(MongoClient, globals.authdata).then(function (client) {
            client.db(database).admin().serverInfo(function (err, response) {
                if (err) {
                    (0, _util.error)(done)(err);
                    return;
                }
                client.close();
                done(_bzUtil2.default.getResponse(response, null, 200, null));
            });
        }).catch((0, _util.error)(done));
    };
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bzUtil = __webpack_require__(0);

var _bzUtil2 = _interopRequireDefault(_bzUtil);

var _util = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (MongoClient) {
    return function (deps) {
        var globals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { authdata: {} };
        var actionName = arguments[2];
        var data = arguments[3];
        var authenticationType = arguments[4];
        var logger = arguments[5];
        var done = arguments[6];
        var _data$inputs$input = data.inputs.input,
            _data$inputs$input$da = _data$inputs$input.database,
            database = _data$inputs$input$da === undefined ? 'test' : _data$inputs$input$da,
            command = _data$inputs$input.command;

        (0, _util.connect)(MongoClient, globals.authdata).then(function (client) {
            client.db(database).admin().serverStatus(function (err, response) {
                if (err) {
                    (0, _util.error)(done)(err);
                    return;
                }
                client.close();
                done(_bzUtil2.default.getResponse(response, null, 200, null));
            });
        }).catch((0, _util.error)(done));
    };
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bzUtil = __webpack_require__(0);

var _bzUtil2 = _interopRequireDefault(_bzUtil);

var _util = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (MongoClient) {
    return function (deps) {
        var globals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { authdata: {} };
        var actionName = arguments[2];
        var data = arguments[3];
        var authenticationType = arguments[4];
        var logger = arguments[5];
        var done = arguments[6];
        var _data$inputs$input = data.inputs.input,
            _data$inputs$input$da = _data$inputs$input.database,
            database = _data$inputs$input$da === undefined ? 'test' : _data$inputs$input$da,
            level = _data$inputs$input.level;

        (0, _util.connect)(MongoClient, globals.authdata).then(function (client) {
            client.db(database).setProfilingLevel(level, function (err, response) {
                if (err) {
                    (0, _util.error)(done)(err);
                    return;
                }
                client.close();
                done(_bzUtil2.default.getResponse({ response: response }, null, 200, null));
            });
        }).catch((0, _util.error)(done));
    };
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bzUtil = __webpack_require__(0);

var _bzUtil2 = _interopRequireDefault(_bzUtil);

var _util = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (MongoClient) {
    return function (deps) {
        var globals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { authdata: {} };
        var actionName = arguments[2];
        var data = arguments[3];
        var authenticationType = arguments[4];
        var logger = arguments[5];
        var done = arguments[6];
        var _data$inputs$input = data.inputs.input,
            _data$inputs$input$da = _data$inputs$input.database,
            database = _data$inputs$input$da === undefined ? 'test' : _data$inputs$input$da,
            collection = _data$inputs$input.collection;

        (0, _util.connect)(MongoClient, globals.authdata).then(function (client) {
            client.db(database).admin().validateCollection(collection, function (err, response) {
                if (err) {
                    (0, _util.error)(done)(err);
                    return;
                }
                client.close();
                done(_bzUtil2.default.getResponse(response, null, 200, null));
            });
        }).catch((0, _util.error)(done));
    };
};

/***/ })
/******/ ]);
});