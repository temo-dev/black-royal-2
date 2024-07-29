"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/warning";
exports.ids = ["vendor-chunks/warning"];
exports.modules = {

/***/ "(ssr)/./node_modules/warning/warning.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/warning.js ***!
  \*****************************************/
/***/ ((module) => {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */ \n/**\n * Similar to invariant but only logs a warning if the condition is not met.\n * This can be used to log issues in development environments in critical\n * paths. Removing the logging code for production environments will keep the\n * same logic and follow the same code paths.\n */ var __DEV__ = \"development\" !== \"production\";\nvar warning = function() {};\nif (__DEV__) {\n    var printWarning = function printWarning(format, args) {\n        var len = arguments.length;\n        args = new Array(len > 1 ? len - 1 : 0);\n        for(var key = 1; key < len; key++){\n            args[key - 1] = arguments[key];\n        }\n        var argIndex = 0;\n        var message = \"Warning: \" + format.replace(/%s/g, function() {\n            return args[argIndex++];\n        });\n        if (typeof console !== \"undefined\") {\n            console.error(message);\n        }\n        try {\n            // --- Welcome to debugging React ---\n            // This error was thrown as a convenience so that you can use this stack\n            // to find the callsite that caused this warning to fire.\n            throw new Error(message);\n        } catch (x) {}\n    };\n    warning = function(condition, format, args) {\n        var len = arguments.length;\n        args = new Array(len > 2 ? len - 2 : 0);\n        for(var key = 2; key < len; key++){\n            args[key - 2] = arguments[key];\n        }\n        if (format === undefined) {\n            throw new Error(\"`warning(condition, format, ...args)` requires a warning \" + \"message argument\");\n        }\n        if (!condition) {\n            printWarning.apply(null, [\n                format\n            ].concat(args));\n        }\n    };\n}\nmodule.exports = warning;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvd2FybmluZy93YXJuaW5nLmpzIiwibWFwcGluZ3MiOiJBQUFBOzs7OztDQUtDLEdBRUQ7QUFFQTs7Ozs7Q0FLQyxHQUVELElBQUlBLFVBQVVDLGtCQUF5QjtBQUV2QyxJQUFJQyxVQUFVLFlBQVk7QUFFMUIsSUFBSUYsU0FBUztJQUNYLElBQUlHLGVBQWUsU0FBU0EsYUFBYUMsTUFBTSxFQUFFQyxJQUFJO1FBQ25ELElBQUlDLE1BQU1DLFVBQVVDLE1BQU07UUFDMUJILE9BQU8sSUFBSUksTUFBTUgsTUFBTSxJQUFJQSxNQUFNLElBQUk7UUFDckMsSUFBSyxJQUFJSSxNQUFNLEdBQUdBLE1BQU1KLEtBQUtJLE1BQU87WUFDbENMLElBQUksQ0FBQ0ssTUFBTSxFQUFFLEdBQUdILFNBQVMsQ0FBQ0csSUFBSTtRQUNoQztRQUNBLElBQUlDLFdBQVc7UUFDZixJQUFJQyxVQUFVLGNBQ1pSLE9BQU9TLE9BQU8sQ0FBQyxPQUFPO1lBQ3BCLE9BQU9SLElBQUksQ0FBQ00sV0FBVztRQUN6QjtRQUNGLElBQUksT0FBT0csWUFBWSxhQUFhO1lBQ2xDQSxRQUFRQyxLQUFLLENBQUNIO1FBQ2hCO1FBQ0EsSUFBSTtZQUNGLHFDQUFxQztZQUNyQyx3RUFBd0U7WUFDeEUseURBQXlEO1lBQ3pELE1BQU0sSUFBSUksTUFBTUo7UUFDbEIsRUFBRSxPQUFPSyxHQUFHLENBQUM7SUFDZjtJQUVBZixVQUFVLFNBQVNnQixTQUFTLEVBQUVkLE1BQU0sRUFBRUMsSUFBSTtRQUN4QyxJQUFJQyxNQUFNQyxVQUFVQyxNQUFNO1FBQzFCSCxPQUFPLElBQUlJLE1BQU1ILE1BQU0sSUFBSUEsTUFBTSxJQUFJO1FBQ3JDLElBQUssSUFBSUksTUFBTSxHQUFHQSxNQUFNSixLQUFLSSxNQUFPO1lBQ2xDTCxJQUFJLENBQUNLLE1BQU0sRUFBRSxHQUFHSCxTQUFTLENBQUNHLElBQUk7UUFDaEM7UUFDQSxJQUFJTixXQUFXZSxXQUFXO1lBQ3hCLE1BQU0sSUFBSUgsTUFDTiw4REFDQTtRQUVOO1FBQ0EsSUFBSSxDQUFDRSxXQUFXO1lBQ2RmLGFBQWFpQixLQUFLLENBQUMsTUFBTTtnQkFBQ2hCO2FBQU8sQ0FBQ2lCLE1BQU0sQ0FBQ2hCO1FBQzNDO0lBQ0Y7QUFDRjtBQUVBaUIsT0FBT0MsT0FBTyxHQUFHckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3hmb2xpby8uL25vZGVfbW9kdWxlcy93YXJuaW5nL3dhcm5pbmcuanM/ODFmYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIF9fREVWX18gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nO1xuXG52YXIgd2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChfX0RFVl9fKSB7XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiBwcmludFdhcm5pbmcoZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAxID8gbGVuIC0gMSA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDE7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMV0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICtcbiAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9XG5cbiAgd2FybmluZyA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAyID8gbGVuIC0gMiA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDI7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMl0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgK1xuICAgICAgICAgICdtZXNzYWdlIGFyZ3VtZW50J1xuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHByaW50V2FybmluZy5hcHBseShudWxsLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuIl0sIm5hbWVzIjpbIl9fREVWX18iLCJwcm9jZXNzIiwid2FybmluZyIsInByaW50V2FybmluZyIsImZvcm1hdCIsImFyZ3MiLCJsZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJBcnJheSIsImtleSIsImFyZ0luZGV4IiwibWVzc2FnZSIsInJlcGxhY2UiLCJjb25zb2xlIiwiZXJyb3IiLCJFcnJvciIsIngiLCJjb25kaXRpb24iLCJ1bmRlZmluZWQiLCJhcHBseSIsImNvbmNhdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/warning/warning.js\n");

/***/ })

};
;