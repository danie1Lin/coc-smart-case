var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __commonJS = (callback, module2) => () => {
  if (!module2) {
    module2 = {exports: {}};
    callback(module2.exports, module2);
  }
  return module2.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __exportStar = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  return __exportStar(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? {get: () => module2.default, enumerable: true} : {value: module2, enumerable: true})), module2);
};

// node_modules/js-convert-case/lib/modules/js-camelcase/index.js
var require_js_camelcase = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  function toCamelCase2(str) {
    if (str === void 0) {
      str = "";
    }
    if (!str)
      return "";
    return String(str).replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, "").replace(/[^A-Za-z0-9]+/g, "$").replace(/([a-z])([A-Z])/g, function(m, a, b) {
      return a + "$" + b;
    }).toLowerCase().replace(/(\$)(\w)/g, function(m, a, b) {
      return b.toUpperCase();
    });
  }
  exports2.default = toCamelCase2;
});

// node_modules/js-convert-case/lib/modules/js-snakecase/index.js
var require_js_snakecase = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  function toSnakeCase2(str) {
    if (str === void 0) {
      str = "";
    }
    if (!str)
      return "";
    return String(str).replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, "").replace(/([a-z])([A-Z])/g, function(m, a, b) {
      return a + "_" + b.toLowerCase();
    }).replace(/[^A-Za-z0-9]+|_+/g, "_").toLowerCase();
  }
  exports2.default = toSnakeCase2;
});

// node_modules/js-convert-case/lib/modules/js-pascalcase/index.js
var require_js_pascalcase = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  function toPascalCase2(str) {
    if (str === void 0) {
      str = "";
    }
    if (!str)
      return "";
    return String(str).replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, "$").replace(/[^A-Za-z0-9]+/g, "$").replace(/([a-z])([A-Z])/g, function(m, a, b) {
      return a + "$" + b;
    }).toLowerCase().replace(/(\$)(\w?)/g, function(m, a, b) {
      return b.toUpperCase();
    });
  }
  exports2.default = toPascalCase2;
});

// node_modules/js-convert-case/lib/modules/js-dotcase/index.js
var require_js_dotcase = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  function toDotCase(str) {
    if (str === void 0) {
      str = "";
    }
    if (!str)
      return "";
    return String(str).replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, "").replace(/([a-z])([A-Z])/g, function(m, a, b) {
      return a + "_" + b.toLowerCase();
    }).replace(/[^A-Za-z0-9]+|_+/g, ".").toLowerCase();
  }
  exports2.default = toDotCase;
});

// node_modules/js-convert-case/lib/modules/js-pathcase/index.js
var require_js_pathcase = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  function toPathCase(str) {
    if (str === void 0) {
      str = "";
    }
    if (!str)
      return "";
    return String(str).replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, "").replace(/([a-z])([A-Z])/g, function(m, a, b) {
      return a + "_" + b.toLowerCase();
    }).replace(/[^A-Za-z0-9]+|_+/g, "/").toLowerCase();
  }
  exports2.default = toPathCase;
});

// node_modules/js-convert-case/lib/modules/js-textcase/index.js
var require_js_textcase = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  function toTextCase(str) {
    if (str === void 0) {
      str = "";
    }
    if (!str)
      return "";
    return String(str).replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, "").replace(/([a-z])([A-Z])/g, function(m, a, b) {
      return a + "_" + b.toLowerCase();
    }).replace(/[^A-Za-z0-9]+|_+/g, " ").toLowerCase();
  }
  exports2.default = toTextCase;
});

// node_modules/js-convert-case/lib/modules/js-sentencecase/index.js
var require_js_sentencecase = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  function toSentenceCase(str) {
    if (str === void 0) {
      str = "";
    }
    if (!str)
      return "";
    var textcase = String(str).replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, "").replace(/([a-z])([A-Z])/g, function(m, a, b) {
      return a + "_" + b.toLowerCase();
    }).replace(/[^A-Za-z0-9]+|_+/g, " ").toLowerCase();
    return textcase.charAt(0).toUpperCase() + textcase.slice(1);
  }
  exports2.default = toSentenceCase;
});

// node_modules/js-convert-case/lib/modules/js-headercase/index.js
var require_js_headercase = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  function toHeaderCase(str) {
    if (str === void 0) {
      str = "";
    }
    if (!str)
      return "";
    return String(str).replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, "").replace(/([a-z])([A-Z])/g, function(m, a, b) {
      return a + "_" + b.toLowerCase();
    }).replace(/[^A-Za-z0-9]+|_+/g, " ").toLowerCase().replace(/( ?)(\w+)( ?)/g, function(m, a, b, c) {
      return a + b.charAt(0).toUpperCase() + b.slice(1) + c;
    });
  }
  exports2.default = toHeaderCase;
});

// node_modules/js-convert-case/lib/modules/extends/utils.js
var require_utils = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.isValidObject = exports2.isArrayObject = exports2.validateOptions = exports2.DefaultOption = void 0;
  exports2.DefaultOption = {
    recursive: false,
    recursiveInArray: false
  };
  exports2.validateOptions = function(opt) {
    if (opt === void 0) {
      opt = exports2.DefaultOption;
    }
    if (opt.recursive == null) {
      opt = exports2.DefaultOption;
    } else if (opt.recursiveInArray == null) {
      opt.recursiveInArray = false;
    }
    return opt;
  };
  exports2.isArrayObject = function(obj) {
    return obj != null && Array.isArray(obj);
  };
  exports2.isValidObject = function(obj) {
    return obj != null && typeof obj === "object" && !Array.isArray(obj);
  };
});

// node_modules/js-convert-case/lib/modules/extends/lowercase-keys-object/index.js
var require_lowercase_keys_object = __commonJS((exports2) => {
  "use strict";
  var __spreadArrays = exports2 && exports2.__spreadArrays || function() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
      s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  };
  Object.defineProperty(exports2, "__esModule", {value: true});
  var utils_1 = require_utils();
  function lowerKeys(obj, opt) {
    if (opt === void 0) {
      opt = utils_1.DefaultOption;
    }
    if (!utils_1.isValidObject(obj))
      return null;
    opt = utils_1.validateOptions(opt);
    var res = {};
    Object.keys(obj).forEach(function(key) {
      var value = obj[key];
      var nkey = key.toLowerCase();
      if (opt.recursive) {
        if (utils_1.isValidObject(value)) {
          value = lowerKeys(value, opt);
        } else if (opt.recursiveInArray && utils_1.isArrayObject(value)) {
          value = __spreadArrays(value).map(function(v) {
            var ret = v;
            if (utils_1.isValidObject(v)) {
              ret = lowerKeys(v, opt);
            } else if (utils_1.isArrayObject(v)) {
              var temp = lowerKeys({key: v}, opt);
              ret = temp.key;
            }
            return ret;
          });
        }
      }
      res[nkey] = value;
    });
    return res;
  }
  exports2.default = lowerKeys;
});

// node_modules/js-convert-case/lib/modules/extends/uppercase-keys-object/index.js
var require_uppercase_keys_object = __commonJS((exports2) => {
  "use strict";
  var __spreadArrays = exports2 && exports2.__spreadArrays || function() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
      s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  };
  Object.defineProperty(exports2, "__esModule", {value: true});
  var utils_1 = require_utils();
  function upperKeys(obj, opt) {
    if (opt === void 0) {
      opt = utils_1.DefaultOption;
    }
    if (!utils_1.isValidObject(obj))
      return null;
    opt = utils_1.validateOptions(opt);
    var res = {};
    Object.keys(obj).forEach(function(key) {
      var value = obj[key];
      var nkey = key.toUpperCase();
      if (opt.recursive) {
        if (utils_1.isValidObject(value)) {
          value = upperKeys(value, opt);
        } else if (opt.recursiveInArray && utils_1.isArrayObject(value)) {
          value = __spreadArrays(value).map(function(v) {
            var ret = v;
            if (utils_1.isValidObject(v)) {
              ret = upperKeys(v, opt);
            } else if (utils_1.isArrayObject(v)) {
              var temp = upperKeys({key: v}, opt);
              ret = temp.key;
            }
            return ret;
          });
        }
      }
      res[nkey] = value;
    });
    return res;
  }
  exports2.default = upperKeys;
});

// node_modules/js-convert-case/lib/modules/extends/camelcase-keys-object/index.js
var require_camelcase_keys_object = __commonJS((exports2) => {
  "use strict";
  var __spreadArrays = exports2 && exports2.__spreadArrays || function() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
      s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  };
  Object.defineProperty(exports2, "__esModule", {value: true});
  var utils_1 = require_utils();
  var js_camelcase_1 = require_js_camelcase();
  function camelKeys(obj, opt) {
    if (opt === void 0) {
      opt = utils_1.DefaultOption;
    }
    if (!utils_1.isValidObject(obj))
      return null;
    opt = utils_1.validateOptions(opt);
    var res = {};
    Object.keys(obj).forEach(function(key) {
      var value = obj[key];
      var nkey = js_camelcase_1.default(key);
      if (opt.recursive) {
        if (utils_1.isValidObject(value)) {
          value = camelKeys(value, opt);
        } else if (opt.recursiveInArray && utils_1.isArrayObject(value)) {
          value = __spreadArrays(value).map(function(v) {
            var ret = v;
            if (utils_1.isValidObject(v)) {
              ret = camelKeys(v, opt);
            } else if (utils_1.isArrayObject(v)) {
              var temp = camelKeys({key: v}, opt);
              ret = temp.key;
            }
            return ret;
          });
        }
      }
      res[nkey] = value;
    });
    return res;
  }
  exports2.default = camelKeys;
});

// node_modules/js-convert-case/lib/modules/extends/snakecase-keys-object/index.js
var require_snakecase_keys_object = __commonJS((exports2) => {
  "use strict";
  var __spreadArrays = exports2 && exports2.__spreadArrays || function() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
      s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  };
  Object.defineProperty(exports2, "__esModule", {value: true});
  var utils_1 = require_utils();
  var js_snakecase_1 = require_js_snakecase();
  function snakeKeys(obj, opt) {
    if (opt === void 0) {
      opt = utils_1.DefaultOption;
    }
    if (!utils_1.isValidObject(obj))
      return null;
    opt = utils_1.validateOptions(opt);
    var res = {};
    Object.keys(obj).forEach(function(key) {
      var value = obj[key];
      var nkey = js_snakecase_1.default(key);
      if (opt.recursive) {
        if (utils_1.isValidObject(value)) {
          value = snakeKeys(value, opt);
        } else if (opt.recursiveInArray && utils_1.isArrayObject(value)) {
          value = __spreadArrays(value).map(function(v) {
            var ret = v;
            if (utils_1.isValidObject(v)) {
              ret = snakeKeys(v, opt);
            } else if (utils_1.isArrayObject(v)) {
              var temp = snakeKeys({key: v}, opt);
              ret = temp.key;
            }
            return ret;
          });
        }
      }
      res[nkey] = value;
    });
    return res;
  }
  exports2.default = snakeKeys;
});

// node_modules/js-convert-case/lib/modules/extends/pascalcase-keys-object/index.js
var require_pascalcase_keys_object = __commonJS((exports2) => {
  "use strict";
  var __spreadArrays = exports2 && exports2.__spreadArrays || function() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
      s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  };
  Object.defineProperty(exports2, "__esModule", {value: true});
  var utils_1 = require_utils();
  var js_pascalcase_1 = require_js_pascalcase();
  function pascalKeys(obj, opt) {
    if (opt === void 0) {
      opt = utils_1.DefaultOption;
    }
    if (!utils_1.isValidObject(obj))
      return null;
    opt = utils_1.validateOptions(opt);
    var res = {};
    Object.keys(obj).forEach(function(key) {
      var value = obj[key];
      var nkey = js_pascalcase_1.default(key);
      if (opt.recursive) {
        if (utils_1.isValidObject(value)) {
          value = pascalKeys(value, opt);
        } else if (opt.recursiveInArray && utils_1.isArrayObject(value)) {
          value = __spreadArrays(value).map(function(v) {
            var ret = v;
            if (utils_1.isValidObject(v)) {
              ret = pascalKeys(v, opt);
            } else if (utils_1.isArrayObject(v)) {
              var temp = pascalKeys({key: v}, opt);
              ret = temp.key;
            }
            return ret;
          });
        }
      }
      res[nkey] = value;
    });
    return res;
  }
  exports2.default = pascalKeys;
});

// node_modules/js-convert-case/lib/index.js
var require_lib = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.pascalKeys = exports2.snakeKeys = exports2.camelKeys = exports2.upperKeys = exports2.lowerKeys = exports2.toLowerCase = exports2.toUpperCase = exports2.toHeaderCase = exports2.toSentenceCase = exports2.toTextCase = exports2.toPathCase = exports2.toDotCase = exports2.toPascalCase = exports2.toSnakeCase = exports2.toCamelCase = void 0;
  var js_camelcase_1 = require_js_camelcase();
  exports2.toCamelCase = js_camelcase_1.default;
  var js_snakecase_1 = require_js_snakecase();
  exports2.toSnakeCase = js_snakecase_1.default;
  var js_pascalcase_1 = require_js_pascalcase();
  exports2.toPascalCase = js_pascalcase_1.default;
  var js_dotcase_1 = require_js_dotcase();
  exports2.toDotCase = js_dotcase_1.default;
  var js_pathcase_1 = require_js_pathcase();
  exports2.toPathCase = js_pathcase_1.default;
  var js_textcase_1 = require_js_textcase();
  exports2.toTextCase = js_textcase_1.default;
  var js_sentencecase_1 = require_js_sentencecase();
  exports2.toSentenceCase = js_sentencecase_1.default;
  var js_headercase_1 = require_js_headercase();
  exports2.toHeaderCase = js_headercase_1.default;
  var lowercase_keys_object_1 = require_lowercase_keys_object();
  exports2.lowerKeys = lowercase_keys_object_1.default;
  var uppercase_keys_object_1 = require_uppercase_keys_object();
  exports2.upperKeys = uppercase_keys_object_1.default;
  var camelcase_keys_object_1 = require_camelcase_keys_object();
  exports2.camelKeys = camelcase_keys_object_1.default;
  var snakecase_keys_object_1 = require_snakecase_keys_object();
  exports2.snakeKeys = snakecase_keys_object_1.default;
  var pascalcase_keys_object_1 = require_pascalcase_keys_object();
  exports2.pascalKeys = pascalcase_keys_object_1.default;
  var toLowerCase = function(str) {
    return String(str || "").toLowerCase();
  };
  exports2.toLowerCase = toLowerCase;
  var toUpperCase2 = function(str) {
    return String(str || "").toUpperCase();
  };
  exports2.toUpperCase = toUpperCase2;
  var jsConvert = {
    toCamelCase: js_camelcase_1.default,
    toSnakeCase: js_snakecase_1.default,
    toPascalCase: js_pascalcase_1.default,
    toDotCase: js_dotcase_1.default,
    toPathCase: js_pathcase_1.default,
    toTextCase: js_textcase_1.default,
    toSentenceCase: js_sentencecase_1.default,
    toHeaderCase: js_headercase_1.default,
    toUpperCase: toUpperCase2,
    toLowerCase,
    lowerKeys: lowercase_keys_object_1.default,
    upperKeys: uppercase_keys_object_1.default,
    camelKeys: camelcase_keys_object_1.default,
    snakeKeys: snakecase_keys_object_1.default,
    pascalKeys: pascalcase_keys_object_1.default
  };
  exports2.default = jsConvert;
});

// node_modules/js-convert-case/index.js
var require_js_convert_case = __commonJS((exports2, module2) => {
  module2.exports = require_lib();
});

// src/index.ts
__markAsModule(exports);
__export(exports, {
  activate: () => activate
});
var import_coc = __toModule(require("coc.nvim"));

// src/convert.js
var {toCamelCase, toSnakeCase, toPascalCase, toUpperCase} = require_js_convert_case();
var convert_default = convertWord = (word) => {
  return [
    toCamelCase(word),
    toPascalCase(word),
    toSnakeCase(word),
    toUpperCase(toSnakeCase(word))
  ];
};

// src/index.ts
async function activate(context) {
  import_coc.window.showMessage(`coc-caseconvert works!`);
  context.subscriptions.push(import_coc.commands.registerCommand("coc-smart-case.searchSelected", async () => {
    let {nvim} = import_coc.workspace;
    let word = await nvim.eval('expand("<cword>")');
    const allCases = convert_default(word);
    const picks = await import_coc.window.showPickerDialog(allCases, "pick cases to search");
    import_coc.window.showMessage((picks == null ? void 0 : picks.toString()) || "");
    const picksString = picks == null ? void 0 : picks.join("|");
    if (picksString) {
      const command = `CocSearch --regexp (${picksString})`;
      import_coc.window.showMessage("search: " + command);
      nvim.command(command);
    } else {
      import_coc.window.showErrorMessage("pick at least a word");
    }
  }));
}
