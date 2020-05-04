(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}




var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log = F2(function(tag, value)
{
	return value;
});

var _Debug_log_UNUSED = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString(value)
{
	return '<internals>';
}

function _Debug_toString_UNUSED(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.N.C === region.T.C)
	{
		return 'on line ' + region.N.C;
	}
	return 'on lines ' + region.N.C + ' through ' + region.T.C;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**_UNUSED/
	if (x.$ === 'Set_elm_builtin')
	{
		x = elm$core$Set$toList(x);
		y = elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	/**/
	if (x.$ < 0)
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**_UNUSED/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**/
	if (typeof x.$ === 'undefined')
	//*/
	/**_UNUSED/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? elm$core$Basics$LT : n ? elm$core$Basics$GT : elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0 = 0;
var _Utils_Tuple0_UNUSED = { $: '#0' };

function _Utils_Tuple2(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2_UNUSED(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3_UNUSED(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr(c) { return c; }
function _Utils_chr_UNUSED(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil = { $: 0 };
var _List_Nil_UNUSED = { $: '[]' };

function _List_Cons(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons_UNUSED(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === elm$core$Basics$EQ ? 0 : ord === elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? elm$core$Maybe$Nothing
		: elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? elm$core$Maybe$Just(n) : elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});



function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**_UNUSED/
function _Json_errorToString(error)
{
	return elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? elm$core$Result$Ok(value)
		: (value instanceof String)
			? elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!elm$core$Result$isOk(result))
					{
						return elm$core$Result$Err(A2(elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return elm$core$Result$Ok(elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if (elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return elm$core$Result$Err(elm$json$Json$Decode$OneOf(elm$core$List$reverse(errors)));

		case 1:
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!elm$core$Result$isOk(result))
		{
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2(elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap_UNUSED(value) { return { $: 0, a: value }; }
function _Json_unwrap_UNUSED(value) { return value.a; }

function _Json_wrap(value) { return value; }
function _Json_unwrap(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.aB,
		impl.aL,
		impl.aI,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	elm$core$Result$isOk(result) || _Debug_crash(2 /**_UNUSED/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**/
	var node = args['node'];
	//*/
	/**_UNUSED/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2(elm$json$Json$Decode$map, func, handler.a)
				:
			A3(elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		p: func(record.p),
		O: record.O,
		M: record.M
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.p;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.O;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.M) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.aB,
		impl.aL,
		impl.aI,
		function(sendToApp, initialModel) {
			var view = impl.aN;
			/**/
			var domNode = args['node'];
			//*/
			/**_UNUSED/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.aB,
		impl.aL,
		impl.aI,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.D && impl.D(sendToApp)
			var view = impl.aN;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.at);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.aK) && (_VirtualDom_doc.title = title = doc.aK);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.aD;
	var onUrlRequest = impl.aE;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		D: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.af === next.af
							&& curr.X === next.X
							&& curr.ac.a === next.ac.a
						)
							? elm$browser$Browser$Internal(next)
							: elm$browser$Browser$External(href)
					));
				}
			});
		},
		aB: function(flags)
		{
			return A3(impl.aB, flags, _Browser_getUrl(), key);
		},
		aN: impl.aN,
		aL: impl.aL,
		aI: impl.aI
	});
}

function _Browser_getUrl()
{
	return elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return elm$core$Result$isOk(result) ? elm$core$Maybe$Just(result.a) : elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { az: 'hidden', au: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { az: 'mozHidden', au: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { az: 'msHidden', au: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { az: 'webkitHidden', au: 'webkitvisibilitychange' }
		: { az: 'hidden', au: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail(elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		aj: _Browser_getScene(),
		an: {
			ap: _Browser_window.pageXOffset,
			aq: _Browser_window.pageYOffset,
			ao: _Browser_doc.documentElement.clientWidth,
			W: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		ao: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		W: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			aj: {
				ao: node.scrollWidth,
				W: node.scrollHeight
			},
			an: {
				ap: node.scrollLeft,
				aq: node.scrollTop,
				ao: node.clientWidth,
				W: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			aj: _Browser_getScene(),
			an: {
				ap: x,
				aq: y,
				ao: _Browser_doc.documentElement.clientWidth,
				W: _Browser_doc.documentElement.clientHeight
			},
			aw: {
				ap: x + rect.left,
				aq: y + rect.top,
				ao: rect.width,
				W: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}



function _Time_now(millisToPosix)
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(millisToPosix(Date.now())));
	});
}

var _Time_setInterval = F2(function(interval, task)
{
	return _Scheduler_binding(function(callback)
	{
		var id = setInterval(function() { _Scheduler_rawSpawn(task); }, interval);
		return function() { clearInterval(id); };
	});
});

function _Time_here()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(
			A2(elm$time$Time$customZone, -(new Date().getTimezoneOffset()), _List_Nil)
		));
	});
}


function _Time_getZoneName()
{
	return _Scheduler_binding(function(callback)
	{
		try
		{
			var name = elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
		}
		catch (e)
		{
			var name = elm$time$Time$Offset(new Date().getTimezoneOffset());
		}
		callback(_Scheduler_succeed(name));
	});
}
var author$project$Main$Randomize = function (a) {
	return {$: 0, a: a};
};
var author$project$Main$Ready = {$: 0};
var elm$core$Basics$EQ = 1;
var elm$core$Basics$LT = 0;
var elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var elm$core$Array$foldr = F3(
	function (func, baseCase, _n0) {
		var tree = _n0.c;
		var tail = _n0.d;
		var helper = F2(
			function (node, acc) {
				if (!node.$) {
					var subTree = node.a;
					return A3(elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3(elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			elm$core$Elm$JsArray$foldr,
			helper,
			A3(elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var elm$core$List$cons = _List_cons;
var elm$core$Array$toList = function (array) {
	return A3(elm$core$Array$foldr, elm$core$List$cons, _List_Nil, array);
};
var elm$core$Basics$GT = 2;
var elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === -2) {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3(elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var elm$core$Dict$toList = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var elm$core$Dict$keys = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2(elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var elm$core$Set$toList = function (_n0) {
	var dict = _n0;
	return elm$core$Dict$keys(dict);
};
var author$project$Main$initial = {Q: 0, J: _List_Nil, l: author$project$Main$Ready, x: 0, y: _List_Nil};
var author$project$Main$RandomPhrase = F3(
	function (target, suggestions, percentage) {
		return {aG: percentage, aJ: suggestions, F: target};
	});
var author$project$Main$blockCount = 4;
var elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var elm$core$Basics$add = _Basics_add;
var elm$core$Basics$gt = _Utils_gt;
var elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var elm$core$List$reverse = function (list) {
	return A3(elm$core$List$foldl, elm$core$List$cons, _List_Nil, list);
};
var elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							elm$core$List$foldl,
							fn,
							acc,
							elm$core$List$reverse(r4)) : A4(elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4(elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3(elm$core$List$foldr, elm$core$List$cons, ys, xs);
		}
	});
var elm$core$List$concat = function (lists) {
	return A3(elm$core$List$foldr, elm$core$List$append, _List_Nil, lists);
};
var elm$core$Basics$le = _Utils_le;
var elm$core$Basics$sub = _Basics_sub;
var elm$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (n <= 0) {
				return result;
			} else {
				var $temp$result = A2(elm$core$List$cons, value, result),
					$temp$n = n - 1,
					$temp$value = value;
				result = $temp$result;
				n = $temp$n;
				value = $temp$value;
				continue repeatHelp;
			}
		}
	});
var elm$core$List$repeat = F2(
	function (n, value) {
		return A3(elm$core$List$repeatHelp, _List_Nil, n, value);
	});
var author$project$Main$timepoints = elm$core$List$concat(
	A2(
		elm$core$List$repeat,
		author$project$Main$blockCount,
		_List_fromArray(
			[0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0])));
var author$project$Phrase$Phrase = F2(
	function (target, variants) {
		return {F: target, am: variants};
	});
var elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2(elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var elm$core$List$takeTailRec = F2(
	function (n, list) {
		return elm$core$List$reverse(
			A3(elm$core$List$takeReverse, n, list, _List_Nil));
	});
var elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _n0 = _Utils_Tuple2(n, list);
			_n0$1:
			while (true) {
				_n0$5:
				while (true) {
					if (!_n0.b.b) {
						return list;
					} else {
						if (_n0.b.b.b) {
							switch (_n0.a) {
								case 1:
									break _n0$1;
								case 2:
									var _n2 = _n0.b;
									var x = _n2.a;
									var _n3 = _n2.b;
									var y = _n3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_n0.b.b.b.b) {
										var _n4 = _n0.b;
										var x = _n4.a;
										var _n5 = _n4.b;
										var y = _n5.a;
										var _n6 = _n5.b;
										var z = _n6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _n0$5;
									}
								default:
									if (_n0.b.b.b.b && _n0.b.b.b.b.b) {
										var _n7 = _n0.b;
										var x = _n7.a;
										var _n8 = _n7.b;
										var y = _n8.a;
										var _n9 = _n8.b;
										var z = _n9.a;
										var _n10 = _n9.b;
										var w = _n10.a;
										var tl = _n10.b;
										return (ctr > 1000) ? A2(
											elm$core$List$cons,
											x,
											A2(
												elm$core$List$cons,
												y,
												A2(
													elm$core$List$cons,
													z,
													A2(
														elm$core$List$cons,
														w,
														A2(elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											elm$core$List$cons,
											x,
											A2(
												elm$core$List$cons,
												y,
												A2(
													elm$core$List$cons,
													z,
													A2(
														elm$core$List$cons,
														w,
														A3(elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _n0$5;
									}
							}
						} else {
							if (_n0.a === 1) {
								break _n0$1;
							} else {
								break _n0$5;
							}
						}
					}
				}
				return list;
			}
			var _n1 = _n0.b;
			var x = _n1.a;
			return _List_fromArray(
				[x]);
		}
	});
var elm$core$List$take = F2(
	function (n, list) {
		return A3(elm$core$List$takeFast, 0, n, list);
	});
var author$project$Phrase$linesToPhrases = function (list) {
	var _n0 = A2(elm$core$List$take, 4, list);
	if (!_n0.b) {
		return _List_Nil;
	} else {
		var target = _n0.a;
		var variants = _n0.b;
		return A2(
			elm$core$List$cons,
			A2(author$project$Phrase$Phrase, target, variants),
			author$project$Phrase$linesToPhrases(
				A2(elm$core$List$drop, 4, list)));
	}
};
var author$project$Phrase$stringData = '\r\n    my watch fell in the water\r\n    my watch fell in the crevasse\r\n    my watch fell on the floor\r\n    my watch fell to the floor\r\n    prevailing wind from the east\r\n    prevailing wind from the Arabian Sea\r\n    prevailing wind from all directions\r\n    prevailing wind from the left\r\n    never too rich and never too thin\r\n    never too rich or too poor\r\n    never too rich and never too poor\r\n    never too rich and not too poor\r\n    I can see the rings on Saturn\r\n    I can see it clearly now\r\n    I can see the whole of this floor\r\n    I can see the excitement in her eyes\r\n    physics and chemistry are hard\r\n    physics and chemistry research\r\n    physics and chemistry\r\n    physics and chemistry are at the center\r\n    my bank account is overdrawn\r\n    my bank account\r\n    my bank account has been frozen\r\n    my bank account was toast\r\n    elections bring out the best\r\n    elections bring out some very interesting results\r\n    elections bring out the party machine\r\n    elections bring out the worst in people\r\n    a problem with the engine\r\n    a problem with Windows?\r\n    a problem with exactly this sort of interpretation\r\n    a problem with this update\r\n    elephants are afraid of mice\r\n    elephants are afraid of them\r\n    elephants are afraid of fire\r\n    elephants are afraid of human beings\r\n    my favorite place to visit\r\n    my favorite place to meet and hang out\r\n    my favorite place to eat\r\n    my favorite place to eat in the world\r\n    three two one zero blast off\r\n    three two one!\r\n    three two one two two threes\r\n    three two one zero\r\n    my favorite subject is psychology\r\n    my favorite subject\r\n    my favorite subject to write about\r\n    my favorite subject of all time\r\n    watch out for low flying objects\r\n    watch out for this next thing\r\n    watch out for low prices and fast delivery!\r\n    watch out for it\r\n    please provide your date of birth\r\n    please provide your correct billing and shipping address\r\n    please provide your shipping address in the comments below\r\n    please provide your name, email address, city\r\n    we run the risk of failure\r\n    we run the University\r\n    we run the numbers again\r\n    we run the world\r\n    prayer in schools offends some\r\n    prayer in schools\r\n    prayer in schools and religious centers\r\n    prayer in schools throughout the world\r\n    he is just like everyone else\r\n    he is just like you\r\n    he is just like him\r\n    he is just like us\r\n    great disturbance in the force\r\n    great disturbance in the Force\r\n    great disturbance in the force of nature\r\n    great disturbance in the fabric of the universe\r\n    you must be getting old\r\n    you must be a lawyer to practice\r\n    you must be logged in and create an account\r\n    you must be kidding me\r\n    the world is a stage\r\n    the world is not the world\r\n    the world is a dangerous place\r\n    the world is a dirty place\r\n    can I skate with sister today\r\n    can I skate with you?\r\n    can I skate with them\r\n    can I skate with you guys on the surface?\r\n    neither a borrower nor a lender be\r\n    neither a borrower nor a lender be allowed\r\n    neither a borrower nor a lender be guilty\r\n    neither a borrower nor a lender\r\n    one heck of a question\r\n    one heck of a show this one\r\n    one heck of a long time\r\n    one heck of a reindeer!\r\n    question that must be answered\r\n    question that must be answered by both students\r\n    question that must be addressed\r\n    question that must be answered: Who is worthy?\r\n    beware the ides of March\r\n    beware the ides of April!\r\n    beware the ides of the sun i\r\n    beware the ides of March, 9\r\n    double double toil and trouble\r\n    double double toil to come up with?\r\n    double double toil\r\n    double double toil and trouble for Mr\r\n    the force is with you\r\n    the force is always with us\r\n    the force is going to be with you\r\n    the force is a strong one\r\n    you are not a jedi yet\r\n    you are not a member of the militia\r\n    you are not a journalist\r\n    you are not a woman, you are I\r\n    an offer you cannot refuse\r\n    an offer you might not want to make\r\n    an offer you-know-whats\r\n    an offer you\r\n    are you talking to me\r\n    are you talking about that story?\r\n    are you talking about where you live?\r\n    are you talking about a change in strategy?\r\n    yes you are very smart\r\n    yes you are definitely not doing anything necessary\r\n    yes you are a man of the people!\r\n    yes you are\r\n    all work and no play\r\n    all work and the jury came out fine\r\n    all work and go out on their own\r\n    all work and should be accessible to all\r\n    hair gel is very greasy\r\n    hair gel is essential for cushioning and cooling!\r\n    hair gel is a good thing\r\n    hair gel is no exception to this rule\r\n    Valium in the economy size\r\n    Valium in the home\r\n    Valium in the US\r\n    Valium in the Workplace and Research\r\n    the facts get in the way\r\n    the facts get in the way of the narrative!\r\n    the facts get kind of messed up\r\n    the facts get stranger and stranger\r\n    did you have a good time\r\n    did you have a party?\r\n    did you have a wet dream last night?\r\n    did you have one of those in 1951?\r\n    space is a high priority\r\n    space is a place, not a person\r\n    space is a representation of world-space\r\n    space is a pretty simple extension of the\r\n    you are a wonderful example\r\n    you are a person, right?\r\n    you are a bad father!\r\n    you are a traitor to humanity\r\n    do not squander your time\r\n    do not squander your time on this\r\n    do not squander my youth\r\n    do not squander their resources in vain\r\n    do not drink too much\r\n    do not drink or eat anything other than water\r\n    do not drink or smoke\r\n    do not drink or do drugs, never\r\n    popularity is desired by all\r\n    popularity is desired or disapproved of\r\n    popularity is desired, without fear\r\n    popularity is desired\r\n    the music is better than it sounds\r\n    the music is better than the words\r\n    the music is better than it was last year\r\n    the music is better than his\r\n    drove my chevy to the levee\r\n    drove my chevy to the dealership\r\n    drove my chevy pickup home\r\n    drove my chevy to the shop\r\n    but the levee was dry\r\n    but the levee is about 15 ft\r\n    but the levee breaches have now closed\r\n    but the levee broke on April 9\r\n    I took the rover from the shop\r\n    I took the rover from home\r\n    I took the rover off the ground\r\n    I took the rover to check it\r\n    movie about a nutty professor\r\n    movie about a zombie, by the way\r\n    movie about a US\r\n    movie about a gangster Godfather\r\n    come and see our new car\r\n    come and see if they are in\r\n    come and see what they have to say\r\n    come and see for yourself\r\n    coming up with killer sound bites\r\n    coming up with his repertory\r\n    coming up with a fix\r\n    coming up with an answer I really care about\r\n    I am going to a music lesson\r\n    I am going to a conference\r\n    I am going to a doctor\r\n    I am going to a gun range\r\n    the opposing team is over there\r\n    the opposing team is playing too aggressively\r\n    the opposing team\r\n    the opposing team members\r\n    soon we will return from the city\r\n    soon we will have made history yet again\r\n    soon we will have a beach-head inland\r\n    soon we will enter an era of revolution\r\n    I am wearing a tie and a jacket\r\n    I am wearing pants\r\n    I am wearing a tie\r\n    I am wearing some of your trousers\r\n    all together in one big pile\r\n    all together in the long days of summer\r\n    all together in the end\r\n    all together in front of a giant screen\r\n    wear a crown with many jewels\r\n    wear a crown with it\r\n    wear a crown with matching mask\r\n    wear a crown with a hood\r\n    there will be some fog tonight\r\n    there will be some upsides for us\r\n    there will be a call at the last number\r\n    there will be an exception to this rule\r\n    I am allergic to bees and peanuts\r\n    I am allergic to penicillins?\r\n    I am allergic to penicillins\r\n    I am allergic to sunlight\r\n    he is still on our team\r\n    he is still very early into his professional career\r\n    he is still on the job\r\n    he is still on board for the St\r\n    the dow jones index has risen\r\n    the dow jones index, the U\r\n    the dow jones for more info\r\n    the dow jones is so sick w him\r\n    my preferred treat is chocolate\r\n    my preferred treat for late afternoon indulgence\r\n    my preferred treat\r\n    my preferred treat of the Irish Sea\r\n    the king sends you to the tower\r\n    the king sends you to him\r\n    the king sends you to spy on me\r\n    the king sends you to do something\r\n    we are subjects and must obey\r\n    we are subjects of the law\r\n    we are subjects and they have no rights\r\n    we are subjects and not the others\r\n    mom made her a turtleneck\r\n    mom made her claim online on Monday\r\n    mom made her first grocery store run\r\n    mom made her way over to the bed\r\n    goldilocks and the three bears\r\n    goldilocks and the three wise men?\r\n    goldilocks and the bears\r\n    goldilocks and the three dwarfs\r\n    the assignment is due today\r\n    the assignment is not\r\n    the assignment is valued at less than 100\r\n    the assignment is not assignable to us\r\n    what you see is what you get\r\n    what you see here is just the beginning\r\n    what you see in the front\r\n    what you see is exactly what you get\r\n    a quarter of a century\r\n    a quarter of all patients presented with symptoms\r\n    a quarter of voters were against the plan\r\n    a quarter of the market\r\n    the store will close at ten\r\n    the store will close at 3 pm\r\n    the store will close, not that we did\r\n    the store will close by the end of July\r\n    head shoulders knees and toes\r\n    head shoulders knees bent or crouched\r\n    head shoulders knees knees knees\r\n    head shoulders knees half bent at ninety degrees\r\n    the laser printer is jammed\r\n    the laser printer\r\n    the laser printer came into the picture\r\n    the laser printer is there\r\n    all good boys deserve fudge\r\n    all good boys, all good girls\r\n    all good boys and girls\r\n    all good boys and sluts\r\n    just in time for the party\r\n    just in time for the Christmas season!\r\n    just in time for the holidays!\r\n    just in time for spring training\r\n    video camera with a zoom lens\r\n    video camera with a good viewfinder\r\n    video camera with a dual-camera setup\r\n    video camera with a wide-angle lens\r\n    what a monkey sees a monkey will do\r\n    what a monkey, a monkey!\r\n    what a monkey sees a monkey\r\n    what a monkey would do to get it\r\n    the back yard of our house\r\n    the back yard of the Chicago White Sox\r\n    the back yard of Washington DC\r\n    the back yard\r\n    this is a very good idea\r\n    this is a serious game\r\n    this is a very good debate to have\r\n    this is a spreadsheet\r\n    reading week is just about here\r\n    reading week is just around the corner\r\n    reading week is just a public relations effort\r\n    reading week is just beginning\r\n    our fax number has changed\r\n    our fax number\r\n    our fax number!\r\n    our fax number is required\r\n    thank you for your help\r\n    thank you for your help and we look forward\r\n    thank you for making this happen!\r\n    thank you for your interest in volunteering\r\n    no exchange without a bill\r\n    no exchange without prior discussion\r\n    no exchange without notice\r\n    no exchange without disclosure\r\n    the early bird gets the worm\r\n    the early bird, the very first\r\n    the early bird gets the choicest\r\n    the early bird saves the best of everything\r\n    this is too much to handle\r\n    this is too big of a deal\r\n    this is too much frustration right now\r\n    this is too much info, my bad!\r\n    the library is closed today\r\n    the library is much more diverse and diverse topics\r\n    the library is part of the company\r\n    the library is, and why I like it!\r\n    Mary had a little lamb\r\n    Mary had a difficult beginning to life\r\n    Mary had a tendency to catch her breath\r\n    Mary had a decision to make\r\n    this is a non profit organization\r\n    this is a brilliant idea!\r\n    this is a non-interventionist country!\r\n    this is a non-sequitur\r\n    healthy food is good for you\r\n    healthy food is better than low-quality food\r\n    healthy food is good for you, right?\r\n    healthy food is a great start\r\n    hands on experience with a job\r\n    hands on experience with various programming languages\r\n    hands on experience with working from home\r\n    hands on experience with the unit\r\n    this watch is too expensive\r\n    this watch is made from high-precision\r\n    this watch is a tough act to follow\r\n    this watch is not like any other\r\n    the capital of our nation\r\n    the capital of the Golden Horde\r\n    the capital of Burundi\r\n    the capital of the region\r\n    travel at the speed of light\r\n    travel at the speed of light!\r\n    travel at the level of language\r\n    travel at the foot of the Swiss Alps\r\n    gas bills are sent monthly\r\n    gas bills are skyrocketing, too\r\n    gas bills are already in effect in Detroit\r\n    gas bills are included in your rent\r\n    life is but a dream\r\n    life is but a fraction of the pain\r\n    life is but a reflection of your spirit\r\n    life is but a fleeting illusion\r\n    take it to the recycling depot\r\n    take it to the max\r\n    take it to the rafters\r\n    take it to a team that deserves it\r\n    sent this by registered mail\r\n    sent this by way of warning\r\n    sent this by the instruction of thy majesty\r\n    sent this by Paige\r\n    fall is my favorite season\r\n    fall is my passion\r\n    fall is my new favorites!\r\n    fall is my favorite movie of all time\r\n    a fox is a very smart animal\r\n    a fox is a part of our education\r\n    a fox is a fox, regardless of shape?\r\n    a fox is walking away\r\n    the kids are very excited\r\n    the kids are going to love me\r\n    the kids are there for other people\r\n    the kids are fine\r\n    parking lot is full of trucks\r\n    parking lot is adjacent to Ford Field\r\n    parking lot is not an outdoor patio\r\n    parking lot is a good choice\r\n    my bike has a flat tire\r\n    my bike has a crankshaft\r\n    my bike has a fairly standard drivetrain\r\n    my bike has a lifetime warranty\r\n    do not walk too quickly\r\n    do not walk through the desert at night\r\n    do not walk in prayer\r\n    do not walk too closely to either of them!\r\n    a duck quacks to ask for food\r\n    a duck quacks to warn you away\r\n    a duck quacks to ask for some help?\r\n    a duck quacks to hide its fear?\r\n    limited warranty of two years\r\n    limited warranty of only 3 days\r\n    limited warranty of no more than one year\r\n    limited warranty of no less than one year\r\n    the four seasons will come\r\n    the four seasons prior to JR\r\n    the four seasons of A Fistful of Dollars?\r\n    the four seasons that I played there\r\n    the sun rises in the east\r\n    the sun rises and sets every day\r\n    the sun rises\r\n    the sun rises and sets\r\n    it is very windy today\r\n    it is very easy to screw up\r\n    it is very much an aspect of beauty\r\n    it is very difficult to understand in French\r\n    do not worry about this\r\n    do not worry!\r\n    do not worry about protecting your credit score\r\n    do not worry\r\n    want to join us for lunch\r\n    want to join you\r\n    want to join us?\r\n    want to join the community\r\n    make my day you sucker\r\n    make my day\r\n    make my day and make my life easier\r\n    make my day, buddy!\r\n    I can play much better now\r\n    I can play much faster than my father\r\n    I can play much better in real games\r\n    I can play much better over time\r\n    she wears too much makeup\r\n    she wears too much make-up\r\n    she wears too much makeup!\r\n    she wears too many make-up, and\r\n    my bare face in the wind\r\n    my bare face in front of them\r\n    my bare face in his eyes\r\n    my bare face in full view of the camera\r\n    lydia wants to go home\r\n    lydia wants to propose a deal\r\n    lydia wants to do her time\r\n    lydia wants to gain more control\r\n    win first prize in the contest\r\n    win first prize\r\n    win first prize in 1917\r\n    win first prize in the 2011 contest\r\n    freud wrote of the ego\r\n    freud wrote of Jesus as a prophet\r\n    freud wrote of WH\r\n    freud wrote of the use of psychedelics\r\n    always cover all the bases\r\n    always cover all of US\r\n    always cover all sorts of stuff\r\n    always cover all options\r\n    can we play cards tonight\r\n    can we play a movie together?\r\n    can we play again?\r\n    can we play that game then?\r\n    get rid of that immediately\r\n    get rid of him, she did\r\n    get rid of\r\n    get rid of it completely\r\n    the sum of the parts\r\n    the sum of elements of the permutations\r\n    the sum of dollars and cents\r\n    the sum of the numbers\r\n    they love to yap about nothing\r\n    they love to eat meat, it seems\r\n    they love to talk about\r\n    they love to yap on about\r\n    he played a pimp in that movie\r\n    he played a role in the story\r\n    he played a role in that\r\n    he played a big role in that\r\n    I skimmed through your proposal\r\n    I skimmed through the list of proposals\r\n    I skimmed through the text for details\r\n    I skimmed through the notes\r\n    he was wearing a sweatshirt\r\n    he was wearing all leather armor\r\n    he was wearing a red pajama top\r\n    he was wearing at the time\r\n    no more war no more bloodshed\r\n    no more war\r\n    no more war no more death no more suffering!\r\n    no more war no more terrorism\r\n    I will meet you at noon\r\n    I will meet you there\r\n    I will meet with Sen\r\n    I will meet you when you arrive\r\n    I want to hold your hand\r\n    I want to hold a press conference\r\n    I want to thank everyone for their strong support!\r\n    I want to know how the plot develops\r\n    superman never wore a mask\r\n    superman never wore pajamas, right???\r\n    superman never wore his Superman costume\r\n    superman never wore capes\r\n    I listen to the tape everyday\r\n    I listen to the symphony every day\r\n    I listen to the beach\r\n    I listen to the words of Mr\r\n    seasoned golfers love the game\r\n    seasoned golfers love to do\r\n    seasoned golfers love\r\n    seasoned golfers love their clubs\r\n    he cooled off after she left\r\n    he cooled off, and there were no cuts\r\n    he cooled off for an hour\r\n    he cooled off and regained his composure\r\n    my dog sheds his hair\r\n    my dog sheds his fur once a week\r\n    my dog sheds all sorts of hair\r\n    my dog sheds pretty much every week\r\n    join us on the patio\r\n    join us on Tuesday at 3:00pm\r\n    join us on the forum\r\n    join us on Facebook here\r\n    these cookies are so amazing\r\n    these cookies are no longer available\r\n    these cookies are gluten free and refined sugar free\r\n    these cookies are the best!\r\n    I can still feel your presence\r\n    I can still do it\r\n    I can still remember it\r\n    I can still see the place\r\n    the dog will bite you\r\n    the dog will not bite you\r\n    the dog will know where to go\r\n    the dog will be fine\r\n    where did you get that tie\r\n    where did you get it?\r\n    where did you get the book?\r\n    where did you get that robe you wear?\r\n    what a lovely red jacket\r\n    what a lovely way of keeping score\r\n    what a lovely day!\r\n    what a lovely library it is\r\n    do you like to shop on Sunday\r\n    do you like this recipe?\r\n    do you like jazz?\r\n    do you like your grass cut?\r\n    I spilled coffee on the carpet\r\n    I spilled coffee on one of my clothes\r\n    I spilled coffee on you\r\n    I spilled coffee all over the place\r\n    the largest of the five oceans\r\n    the largest of the five spaceports\r\n    the largest of the US\r\n    the largest of the Chinese cities\r\n    shall we play a round of cards\r\n    shall we play it?\r\n    shall we play this game again?\r\n    shall we play games with these poor ducks\r\n    my mother makes good cookies\r\n    my mother makes everything from scratch\r\n    my mother makes a very good custard\r\n    my mother makes the bread every day\r\n    do a good deed to someone\r\n    do a good deed every now and then\r\n    do a good deed?\r\n    do a good job and keep him happy\r\n    quick there is someone knocking\r\n    quick there is plenty of nice views\r\n    quick there is no time for heartbreak\r\n    quick there is a problem\r\n    flashing red light means stop\r\n    flashing red light\r\n    flashing red light of a speeding car\r\n    flashing red light on her left wrist\r\n    where did I leave my glasses\r\n    where did I find you?\r\n    where did I put it?\r\n    where did I get all that?\r\n    on the way to the cottage\r\n    on the way down\r\n    on the way of abolishing the monarchy\r\n    on the way of his life\r\n    a lot of chlorine in the water\r\n    a lot of chlorine in their water\r\n    a lot of chlorine in the water is toxic\r\n    a lot of books\r\n    do not drink the water\r\n    do not drink in case of fire\r\n    do not drink a glass of water before meals\r\n    do not drink too many liquids\r\n    my car always breaks in the winter\r\n    my car always breaks in front of other cars\r\n    my car always breaks in its first week\r\n    my car always breaks in half\r\n    public transit is much faster\r\n    public transit is not an alternative to cars\r\n    public transit is critical to affordable housing development\r\n    public transit is part of society\r\n    zero in on the facts\r\n    zero in on top of it\r\n    zero in on the real issue at hand\r\n    zero in on him\r\n    make up a few more phrases\r\n    make up a few minutes here and there\r\n    make up a large portion of it\r\n    make up a few\r\n    my fingers are very cold\r\n    my fingers are all covered by white fur\r\n    my fingers are much smaller than my thumb\r\n    my fingers are tingly all over again\r\n    the price of gas is high\r\n    the price of gas is too damn high?\r\n    the price of the product will come down\r\n    the price of gas has to come down\r\n    the winner of the race\r\n    the winner of the 1995 US\r\n    the winner of the Aug\r\n    the winner of the Oct\r\n    go out for some pizza and beer\r\n    go out for some fresh air\r\n    go out for some food\r\n    go out for some beer\r\n    effort is what it will take\r\n    effort is what it boils down to\r\n    effort is what it sounds like\r\n    effort is what we try to focus on\r\n    where can my little dog be\r\n    where can my companion support go?\r\n    where can my little girl go if she wants\r\n    where can my little wiggly soul go!!\r\n    if you were not so stupid\r\n    if you were unlucky enough to have to choose!\r\n    if you were already in my top three\r\n    if you were an architect at the time\r\n    not quite so smart as you think\r\n    not quite so smart\r\n    not quite so smart, of course\r\n    not quite so smart after all\r\n    do you like to go camping\r\n    do you like to play the guitar?\r\n    do you like to play Ingress?\r\n    do you like this?\r\n    this person is a disaster\r\n    this person is going to get shot\r\n    this person is who he says he is\r\n    this person is going to be so fucked up\r\n    the imagination of the nation\r\n    the imagination of the man, ie\r\n    the imagination of the thinker\r\n    the imagination of the feminist movement\r\n    universally understood to be wrong\r\n    universally understood to be in compliance\r\n    universally understood to mean the ancients\r\n    universally understood to be male\r\n    listen to five hours of opera\r\n    listen to five hours a day\r\n    listen to five hours per game\r\n    listen to five hours of your favorite podcasts?\r\n    an occasional taste of chocolate\r\n    an occasional taste anyway\r\n    an occasional taste of distrust in my stomach\r\n    an occasional taste\r\n    the protesters blocked all traffic\r\n    the protesters blocked the freeway outside the airport\r\n    the protesters blocked traffic on the highway\r\n    the protesters blocked the main entrance to Beijing\r\n    the acceptance speech was boring\r\n    the acceptance speech of their victors\r\n    the acceptance speech is beside the point\r\n    the acceptance speech at graduation\r\n    work hard to reach the summit\r\n    work hard to reach their goals\r\n    work hard to reach the right people\r\n    work hard to reach consensus among all parties\r\n    a little encouragement is needed\r\n    a little encouragement from you on the way\r\n    a little encouragement is always a good thing\r\n    a little encouragement for it\r\n    stiff penalty for staying out late\r\n    stiff penalty for staying out of sight\r\n    stiff penalty for staying too late\r\n    stiff penalty for staying out so late\r\n    exceed the maximum speed limit\r\n    exceed the maximum given by the program\r\n    exceed the maximum time allowed\r\n    exceed the maximum number\r\n    in sharp contrast to your words\r\n    in sharp contrast to those of Western producers\r\n    in sharp contrast to the West Bank\r\n    in sharp contrast to China\r\n    this leather jacket is too warm\r\n    this leather jacket is really starting to look worn\r\n    this leather jacket is the best jacket to pull\r\n    this leather jacket is going to be fine\r\n    consequences of a wrong turn\r\n    consequences of a failure to act\r\n    consequences of a growing criminal world\r\n    consequences of a foreign terrorist attack\r\n    this mission statement is baloney\r\n    this mission statement is far from complete\r\n    this mission statement sounded good\r\n    this mission statement is kind of vague\r\n    you will loose your voice\r\n    you will loose your arms or legs\r\n    you will loose everything on the spot\r\n    you will loose your business\r\n    every apple from every tree\r\n    every apple from Oklahoma goes through here\r\n    every apple from a bitter apple tree?\r\n    every apple from that sweet tree must be smashed\r\n    are you sure you want this\r\n    are you sure?\r\n    are you sure you want to go?\r\n    are you sure you want to do this?\r\n    the fourth edition was better\r\n    the fourth edition of the US\r\n    the fourth edition, p\r\n    the fourth edition of the Star Trek Data book\r\n    beautiful paintings in the gallery\r\n    beautiful paintings in her dining room\r\n    beautiful paintings in their own right\r\n    beautiful paintings in a wonderful setting\r\n    a yard is almost as long as a meter\r\n    a yard is almost as long as the Ark\r\n    a yard is almost always filled with sun\r\n    a yard is almost completely covered in ash\r\n    destruction of the rain forest\r\n    destruction of the environment\r\n    destruction of the state\r\n    destruction of the planet\r\n    I like to play tennis\r\n    I like to play with my hair\r\n    I like to play what we play\r\n    I like to win\r\n    acutely aware of her good looks\r\n    acutely aware of her surroundings\r\n    acutely aware of her disappointment\r\n    acutely aware of all that involved\r\n    you want to eat your cake\r\n    you want to eat something very different from nothing\r\n    you want to go to a club on Tuesday\r\n    you want to eat a crap sandwich?\r\n    a glance in the right direction\r\n    a glance in the camera, eyes narrowed\r\n    a glance in the rear-view mirror\r\n    a glance in the direction of the play\r\n    I just cannot figure this out\r\n    I just cannot figure out the problem\r\n    I just cannot figure out why\r\n    I just cannot figure it out\r\n    an airport is a very busy place\r\n    an airport is a very major transport hub\r\n    an airport is unable to handle all arrivals\r\n    an airport is now held by the militants\r\n    mystery of the lost lagoon\r\n    mystery of the image\r\n    mystery of the Great Depression\r\n    mystery of the Century\r\n    is there any indication of this\r\n    is there any truth to it?\r\n    is there any of the Old World?\r\n    is there any comparison?\r\n    the chamber makes important decisions\r\n    the chamber makes use of a different technology\r\n    the chamber makes sense\r\n    the chamber makes a lot of noise\r\n    this phenomenon will never occur\r\n    this phenomenon will come to an end\r\n    this phenomenon will continue for decades to come\r\n    this phenomenon will take some time to filter out\r\n    obligations must be met first\r\n    obligations must be complied with\r\n    obligations must be carried out\r\n    obligations must be addressed\r\n    valid until the end of the year\r\n    valid until the end of 2016\r\n    valid until the end of the month\r\n    valid until the end of the next season\r\n    file all complaints in writing\r\n    file all complaints were filed\r\n    file all complaints made by young women\r\n    file all complaints\r\n    a picture is worth many words\r\n    a picture is worth a thousand words\r\n    a picture is worth 1,000 words\r\n    a picture is worth a thousand words!\r\n    this camera takes nice photographs\r\n    this camera takes pictures all day every day\r\n    this camera takes pictures, too\r\n    this camera takes great photos\r\n    it looks like a shack\r\n    it looks like they are in full swing\r\n    it looks like it could be a bit smarter\r\n    it looks like it will be just that soon\r\n    the dog buried the bone\r\n    the dog buried in the garden\r\n    the dog buried in the cemetary?\r\n    the dog buried his head in the sand\r\n    this equation is too complicated\r\n    this equation is different depending on your brand\r\n    this equation is wrong\r\n    this equation is not going to go away\r\n    express delivery is very fast\r\n    express delivery is available during normal business hours\r\n    express delivery is made\r\n    express delivery is expected within 2 business days\r\n    I will put on my glasses\r\n    I will put them in a time machine!\r\n    I will put our best foot forward\r\n    I will put on another show, I promise!!\r\n    a touchdown in the last minute\r\n    a touchdown in the first quarter\r\n    a touchdown in the second quarter for the first\r\n    a touchdown in the fourth quarter\r\n    the treasury department is broke\r\n    the treasury department said in a statement Thursday\r\n    the treasury department is run out of Whitehall\r\n    the treasury department\r\n    a good response to the question\r\n    a good response to my concerns\r\n    a good response to government intrusiveness\r\n    a good response\r\n    the bathroom is good for reading\r\n    the bathroom is good for a snooze\r\n    the bathroom is good for you\r\n    the bathroom is probably the same\r\n    the generation gap gets wider\r\n    the generation gap is not so big anymore\r\n    the generation gap is deeply troubling\r\n    the generation gap\r\n    prepare for the exam in advance\r\n    prepare for the upcoming election\r\n    prepare for the least significant bits\r\n    prepare for the unknown future\r\n    bank transaction was not registered\r\n    bank transaction was an open-ended promise to\r\n    bank transaction was made in February\r\n    bank transaction was intended to bolster Mr\r\n    your etiquette needs some work\r\n    your etiquette needs to be that much better\r\n    your etiquette needs a reality check\r\n    your etiquette needs\r\n    house with new electrical panel\r\n    house with new arrivals in town over the holiday\r\n    house with new items within 10 business days\r\n    house with new food items\r\n    our silver anniversary is coming\r\n    our silver anniversary self-badge\r\n    our silver anniversary toast with Donald J\r\n    our silver anniversary\r\n    the presidential suite is very busy\r\n    the presidential suite\r\n    the presidential suite is located on the second level\r\n    the presidential suite is very nice\r\n    the punishment should fit the crime\r\n    the punishment should be proportional to the crime\r\n    the punishment should be lenient\r\n    the punishment should be sufficient for them\r\n    sharp cheese keeps the mind sharp\r\n    sharp cheese keeps the patties moist\r\n    sharp cheese keeps the dough crispy on the edges!\r\n    sharp cheese keeps the sandwich soft and moist\r\n    the registration period is over\r\n    the registration period runs from Feb\r\n    the registration period will remain open until February 28\r\n    the registration period was opened in the first quarter\r\n    the objective of the exercise\r\n    the objective of it is to control the flow\r\n    the objective of investigation is to know the truth\r\n    the objective of all physics\r\n    historic meeting without a result\r\n    historic meeting without talking about it\r\n    historic meeting without any shortage of participants\r\n    historic meeting without violence\r\n    good at addition and subtraction\r\n    good at addition or subtraction\r\n    good at addition\r\n    good at addition work\r\n    six daughters and seven sons\r\n    six daughters and one son\r\n    six daughters and seven grandchildren\r\n    six daughters and four sons\r\n    a thoroughly disgusting thing to say\r\n    a thoroughly disgusting and distasteful attack\r\n    a thoroughly disgusting thing\r\n    a thoroughly disgusting concoction\r\n    the minimum amount of time\r\n    the minimum amount of time needed to create\r\n    the minimum amount required to stay alive\r\n    the minimum amount you will need to come up\r\n    a very traditional way to dress\r\n    a very traditional way of doing things\r\n    a very traditional way of seeing the world\r\n    a very traditional way\r\n    the aspirations of a nation\r\n    the aspirations of women, their hopes and fears\r\n    the aspirations of the dispossessed working class\r\n    the aspirations of one of the parties\r\n    medieval times were very hard\r\n    medieval times were incredibly prolific\r\n    medieval times were two very different beasts\r\n    medieval times were far superior to us\r\n    a security force of eight thousand\r\n    a security force of 30,000\r\n    a security force of some two thousand men!\r\n    a security force of 1,000 soldiers\r\n    there are winners and losers\r\n    there are winners and losers here\r\n    there are winners and there are losers\r\n    there are winners and losers out there\r\n    the voters turfed him out\r\n    the voters turfed him out of office\r\n    the voters turfed him out on Election Day!\r\n    the voters turfed out George W\r\n    pay off a mortgage for a house\r\n    pay off a mortgage or car loan\r\n    pay off a mortgage or fix a car\r\n    pay off a mortgage for two years?\r\n    the collapse of the Roman empire\r\n    the collapse of US\r\n    the collapse of our institutions\r\n    the collapse of Lehman Brothers in September 2008\r\n    did you see that spectacular explosion\r\n    did you see that attack?\r\n    did you see the video?\r\n    did you see that Deadpool movie today?\r\n    keep receipts for all your expenses\r\n    keep receipts for compliance with US\r\n    keep receipts for all cash transactions\r\n    keep receipts for all of its transactions\r\n    the assault took six months\r\n    the assault took place around 230pm\r\n    the assault took place on Sunday, April 30\r\n    the assault took place on Nov\r\n    get your priorities in order\r\n    get your priorities straight\r\n    get your priorities straight before you commit\r\n    get your priorities in order, Mr\r\n    traveling requires a lot of fuel\r\n    traveling requires a lot of money\r\n    traveling requires a lot of energy\r\n    traveling requires a lot of planning, time\r\n    longer than a football field\r\n    longer than a third\r\n    longer than a two-hour episode\r\n    longer than a third of a second\r\n    a good joke deserves a good laugh\r\n    a good joke\r\n    a good joke and it would be funny\r\n    a good joke deserves a good reaction\r\n    the union will go on strike\r\n    the union will go ahead with the strike\r\n    the union will go down, too\r\n    the union will make sure there is no job\r\n    never mix religion and politics\r\n    never mix religion and economics\r\n    never mix religion with politics\r\n    never mix religion and politics in your rhetoric\r\n    interactions between men and women\r\n    interactions between men and women in society\r\n    interactions between men\r\n    interactions between men and young people\r\n    where did you get such a silly idea\r\n    where did you get such knowledge?\r\n    where did you get such a letter?\r\n    where did you get such a lovely selection?\r\n    it should be sunny tomorrow\r\n    it should be the same across the board\r\n    it should be a non sequitur\r\n    it should be obvious by now\r\n    a psychiatrist will help you\r\n    a psychiatrist will be his primary therapist\r\n    a psychiatrist will do\r\n    a psychiatrist will assess your condition\r\n    you should visit to a doctor\r\n    you should visit to visit him\r\n    you should visit to get your paws on one!\r\n    you should visit the discussion page for this post\r\n    you must make an appointment\r\n    you must make a decision for yourself\r\n    you must make the decisions yourself\r\n    you must make room for the next row\r\n    the fax machine is broken\r\n    the fax machine\r\n    the fax machine in the kitchen?\r\n    the fax machine in his living room\r\n    players must know all the rules\r\n    players must know these facts by now\r\n    players must know all of their move-offs\r\n    players must know when to play hardball\r\n    a dog is the best friend of a man\r\n    a dog is the best friend of a person\r\n    a dog is the best restaurant in town\r\n    a dog is the best dog\r\n    would you like to come to my house\r\n    would you like to come to the races?\r\n    would you like to have lunch with me?\r\n    would you like to try one yourself?\r\n    February has an extra day\r\n    February has an official start date of January 5\r\n    February has an upper limit of 25 February\r\n    February has an interesting mix of games\r\n    do not feel too bad about it\r\n    do not feel too bad about this part\r\n    do not feel too bad about that, though!!\r\n    do not feel too well today\r\n    this library has many books\r\n    this library has in common with other frameworks\r\n    this library has been in development since 2003\r\n    this library has been removed from this project\r\n    that is a very odd question\r\n    that is a good word to think about after\r\n    that is a rare occurrence these days\r\n    that is a very good idea\r\n    a feeling of complete exasperation\r\n    a feeling of powerlessness and helplessness\r\n    a feeling of being in orbit around the comet\r\n    a feeling of ecstasy\r\n    no kissing in the library\r\n    no kissing in the water here!\r\n    no kissing in that city\r\n    no kissing in public\r\n    that agreement is rife with problems\r\n    that agreement is rife with potential pitfalls\r\n    that agreement is rife with contradictions\r\n    that agreement is rife with unfairness\r\n    vote according to your conscience\r\n    vote according to the region\r\n    vote according to your preferences\r\n    vote according to its own values\r\n    my favourite sport is racketball\r\n    my favourite sport when I was a kid\r\n    my favourite sport\r\n    my favourite sport to watch is football\r\n    sad to hear that news\r\n    sad to hear it was taken so easily!\r\n    sad to hear the story\r\n    sad to hear how well they played\r\n    the gun discharged by accident\r\n    the gun discharged and hit me pretty good\r\n    the gun discharged, striking and killing Mrs\r\n    the gun discharged while in the holster\r\n    one of the poorest nations\r\n    one of the people I talked to\r\n    one of the best moments of the series\r\n    one of the most important differences between L\r\n    the algorithm is too complicated\r\n    the algorithm is broken and I have no hope\r\n    the algorithm is already in place!\r\n    the algorithm is more or less optimal\r\n    that land is owned by the government\r\n    that land is owned by the federal government\r\n    that land is owned by the state\r\n    that land is owned by the public\r\n    burglars never leave their business card\r\n    burglars never leave their dwellings again\r\n    burglars never leave their homes\r\n    burglars never leave traces\r\n    the fire blazed all weekend\r\n    the fire blazed within my breast\r\n    the fire blazed all around him\r\n    the fire blazed all day long\r\n    if diplomacy does not work\r\n    if diplomacy does work, it takes time\r\n    if diplomacy does not work, force will be\r\n    if diplomacy does not work out\r\n    the rationale behind the decision\r\n    the rationale behind the wall is quite simple\r\n    the rationale behind this decision is less than subtle\r\n    the rationale behind killing her?\r\n    the cat has a pleasant temperament\r\n    the cat has gone back to sleep\r\n    the cat has a cat in the house\r\n    the cat has a mind of its own\r\n    our housekeeper does a thorough job\r\n    our housekeeper does the washing and cooking\r\n    our housekeeper does not work\r\n    our housekeeper does everything\r\n    her majesty visited our country\r\n    her majesty visited the capital\r\n    her majesty visited Antwerp\r\n    her majesty visited Queen Victoria in 1898\r\n    these barracks are big enough\r\n    these barracks are completely undisturbed\r\n    these barracks are starting to look the same\r\n    these barracks are quite large\r\n    sing the gospel and the blues\r\n    sing the gospel\r\n    sing the gospel?\r\n    sing the gospel in a businesslike manner\r\n    he underwent triple bypass surgery\r\n    he underwent triple coronary bypass surgery Oct\r\n    he underwent triple bypass surgery in 2009\r\n    he underwent triple knee replacement surgery in 2011\r\n    the hopes of a new organization\r\n    the hopes of a child\r\n    the hopes of the White House and Washington\r\n    the hopes of a doomed marriage\r\n    peering through a small hole\r\n    peering through a long stretch of glass\r\n    peering through a thick wall of clouds\r\n    peering through a skyscraper in Hong Kong\r\n    rapidly running short on words\r\n    rapidly running short of cash\r\n    rapidly running short on resources\r\n    rapidly running short of a candidate\r\n    it is difficult to concentrate\r\n    it is difficult to describe him\r\n    it is difficult for them to understand\r\n    it is difficult to come close to fuming\r\n    give me one spoonful of coffee\r\n    give me one word of advice, Mr\r\n    give me one of your autographs!\r\n    give me one word to describe it\r\n    two or three cups of coffee\r\n    two or three cups of boiling water\r\n    two or three cups per day\r\n    two or three cups at a time\r\n    just like it says on the can\r\n    just like it always has been\r\n    just like it says in the book\r\n    just like it says on the label\r\n    electric cars need big fuel cells\r\n    electric cars need massive changes to their energy strategies\r\n    electric cars need as few components as possible\r\n    electric cars need space\r\n    the plug does not fit the socket\r\n    the plug does not go in\r\n    the plug does not come on as easily\r\n    the plug does not come out\r\n    we dine out on the weekends\r\n    we dine out on each other\r\n    we dine out on who they want\r\n    we dine out on our own\r\n    get aboard the ship is leaving\r\n    get aboard the bandwagon of geopolitics\r\n    get aboard the ship and make some music\r\n    get aboard the ship\r\n    the water was monitored daily\r\n    the water was cold and dark\r\n    the water was gone, we could see it\r\n    the water was nice and cold\r\n    a big scratch on the tabletop\r\n    a big scratch\r\n    a big scratch somewhere, waiting to disappear\r\n    a big scratch, huh?\r\n    salesmen must make their monthly quota\r\n    salesmen must make their move\r\n    salesmen must make\r\n    salesmen must make money\r\n    saving that child was an heroic effort\r\n    saving that child was the easy part\r\n    saving that child was part of the motivation\r\n    saving that child was the first thing that came\r\n    granite is the hardest of all rocks\r\n    granite is the hardest material on Earth\r\n    granite is the hardest of the three\r\n    granite is the hardest of all stone\r\n    bring the offenders to justice\r\n    bring the offenders to justice and prosecute them appropriately?\r\n    bring the offenders to a different site\r\n    bring the offenders into the community and send them\r\n    every Saturday he folds the laundry\r\n    every Saturday he reaps the rewards\r\n    every Saturday he folds his blanket, puts it\r\n    every Saturday he arrived at my home\r\n    careless driving results in a fine\r\n    careless driving results in many traffic fatalities\r\n    careless driving results in loss of life\r\n    careless driving results in fatal crashes\r\n    microscopes make small things look big\r\n    microscopes make small things larger\r\n    microscopes make small things look huge\r\n    microscopes make small things seem large\r\n    a coupon for a free sample\r\n    a coupon for example will always give you 20\r\n    a coupon for a free test kit\r\n    a coupon for a week of free shipping\r\n    fine but only in moderation\r\n    fine but only slightly salty in flavor\r\n    fine but only to legal age drinkers\r\n    fine but only up to 2 inches in depth?\r\n    a subject one can really enjoy\r\n    a subject one can empathize with\r\n    a subject one can get hooked on\r\n    a subject one can never fully understand\r\n    that sticker needs to be validated\r\n    that sticker needs to go\r\n    that sticker needs to be redone\r\n    that sticker needs the numbers split, for example\r\n    the fire raged for an entire month\r\n    the fire raged\r\n    the fire raged for over an hour\r\n    the fire raged for eight days and nights\r\n    one never takes too many precautions\r\n    one never takes his eyes off the prize\r\n    one never takes his eyes from his enemy\r\n    one never takes his eye off her\r\n    labour unions know how to organize\r\n    labour unions know how to work together\r\n    labour unions know how to fight\r\n    labour unions know how to work together better\r\n    people blow their horn a lot\r\n    people blow their money on this crap\r\n    people blow their nose with poppers\r\n    people blow their horn and scream joyously?\r\n    a correction had to be published\r\n    a correction had led me astray\r\n    a correction had taken place\r\n    a correction had been made\r\n    I like baroque and classical music\r\n    I like baroque music\r\n    I like baroque stuff a lot\r\n    I like baroque design\r\n    be discreet about your meeting\r\n    be discreet about it\r\n    be discreet about the content of their work\r\n    be discreet about this world\r\n    meet tomorrow in the lavatory\r\n    meet tomorrow in Washington, DC\r\n    meet tomorrow in Dusseldorf\r\n    meet tomorrow in Kenai, Alaska\r\n    suburbs are sprawling up everywhere\r\n    suburbs are sprawling\r\n    suburbs are sprawling suburbs\r\n    suburbs are sprawling and sprawling cities\r\n    shivering is one way to keep warm\r\n    shivering is one way to do this\r\n    shivering is one way to relieve this\r\n    shivering is one way to do it\r\n    try to enjoy your maternity leave\r\n    try to enjoy them\r\n    try to enjoy yourself\r\n    try to enjoy the beginning of the end\r\n    the ventilation system is broken\r\n    the ventilation system\r\n    the ventilation system is very tiny\r\n    the ventilation system is simple and works fine\r\n    dinosaurs have been extinct for ages\r\n    dinosaurs have been extinct for six million years\r\n    dinosaurs have been around for 80 million years!\r\n    dinosaurs have been extinct for 60 million years\r\n    an inefficient way to heat a house\r\n    an inefficient way of doing things\r\n    an inefficient way of solving the problem\r\n    an inefficient way to do things\r\n    the bus was very crowded\r\n    the bus was empty, according to court papers\r\n    the bus was like a tornado\r\n    the bus was so quiet and cool\r\n    an injustice is committed every day\r\n    an injustice is perpetrated against anyone\r\n    an injustice is also at work here\r\n    an injustice is well worth redress\r\n    the coronation was very exciting\r\n    the coronation was an Act of Parliament\r\n    the coronation was a farce\r\n    the coronation was in full swing\r\n    look in the syllabus for the course\r\n    look in the syllabus for Bio 11?\r\n    look in the syllabus for further details\r\n    look in the syllabus for the school\r\n    rectangular objects have four sides\r\n    rectangular objects have three faces\r\n    rectangular objects have been modeled in it\r\n    rectangular objects have a defined aspect ratio\r\n    prescription drugs require a note\r\n    prescription drugs require special licenses\r\n    prescription drugs require approval by the FDA\r\n    prescription drugs require prescriptions from physicians\r\n    the insulation is not working\r\n    the insulation is what you care about\r\n    the insulation is as good as it gets\r\n    the insulation is not airtight at all\r\n    nothing finer than discovering a treasure\r\n    nothing finer than discovering that it does\r\n    nothing finer than discovering a scimitar\r\n    nothing finer than discovering a beautiful new land\r\n    our life expectancy has increased\r\n    our life expectancy in Latin America is just 65\r\n    our life expectancy is about 68 years\r\n    our life expectancy was down significantly\r\n    the cream rises to the top\r\n    the cream rises on the top\r\n    the cream rises and falls with the season\r\n    the cream rises to the top of the tube\r\n    the high waves will swamp us\r\n    the high waves will never be strong again\r\n    the high waves will come straight at you\r\n    the high waves will hit them in the chest\r\n    the treasurer must balance her books\r\n    the treasurer must balance the budget every year\r\n    the treasurer must balance the deficit\r\n    the treasurer must balance the books by April 15\r\n    the location of the crime\r\n    the location of the building\r\n    the location of the right of way\r\n    the location of these artifacts is unknown\r\n    the chancellor was very boring\r\n    the chancellor was wrong to take this course\r\n    the chancellor was also referring to Stephen King\r\n    the chancellor was a big supporter\r\n    the accident scene is a shrine for fans\r\n    the accident scene is a shrine to grief\r\n    the accident scene is a shrine to people\r\n    the accident scene is a mess\r\n    a tumor is OK provided it is benign\r\n    a tumor is OK or not\r\n    a tumor is OK\r\n    a tumor is OK to be close to\r\n    please take a bath this month\r\n    please take a look\r\n    please take a bath and get a massage\r\n    please take a bath and go brush your teeth!\r\n    rent is paid at the beginning of the month\r\n    rent is paid\r\n    rent is paid at least twice a week\r\n    rent is paid to us by other publishers\r\n    for murder you get a long prison sentence\r\n    for murder you will receive the death penalty\r\n    for murder you get a life sentence\r\n    for murder you get a sentence of between 10\r\n    a much higher risk of getting cancer\r\n    a much higher risk of side effects\r\n    a much higher risk of AIDS\r\n    a much higher risk of high blood pressure\r\n    quit while you are ahead\r\n    quit while you are doing it\r\n    quit while you can\r\n    quit while you are on something else\r\n    knee bone is connected to the thigh bone\r\n    knee bone is connected to the hip\r\n    knee bone is connected to the ankle\r\n    knee bone is not one of them\r\n    safe to walk the streets in the evening\r\n    safe to walk away without a record\r\n    safe to walk the streets in New Brunswick\r\n    safe to walk around in\r\n    luckily my wallet was found\r\n    luckily my wallet is paid in bitcoin!\r\n    luckily my wallet does not do this\r\n    luckily my wallet was large enough\r\n    one hour is allotted for questions\r\n    one hour is not enough to find the demo\r\n    one hour is better than a dozen\r\n    one hour is enough\r\n    so you think you deserve a raise\r\n    so you think you are so powerful\r\n    so you think you deserve the best!\r\n    so you think you deserve what you get\r\n    they watched the entire movie\r\n    they watched the whole episode\r\n    they watched the fuck out of it\r\n    they watched the whole thing in silence\r\n    good jobs for those with education\r\n    good jobs for American workers\r\n    good jobs for the jobless\r\n    good jobs for our citizens\r\n    jumping right out of the water\r\n    jumping right out of the gates\r\n    jumping right out of my head\r\n    jumping right out of bed\r\n    the trains are always late\r\n    the trains are a disaster\r\n    the trains are coming to get you\r\n    the trains are on the way back to Japan\r\n    sit at the front of the bus\r\n    sit at the head of the table\r\n    sit at the gilded altar for it\r\n    sit at the door ready for my husband\r\n    do you prefer a window seat\r\n    do you prefer a different device?\r\n    do you prefer a slow cooker?\r\n    do you prefer a rougher texture?\r\n    the food at this restaurant\r\n    the food at the store was great\r\n    the food at restaurants is high quality\r\n    the food at the end of the road\r\n    the elevator door appears to be stuck\r\n    the elevator door appears on the screen\r\n    the elevator door slammed to a halt\r\n    the elevator door opens into the hall\r\n    raindrops keep falling on my head\r\n    raindrops keep falling on you\r\n    raindrops keep falling on my face\r\n    raindrops keep falling throughout the day\r\n    spill coffee on the carpet\r\n    spill coffee on an outdoor picnic table\r\n    spill coffee on an everyday basis\r\n    spill coffee on the pavement\r\n    an excellent way to communicate\r\n    an excellent way to improve your athletic performance\r\n    an excellent way to solve this problem\r\n    an excellent way to test it\r\n    faster than a speeding bullet\r\n    faster than a sine wave\r\n    faster than a credit card\r\n    faster than a bolt-action rifles\r\n    nothing wrong with his style\r\n    nothing wrong with your tummy\r\n    nothing wrong with doing what you want\r\n    nothing wrong with Mr\r\n    arguing with the boss is futile\r\n    arguing with the woman\r\n    arguing with the NSA on these issues?\r\n    arguing with the size of the bill\r\n    taking the train is usually faster\r\n    taking the train to the capital in January\r\n    taking the train back from the airport\r\n    taking the train\r\n    what goes up must come down\r\n    what goes up must come down, and vice\r\n    what goes up must come down, you see\r\n    what goes up, must come down\r\n    be persistent to win a strike\r\n    be persistent to draw some attention\r\n    be persistent to the last\r\n    be persistent to reduce the number of ads\r\n    why do you ask silly questions\r\n    why do you need that?\r\n    why do you ask me?\r\n    why do you think we named it that!?\r\n    that is a very nasty cut\r\n    that is a very serious matter\r\n    that is a very, very bad idea\r\n    that is a very sad day for us\r\n    learn to walk before you run\r\n    learn to walk up the steps with ease\r\n    learn to walk before you learn to run\r\n    learn to walk like everyone else\r\n    insurance is important for bad drivers\r\n    insurance is important for many Americans\r\n    insurance is important for many people\r\n    insurance is important for everyone\r\n    traveling to conferences is fun\r\n    traveling to conferences and public speaking engagements\r\n    traveling to conferences in Tokyo and Beijing\r\n    traveling to conferences or conventions in China\r\n    do you get nervous when you speak\r\n    do you get nervous when you get older?\r\n    do you get nervous when you do yoga?\r\n    do you get nervous when you change it?\r\n    pumping helps if the roads are slippery\r\n    pumping helps if the roads are dry\r\n    pumping helps if they are getting enough moisture\r\n    pumping helps if the sponge has dried out?\r\n    parking tickets can be challenged\r\n    parking tickets can be found online here\r\n    parking tickets can be purchased online\r\n    parking tickets can be found here!\r\n    find a nearby parking spot\r\n    find a nearby restaurant and eat\r\n    find a nearby bar and spend the night\r\n    find a nearby dog park\r\n    gun powder must be handled with care\r\n    gun powder must be sold separately\r\n    gun powder must be poured over it\r\n    gun powder must be kept clean and dry\r\n    just what the doctor ordered\r\n    just what the Russian hackers intended all along\r\n    just what the man wanted\r\n    just what the US\r\n    a rattle snake is very poisonous\r\n    a rattle snake is an enigma\r\n    a rattle snake and no rattles\r\n    a rattle snake in Africa\r\n    weeping willows are found near water\r\n    weeping willows are found in clusters\r\n    weeping willows are almost everywhere here\r\n    weeping willows are usually best\r\n    I cannot believe I ate the whole thing\r\n    I cannot believe my ears\r\n    I cannot believe I ate so much\r\n    I cannot believe it\r\n    the biggest hamburger I have ever seen\r\n    the biggest hamburger I have ever eaten\r\n    the biggest hamburger I have ever had\r\n    the biggest hamburger chain in the U\r\n    gamblers eventually loose their shirts\r\n    gamblers eventually loose the game\r\n    gamblers eventually loose their wits\r\n    gamblers eventually loose all their savings\r\n    exercise is good for the mind\r\n    exercise is good for your health\r\n    exercise is good for you\r\n    exercise is good for us, too\r\n    irregular verbs are the hardest to learn\r\n    irregular verbs are the hardest one\r\n    irregular verbs are regular ones\r\n    irregular verbs are agglutinative\r\n    they might find your comment offensive\r\n    they might find your plans are negotiable\r\n    they might find your copy interesting or useful\r\n    they might find meaning or depth somewhere else\r\n    tell a lie and your nose will grow\r\n    tell a lie and your nose bleeds\r\n    tell a lie and not the truth\r\n    tell a lie and get away with it\r\n    an enlarged nose suggests you are a liar\r\n    an enlarged nose suggests that they are not related!\r\n    an enlarged nose- and eardrum\r\n    an enlarged nose\r\n    lie detector tests never work\r\n    lie detector tests revealed that 2.8 billion\r\n    lie detector tests\r\n    lie detector tests are under way\r\n    do not lie in court or else\r\n    do not lie to yourself\r\n    do not lie in court\r\n    do not lie to me any longer\r\n    most judges are very honest\r\n    most judges are also juries\r\n    most judges are more open and friendly\r\n    most judges are female\r\n    only an idiot would lie in court\r\n    only an idiot might think that\r\n    only an idiot would lie to you\r\n    only an idiot would do that\r\n    important news always seems to be late\r\n    important news always seems to precede it\r\n    important news always seems to end up there\r\n    important news always seems to originate from China\r\n    please try to be home before midnight\r\n    please try to be sensitive to your audience\r\n    please try to stay as far away as possible\r\n    please try to be kind to them\r\n    if you come home late the doors are locked\r\n    if you come home to a cock and balls?\r\n    if you come home late from your night shift?\r\n    if you come in at No\r\n    dormitory doors are locked at midnight\r\n    dormitory doors are locked for privacy\r\n    dormitory doors are locked from the inside\r\n    dormitory doors are locked\r\n    staying up all night is a bad idea\r\n    staying up all night is a luxury\r\n    staying up all night is a waste!\r\n    staying up all night is a little difficult\r\n    you are a capitalist pig\r\n    you are a coward\r\n    you are a person who believes in something\r\n    you are a medicine man for God\r\n    motivational seminars make me sick\r\n    motivational seminars make you feel good\r\n    motivational seminars make you do something\r\n    motivational seminars make increasingly specific suggestions\r\n    questioning the wisdom of the courts\r\n    questioning the wisdom of such a plan\r\n    questioning the wisdom of US\r\n    questioning the wisdom of intervening\r\n    the first time he tried to swim\r\n    the first time this has happened in 15 years\r\n    the first time\r\n    the first time he tried that in public\r\n    a steep learning curve in riding a unicycle\r\n    a steep learning curve in riding a bicycle\r\n    a steep learning curve in riding a bike\r\n    a steep learning curve in riding a motorcycle\r\n    a good stimulus deserves a good response\r\n    a good stimulus deserves a good reward\r\n    a good stimulus deserves a good target\r\n    a good stimulus deserves a bad name\r\n    everybody looses in custody battles\r\n    everybody looses in this show\r\n    everybody looses in order to win\r\n    everybody looses in the midst of sorrow?\r\n    put garbage in an abandoned mine\r\n    put garbage in his house\r\n    put garbage in my mouth\r\n    put garbage in your garbage can\r\n    employee recruitment takes a lot of effort\r\n    employee recruitment takes a long time\r\n    employee recruitment takes a lot of work\r\n    employee recruitment takes a lot of time!\r\n    experience is hard to come by\r\n    experience is hardwired into us\r\n    experience is hard to justify\r\n    experience is hard to find\r\n    everyone wants to win the lottery\r\n    everyone wants to win\r\n    everyone wants to win, I think\r\n    everyone wants to win the big games\r\n    the picket line gives me the chills\r\n    the picket line gives you clarity of vision\r\n    the picket line gives us hope\r\n    the picket line gives me great pleasure\r\n    ';
var elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var elm$core$Basics$not = _Basics_not;
var elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2(elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var elm$core$Basics$eq = _Utils_equal;
var elm$core$String$isEmpty = function (string) {
	return string === '';
};
var elm$core$Maybe$Just = function (a) {
	return {$: 0, a: a};
};
var elm$core$Maybe$Nothing = {$: 1};
var elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var elm$core$String$trim = _String_trim;
var author$project$Phrase$phraseSet = author$project$Phrase$linesToPhrases(
	A2(
		elm$core$List$filter,
		A2(elm$core$Basics$composeL, elm$core$Basics$not, elm$core$String$isEmpty),
		A2(
			elm$core$List$map,
			elm$core$String$trim,
			A2(elm$core$String$split, '\n', author$project$Phrase$stringData))));
var elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var elm$core$List$map2 = _List_map2;
var elm$core$Basics$identity = function (x) {
	return x;
};
var elm$random$Random$Generator = elm$core$Basics$identity;
var elm$random$Random$andThen = F2(
	function (callback, _n0) {
		var genA = _n0;
		return function (seed) {
			var _n1 = genA(seed);
			var result = _n1.a;
			var newSeed = _n1.b;
			var _n2 = callback(result);
			var genB = _n2;
			return genB(newSeed);
		};
	});
var elm$random$Random$map = F2(
	function (func, _n0) {
		var genA = _n0;
		return function (seed0) {
			var _n1 = genA(seed0);
			var a = _n1.a;
			var seed1 = _n1.b;
			return _Utils_Tuple2(
				func(a),
				seed1);
		};
	});
var elm$random$Random$map2 = F3(
	function (func, _n0, _n1) {
		var genA = _n0;
		var genB = _n1;
		return function (seed0) {
			var _n2 = genA(seed0);
			var a = _n2.a;
			var seed1 = _n2.b;
			var _n3 = genB(seed1);
			var b = _n3.a;
			var seed2 = _n3.b;
			return _Utils_Tuple2(
				A2(func, a, b),
				seed2);
		};
	});
var elm$random$Random$constant = function (value) {
	return function (seed) {
		return _Utils_Tuple2(value, seed);
	};
};
var elm_community$random_extra$Random$Extra$combine = function (generators) {
	if (!generators.b) {
		return elm$random$Random$constant(_List_Nil);
	} else {
		var g = generators.a;
		var gs = generators.b;
		return A3(
			elm$random$Random$map2,
			elm$core$List$cons,
			g,
			elm_community$random_extra$Random$Extra$combine(gs));
	}
};
var elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var elm$core$Array$branchFactor = 32;
var elm$core$Basics$ceiling = _Basics_ceiling;
var elm$core$Basics$fdiv = _Basics_fdiv;
var elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var elm$core$Basics$toFloat = _Basics_toFloat;
var elm$core$Array$shiftStep = elm$core$Basics$ceiling(
	A2(elm$core$Basics$logBase, 2, elm$core$Array$branchFactor));
var elm$core$Elm$JsArray$empty = _JsArray_empty;
var elm$core$Array$empty = A4(elm$core$Array$Array_elm_builtin, 0, elm$core$Array$shiftStep, elm$core$Elm$JsArray$empty, elm$core$Elm$JsArray$empty);
var elm$core$Array$Leaf = function (a) {
	return {$: 1, a: a};
};
var elm$core$Array$SubTree = function (a) {
	return {$: 0, a: a};
};
var elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodes);
			var node = _n0.a;
			var remainingNodes = _n0.b;
			var newAcc = A2(
				elm$core$List$cons,
				elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var elm$core$Tuple$first = function (_n0) {
	var x = _n0.a;
	return x;
};
var elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = elm$core$Basics$ceiling(nodeListSize / elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2(elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var elm$core$Basics$floor = _Basics_floor;
var elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var elm$core$Basics$mul = _Basics_mul;
var elm$core$Elm$JsArray$length = _JsArray_length;
var elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.a) {
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.c),
				elm$core$Array$shiftStep,
				elm$core$Elm$JsArray$empty,
				builder.c);
		} else {
			var treeLen = builder.a * elm$core$Array$branchFactor;
			var depth = elm$core$Basics$floor(
				A2(elm$core$Basics$logBase, elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? elm$core$List$reverse(builder.d) : builder.d;
			var tree = A2(elm$core$Array$treeFromBuilder, correctNodeList, builder.a);
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.c) + treeLen,
				A2(elm$core$Basics$max, 5, depth * elm$core$Array$shiftStep),
				tree,
				builder.c);
		}
	});
var elm$core$Basics$True = 0;
var elm$core$Basics$lt = _Utils_lt;
var elm$core$Array$fromListHelp = F3(
	function (list, nodeList, nodeListSize) {
		fromListHelp:
		while (true) {
			var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, list);
			var jsArray = _n0.a;
			var remainingItems = _n0.b;
			if (_Utils_cmp(
				elm$core$Elm$JsArray$length(jsArray),
				elm$core$Array$branchFactor) < 0) {
				return A2(
					elm$core$Array$builderToArray,
					true,
					{d: nodeList, a: nodeListSize, c: jsArray});
			} else {
				var $temp$list = remainingItems,
					$temp$nodeList = A2(
					elm$core$List$cons,
					elm$core$Array$Leaf(jsArray),
					nodeList),
					$temp$nodeListSize = nodeListSize + 1;
				list = $temp$list;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue fromListHelp;
			}
		}
	});
var elm$core$Array$fromList = function (list) {
	if (!list.b) {
		return elm$core$Array$empty;
	} else {
		return A3(elm$core$Array$fromListHelp, list, _List_Nil, 0);
	}
};
var elm$core$Array$length = function (_n0) {
	var len = _n0.a;
	return len;
};
var elm$core$Basics$negate = function (n) {
	return -n;
};
var elm$core$Basics$remainderBy = _Basics_remainderBy;
var elm$core$Bitwise$and = _Bitwise_and;
var elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var elm$random$Random$Seed = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var elm$random$Random$next = function (_n0) {
	var state0 = _n0.a;
	var incr = _n0.b;
	return A2(elm$random$Random$Seed, ((state0 * 1664525) + incr) >>> 0, incr);
};
var elm$core$Bitwise$xor = _Bitwise_xor;
var elm$random$Random$peel = function (_n0) {
	var state = _n0.a;
	var word = (state ^ (state >>> ((state >>> 28) + 4))) * 277803737;
	return ((word >>> 22) ^ word) >>> 0;
};
var elm$random$Random$int = F2(
	function (a, b) {
		return function (seed0) {
			var _n0 = (_Utils_cmp(a, b) < 0) ? _Utils_Tuple2(a, b) : _Utils_Tuple2(b, a);
			var lo = _n0.a;
			var hi = _n0.b;
			var range = (hi - lo) + 1;
			if (!((range - 1) & range)) {
				return _Utils_Tuple2(
					(((range - 1) & elm$random$Random$peel(seed0)) >>> 0) + lo,
					elm$random$Random$next(seed0));
			} else {
				var threshhold = (((-range) >>> 0) % range) >>> 0;
				var accountForBias = function (seed) {
					accountForBias:
					while (true) {
						var x = elm$random$Random$peel(seed);
						var seedN = elm$random$Random$next(seed);
						if (_Utils_cmp(x, threshhold) < 0) {
							var $temp$seed = seedN;
							seed = $temp$seed;
							continue accountForBias;
						} else {
							return _Utils_Tuple2((x % range) + lo, seedN);
						}
					}
				};
				return accountForBias(seed0);
			}
		};
	});
var elm$random$Random$listHelp = F4(
	function (revList, n, gen, seed) {
		listHelp:
		while (true) {
			if (n < 1) {
				return _Utils_Tuple2(revList, seed);
			} else {
				var _n0 = gen(seed);
				var value = _n0.a;
				var newSeed = _n0.b;
				var $temp$revList = A2(elm$core$List$cons, value, revList),
					$temp$n = n - 1,
					$temp$gen = gen,
					$temp$seed = newSeed;
				revList = $temp$revList;
				n = $temp$n;
				gen = $temp$gen;
				seed = $temp$seed;
				continue listHelp;
			}
		}
	});
var elm$random$Random$list = F2(
	function (n, _n0) {
		var gen = _n0;
		return function (seed) {
			return A4(elm$random$Random$listHelp, _List_Nil, n, gen, seed);
		};
	});
var elm$core$Array$bitMask = 4294967295 >>> (32 - elm$core$Array$shiftStep);
var elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = elm$core$Array$bitMask & (index >>> shift);
			var _n0 = A2(elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (!_n0.$) {
				var subTree = _n0.a;
				var $temp$shift = shift - elm$core$Array$shiftStep,
					$temp$index = index,
					$temp$tree = subTree;
				shift = $temp$shift;
				index = $temp$index;
				tree = $temp$tree;
				continue getHelp;
			} else {
				var values = _n0.a;
				return A2(elm$core$Elm$JsArray$unsafeGet, elm$core$Array$bitMask & index, values);
			}
		}
	});
var elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
var elm$core$Basics$ge = _Utils_ge;
var elm$core$Basics$or = _Basics_or;
var elm$core$Array$get = F2(
	function (index, _n0) {
		var len = _n0.a;
		var startShift = _n0.b;
		var tree = _n0.c;
		var tail = _n0.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? elm$core$Maybe$Nothing : ((_Utils_cmp(
			index,
			elm$core$Array$tailIndex(len)) > -1) ? elm$core$Maybe$Just(
			A2(elm$core$Elm$JsArray$unsafeGet, elm$core$Array$bitMask & index, tail)) : elm$core$Maybe$Just(
			A3(elm$core$Array$getHelp, startShift, index, tree)));
	});
var elm$core$Array$isEmpty = function (_n0) {
	var len = _n0.a;
	return !len;
};
var elm$core$Basics$modBy = _Basics_modBy;
var elm$core$Tuple$second = function (_n0) {
	var y = _n0.b;
	return y;
};
var elm$core$Basics$compare = _Utils_compare;
var elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === -2) {
				return elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _n1 = A2(elm$core$Basics$compare, targetKey, key);
				switch (_n1) {
					case 0:
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 1:
						return elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var owanturist$elm_union_find$UnionFind$findFast = F2(
	function (id, dict) {
		findFast:
		while (true) {
			var _n0 = A2(elm$core$Dict$get, id, dict);
			if (_n0.$ === 1) {
				return id;
			} else {
				var cursor = _n0.a;
				if (_Utils_eq(id, cursor)) {
					return id;
				} else {
					var $temp$id = cursor,
						$temp$dict = dict;
					id = $temp$id;
					dict = $temp$dict;
					continue findFast;
				}
			}
		}
	});
var owanturist$elm_union_find$UnionFind$find = F2(
	function (id, _n0) {
		var dict = _n0.b;
		return A2(owanturist$elm_union_find$UnionFind$findFast, id, dict);
	});
var elm$core$Dict$RBEmpty_elm_builtin = {$: -2};
var elm$core$Dict$empty = elm$core$Dict$RBEmpty_elm_builtin;
var owanturist$elm_union_find$UnionFind$QuickUnionPathCompression = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var owanturist$elm_union_find$UnionFind$quickUnionPathCompression = A2(owanturist$elm_union_find$UnionFind$QuickUnionPathCompression, 0, elm$core$Dict$empty);
var elm$core$Dict$Black = 1;
var elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: -1, a: a, b: b, c: c, d: d, e: e};
	});
var elm$core$Dict$Red = 0;
var elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === -1) && (!right.a)) {
			var _n1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === -1) && (!left.a)) {
				var _n3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					0,
					key,
					value,
					A5(elm$core$Dict$RBNode_elm_builtin, 1, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === -1) && (!left.a)) && (left.d.$ === -1)) && (!left.d.a)) {
				var _n5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _n6 = left.d;
				var _n7 = _n6.a;
				var llK = _n6.b;
				var llV = _n6.c;
				var llLeft = _n6.d;
				var llRight = _n6.e;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					0,
					lK,
					lV,
					A5(elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 1, key, value, lRight, right));
			} else {
				return A5(elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === -2) {
			return A5(elm$core$Dict$RBNode_elm_builtin, 0, key, value, elm$core$Dict$RBEmpty_elm_builtin, elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _n1 = A2(elm$core$Basics$compare, key, nKey);
			switch (_n1) {
				case 0:
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3(elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 1:
					return A5(elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3(elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _n0 = A3(elm$core$Dict$insertHelp, key, value, dict);
		if ((_n0.$ === -1) && (!_n0.a)) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
var owanturist$elm_union_find$UnionFind$findCompressed = F2(
	function (id, dict) {
		var _n0 = A2(elm$core$Dict$get, id, dict);
		if (_n0.$ === 1) {
			return _Utils_Tuple2(
				id,
				A3(elm$core$Dict$insert, id, id, dict));
		} else {
			var cursor = _n0.a;
			if (_Utils_eq(id, cursor)) {
				return _Utils_Tuple2(id, dict);
			} else {
				var _n1 = A2(owanturist$elm_union_find$UnionFind$findCompressed, cursor, dict);
				var parent = _n1.a;
				var nextDict = _n1.b;
				return _Utils_Tuple2(
					parent,
					A3(elm$core$Dict$insert, id, parent, nextDict));
			}
		}
	});
var owanturist$elm_union_find$UnionFind$union = F3(
	function (left, right, _n0) {
		var count_ = _n0.a;
		var dict = _n0.b;
		var _n1 = A2(owanturist$elm_union_find$UnionFind$findCompressed, left, dict);
		var leftRoot = _n1.a;
		var leftDict = _n1.b;
		var _n2 = A2(owanturist$elm_union_find$UnionFind$findCompressed, right, leftDict);
		var rightRoot = _n2.a;
		var rightDict = _n2.b;
		return _Utils_eq(leftRoot, rightRoot) ? A2(owanturist$elm_union_find$UnionFind$QuickUnionPathCompression, count_, rightDict) : A2(
			owanturist$elm_union_find$UnionFind$QuickUnionPathCompression,
			count_ + 1,
			A3(elm$core$Dict$insert, leftRoot, rightRoot, rightDict));
	});
var elm_community$random_extra$Utils$selectUniqByIndexes = F2(
	function (values, randomIndexes) {
		var modByLength = elm$core$Basics$modBy(
			elm$core$Array$length(values));
		var step = F2(
			function (randomIndex, _n1) {
				var uf = _n1.a;
				var acc = _n1.b;
				var leaderOfElement = A2(owanturist$elm_union_find$UnionFind$find, randomIndex, uf);
				var leaderOfNextElement = A2(
					owanturist$elm_union_find$UnionFind$find,
					modByLength(leaderOfElement + 1),
					uf);
				var _n0 = A2(elm$core$Array$get, leaderOfElement, values);
				if (_n0.$ === 1) {
					return _Utils_Tuple2(uf, acc);
				} else {
					var value = _n0.a;
					return _Utils_Tuple2(
						A3(owanturist$elm_union_find$UnionFind$union, leaderOfElement, leaderOfNextElement, uf),
						A2(elm$core$List$cons, value, acc));
				}
			});
		return elm$core$Array$isEmpty(values) ? _List_Nil : A3(
			elm$core$List$foldr,
			step,
			_Utils_Tuple2(owanturist$elm_union_find$UnionFind$quickUnionPathCompression, _List_Nil),
			randomIndexes).b;
	});
var elm_community$random_extra$Random$List$shuffle = function (list) {
	var values = elm$core$Array$fromList(list);
	var length = elm$core$Array$length(values);
	return A2(
		elm$random$Random$map,
		elm_community$random_extra$Utils$selectUniqByIndexes(values),
		A2(
			elm$random$Random$list,
			length,
			A2(elm$random$Random$int, 0, length - 1)));
};
var author$project$Main$randomize = function () {
	var shuffleSuggestions = function (phrase) {
		return A2(
			elm$random$Random$map,
			A2(
				elm$core$Basics$composeR,
				elm$core$List$take(3),
				author$project$Phrase$Phrase(phrase.F)),
			elm_community$random_extra$Random$List$shuffle(
				A2(elm$core$List$cons, phrase.F, phrase.am)));
	};
	var phrases = elm_community$random_extra$Random$Extra$combine(
		A2(elm$core$List$map, shuffleSuggestions, author$project$Phrase$phraseSet));
	return A3(
		elm$random$Random$map2,
		elm$core$List$map2(
			F2(
				function (phrase, point) {
					return A3(author$project$Main$RandomPhrase, phrase.F, phrase.am, point);
				})),
		A2(elm$random$Random$andThen, elm_community$random_extra$Random$List$shuffle, phrases),
		elm_community$random_extra$Random$List$shuffle(author$project$Main$timepoints));
}();
var author$project$Main$Download = function (a) {
	return {$: 3, a: a};
};
var author$project$Main$Presenting = {$: 1};
var author$project$Main$Typing = function (a) {
	return {$: 2, a: a};
};
var elm$core$Basics$idiv = _Basics_idiv;
var elm$core$List$length = function (xs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var author$project$Main$blockSize = (elm$core$List$length(author$project$Main$timepoints) / author$project$Main$blockCount) | 0;
var elm$core$List$tail = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(xs);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var elm$core$Basics$False = 1;
var elm$core$Result$isOk = function (result) {
	if (!result.$) {
		return true;
	} else {
		return false;
	}
};
var elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					elm$core$Array$builderToArray,
					false,
					{d: nodeList, a: (len / elm$core$Array$branchFactor) | 0, c: tail});
			} else {
				var leaf = elm$core$Array$Leaf(
					A3(elm$core$Elm$JsArray$initialize, elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2(elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return elm$core$Array$empty;
		} else {
			var tailLen = len % elm$core$Array$branchFactor;
			var tail = A3(elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - elm$core$Array$branchFactor;
			return A5(elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var elm$core$Result$Err = function (a) {
	return {$: 1, a: a};
};
var elm$core$Result$Ok = function (a) {
	return {$: 0, a: a};
};
var elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var elm$json$Json$Decode$OneOf = function (a) {
	return {$: 2, a: a};
};
var elm$core$Basics$and = _Basics_and;
var elm$core$Basics$append = _Utils_append;
var elm$core$Char$toCode = _Char_toCode;
var elm$core$Char$isLower = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var elm$core$Char$isUpper = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var elm$core$Char$isAlpha = function (_char) {
	return elm$core$Char$isLower(_char) || elm$core$Char$isUpper(_char);
};
var elm$core$Char$isDigit = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var elm$core$Char$isAlphaNum = function (_char) {
	return elm$core$Char$isLower(_char) || (elm$core$Char$isUpper(_char) || elm$core$Char$isDigit(_char));
};
var elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2(elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var elm$core$List$range = F2(
	function (lo, hi) {
		return A3(elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$map2,
			f,
			A2(
				elm$core$List$range,
				0,
				elm$core$List$length(xs) - 1),
			xs);
	});
var elm$core$String$all = _String_all;
var elm$core$String$fromInt = _String_fromNumber;
var elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var elm$core$String$uncons = _String_uncons;
var elm$json$Json$Decode$indent = function (str) {
	return A2(
		elm$core$String$join,
		'\n    ',
		A2(elm$core$String$split, '\n', str));
};
var elm$json$Json$Encode$encode = _Json_encode;
var elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + (elm$core$String$fromInt(i + 1) + (') ' + elm$json$Json$Decode$indent(
			elm$json$Json$Decode$errorToString(error))));
	});
var elm$json$Json$Decode$errorToString = function (error) {
	return A2(elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 0:
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _n1 = elm$core$String$uncons(f);
						if (_n1.$ === 1) {
							return false;
						} else {
							var _n2 = _n1.a;
							var _char = _n2.a;
							var rest = _n2.b;
							return elm$core$Char$isAlpha(_char) && A2(elm$core$String$all, elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 1:
					var i = error.a;
					var err = error.b;
					var indexName = '[' + (elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 2:
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									elm$core$String$join,
									'',
									elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										elm$core$String$join,
										'',
										elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + (elm$core$String$fromInt(
								elm$core$List$length(errors)) + ' ways:'));
							return A2(
								elm$core$String$join,
								'\n\n',
								A2(
									elm$core$List$cons,
									introduction,
									A2(elm$core$List$indexedMap, elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								elm$core$String$join,
								'',
								elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + (elm$json$Json$Decode$indent(
						A2(elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var elm$core$Platform$Cmd$batch = _Platform_batch;
var elm$core$Platform$Cmd$none = elm$core$Platform$Cmd$batch(_List_Nil);
var author$project$Main$update = F2(
	function (event, model) {
		var recordEvent = _Utils_update(
			model,
			{
				J: A2(elm$core$List$cons, event, model.J)
			});
		var result = function () {
			switch (event.$) {
				case 0:
					var phrases = event.a;
					return _Utils_update(
						recordEvent,
						{y: phrases});
				case 1:
					var _n1 = model.l;
					switch (_n1.$) {
						case 0:
							return _Utils_update(
								recordEvent,
								{l: author$project$Main$Presenting, x: model.x + 1});
						case 1:
							return _Utils_update(
								recordEvent,
								{
									l: author$project$Main$Typing('')
								});
						case 2:
							return _Utils_update(
								recordEvent,
								{
									l: author$project$Main$Download('*gemessene daten*'),
									y: A2(
										elm$core$Maybe$withDefault,
										_List_Nil,
										elm$core$List$tail(model.y))
								});
						default:
							return model;
					}
				default:
					var time = event.a;
					var newValue = event.b;
					var _n2 = model.l;
					if (_n2.$ === 2) {
						var oldValue = _n2.a;
						return _Utils_update(
							recordEvent,
							{
								l: author$project$Main$Typing(newValue)
							});
					} else {
						return model;
					}
			}
		}();
		var phrasesCompleted = !(model.x % author$project$Main$blockSize);
		var blocksCompleted = ((model.x / author$project$Main$blockSize) | 0) === 3;
		return _Utils_Tuple2(result, elm$core$Platform$Cmd$none);
	});
var author$project$Main$Next = function (a) {
	return {$: 1, a: a};
};
var elm$json$Json$Decode$field = _Json_decodeField;
var elm$json$Json$Decode$float = _Json_decodeFloat;
var author$project$Main$timeStamp = A2(elm$json$Json$Decode$field, 'timeStamp', elm$json$Json$Decode$float);
var elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 0, a: a};
};
var elm$json$Json$Decode$map = _Json_map1;
var elm$json$Json$Decode$map2 = _Json_map2;
var elm$json$Json$Decode$succeed = _Json_succeed;
var elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 0:
			return 0;
		case 1:
			return 1;
		case 2:
			return 2;
		default:
			return 3;
	}
};
var elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			elm$virtual_dom$VirtualDom$on,
			event,
			elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var author$project$Main$recordClick = function (message) {
	return A2(
		elm$html$Html$Events$on,
		'click',
		A2(elm$json$Json$Decode$map, message, author$project$Main$timeStamp));
};
var author$project$Main$Type = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3(elm$core$List$foldr, elm$json$Json$Decode$field, decoder, fields);
	});
var elm$json$Json$Decode$string = _Json_decodeString;
var elm$html$Html$Events$targetValue = A2(
	elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	elm$json$Json$Decode$string);
var author$project$Main$recordTyping = A2(
	elm$html$Html$Events$on,
	'input',
	A3(elm$json$Json$Decode$map2, author$project$Main$Type, author$project$Main$timeStamp, elm$html$Html$Events$targetValue));
var elm$html$Html$button = _VirtualDom_node('button');
var elm$html$Html$div = _VirtualDom_node('div');
var elm$html$Html$input = _VirtualDom_node('input');
var elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var elm$html$Html$text = elm$virtual_dom$VirtualDom$text;
var elm$json$Json$Encode$string = _Json_wrap;
var elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			elm$json$Json$Encode$string(string));
	});
var elm$html$Html$Attributes$value = elm$html$Html$Attributes$stringProperty('value');
var author$project$Main$view = function (model) {
	var contents = function () {
		var _n0 = _Utils_Tuple2(model.l, model.y);
		_n0$4:
		while (true) {
			switch (_n0.a.$) {
				case 0:
					var _n1 = _n0.a;
					return A2(
						elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								elm$html$Html$text('Bereit für den nächsten Schritt.'),
								A2(
								elm$html$Html$button,
								_List_fromArray(
									[
										author$project$Main$recordClick(author$project$Main$Next)
									]),
								_List_fromArray(
									[
										elm$html$Html$text('Los geht\'s!')
									]))
							]));
				case 1:
					if (_n0.b.b) {
						var _n2 = _n0.a;
						var _n3 = _n0.b;
						var phrase = _n3.a;
						return A2(
							elm$html$Html$div,
							_List_Nil,
							_List_fromArray(
								[
									elm$html$Html$text('Prägen Sie sich folgende Phrase ein: `' + (phrase.F + '`')),
									A2(
									elm$html$Html$button,
									_List_fromArray(
										[
											author$project$Main$recordClick(author$project$Main$Next)
										]),
									_List_fromArray(
										[
											elm$html$Html$text('Starten')
										]))
								]));
					} else {
						break _n0$4;
					}
				case 2:
					if (_n0.b.b) {
						var transcription = _n0.a.a;
						var _n4 = _n0.b;
						var phrase = _n4.a;
						return A2(
							elm$html$Html$div,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									elm$html$Html$input,
									_List_fromArray(
										[
											elm$html$Html$Attributes$value(transcription),
											author$project$Main$recordTyping
										]),
									_List_Nil),
									A2(
									elm$html$Html$button,
									_List_fromArray(
										[
											author$project$Main$recordClick(author$project$Main$Next)
										]),
									_List_fromArray(
										[
											elm$html$Html$text('Fertig!')
										]))
								]));
					} else {
						break _n0$4;
					}
				default:
					var download = _n0.a.a;
					return A2(
						elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								elm$html$Html$text('Schick mir bitte folgende Nachricht: ' + download)
							]));
			}
		}
		return elm$html$Html$text('Fertig, yay!');
	}();
	return A2(
		elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[contents]));
};
var elm$browser$Browser$External = function (a) {
	return {$: 1, a: a};
};
var elm$browser$Browser$Internal = function (a) {
	return {$: 0, a: a};
};
var elm$browser$Browser$Dom$NotFound = elm$core$Basics$identity;
var elm$core$Basics$never = function (_n0) {
	never:
	while (true) {
		var nvr = _n0;
		var $temp$_n0 = nvr;
		_n0 = $temp$_n0;
		continue never;
	}
};
var elm$core$Task$Perform = elm$core$Basics$identity;
var elm$core$Task$succeed = _Scheduler_succeed;
var elm$core$Task$init = elm$core$Task$succeed(0);
var elm$core$Task$andThen = _Scheduler_andThen;
var elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return A2(
					elm$core$Task$andThen,
					function (b) {
						return elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var elm$core$Task$sequence = function (tasks) {
	return A3(
		elm$core$List$foldr,
		elm$core$Task$map2(elm$core$List$cons),
		elm$core$Task$succeed(_List_Nil),
		tasks);
};
var elm$core$Platform$sendToApp = _Platform_sendToApp;
var elm$core$Task$spawnCmd = F2(
	function (router, _n0) {
		var task = _n0;
		return _Scheduler_spawn(
			A2(
				elm$core$Task$andThen,
				elm$core$Platform$sendToApp(router),
				task));
	});
var elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			elm$core$Task$map,
			function (_n0) {
				return 0;
			},
			elm$core$Task$sequence(
				A2(
					elm$core$List$map,
					elm$core$Task$spawnCmd(router),
					commands)));
	});
var elm$core$Task$onSelfMsg = F3(
	function (_n0, _n1, _n2) {
		return elm$core$Task$succeed(0);
	});
var elm$core$Task$cmdMap = F2(
	function (tagger, _n0) {
		var task = _n0;
		return A2(elm$core$Task$map, tagger, task);
	});
_Platform_effectManagers['Task'] = _Platform_createManager(elm$core$Task$init, elm$core$Task$onEffects, elm$core$Task$onSelfMsg, elm$core$Task$cmdMap);
var elm$core$Task$command = _Platform_leaf('Task');
var elm$core$Task$perform = F2(
	function (toMessage, task) {
		return elm$core$Task$command(
			A2(elm$core$Task$map, toMessage, task));
	});
var elm$core$String$length = _String_length;
var elm$core$String$slice = _String_slice;
var elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			elm$core$String$slice,
			n,
			elm$core$String$length(string),
			string);
	});
var elm$core$String$startsWith = _String_startsWith;
var elm$url$Url$Http = 0;
var elm$url$Url$Https = 1;
var elm$core$String$indexes = _String_indexes;
var elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(elm$core$String$slice, 0, n, string);
	});
var elm$core$String$contains = _String_contains;
var elm$core$String$toInt = _String_toInt;
var elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {V: fragment, X: host, aa: path, ac: port_, af: protocol, ag: query};
	});
var elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if (elm$core$String$isEmpty(str) || A2(elm$core$String$contains, '@', str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, ':', str);
			if (!_n0.b) {
				return elm$core$Maybe$Just(
					A6(elm$url$Url$Url, protocol, str, elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_n0.b.b) {
					var i = _n0.a;
					var _n1 = elm$core$String$toInt(
						A2(elm$core$String$dropLeft, i + 1, str));
					if (_n1.$ === 1) {
						return elm$core$Maybe$Nothing;
					} else {
						var port_ = _n1;
						return elm$core$Maybe$Just(
							A6(
								elm$url$Url$Url,
								protocol,
								A2(elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return elm$core$Maybe$Nothing;
				}
			}
		}
	});
var elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '/', str);
			if (!_n0.b) {
				return A5(elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _n0.a;
				return A5(
					elm$url$Url$chompBeforePath,
					protocol,
					A2(elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '?', str);
			if (!_n0.b) {
				return A4(elm$url$Url$chompBeforeQuery, protocol, elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _n0.a;
				return A4(
					elm$url$Url$chompBeforeQuery,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '#', str);
			if (!_n0.b) {
				return A3(elm$url$Url$chompBeforeFragment, protocol, elm$core$Maybe$Nothing, str);
			} else {
				var i = _n0.a;
				return A3(
					elm$url$Url$chompBeforeFragment,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$fromString = function (str) {
	return A2(elm$core$String$startsWith, 'http://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		0,
		A2(elm$core$String$dropLeft, 7, str)) : (A2(elm$core$String$startsWith, 'https://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		1,
		A2(elm$core$String$dropLeft, 8, str)) : elm$core$Maybe$Nothing);
};
var elm$browser$Browser$element = _Browser_element;
var elm$core$Basics$always = F2(
	function (a, _n0) {
		return a;
	});
var elm$core$Platform$Sub$batch = _Platform_batch;
var elm$core$Platform$Sub$none = elm$core$Platform$Sub$batch(_List_Nil);
var elm$random$Random$Generate = elm$core$Basics$identity;
var elm$random$Random$initialSeed = function (x) {
	var _n0 = elm$random$Random$next(
		A2(elm$random$Random$Seed, 0, 1013904223));
	var state1 = _n0.a;
	var incr = _n0.b;
	var state2 = (state1 + x) >>> 0;
	return elm$random$Random$next(
		A2(elm$random$Random$Seed, state2, incr));
};
var elm$time$Time$Name = function (a) {
	return {$: 0, a: a};
};
var elm$time$Time$Offset = function (a) {
	return {$: 1, a: a};
};
var elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var elm$time$Time$customZone = elm$time$Time$Zone;
var elm$time$Time$Posix = elm$core$Basics$identity;
var elm$time$Time$millisToPosix = elm$core$Basics$identity;
var elm$time$Time$now = _Time_now(elm$time$Time$millisToPosix);
var elm$time$Time$posixToMillis = function (_n0) {
	var millis = _n0;
	return millis;
};
var elm$random$Random$init = A2(
	elm$core$Task$andThen,
	function (time) {
		return elm$core$Task$succeed(
			elm$random$Random$initialSeed(
				elm$time$Time$posixToMillis(time)));
	},
	elm$time$Time$now);
var elm$random$Random$step = F2(
	function (_n0, seed) {
		var generator = _n0;
		return generator(seed);
	});
var elm$random$Random$onEffects = F3(
	function (router, commands, seed) {
		if (!commands.b) {
			return elm$core$Task$succeed(seed);
		} else {
			var generator = commands.a;
			var rest = commands.b;
			var _n1 = A2(elm$random$Random$step, generator, seed);
			var value = _n1.a;
			var newSeed = _n1.b;
			return A2(
				elm$core$Task$andThen,
				function (_n2) {
					return A3(elm$random$Random$onEffects, router, rest, newSeed);
				},
				A2(elm$core$Platform$sendToApp, router, value));
		}
	});
var elm$random$Random$onSelfMsg = F3(
	function (_n0, _n1, seed) {
		return elm$core$Task$succeed(seed);
	});
var elm$random$Random$cmdMap = F2(
	function (func, _n0) {
		var generator = _n0;
		return A2(elm$random$Random$map, func, generator);
	});
_Platform_effectManagers['Random'] = _Platform_createManager(elm$random$Random$init, elm$random$Random$onEffects, elm$random$Random$onSelfMsg, elm$random$Random$cmdMap);
var elm$random$Random$command = _Platform_leaf('Random');
var elm$random$Random$generate = F2(
	function (tagger, generator) {
		return elm$random$Random$command(
			A2(elm$random$Random$map, tagger, generator));
	});
var author$project$Main$main = elm$browser$Browser$element(
	{
		aB: function (_n0) {
			return _Utils_Tuple2(
				author$project$Main$initial,
				A2(elm$random$Random$generate, author$project$Main$Randomize, author$project$Main$randomize));
		},
		aI: elm$core$Basics$always(elm$core$Platform$Sub$none),
		aL: author$project$Main$update,
		aN: author$project$Main$view
	});
_Platform_export({'Main':{'init':author$project$Main$main(
	elm$json$Json$Decode$succeed(0))(0)}});}(this));