/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Munro-2LYe.ttf */ "./src/Munro-2LYe.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'Munroe';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

*,
*::before,
*::after {
    box-sizing: border-box;
    font-family: 'munroe';
}

::-webkit-scrollbar {
    width: 0.5em;
}

::-webkit-scrollbar-track{
    background-color: none;
}

::-webkit-scrollbar-thumb{
    background: var(--blue-light);
    border-radius: 100vw;
}

:root {
    --cyan-1: #1dd3b0;
    --blue-light: #cdf7f6;
    --blue-reg: #086375;
    --purple: #3c1642;
    --white: white;
    --background-darkgray: #212832;
    --background-lightgray: #2d333b;
    --accent-lightgreen: #1dd3b0;
    --accent-darkgreen: #18b495;
}

body{
    background-color: var(--background-darkgray);
    color: white;
    margin: 0;
    padding: 3%;
    overflow: hidden;
}

header {
    padding: 1% 4%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2%;
    border: 2px dashed var(--background-lightgray);
}

.buttonsList {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 15rem;
}

#main {
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: space-between;
}

#todo-section {
    width: 30%;
    min-width: 195px;
    height: 75vh;
    border: 2px dashed var(--background-lightgray);
    overflow: scroll; /* Use this if you want scrolling without showing scrollbars */
    -ms-overflow-style: none;  /* For Internet Explorer and Edge */
    scrollbar-width: none;     /* For Firefox */
}

#calendar-section {
    width: 68%;
    border: 2px dashed var(--background-lightgray);
    height: 75vh;
}

#calendar-text {
    display: flex;
    justify-content: space-between;
    width: 97%;
}

.headings {
    padding-left: 3%;
    border-bottom: 2px dashed var(--background-lightgray);
}

#tasks-container,
#project-container {
    overflow: scroll; /* Use this if you want scrolling without showing scrollbars */
    -ms-overflow-style: none;  /* For Internet Explorer and Edge */
    scrollbar-width: none;     /* For Firefox */
    max-height: 85%;
    padding: 4%;
}

.project-header,
.task-header {
    border: 2px dashed var(--background-lightgray);
    border-right: none;
    border-left: none;
    font-size: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0;
}

.project-header {
    border-top: 0;
}

#tasks-heading,
#project-heading{
    display: flex;
    height: 15%;
    justify-content: space-between;
}

#tasks-heading > h1 {
    width: 83%;
}

#tasks-heading > button {
    font-size: 24px;
    color: white;
    margin-right: 5.6%;
}

.tasks,
.projects {
    display: flex;
    flex-direction: column;
    padding: 0 0 5% 0;
    border-top: 2px dashed var(--background-lightgray);
    overflow-y: auto;
}


.taskTitleSection,
.projectTitleSection {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5%;
}

.task-title,
.project-title {
    margin: 0;
}

.project-heading-text {
    display: flex;
}

.removeTaskBtn,
.removeProjectBtn {
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
    padding: 0;
}

.dropdownBtn {
    background: none;
    border: none;
    color: white;
    font-size: 1em;
    padding: 4px 8px 2px 8px;
    cursor: pointer;
    
}

.dropdownBtn:hover {
    color: var(--blue-light);
}

.removeTaskBtn:hover,
.removeProjectBtn:hover {
    color: var(--blue-light);
}

.description-container {
    height: 3em;
    text-align: left;
    color: gray;
}

.description-text {
    margin: 0;
    height: 85%;
    max-height: 48px;
    overflow-y: auto;
}

.btnCheckList,
.projectBtnChecklist {
    display: flex;
    justify-content: space-between;
    gap: 2%;
    height: 2.7rem;
    width: 100%;
    margin-bottom: 0.5rem;
}

.btnCheckList > button,
.projectBtnChecklist > button {
    color: rgb(255, 255, 255);
    background-color: var(--background-lightgray);
    border-radius: 5%;
    border: 2px dashed;
    border-color: gray;
    flex: 1;
    font-size: 1rem;
    width: 34%;
}

.completedBtn {
    cursor: pointer;
}

.dateBtn {
    background-color: #8c64fa;
    border-color: #7d4eff;
    color: white;
}

#project-tasks-container {
    overflow: scroll; /* Use this if you want scrolling without showing scrollbars */
    -ms-overflow-style: none;  /* For Internet Explorer and Edge */
    scrollbar-width: none;     /* For Firefox */
}

#modal {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80vw;
    max-width: 800px;
    height: 80vh;
    border: 2px dashed gray;
    background-color: var(--background-lightgray);
    border-radius: 1em;
    color: white;
    min-height: 388px;
    overflow: hidden;
}

#modal::backdrop {
    backdrop-filter: blur(5px);
}

#closeModalBtn {
    position: absolute;
    top: 7%;
    right: 4%;
    background: none;
    color: white;
    font-size: 32px;
    border: none;
    cursor: pointer;
}

#closeModalBtn:hover {
    color: var(--blue-light);
}

#openModalBtn {
    background: none;
    border: none;
    cursor: pointer;
}

#openModalBtn:hover {
    color: var(--blue-light);
}

#modalHeading {
    border-bottom: 2px dashed gray;
    width: 100%;
    height: 15%;
    min-height: 53px;
}


#modal-content {
    display: flex;
    flex-direction: row;
    height: 80%;
}

#tab-container {
    width: 30%;
    border-right: 2px dashed gray;
    height: 104%;
    text-align: center;
}

.modal-tab-selector {
    cursor: pointer;
}

.modal-tab-selector:hover {
    color: var(--blue-light);
}

#form-container {
    width: 70%;
    padding-left: 4%;
    padding-top: 3%;
}

#task-form,
#project-form {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

.labels {
    display: flex;
    justify-content: space-between;
    height: 2em;
}

label {
    font-size: 22px;
}

.labels > input,
.labels > select {
    width: 70%;
    border: 2px dashed gray;
    background-color: #212832;
    color: white;
    border-radius: 5%;
    outline: none;
    padding: 0.5em;
}

#project-description {
    height: 7rem;
    text-align: left;
    vertical-align: top;
    width: 70%;
    border: 2px dashed gray;
    background-color: #212832;
    color: white;
    border-radius: 5%;
    outline: none;
    padding: 0.5em;
    resize: none;
}

.labels > input:focus {
    border: 2px dashed var(--blue-light);
}

#priorityBtns {
    display: flex;
    width: 75.6%;
    justify-content: flex-end;
    gap: 5px;
}

#priorityBtns > input {
    width: 30%;
    background: none;
    border: 2px dashed gray;
    cursor: pointer;
    color: white;
}

#lowBtn:hover {
    background-color: var(--accent-lightgreen);
    border: 2px dashed var(--accent-darkgreen);
}


#medBtn:hover {
    background-color: gold;
    border: 2px dashed goldenrod;
}

#highBtn:hover {
    background-color: red;
    border: 2px dashed firebrick;
}

#submitTaskBtn,
#submitProjectBtn {
    position: absolute;
    bottom: 5%;
    right: 2%;
    background: none;
    font-size: 36px;
    color: white;
    border-radius: 10%;
    border: 2px dashed gray;
    cursor: pointer;
}

#submitTaskBtn:hover,
#submitProjectBtn:hover {
    color: var(--blue-light);
    border: 2px dashed var(--blue-light);
}

/* calendar section */
#calendar {
    display: grid;
    grid-template-columns: repeat(7, 1fr); /* 7 columns */
    grid-template-rows: auto repeat(5, 1fr); /* 1 row for days, 5 rows for dates */
    gap: 5px;
    width: 95%;
    margin: 20px auto;
    height: 80%;
}

.calendar-day, .day-header {
    border: 1px dashed var(--background-lightgray);
    padding: 0.3em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 1rem;
    box-sizing: border-box;
}

.day-header {
    font-weight: bold;
}

.calendar-day.today {
    border-color:  var(--accent-lightgreen);
}

.project-name {
    color: var(--blue-light);
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/getTask.js":
/*!************************!*\
  !*** ./src/getTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JSONstrtoProjectArray: () => (/* binding */ JSONstrtoProjectArray),
/* harmony export */   JSONstrtoTaskArray: () => (/* binding */ JSONstrtoTaskArray),
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   Task: () => (/* binding */ Task),
/* harmony export */   addProjectToArray: () => (/* binding */ addProjectToArray),
/* harmony export */   addTaskToArray: () => (/* binding */ addTaskToArray),
/* harmony export */   changeHighBtnColor: () => (/* binding */ changeHighBtnColor),
/* harmony export */   changeLowBtnColor: () => (/* binding */ changeLowBtnColor),
/* harmony export */   changeMedBtnColor: () => (/* binding */ changeMedBtnColor),
/* harmony export */   getDueDate: () => (/* binding */ getDueDate),
/* harmony export */   getPriority: () => (/* binding */ getPriority),
/* harmony export */   getProjectDescription: () => (/* binding */ getProjectDescription),
/* harmony export */   getProjectDueDate: () => (/* binding */ getProjectDueDate),
/* harmony export */   getProjectName: () => (/* binding */ getProjectName),
/* harmony export */   getTaskName: () => (/* binding */ getTaskName),
/* harmony export */   getTaskValue: () => (/* binding */ getTaskValue),
/* harmony export */   projectArray: () => (/* binding */ projectArray),
/* harmony export */   projectArraytoJSONStr: () => (/* binding */ projectArraytoJSONStr),
/* harmony export */   projectContainer: () => (/* binding */ projectContainer),
/* harmony export */   removeTask: () => (/* binding */ removeTask),
/* harmony export */   taskArray: () => (/* binding */ taskArray),
/* harmony export */   taskArraytoJSONStr: () => (/* binding */ taskArraytoJSONStr),
/* harmony export */   tasksContainer: () => (/* binding */ tasksContainer),
/* harmony export */   updateHTML: () => (/* binding */ updateHTML),
/* harmony export */   updateProjectHTML: () => (/* binding */ updateProjectHTML)
/* harmony export */ });
/* harmony import */ var _populateCalendar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./populateCalendar.js */ "./src/populateCalendar.js");
/* harmony import */ var _populateProjDropdown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./populateProjDropdown.js */ "./src/populateProjDropdown.js");



let priorityValue = null;
let taskName;
let dueDate;
let taskArrayVal = null;
let completion = 'incomplete';
let taskArray = [];
let projectArray = [];
const tasksContainer = document.getElementById('tasks-container');
const projectContainer = document.getElementById('project-container');

// Acessing CSS Color Variables
const rootStyles = getComputedStyle(document.documentElement);
const lightgreen = rootStyles.getPropertyValue('--accent-lightgreen');
const darkgreen = rootStyles.getPropertyValue('--accent-darkgreen');

// project class - parent
class Project {
    constructor(id, name, tasks, completion, date, description) {
        this.id = id;
        this.name = name;
        this.tasks = [];
        this.completion = completion;
        this.date = date;
        this.description = description;
    }
}

// task class - child
class Task {
    constructor(id, name, date, priority, completion) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.priority = priority;
        this.completion = completion;
    }
}

// getting values

function getTaskName() {
    taskName = document.getElementById("task-name-input").value;
}

function getDueDate() {
    dueDate = document.getElementById("due-date-input").value;
}

function getPriority(event) {
    priorityValue = event.target.value;
    console.log("Priority set to: " + priorityValue);
}

function getProjectName() {
    let projectName = document.getElementById('project-name-input').value;

    return projectName;
}

function getTaskValue() {
    // initialize select variable
    let task = document.getElementById('project-dropdown-input');

    // initialize select value's name to compare
    let taskName = task.value;

    // algo to compare object in task array that matches object selected
    let selectedTask = taskArray.find(obj => obj.name === taskName) || console.log("no task inputted");

    return selectedTask;
}

function getProjectDueDate () {
    const dueDate = document.getElementById('projectDueDate').value;

    return dueDate;
}

function getProjectDescription () {
    const description = document.getElementById("project-description").value;

    return description;
}

function changeLowBtnColor () {
    //  grab button elements
    const lowBtn = document.getElementById("lowBtn");
    const medBtn = document.getElementById("medBtn");
    const highBtn = document.getElementById("highBtn");
    //  reset other button styles
    medBtn.style.backgroundColor = '';
    medBtn.style.border = '';
    highBtn.style.backgroundColor = '';
    highBtn.style.border = '';
    //  change button styles
    lowBtn.style.backgroundColor = 'var(--accent-lightgreen)';
    lowBtn.style.border = '2px dashed var(--accent-darkgreen)';
}

function changeMedBtnColor () {
    //  grab button elements
    const lowBtn = document.getElementById("lowBtn");
    const medBtn = document.getElementById("medBtn");
    const highBtn = document.getElementById("highBtn");
     //  reset other button styles
     lowBtn.style.backgroundColor = '';
     lowBtn.style.border = '';
     highBtn.style.backgroundColor = '';
     highBtn.style.border = '';
    //  change button styles
    medBtn.style.backgroundColor = 'gold';
    medBtn.style.border = '2px dashed goldenrod';
}

function changeHighBtnColor () {
    //  grab button elements
    const lowBtn = document.getElementById("lowBtn");
    const medBtn = document.getElementById("medBtn");
    const highBtn = document.getElementById("highBtn");
     //  reset other button styles
     lowBtn.style.backgroundColor = '';
     lowBtn.style.border = '';
     medBtn.style.backgroundColor = '';
     medBtn.style.border = '';
    //  change button styles
    highBtn.style.backgroundColor = 'red';
    highBtn.style.border = '2px dashed firebrick';
}

function addTaskToArray() {
    // task properties
    getTaskName();
    getDueDate();
    const taskId = Date.now();
    const completion = "incomplete";

    const newTask = new Task(taskId, taskName, dueDate, priorityValue, completion);

    taskArray.push(newTask);
    console.log("Task Array after adding new task: ", taskArray);

//  refresh taskHTML
    updateHTML();
// Save the updated task array to local storage
    taskArraytoJSONStr(); 
}

function addProjectToArray() {
// getting values
let name = getProjectName(); // Get project name from datalist input
let taskValue = getTaskValue();
let dueDate = getProjectDueDate();
let description = getProjectDescription();

// Find if the project already exists in projectArray
let existingProject = projectArray.find(project => project.name === name);

if (existingProject) {
    // Project exists, update its properties
    if (taskValue) { // Check if taskValue is defined and not empty
        existingProject.tasks.push(taskValue); // Only add if taskValue is valid
    }  // Modify the tasks array
    existingProject.date = dueDate;      
    existingProject.description = description;   description
    console.log(`Updated Project: `, existingProject);
} else {
    // Project does not exist, create a new project
    let id = Date.now();
    let completion = "incomplete";
    let newProject = new Project(id, name, taskValue, completion, dueDate, description);
    if (taskValue) { // Check if taskValue is defined and not empty
        newProject.tasks.push(taskValue); // Only add if taskValue is valid
    }
    projectArray.push(newProject);
    console.log(`New Project Added: `, newProject);
}

// Update the project array in the DOM and local storage
updateProjectHTML();
projectArraytoJSONStr();
}

function updateProjectHTML() {
    console.log("Updating HTML with current project array:", projectArray);
    // reset task container then fill with whole array
    projectContainer.innerHTML = '';

    for (let i = 0; i < projectArray.length; i++){
        // grab projects from projectArray
        const projectData = projectArray[i];
        if (!projectData) {
            console.error(`projectArray [${i}] is null or undefined`);
            continue;
        }
    //  creating elements
    // project container
    const project = document.createElement('div');

    // project-tasks-container
    const tasksContainer = document.createElement('div');

    // project title section container
    const projectTitleSection = document.createElement('div');
    const projectHeadingText = document.createElement('div');
    const projectHeadingButtons = document.createElement('div');
    const projectTitle = document.createElement('h2');
    const dropdownBtn = document.createElement('button');
    const removeProjectBtn = document.createElement('button');

    // project description container
    const descriptionContainer = document.createElement('div');
    const descriptionText = document.createElement('p');

    // project button container
    const projectBtnChecklist = document.createElement('div');
    const completedBtn = document.createElement('button');
    const dueDateBtn = document.createElement('button');

// adding classes and attributes
    // project title section
    project.classList.add('projects');
    projectTitleSection.classList.add('projectTitleSection');
    projectHeadingText.classList.add('project-heading-text');
    projectHeadingButtons.classList.add('project-heading-buttons');
    projectTitle.classList.add('project-title');
    dropdownBtn.classList.add('dropdownBtn');
    removeProjectBtn.classList.add('removeProjectBtn');

    // description section
    descriptionContainer.classList.add('description-container');
    descriptionText.classList.add('description-text');

    // buttons section
    projectBtnChecklist.classList.add('projectBtnChecklist');
    completedBtn.classList.add('btnCheck');
    completedBtn.classList.add('completedBtn');
    dueDateBtn.classList.add('dateBtn');

    // project-tasks id
    tasksContainer.setAttribute('id', 'project-tasks-container');
    

    // default project settings
    projectTitle.innerHTML = projectData.name || 'No Project Name';
    dropdownBtn.innerHTML = '&#9660;';
    removeProjectBtn.innerHTML = 'x'
    descriptionText.innerHTML = projectData.description || 'No Description';
    dueDateBtn.innerHTML = projectData.date || 'No Due Date';
    completedBtn.textContent = projectData.completion;

    // adding dataset id's
    project.dataset.id = projectData.id || '';
    removeProjectBtn.dataset.id = projectData.id || '';

// add styling
    // duedate
    dueDateBtn.style.borderColor = '#7d4eff';

    if (projectData.completion === 'incomplete'){
        completedBtn.style.backgroundColor = 'red';
        completedBtn.style.borderColor = 'firebrick';
    } else {
        completedBtn.style.backgroundColor = lightgreen;
        completedBtn.style.borderColor = darkgreen;
    }

// appending
    // project title section
    projectHeadingText.append(projectTitle, dropdownBtn);
    projectHeadingButtons.appendChild(removeProjectBtn);
    projectTitleSection.append(projectHeadingText, projectHeadingButtons);

    // project description section
    descriptionContainer.appendChild(descriptionText);

    // project buttons section
    projectBtnChecklist.append(dueDateBtn, completedBtn);

    // project container
    project.append(projectTitleSection, descriptionContainer, projectBtnChecklist, tasksContainer);

    // main container
    projectContainer.append(project);

// add event listeners
    // remove project btn
    removeProjectBtn.addEventListener('click', removeProject)

    // completed button
    completedBtn.addEventListener('click', toggleCompleted);
    completedBtn.addEventListener('click', function() {
            if (projectData.completion === "incomplete"){
                projectData.completion = 'completed';
                projectArraytoJSONStr();
                updateProjectHTML();
            } else {
                projectData.completion = 'incomplete';
                projectArraytoJSONStr();
                updateProjectHTML();
            }
        })
    }
    (0,_populateProjDropdown_js__WEBPACK_IMPORTED_MODULE_1__.DropdownBtn)();
    (0,_populateCalendar_js__WEBPACK_IMPORTED_MODULE_0__.generateCalendar)();
}

function updateHTML() {
    console.log('Updating HTML with current task array:', taskArray);
    tasksContainer.innerHTML = '';

    for (let i = 0; i < taskArray.length; i++) {
        const taskData = taskArray[i];
        if (!taskData) {
            console.error(`taskArray[${i}] is null or undefined`);
            continue;
        }

        // Creating elements
        const taskHeader = document.createElement('h2');
        const task = document.createElement('div');
        const taskTitleSection = document.createElement('div');
        const taskTitle = document.createElement('h2');
        const btnChecklist = document.createElement('div');
        const priorityButton = document.createElement('button');
        const dueDateButton = document.createElement('button');
        const completedButton = document.createElement('button');
        const removeTaskBtn = document.createElement('button');

        // Add classes to elements
        taskHeader.classList.add('task-header');
        task.classList.add('tasks');
        taskTitleSection.classList.add('taskTitleSection');
        taskTitle.classList.add('task-title');
        
        btnChecklist.classList.add('btnCheckList');
        priorityButton.classList.add('btnCheck');
        priorityButton.classList.add('priorityBtn');
        dueDateButton.classList.add('btnCheck');
        dueDateButton.classList.add('dateBtn');
        completedButton.classList.add('btnCheck');
        completedButton.classList.add('completedBtn');
        removeTaskBtn.classList.add('removeTaskBtn');

        // default task settings
        taskHeader.textContent = 'Tasks';
        taskTitle.innerHTML = taskData.name || 'No Task Name';
        priorityButton.innerHTML = taskData.priority || 'No Priority';
        dueDateButton.innerHTML = taskData.date || 'No Date';
        completedButton.textContent = taskData.completion;
        removeTaskBtn.innerHTML = 'x';

        // Add dataset id for each task
        task.dataset.id = taskData.id || '';
        removeTaskBtn.dataset.id = taskData.id || '';

        // Add event listener to the remove button
        removeTaskBtn.addEventListener('click', removeTask);

        // Append elements to parents
        taskTitleSection.appendChild(taskTitle);
        taskTitleSection.appendChild(removeTaskBtn);

        btnChecklist.appendChild(priorityButton);
        btnChecklist.appendChild(dueDateButton);
        btnChecklist.appendChild(completedButton);
        task.appendChild(taskTitleSection);
        task.appendChild(btnChecklist);

        // Add Color to Buttons
        if (taskData.completion === 'incomplete'){
            completedButton.style.backgroundColor = 'red';
            completedButton.style.borderColor = 'firebrick';
        } else {
            completedButton.style.backgroundColor = lightgreen;
            completedButton.style.borderColor = darkgreen;
        }

        // Due date button styles
        dueDateButton.style.borderColor = '#7d4eff';

        // Priority Button Colors
        if (priorityButton.textContent === 'low'){
            priorityButton.style.backgroundColor = lightgreen;
            priorityButton.style.borderColor = darkgreen;
        } else if (priorityButton.textContent === 'medium') {
            priorityButton.style.backgroundColor = '#ccad00';
            priorityButton.style.borderColor = '#998200';
        } else if (priorityButton.textContent === 'high') {
            priorityButton.style.backgroundColor = 'red';
            priorityButton.style.borderColor = 'firebrick';
        }

        // Append to main container
        tasksContainer.append(task);

        // toggle functions for completed button
        completedButton.addEventListener('click', toggleCompleted);
        completedButton.addEventListener('click', function() {
            if (taskData.completion === "incomplete"){
                taskData.completion = 'completed';
                taskArraytoJSONStr();
                updateHTML();
            } else {
                taskData.completion = 'incomplete'
                taskArraytoJSONStr();
                updateHTML();
            }
        })
    }
    (0,_populateCalendar_js__WEBPACK_IMPORTED_MODULE_0__.generateCalendar)();
}

// toggle complete / incomplete button
function toggleCompleted () {
    const buttons = document.querySelectorAll('.completedBtn');
    buttons.forEach(button => {
        let isComplete = true;
        button.addEventListener('click', function(event){
            if (isComplete) {
                button.style.backgroundColor = lightgreen;
                button.style.borderColor = darkgreen;   
                isComplete = false;
            } else {
                button.style.backgroundColor = 'red';
                button.style.borderColor = 'firebrick';
                isComplete = true;
            }
        })
    })
}


// Function to remove task based on data set id
function removeTask(event) {
    const taskId = event.target.dataset.id; // Get the task ID from the clicked element
    const taskIndex = taskArray.findIndex(task => task.id == taskId); // Find the index of the task to be removed
    
    if (taskIndex > -1) {
        const removedTask = taskArray[taskIndex]; // Store the removed task
        taskArray.splice(taskIndex, 1); // Remove the task from the task array
        updateHTML();
        taskArraytoJSONStr(); // Save the updated task array to local storage
        
        // Log the updated task array
        console.log("Task array after removal:", taskArray);
        
        // Remove the task from all projects in projectArray
        projectArray.forEach(project => {
            // Use a filter to remove the task by name
            project.tasks = project.tasks.filter(task => task.name !== removedTask.name);
        });
        
        // Log the updated project array
        console.log("Project Array after removing task:", projectArray);
        projectArraytoJSONStr(); // Save the updated project array to local storage if needed
        (0,_populateCalendar_js__WEBPACK_IMPORTED_MODULE_0__.generateCalendar)();
    }
}


function removeProject(event) {
    const projectId = event.target.dataset.id;
    const projectIndex = projectArray.findIndex (project => project.id == projectId);
    if (projectIndex > -1) {
        projectArray.splice(projectIndex, 1);
        updateProjectHTML();
        projectArraytoJSONStr();
        (0,_populateCalendar_js__WEBPACK_IMPORTED_MODULE_0__.generateCalendar)();
        console.log("Project array after removal:", projectArray);
    }
}

// Object array to JSON string -> local storage
function taskArraytoJSONStr() {
    const JSONstr = JSON.stringify(taskArray);
    localStorage.setItem("tasksJSON", JSONstr);
}

function projectArraytoJSONStr () {
    const JSONstr = JSON.stringify(projectArray);
    localStorage.setItem("projectsJSON", JSONstr);
}

// Local storage -> object array
function JSONstrtoTaskArray() {
    let taskArrayStr = localStorage.getItem("tasksJSON");
    if (!taskArrayStr) {
        console.warn('No task array found in local storage, initializing empty array');
        taskArray = [];
    } else {
        try {
            let objArray = JSON.parse(taskArrayStr);
            if (Array.isArray(objArray)) {
                taskArray = objArray;
            } else {
                console.error('Parsed task array is not an array, initializing empty array');
                taskArray = [];
            }
        } catch (e) {
            console.error('Failed to parse task array from local storage:', e);
            taskArray = [];
        }
    }
    console.log("Loaded task array from local storage:", taskArray);
}

function JSONstrtoProjectArray() {
    let projectArrayStr = localStorage.getItem("projectsJSON");
    if (!projectArrayStr) {
        console.warn('No project array found in local storage, initializing empty array');
        projectArray = [];
    } else {
        try {
            let objArray = JSON.parse(projectArrayStr);
            if (Array.isArray(objArray)) {
                projectArray = objArray;
            } else {
                console.error('Parsed project array is not an array, initializing empty array');
                projectArray = [];
            }
        } catch (e) {
            console.error('Failed to parse project array from local storage:', e);
            projectArray = [];
        }
    }
    console.log("Loaded project array from local storage:", projectArray);
}


document.addEventListener('DOMContentLoaded', () => {
    JSONstrtoTaskArray(); // Load tasks from local storage
    JSONstrtoProjectArray();
    updateHTML(); // Update the HTML with the loaded tasks
    updateProjectHTML();
});

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeModalBox: () => (/* binding */ closeModalBox),
/* harmony export */   openModalBox: () => (/* binding */ openModalBox),
/* harmony export */   submitProjectBtnCloseModal: () => (/* binding */ submitProjectBtnCloseModal),
/* harmony export */   submitTaskBtnCloseModal: () => (/* binding */ submitTaskBtnCloseModal)
/* harmony export */ });
/* harmony import */ var _modaltabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modaltabs */ "./src/modaltabs.js");


const modal = document.getElementById('modal');
const openModal = document.getElementById('openModalBtn');
const closeModal = document.getElementById('closeModalBtn');
const submitTaskBtn = document.getElementById('submitTaskBtn');

function openModalBox () {
    openModal.addEventListener('click', () => {
        (0,_modaltabs__WEBPACK_IMPORTED_MODULE_0__.updateTaskForm)();
        modal.showModal();
    })
}

function closeModalBox () {
    closeModal.addEventListener('click', () => {
        modal.close();
        (0,_modaltabs__WEBPACK_IMPORTED_MODULE_0__.clearTaskForm)();
    })
}

function submitTaskBtnCloseModal () {
    modal.close();
}

function submitProjectBtnCloseModal () {
    modal.close();
}

/***/ }),

/***/ "./src/modaltabs.js":
/*!**************************!*\
  !*** ./src/modaltabs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearSubmit: () => (/* binding */ clearSubmit),
/* harmony export */   clearTaskForm: () => (/* binding */ clearTaskForm),
/* harmony export */   renderSubmitProjectBtn: () => (/* binding */ renderSubmitProjectBtn),
/* harmony export */   renderSubmitTaskBtn: () => (/* binding */ renderSubmitTaskBtn),
/* harmony export */   updateProjectForm: () => (/* binding */ updateProjectForm),
/* harmony export */   updateTaskForm: () => (/* binding */ updateTaskForm)
/* harmony export */ });
/* harmony import */ var _getTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTask */ "./src/getTask.js");
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.js */ "./src/modal.js");





// function to clear form content
function clearTaskForm() {
  const formContainer = document.getElementById("form-container");
  formContainer.replaceChildren();
}

// function to clear submit button
function clearSubmit () {
  const submitTaskBtn = document.getElementById('submitTaskBtn');
  const submitProjectBtn = document.getElementById('submitProjectBtn');

  if (submitTaskBtn) {
    submitTaskBtn.remove();
  } else if (submitProjectBtn) {
    submitProjectBtn.remove();
  }
}

// render task submit button
function renderSubmitTaskBtn () {
  clearSubmit();
  // grab main container
  const modalContent = document.getElementById('modal-content');

  // create button
  const submitBtn = document.createElement('input');

  // add attributes and values
  submitBtn.id = 'submitTaskBtn';
  submitBtn.type = 'button';
  submitBtn.value = 'Submit';

  // appending
  modalContent.appendChild(submitBtn);

  // event listeners
  submitBtn.addEventListener('click', _getTask__WEBPACK_IMPORTED_MODULE_0__.addTaskToArray);
  submitBtn.addEventListener('click', _getTask__WEBPACK_IMPORTED_MODULE_0__.updateProjectHTML);
  submitBtn.addEventListener('click', _getTask__WEBPACK_IMPORTED_MODULE_0__.taskArraytoJSONStr);
  submitBtn.addEventListener('click', _modal_js__WEBPACK_IMPORTED_MODULE_1__.submitTaskBtnCloseModal);
}

// render project submit button
function renderSubmitProjectBtn () {
  clearSubmit();
  // grab main container
  const modalContent = document.getElementById('modal-content');
  // create button
  const submitBtn = document.createElement('input');

  // add attributes and values
  submitBtn.id = 'submitProjectBtn';
  submitBtn.type = 'button';
  submitBtn.value = 'Submit';

  // appending
  modalContent.appendChild(submitBtn);

  // add event listeners
  submitBtn.addEventListener('click', _getTask__WEBPACK_IMPORTED_MODULE_0__.addProjectToArray);
  // ***code for json***
  submitBtn.addEventListener('click', _modal_js__WEBPACK_IMPORTED_MODULE_1__.submitProjectBtnCloseModal);
}

// render task form
function updateTaskForm () {
  // clear existing task form and submit button
    clearTaskForm();
    clearSubmit();
    renderSubmitTaskBtn();
    // grab main container and task button and heading
    const formContainer = document.getElementById("form-container");
    const taskBtn = document.getElementById("taskBtn");
    const projectBtn = document.getElementById("projectBtn");
    const modalHeading = document.getElementById('modalHeadingText');

    // form container
    const taskForm = document.createElement('form');
    // section container
    const nameContainer = document.createElement('div');
    const dueDateContainer = document.createElement('div');
    const priorityContainer =document.createElement('div');
    // labels
    const nameLabel = document.createElement('label');
    const dueDateLabel = document.createElement('label');
    const priorityLabel = document.createElement('label');
    // inputs
    const nameInput = document.createElement('input');
    const dueDateInput = document.createElement('input');
    // priority buttons
    const priorityBtnsContainer = document.createElement('div');
    const lowInput = document.createElement('input');
    const medInput = document.createElement('input');
    const highInput = document.createElement('input');

    // assigning classes and id's
    // form
    taskForm.classList.add('form');
    taskForm.id = 'task-form';

    // section containers
    nameContainer.classList.add('labels');
    dueDateContainer.classList.add('labels');
    priorityContainer.classList.add('labels');

    // setting 'for' for labels
    nameLabel.htmlFor = 'task-name';
    dueDateLabel.htmlFor = 'due-date';
    priorityLabel.htmlFor = 'priority';

    // inputs and their types
    nameInput.id = 'task-name-input';
    nameInput.type = 'text';

    dueDateInput.id = 'due-date-input';
    dueDateInput.type = 'date';
    // also values
    priorityBtnsContainer.id = 'priorityBtns';
    lowInput.id = 'lowBtn';
    lowInput.type = 'button';
    lowInput.value = 'low';
    medInput.id = 'medBtn'
    medInput.type = 'button';
    medInput.value = 'medium';
    highInput.id = 'highBtn';
    highInput.type = 'button';
    highInput.value = 'high';

//  Text Content
    modalHeading.textContent = "creating task . . ."
    nameLabel.textContent = 'task name';
    dueDateLabel.textContent = 'due date';
    priorityLabel.textContent = 'priority';

// Appending
    // name container
    nameContainer.appendChild(nameLabel);
    nameContainer.appendChild(nameInput);
    // due date container
    dueDateContainer.appendChild(dueDateLabel);
    dueDateContainer.appendChild(dueDateInput);
    // buttons container
    priorityBtnsContainer.appendChild(lowInput);
    priorityBtnsContainer.appendChild(medInput);
    priorityBtnsContainer.appendChild(highInput);

    priorityContainer.appendChild(priorityLabel);
    priorityContainer.appendChild(priorityBtnsContainer);


    // task form container
    taskForm.append(nameContainer, dueDateContainer, priorityContainer);

    // main form container
    formContainer.appendChild(taskForm);

    // add event listeners to button
    lowInput.addEventListener('click', _getTask__WEBPACK_IMPORTED_MODULE_0__.getPriority);
    lowInput.addEventListener('click', _getTask__WEBPACK_IMPORTED_MODULE_0__.changeLowBtnColor);

    medInput.addEventListener('click', _getTask__WEBPACK_IMPORTED_MODULE_0__.getPriority);
    medInput.addEventListener('click', _getTask__WEBPACK_IMPORTED_MODULE_0__.changeMedBtnColor);

    highInput.addEventListener('click', _getTask__WEBPACK_IMPORTED_MODULE_0__.getPriority);
    highInput.addEventListener('click', _getTask__WEBPACK_IMPORTED_MODULE_0__.changeHighBtnColor);

    // adding event listeners to side buttons
    projectBtn.addEventListener('click', updateProjectForm);
    taskBtn.addEventListener('click', updateTaskForm);
}

// render project form
function updateProjectForm () {
  // clear the current form
  clearTaskForm();
  clearSubmit();
  renderSubmitProjectBtn();
  // grab main container and project button and header
  const modalHeading = document.getElementById('modalHeadingText');
  const formContainer = document.getElementById("form-container");
  const projectBtn = document.getElementById("projectBtn");

// creating containers
  // form container
  const projectForm = document.createElement('form');
  // name container
  const nameContainer = document.createElement('div');
  const dropdownContainer = document.createElement('div');
  // duedate container
  const dueDateContainer = document.createElement('div');
  const descriptionContainer = document.createElement('div');

// creating elements
  // labels
  const nameLabel = document.createElement('label');
  const dropdownLabel = document.createElement('label');
  const dueDateLabel = document.createElement('label');
  const descriptionLabel = document.createElement('label');

  // inputs
  const nameInput = document.createElement('input');
  const projectNameSelect = document.createElement('datalist');
  const dropdownInput = document.createElement('select');
  const dueDateInput = document.createElement('input');
  const descriptionInput = document.createElement('textarea');

  // placeholders
  const optionPlaceholder = document.createElement('option');

// assigning classes and ids
  // project form
  projectForm.id = 'project-form';
  projectForm.classList.add('form');

  // containers
  nameContainer.classList.add('labels');
  dropdownContainer.classList.add('labels');
  dueDateContainer.classList.add('labels');
  descriptionContainer.classList.add('labels');

  // labels
  nameLabel.htmlFor = 'project-name';
  dropdownLabel.htmlFor = 'project-dropdown';
  dueDateLabel.htmlFor = 'due-date';
  descriptionLabel.htmlFor = 'description';

  // inputs
  nameInput.id = 'project-name-input';
  projectNameSelect.id = 'projectOptions';
  dropdownInput.id = 'project-dropdown-input';
  dueDateInput.id = 'projectDueDate';
  descriptionInput.id = 'project-description';

// text content
  modalHeading.textContent = "create or modify project . . .";
  nameLabel.textContent = 'project name';
  dropdownLabel.textContent = 'add a task';
  optionPlaceholder.value = '';
  optionPlaceholder.setAttribute('disabled', '');
  optionPlaceholder.setAttribute('selected', '');
  optionPlaceholder.textContent = 'select a task . . .';
  dueDateLabel.textContent = 'due date';
  descriptionLabel.textContent = 'description';

  // input types
  nameInput.type = 'text';
  dueDateInput.type = 'date';

  // setting nameInput datalist 
  nameInput.setAttribute('list', 'projectOptions');


// appending
  dropdownInput.appendChild(optionPlaceholder);

  nameContainer.append(nameLabel, nameInput, projectNameSelect);
  dropdownContainer.append(dropdownLabel, dropdownInput);
  dueDateContainer.append(dueDateLabel, dueDateInput);
  descriptionContainer.append(descriptionLabel, descriptionInput);

  projectForm.append(nameContainer, dropdownContainer, dueDateContainer, descriptionContainer);

  formContainer.append(projectForm);

  // nested function to populate dropdown menu
  function populateTaskOptions (options) {
    options.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option.name;
      optionElement.textContent = option.name;
      dropdownInput.appendChild(optionElement);
    })
  }
  populateTaskOptions(_getTask__WEBPACK_IMPORTED_MODULE_0__.taskArray);

  function populateProjectOptions (options) {
    options.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option.name;
      optionElement.textContent = option.name;
      projectNameSelect.appendChild(optionElement);
    })
  }
  populateProjectOptions(_getTask__WEBPACK_IMPORTED_MODULE_0__.projectArray);
}

/***/ }),

/***/ "./src/populateCalendar.js":
/*!*********************************!*\
  !*** ./src/populateCalendar.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateCalendar: () => (/* binding */ generateCalendar)
/* harmony export */ });
/* harmony import */ var _getTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTask */ "./src/getTask.js");


function generateCalendar() {
    const calendar = document.getElementById('calendar');
    // month name
    const monthText = document.getElementById('monthName');
    const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    calendar.innerHTML = ''; // Clear any existing content

    // Array of days of the week
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    // Add the days of the week header
    daysOfWeek.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.classList.add('day-header');
        dayHeader.textContent = day;
        calendar.appendChild(dayHeader);
    });
    
    // Get today's date and other relevant details
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const currentDate = today.getDate();

    // set calendar month to current month
    monthText.textContent = monthNames[currentMonth];
    
    // Determine the first day of the month
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const startDay = firstDayOfMonth.getDay();
    
    // Total number of days in the current month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    // Loop through and create the calendar days
    for (let i = 0; i < 35; i++) {
        const dayCell = document.createElement('div');
        dayCell.classList.add('calendar-day');

        // Calculate the day number for the calendar grid
        const dayNumber = i - startDay + 1;
        
        if (dayNumber > 0 && dayNumber <= daysInMonth) {
            dayCell.textContent = dayNumber;

            // Format date string for matching (e.g., "2024-11-07")
            const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(dayNumber).padStart(2, '0')}`;
            dayCell.setAttribute('data-date', dateStr);

            // Highlight today’s date
            if (dayNumber === currentDate) {
                dayCell.classList.add('today');
            }

            // Check for matching projects and tasks and display them
            _getTask__WEBPACK_IMPORTED_MODULE_0__.projectArray.forEach(project => {
                if (project.date === dateStr) {
                    const projectName = document.createElement('span');
                    projectName.classList.add('project-name');
                    projectName.textContent = `- ${project.name}`;
                    dayCell.appendChild(projectName);
                }
            });

            _getTask__WEBPACK_IMPORTED_MODULE_0__.taskArray.forEach(task => {
                if (task.date === dateStr) {
                    const taskName = document.createElement('span');
                    taskName.classList.add('task-name');
                    taskName.textContent = `- ${task.name}`;
                    dayCell.appendChild(taskName);
                }
            });
        } else {
            dayCell.textContent = ''; // Leave cells empty if they fall outside the current month
        }

        calendar.appendChild(dayCell);
    }
}


/***/ }),

/***/ "./src/populateProjDropdown.js":
/*!*************************************!*\
  !*** ./src/populateProjDropdown.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DropdownBtn: () => (/* binding */ DropdownBtn)
/* harmony export */ });
/* harmony import */ var _getTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTask */ "./src/getTask.js");

// Accessing CSS Color Variables
const rootStyles = getComputedStyle(document.documentElement);
const lightgreen = rootStyles.getPropertyValue('--accent-lightgreen');
const darkgreen = rootStyles.getPropertyValue('--accent-darkgreen');

function DropdownBtn() {
    document.querySelectorAll('.dropdownBtn').forEach((button) => {
        button.addEventListener('click', (event) => {
            const dataArray = _getTask__WEBPACK_IMPORTED_MODULE_0__.projectArray || JSON.parse(localStorage.getItem('projectsJSON'));

            const projectContainer = event.target.closest('.projects');
            const projectContainerId = projectContainer.getAttribute('data-id');
            const currentProject = dataArray.find(project => String(project.id) === projectContainerId);

            let tasks = projectContainer.querySelector('.tasks');

            if (tasks) {
                tasks.remove();
                return;
            }

            const tasksContainer = document.getElementById('project-tasks-container');
            tasks = document.createElement('div');
            tasks.classList.add('tasks');

            currentProject.tasks.forEach(task => {
                const taskContainer = tasks;
                const taskTitleContainer = document.createElement('div');
                const btnCheckListContainer = document.createElement('div');
                const taskTitle = document.createElement('h2');
                const taskRemoveButton = document.createElement('button');
                const priorityButton = document.createElement('button');
                const dateButton = document.createElement('button');
                const completedButton = document.createElement('button');

                const taskName = task.name;
                const taskId = task.id;

                const currenttasks = document.getElementById('tasks-container');
                const allTasks = Array.from(currenttasks.querySelectorAll('.tasks'));
                const sourceTask = allTasks.find(taskElem => Number(taskElem.dataset.id) === taskId);
                const buttonsContainer = sourceTask?.querySelector('.btnCheckList');

                if (buttonsContainer) {
                    const priorityStyle = buttonsContainer.querySelector('.priorityBtn');
                    const dateStyle = buttonsContainer.querySelector('.dateBtn');
                    const completedStyle = buttonsContainer.querySelector('.completedBtn');

                    const computedPriorityStyle = getComputedStyle(priorityStyle);
                    const computedDateStyle = getComputedStyle(dateStyle);
                    const computedCompletedStyle = getComputedStyle(completedStyle);

                    [priorityButton, dateButton, completedButton].forEach((button, index) => {
                        const style = [computedPriorityStyle, computedDateStyle, computedCompletedStyle][index];
                        for (let property of style) {
                            button.style[property] = style.getPropertyValue(property);
                        }
                    });
                }

                priorityButton.textContent = task.priority;
                dateButton.textContent = task.date;
                completedButton.textContent = task.completion;

                taskTitle.textContent = taskName;
                taskRemoveButton.innerHTML = 'x';
                taskRemoveButton.dataset.id = taskId;

                taskTitleContainer.classList.add('taskTitleSection');
                taskRemoveButton.classList.add('removeTaskBtn');
                taskTitle.classList.add('task-title');
                btnCheckListContainer.classList.add('btnCheckList');
                priorityButton.classList.add('btnCheck');
                dateButton.classList.add('btnCheck', 'dateBtn');
                completedButton.classList.add('btnCheck', 'completedBtn');

                // Update the background color and border color of the completedButton based on completion status
                if (task.completion === 'Complete') {
                    completedButton.style.backgroundColor = lightgreen;
                    completedButton.style.borderColor = darkgreen;  // Initial border color for "Complete"
                } else {
                    completedButton.style.backgroundColor = 'red';
                    completedButton.style.borderColor = 'firebrick';  // Initial border color for "Incomplete"
                }

                taskTitleContainer.append(taskTitle, taskRemoveButton);
                btnCheckListContainer.append(priorityButton, dateButton, completedButton);
                tasks.append(taskTitleContainer, btnCheckListContainer);

                // Add an event listener to update task completion
                completedButton.addEventListener('click', () => {
                    // Toggle or update the completion status
                    task.completion = task.completion === 'Incomplete' ? 'Complete' : 'Incomplete';
                    completedButton.textContent = task.completion;

                    // Change the background color and border color based on completion status
                    if (task.completion === 'Complete') {
                        completedButton.style.backgroundColor = lightgreen;
                        completedButton.style.borderColor = darkgreen;
                    } else {
                        completedButton.style.backgroundColor = 'red';
                        completedButton.style.borderColor = 'firebrick';
                    }

                    // Save updated data to local storage
                    localStorage.setItem('projectsJSON', JSON.stringify(dataArray));

                    // Optionally update the UI or call a function to reflect changes
                    (0,_getTask__WEBPACK_IMPORTED_MODULE_0__.updateHTML)(); // Or another function that updates the UI
                });
            });

            tasksContainer.append(tasks);
            projectContainer.append(tasksContainer);
        });
    });
}


/***/ }),

/***/ "./src/Munro-2LYe.ttf":
/*!****************************!*\
  !*** ./src/Munro-2LYe.ttf ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f78662ff4aad4d038806.ttf";

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.js */ "./src/modal.js");
/* harmony import */ var _modaltabs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modaltabs.js */ "./src/modaltabs.js");
/* harmony import */ var _getTask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getTask.js */ "./src/getTask.js");
/* harmony import */ var _populateCalendar_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./populateCalendar.js */ "./src/populateCalendar.js");







(0,_modaltabs_js__WEBPACK_IMPORTED_MODULE_2__.renderSubmitTaskBtn)();
(0,_modal_js__WEBPACK_IMPORTED_MODULE_1__.openModalBox)();
(0,_modal_js__WEBPACK_IMPORTED_MODULE_1__.closeModalBox)();


document.addEventListener('DOMContentLoaded', function () {
    (0,_getTask_js__WEBPACK_IMPORTED_MODULE_3__.JSONstrtoTaskArray)();
    (0,_getTask_js__WEBPACK_IMPORTED_MODULE_3__.updateHTML)();
    (0,_getTask_js__WEBPACK_IMPORTED_MODULE_3__.updateProjectHTML)();
    (0,_populateCalendar_js__WEBPACK_IMPORTED_MODULE_4__.generateCalendar)();
})
})();

/******/ })()
;