/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 8146:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isCallable = __webpack_require__(2163);
var tryToString = __webpack_require__(368);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 8514:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isObject = __webpack_require__(3041);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ 4465:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var toIndexedObject = __webpack_require__(9130);
var toAbsoluteIndex = __webpack_require__(3828);
var lengthOfArrayLike = __webpack_require__(5474);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 9314:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__(6372);
var isArray = __webpack_require__(4778);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ }),

/***/ 4021:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(3074);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ 1401:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var hasOwn = __webpack_require__(1325);
var ownKeys = __webpack_require__(810);
var getOwnPropertyDescriptorModule = __webpack_require__(9206);
var definePropertyModule = __webpack_require__(6572);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ 7767:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__(6372);
var definePropertyModule = __webpack_require__(6572);
var createPropertyDescriptor = __webpack_require__(8602);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 8602:
/***/ ((module) => {


module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 4039:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isCallable = __webpack_require__(2163);
var definePropertyModule = __webpack_require__(6572);
var makeBuiltIn = __webpack_require__(5954);
var defineGlobalProperty = __webpack_require__(5861);

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ 5861:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var global = __webpack_require__(3406);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 6372:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var fails = __webpack_require__(7931);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ 5337:
/***/ ((module) => {


var documentAll = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA = typeof documentAll == 'undefined' && documentAll !== undefined;

module.exports = {
  all: documentAll,
  IS_HTMLDDA: IS_HTMLDDA
};


/***/ }),

/***/ 4193:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var global = __webpack_require__(3406);
var isObject = __webpack_require__(3041);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 6299:
/***/ ((module) => {


var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ 283:
/***/ ((module) => {


module.exports = typeof navigator != 'undefined' && String(navigator.userAgent) || '';


/***/ }),

/***/ 5111:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var global = __webpack_require__(3406);
var userAgent = __webpack_require__(283);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ 6606:
/***/ ((module) => {


// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 5942:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var global = __webpack_require__(3406);
var getOwnPropertyDescriptor = (__webpack_require__(9206).f);
var createNonEnumerableProperty = __webpack_require__(7767);
var defineBuiltIn = __webpack_require__(4039);
var defineGlobalProperty = __webpack_require__(5861);
var copyConstructorProperties = __webpack_require__(1401);
var isForced = __webpack_require__(1637);

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 7931:
/***/ ((module) => {


module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 2637:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var fails = __webpack_require__(7931);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ 8624:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var NATIVE_BIND = __webpack_require__(2637);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ 233:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__(6372);
var hasOwn = __webpack_require__(1325);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ 3074:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var NATIVE_BIND = __webpack_require__(2637);

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ 9997:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var global = __webpack_require__(3406);
var isCallable = __webpack_require__(2163);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 4462:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var aCallable = __webpack_require__(8146);
var isNullOrUndefined = __webpack_require__(7900);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ 3406:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || this || Function('return this')();


/***/ }),

/***/ 1325:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(3074);
var toObject = __webpack_require__(7410);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ 3730:
/***/ ((module) => {


module.exports = {};


/***/ }),

/***/ 3202:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__(6372);
var fails = __webpack_require__(7931);
var createElement = __webpack_require__(4193);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ 2170:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(3074);
var fails = __webpack_require__(7931);
var classof = __webpack_require__(4021);

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ 2089:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(3074);
var isCallable = __webpack_require__(2163);
var store = __webpack_require__(2846);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 3987:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var NATIVE_WEAK_MAP = __webpack_require__(4617);
var global = __webpack_require__(3406);
var isObject = __webpack_require__(3041);
var createNonEnumerableProperty = __webpack_require__(7767);
var hasOwn = __webpack_require__(1325);
var shared = __webpack_require__(2846);
var sharedKey = __webpack_require__(1320);
var hiddenKeys = __webpack_require__(3730);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 4778:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var classof = __webpack_require__(4021);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ 2163:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var $documentAll = __webpack_require__(5337);

var documentAll = $documentAll.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ 1637:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var fails = __webpack_require__(7931);
var isCallable = __webpack_require__(2163);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 7900:
/***/ ((module) => {


// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ 3041:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isCallable = __webpack_require__(2163);
var $documentAll = __webpack_require__(5337);

var documentAll = $documentAll.all;

module.exports = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ 2884:
/***/ ((module) => {


module.exports = false;


/***/ }),

/***/ 5666:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var getBuiltIn = __webpack_require__(9997);
var isCallable = __webpack_require__(2163);
var isPrototypeOf = __webpack_require__(3071);
var USE_SYMBOL_AS_UID = __webpack_require__(9525);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ 5474:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var toLength = __webpack_require__(1403);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ 5954:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(3074);
var fails = __webpack_require__(7931);
var isCallable = __webpack_require__(2163);
var hasOwn = __webpack_require__(1325);
var DESCRIPTORS = __webpack_require__(6372);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(233).CONFIGURABLE);
var inspectSource = __webpack_require__(2089);
var InternalStateModule = __webpack_require__(3987);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ 855:
/***/ ((module) => {


var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ 6572:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__(6372);
var IE8_DOM_DEFINE = __webpack_require__(3202);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(8814);
var anObject = __webpack_require__(8514);
var toPropertyKey = __webpack_require__(1973);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 9206:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__(6372);
var call = __webpack_require__(8624);
var propertyIsEnumerableModule = __webpack_require__(2251);
var createPropertyDescriptor = __webpack_require__(8602);
var toIndexedObject = __webpack_require__(9130);
var toPropertyKey = __webpack_require__(1973);
var hasOwn = __webpack_require__(1325);
var IE8_DOM_DEFINE = __webpack_require__(3202);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ 3311:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var internalObjectKeys = __webpack_require__(1429);
var enumBugKeys = __webpack_require__(6606);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 395:
/***/ ((__unused_webpack_module, exports) => {


// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 3071:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(3074);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ 1429:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(3074);
var hasOwn = __webpack_require__(1325);
var toIndexedObject = __webpack_require__(9130);
var indexOf = (__webpack_require__(4465).indexOf);
var hiddenKeys = __webpack_require__(3730);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ 2251:
/***/ ((__unused_webpack_module, exports) => {


var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 9207:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var call = __webpack_require__(8624);
var isCallable = __webpack_require__(2163);
var isObject = __webpack_require__(3041);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 810:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var getBuiltIn = __webpack_require__(9997);
var uncurryThis = __webpack_require__(3074);
var getOwnPropertyNamesModule = __webpack_require__(3311);
var getOwnPropertySymbolsModule = __webpack_require__(395);
var anObject = __webpack_require__(8514);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 5727:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isNullOrUndefined = __webpack_require__(7900);

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 1320:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var shared = __webpack_require__(8519);
var uid = __webpack_require__(6004);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 2846:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var global = __webpack_require__(3406);
var defineGlobalProperty = __webpack_require__(5861);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),

/***/ 8519:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var IS_PURE = __webpack_require__(2884);
var store = __webpack_require__(2846);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.32.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.32.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ 3874:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(5111);
var fails = __webpack_require__(7931);
var global = __webpack_require__(3406);

var $String = global.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 3828:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var toIntegerOrInfinity = __webpack_require__(400);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 9130:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(2170);
var requireObjectCoercible = __webpack_require__(5727);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 400:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var trunc = __webpack_require__(855);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ 1403:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var toIntegerOrInfinity = __webpack_require__(400);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 7410:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var requireObjectCoercible = __webpack_require__(5727);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 8732:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var call = __webpack_require__(8624);
var isObject = __webpack_require__(3041);
var isSymbol = __webpack_require__(5666);
var getMethod = __webpack_require__(4462);
var ordinaryToPrimitive = __webpack_require__(9207);
var wellKnownSymbol = __webpack_require__(4259);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ 1973:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var toPrimitive = __webpack_require__(8732);
var isSymbol = __webpack_require__(5666);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ 368:
/***/ ((module) => {


var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ 6004:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(3074);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ 9525:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(3874);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 8814:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__(6372);
var fails = __webpack_require__(7931);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ 4617:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var global = __webpack_require__(3406);
var isCallable = __webpack_require__(2163);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ 4259:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var global = __webpack_require__(3406);
var shared = __webpack_require__(8519);
var hasOwn = __webpack_require__(1325);
var uid = __webpack_require__(6004);
var NATIVE_SYMBOL = __webpack_require__(3874);
var USE_SYMBOL_AS_UID = __webpack_require__(9525);

var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 4252:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(5942);
var toObject = __webpack_require__(7410);
var lengthOfArrayLike = __webpack_require__(5474);
var setArrayLength = __webpack_require__(9314);
var doesNotExceedSafeInteger = __webpack_require__(6299);
var fails = __webpack_require__(7931);

var INCORRECT_TO_LENGTH = fails(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 and Safari <= 15.4, FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength(O, len);
    return len;
  }
});


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(4252);
;// CONCATENATED MODULE: ./Extension/src/content-script/devtools/devtools-rules-constructor.js
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ /**
 * DevTools rules constructor helper
 */ 
const DevToolsRulesConstructor = function() {
    const CSS_RULE_MARK = "##";
    const RULE_OPTIONS_MARK = "$";
    const URLBLOCK_ATTRIBUTES = [
        "src",
        "data"
    ];
    const linkHelper = document.createElement("a");
    /**
     * Constructs css selector for element using tag name, id and classed, like: tagName#id.class1.class2
     *
     * @param element Element
     * @param classList Override element classes (If classList is null, element classes will be used)
     * @param excludeTagName Omit tag name in selector
     * @param excludeId Omit element id in selector
     * @returns {string}
     */ const makeDefaultCssFilter = function(element, classList, excludeTagName, excludeId) {
        let cssSelector = excludeTagName ? "" : element.tagName.toLowerCase();
        if (element.id && !excludeId) {
            cssSelector += `#${CSS.escape(element.id)}`;
        }
        cssSelector += constructClassCssSelectorByAND(classList || element.classList);
        return cssSelector;
    };
    /**
     * Constructs css selector for element using parent elements and nth-child (first-child, last-child) pseudo classes.
     *
     * @param element Element
     * @param options Construct options. For example: {excludeTagName: false, excludeId: false, classList: []}
     * @returns {string}
     */ const makeCssNthChildFilter = function(element, options) {
        options = options || {};
        const { classList } = options;
        const excludeTagNameOverride = "excludeTagName" in options;
        const { excludeTagName } = options;
        const excludeIdOverride = "excludeId" in options;
        const { excludeId } = options;
        const path = [];
        let el = element;
        while(el.parentNode){
            const nodeName = el && el.nodeName ? el.nodeName.toUpperCase() : "";
            if (nodeName === "BODY" && path.length === 0) {
                const bodySelector = makeDefaultCssFilter(el, classList, excludeTagNameOverride ? excludeTagName : false, excludeId);
                path.unshift(bodySelector);
                break;
            }
            if (nodeName === "BODY") {
                break;
            }
            if (el.id) {
                /**
                 * Be default we don't include tag name and classes to selector for element with id attribute
                 */ let cssSelector = "";
                if (el === element) {
                    cssSelector = makeDefaultCssFilter(el, classList || [], excludeTagNameOverride ? excludeTagName : true, excludeIdOverride ? excludeId : false);
                } else {
                    cssSelector = makeDefaultCssFilter(el, [], true, false);
                }
                path.unshift(cssSelector);
                break;
            } else {
                let c = 1;
                for(let e = el; e.previousSibling; e = e.previousSibling){
                    if (e.previousSibling.nodeType === 1) {
                        c += 1;
                    }
                }
                let cldCount = 0;
                for(let i = 0; el.parentNode && i < el.parentNode.childNodes.length; i += 1){
                    cldCount += el.parentNode.childNodes[i].nodeType === 1 ? 1 : 0;
                }
                let ch;
                if (cldCount === 0 || cldCount === 1) {
                    ch = "";
                } else if (c === 1) {
                    ch = ":first-child";
                } else if (c === cldCount) {
                    ch = ":last-child";
                } else {
                    ch = `:nth-child(${c})`;
                }
                /**
                 * By default we include tag name and element classes to selector for element without id attribute
                 */ if (el === element) {
                    let p = makeDefaultCssFilter(el, classList, excludeTagNameOverride ? excludeTagName : false, excludeId);
                    p += ch;
                    path.unshift(p);
                } else {
                    path.unshift(makeDefaultCssFilter(el, el.classList, false, false) + ch);
                }
                el = el.parentNode;
            }
        }
        return path.join(" > ");
    };
    /**
     * Constructs css selector by combining classes by AND.
     *
     * @param classList
     * @returns {string}
     */ const constructClassCssSelectorByAND = function(classList) {
        const selectors = [];
        if (classList) {
            for(let i = 0; i < classList.length; i += 1){
                selectors.push(`.${CSS.escape(classList[i])}`);
            }
        }
        return selectors.join("");
    };
    /**
     * Constructs css selector by combining classes by OR.
     *
     * @param classList
     * @returns {string}
     */ const constructClassCssSelectorByOR = function(classList) {
        const selectors = [];
        if (classList) {
            for(let i = 0; i < classList.length; i += 1){
                selectors.push(`.${CSS.escape(classList[i])}`);
            }
        }
        return selectors.join(", ");
    };
    /**
     * Constructs element selector for matching elements that contain any of classes in original element
     * For example <el class="cl1 cl2 cl3"></el> => .cl1, .cl2, .cl3
     *
     * @param element Element
     * @param classList Override element classes (If classList is null, element classes will be used)
     * @returns {string}
     */ const makeSimilarCssFilter = function(element, classList) {
        return constructClassCssSelectorByOR(classList || element.classList);
    };
    /**
     * Creates css rule text.
     *
     * @param element Element
     * @param options Construct options.
     * For example: {cssSelectorType: 'STRICT_FULL', excludeTagName: false, excludeId: false, classList: []}
     * @returns {string}
     */ const constructCssRuleText = function(element, options) {
        if (!element) {
            return;
        }
        options = options || {};
        const cssSelectorType = options.cssSelectorType || "STRICT_FULL";
        let selector;
        switch(cssSelectorType){
            case "STRICT_FULL":
                selector = makeCssNthChildFilter(element, options);
                break;
            case "STRICT":
                selector = makeDefaultCssFilter(element, options.classList, options.excludeTagName, options.excludeId);
                break;
            case "SIMILAR":
                selector = makeSimilarCssFilter(element, options.classList, true);
                break;
            default:
        }
        return selector ? CSS_RULE_MARK + selector : "";
    };
    const isValidUrl = function(value) {
        if (value) {
            linkHelper.href = value;
            if (linkHelper.hostname) {
                return true;
            }
        }
        return false;
    };
    const haveUrlBlockParameter = function(element) {
        const value = getUrlBlockAttribute(element);
        return value && value !== "";
    };
    const haveClassAttribute = function(element) {
        return element.classList && element.classList.length > 0;
    };
    const haveIdAttribute = function(element) {
        return element.id && element.id.trim() !== "";
    };
    const cropDomain = function(url) {
        const domain = getUrl(url).host;
        return domain.replace("www.", "").replace(/:\d+/, "");
    };
    const getUrl = function(url) {
        const pattern = "^(([^:/\\?#]+):)?(//(([^:/\\?#]*)(?::([^/\\?#]*))?))?([^\\?#]*)(\\?([^#]*))?(#(.*))?$";
        const rx = new RegExp(pattern);
        const parts = rx.exec(url);
        return {
            host: parts[4] || "",
            path: parts[7] || ""
        };
    };
    const constructUrlBlockRuleText = function(element, urlBlockAttribute, oneDomain, domain) {
        if (!urlBlockAttribute) {
            return null;
        }
        let blockUrlRuleText = urlBlockAttribute.replace(/^http:\/\/(www\.)?/, "||");
        if (blockUrlRuleText.indexOf(".") === 0) {
            blockUrlRuleText = blockUrlRuleText.substring(1);
        }
        if (!oneDomain) {
            blockUrlRuleText = `${blockUrlRuleText + RULE_OPTIONS_MARK}domain=${domain}`;
        }
        return blockUrlRuleText;
    };
    const getUrlBlockAttribute = function(element) {
        if (!element || !element.getAttribute) {
            return null;
        }
        for(let i = 0; i < URLBLOCK_ATTRIBUTES.length; i += 1){
            const attr = URLBLOCK_ATTRIBUTES[i];
            const value = element.getAttribute(attr);
            if (isValidUrl(value)) {
                return value;
            }
        }
        return null;
    };
    /**
     * Returns detailed element info.
     *
     * @param element
     */ const getElementInfo = function(element) {
        // Convert attributes to array
        const attributes = [];
        const elementAttributes = element.attributes;
        if (elementAttributes) {
            for(let i = 0; i < elementAttributes.length; i += 1){
                const attr = elementAttributes[i];
                attributes.push({
                    name: attr.name,
                    value: attr.value
                });
            }
        }
        return {
            tagName: element.tagName,
            attributes,
            urlBlockAttributeValue: getUrlBlockAttribute(element),
            haveUrlBlockParameter: haveUrlBlockParameter(element),
            haveClassAttribute: haveClassAttribute(element),
            haveIdAttribute: haveIdAttribute(element)
        };
    };
    /**
     * Constructs css selector for specified rule.
     *
     * @param ruleText rule text
     * @returns {string} css style selector
     */ const constructRuleCssSelector = function(ruleText) {
        if (!ruleText) {
            return null;
        }
        const index = ruleText.indexOf(CSS_RULE_MARK);
        const optionsIndex = ruleText.indexOf(RULE_OPTIONS_MARK);
        if (index >= 0) {
            return ruleText.substring(index + CSS_RULE_MARK.length, optionsIndex >= 0 ? optionsIndex : ruleText.length);
        }
        let s = ruleText.substring(0, optionsIndex);
        s = s.replace(/[\|]|[\^]/g, "");
        if (isValidUrl(s)) {
            return `[src*="${s}"]`;
        }
        return null;
    };
    /**
     * Constructs adguard rule text from element node and specified options.
     *
     * var options = {
     *  urlBlockAttribute: url mask,
     *  isBlockOneDomain: boolean,
     *  url: url,
     *  attributes: attributesSelectorText,
     *  ruleType: (URL, CSS)
     *  cssSelectorType: (STRICT_FULL, STRICT, SIMILAR),
     *  excludeTagName: false, (Exclude element tag name from selector)
     *  excludeId: false, (Exclude element identifier from selector)
     *  classList: [] (Override element classes (If classList is null, element classes will be used))
     * }
     *
     * @param element
     * @param options
     * @returns {*}
     */ const constructRuleText = function(element, options) {
        const croppedDomain = cropDomain(options.url);
        const { ruleType } = options;
        if (ruleType === "URL") {
            const blockUrlRuleText = constructUrlBlockRuleText(element, options.urlMask, options.isBlockOneDomain, croppedDomain);
            if (blockUrlRuleText) {
                return blockUrlRuleText;
            }
        }
        let result;
        if (ruleType === "CSS") {
            result = constructCssRuleText(element, options);
            // Append html attributes to css selector
            if (options.attributes) {
                result = (result || CSS_RULE_MARK + result) + options.attributes;
            }
        }
        if (!options.isBlockOneDomain) {
            result = croppedDomain + result;
        }
        return result;
    };
    return {
        getElementInfo,
        constructRuleCssSelector,
        constructRuleText
    };
}();

;// CONCATENATED MODULE: ./Extension/src/content-script/devtools/devtools-helper.js
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 
/**
 * Helper object that provides methods used in devtools panel's code
 * Methods are invoked via inspectedWindow.eval function.
 * https://developer.chrome.com/extensions/devtools_inspectedWindow#method-eval
 *
 */ const DevToolsHelper = function() {
    const PREVIEW_STYLE_ID = "adguard-preview-style";
    /**
     * Add rule preview.
     *
     * @param options Object {ruleText: 'ruleText'}
     */ const applyPreview = function(options) {
        const { ruleText } = options;
        const head = document.getElementsByTagName("head")[0];
        if (!head) {
            return;
        }
        const selector = DevToolsRulesConstructor.constructRuleCssSelector(ruleText);
        if (!selector) {
            return;
        }
        const style = document.createElement("style");
        style.setAttribute("type", "text/css");
        style.setAttribute("id", PREVIEW_STYLE_ID);
        style.appendChild(document.createTextNode(`${selector} {display: none !important;}`));
        head.appendChild(style);
    };
    /**
     * Cancel early applied preview
     */ const cancelPreview = function() {
        const head = document.getElementsByTagName("head")[0];
        if (!head) {
            return;
        }
        const style = document.getElementById(PREVIEW_STYLE_ID);
        if (style) {
            head.removeChild(style);
        }
    };
    return {
        applyPreview,
        cancelPreview
    };
}();

;// CONCATENATED MODULE: ./Extension/src/content-script/devtools/devtools.js
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 

const init = ()=>{
    __webpack_require__.g.DevToolsRulesConstructor = DevToolsRulesConstructor;
    __webpack_require__.g.DevToolsHelper = DevToolsHelper;
};
const devtools = {
    init
};

;// CONCATENATED MODULE: ./Extension/pages/content-script-end/index.js
/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ /**
 * !IMPORTANT Only chrome based browsers support devtools, we cut off devtools for other browsers
 */ 
devtools.init();
})();

/******/ })()
;