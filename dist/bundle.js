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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var API_KEY = '4ed1bd246ceedff29a14f0f2485b52a3';

exports.default = {
    searchMovieURL: 'https://api.themoviedb.org/3/search/multi?api_key=' + API_KEY + '&query=',
    imageSrc: 'https://image.tmdb.org/t/p/w185',
    noImgSrc: 'http://babakunyho.eu/img/default-no-image.png'
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _movieList = __webpack_require__(2);

var _movieList2 = _interopRequireDefault(_movieList);

var _movieService = __webpack_require__(4);

var _movieService2 = _interopRequireDefault(_movieService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var input = document.querySelector('.search-input');
var movieList = document.querySelector('.movies');
var list = new _movieList2.default();
var filters = document.querySelector('.filters');
input.addEventListener('input', function (e) {
    var searchText = e.target.value;
    if (!searchText) {
        list.clearList(movieList);
        return;
    }
    _movieService2.default.getVideoByText(searchText).then(function (data) {
        list.init(data);
        list.renderMovies(data.results);
        list.drawToDom(movieList);
    });
});
filters.addEventListener('click', function (e) {
    e.preventDefault();
    var dataAttr = e.target.getAttribute('data-filter');
    if (!dataAttr) {
        return;
    }
    list.sort(dataAttr);
    list.drawToDom(movieList);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _movie = __webpack_require__(3);

var _movie2 = _interopRequireDefault(_movie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MovieList = function () {
    function MovieList() {
        _classCallCheck(this, MovieList);
    }

    _createClass(MovieList, [{
        key: 'init',

        // constructor(data) {
        //     this.data = data;
        //
        //     //debugger
        //     this.renderMovies();
        // }
        value: function init(data) {
            this.data = data;
        }
    }, {
        key: 'renderMovies',
        value: function renderMovies(data) {
            var _this = this;

            //this.data = data;
            this.fragment = document.createDocumentFragment();

            data.forEach(function (data) {
                _this.article = document.createElement('article');
                _this.article.classList.add('movie');
                _this.article.innerHTML = _movie2.default.movie(data); //.title;

                _this.fragment.appendChild(_this.article);
            });
        }
    }, {
        key: 'drawToDom',
        value: function drawToDom(selector) {
            this.clearList(selector);
            selector.appendChild(this.fragment);
        }
    }, {
        key: 'clearList',
        value: function clearList(selector) {
            selector.innerHTML = '';
        }
    }, {
        key: 'sortByMaxRating',
        value: function sortByMaxRating(data) {
            data.sort(function (a, b) {
                return b.popularity - a.popularity;
            });
            this.renderMovies(data);
        }
    }, {
        key: 'sortByMinRating',
        value: function sortByMinRating(data) {
            data.sort(function (a, b) {
                return a.popularity - b.popularity;
            });
            this.renderMovies(data);
        }
    }, {
        key: 'sortByDateNew',
        value: function sortByDateNew(data) {
            data.sort(function (a, b) {
                return new Date(b.release_date) - new Date(a.release_date);
            });
            this.renderMovies(data);
        }
    }, {
        key: 'sortByDateOld',
        value: function sortByDateOld(data) {
            data.sort(function (a, b) {
                return new Date(a.release_date) - new Date(b.release_date);
            });
            this.renderMovies(data);
        }
    }, {
        key: 'sort',
        value: function sort(filter) {
            var data = [].concat(_toConsumableArray(this.data.results));
            if (filter === 'ratingMax') {
                this.sortByMaxRating(data);
            }
            if (filter === 'ratingMin') {
                this.sortByMinRating(data);
            }
            if (filter === 'dateNew') {
                this.sortByDateNew(data);
            }
            if (filter === 'dateOld') {
                this.sortByDateOld(data);
            }
        }
    }]);

    return MovieList;
}();

exports.default = MovieList;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function movie(data) {
    var mappingData = mapData(data);
    var html = '\n    <article class="movie">\n        <h2 class=\'movie-title\'>' + mappingData.title + '</h2>\n       <date class=\'date\'>' + mappingData.date + '</date>\n        <div class=\'country\'>' + mappingData.country + '</div>\n        <div class="picture"><img src=\'' + mappingData.img + '\'/></div>\n        <div class=\'language\'>' + mappingData.language + '</div>\n        <div class=\'overview\'>' + mappingData.overview + '</div>\n        <div class=\'popularity\'>' + mappingData.popularity + '</div>\n    </article> \n    ';
    return html;
}

exports.default = {
    movie: movie
};


function mapData(data) {
    var defaultValue = 'Unknown';
    return {

        title: data.title || data.name || defaultValue,
        date: data.release_date || data.first_air_date || defaultValue,
        country: data.origin_country || defaultValue,
        img: getPictureUrl(data),
        homepageUrl: data.homepageUrl || defaultValue,
        language: data.original_language || defaultValue,
        numberOfEpisodes: data.numberOfEpisodes || defaultValue,
        number_of_seasons: data.number_of_seasons || defaultValue,
        overview: data.overview || defaultValue,
        popularity: data.popularity || defaultValue,
        id: data.id || Date.now()
    };
}

function getPictureUrl(data) {
    var url = data.backdrop_path || data.poster_path;
    if (url) {
        return _config2.default.imageSrc + url;
    } else {
        return _config2.default.noImgSrc;
    }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getVideoByText(text) {
    if (!text) {
        return;
    }
    return fetch(_config2.default.searchMovieURL + text).then(function (r) {
        return r.json();
    });
}

exports.default = {
    getVideoByText: getVideoByText
};

/***/ })
/******/ ]);