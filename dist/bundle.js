/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _movieList = __webpack_require__(1);

var _movieList2 = _interopRequireDefault(_movieList);

var _movieService = __webpack_require__(3);

var _movieService2 = _interopRequireDefault(_movieService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var input = document.querySelector('.search-input');
var movieList = document.querySelector('.movies');
input.addEventListener('input', function (e) {
    var searchText = e.target.value;

    _movieService2.default.getVideoByText(searchText).then(function (result) {
        var list = new _movieList2.default(result);
        list.drawToDom(movieList);
    });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _movie = __webpack_require__(2);

var _movie2 = _interopRequireDefault(_movie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MovieList = function () {
    function MovieList(data) {
        _classCallCheck(this, MovieList);

        this.data = data;
        this.renderMovie();
        debugger;
    }

    _createClass(MovieList, [{
        key: 'drawToDom',
        value: function drawToDom(selector) {
            selector.appendChild(this.fragment);
        }
    }, {
        key: 'renderMovie',
        value: function renderMovie() {
            var _this = this;

            this.fragment = document.createDocumentFragment();
            this.data.results.forEach(function (data) {

                var article = document.createElement('article');
                article.classList.add('movie');
                article.innerHTML = (0, _movie2.default)(data);
                _this.fragment.appendChild(article);
            });
        }
    }]);

    return MovieList;
}();

exports.default = MovieList;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.movie = movie;
function movie(data) {
    var html = "\n    <article class=\"movie\">\n        <h2>" + data.title + "</h2>\n        <!--<date>" + data.date + "</date>-->\n        <div>" + data.country + "</div>\n        <div>" + data.imgSrc + "</div>\n        <div>" + data.homepageUrl + "</div>\n        <div>" + data.language + "</div>\n        <div>" + data.numberOfEpisodes + "</div>\n        <div>" + data.number_of_seasons + "</div>\n        <div>" + data.overview + "</div>\n        <div>" + data.popularity + "</div>\n</article> \n    ";
    return html;
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getVideoByText(text) {
    if (!text) {
        return;
    }
    return fetch(_config2.default.searchMovieUrl + text).then(function (r) {
        return r.json();
    });
}

exports.default = {
    getVideoByText: getVideoByText
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var API_KEY = '4ed1bd246ceedff29a14f0f2485b52a3';

exports.default = {
    searchMovieURL: 'https://api.themoviedb.org/3/search/multi?api_key=' + API_KEY + '&query='
};

/***/ })
/******/ ]);