(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(module,exports,__webpack_require__){__webpack_require__(148),__webpack_require__(227),module.exports=__webpack_require__(228)},228:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(33),req=__webpack_require__(348);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(109)(module))},348:function(module,exports,__webpack_require__){var map={"./components/Monitoring/Monitoring.stories.js":349};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){var id=map[req];if(!(id+1)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return id}webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=348},349:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(33),_Monitoring__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(51);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Monitoring",module).add("FETCHING",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Monitoring__WEBPACK_IMPORTED_MODULE_2__.a,{getMonitoringIsAliveState:"FETCHING",isAlive:!1})}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Monitoring",module).add("FETCHING",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Monitoring__WEBPACK_IMPORTED_MODULE_2__.a,{getMonitoringIsAliveState:"FETCHING",isAlive:!0})}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Monitoring",module).add("IDLE, isAlive: false",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Monitoring__WEBPACK_IMPORTED_MODULE_2__.a,{getMonitoringIsAliveState:"IDLE",isAlive:!1})}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Monitoring",module).add("IDLE, isAlive: true",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Monitoring__WEBPACK_IMPORTED_MODULE_2__.a,{getMonitoringIsAliveState:"IDLE",isAlive:!0})})}.call(this,__webpack_require__(109)(module))},350:function(module,exports,__webpack_require__){},51:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_tombenke_topics_monitoring_react_component_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(142),_home_tombenke_topics_monitoring_react_component_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(143),_home_tombenke_topics_monitoring_react_component_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(145),_home_tombenke_topics_monitoring_react_component_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(144),_home_tombenke_topics_monitoring_react_component_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(146),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),Monitoring=(__webpack_require__(350),function(_Component){function Monitoring(){var _getPrototypeOf2,_this;Object(_home_tombenke_topics_monitoring_react_component_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Monitoring);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=Object(_home_tombenke_topics_monitoring_react_component_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,(_getPrototypeOf2=Object(_home_tombenke_topics_monitoring_react_component_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(Monitoring)).call.apply(_getPrototypeOf2,[this].concat(args)))).refreshServerStatus=function(e){e.preventDefault(),console.log("Will refresh server status.",_this.props),_this.props.getMonitoringIsAlive()},_this}return Object(_home_tombenke_topics_monitoring_react_component_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(Monitoring,_Component),Object(_home_tombenke_topics_monitoring_react_component_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Monitoring,[{key:"render",value:function(){return"IDLE"===this.props.getMonitoringIsAliveState?this.props.isAlive?react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{type:"button",className:"MonitoringAlive",onClick:this.refreshServerStatus},"Server is ALIVE (Click to Refresh)")):react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{type:"button",className:"MonitoringNotAlive",onClick:this.refreshServerStatus},"Server is NOT ALIVE (Click to Refresh)")):react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span",{className:"MonitoringFetching"},"Fetching Server Status...")}}]),Monitoring}(react__WEBPACK_IMPORTED_MODULE_5__.Component));__webpack_exports__.a=Monitoring}},[[147,1,2]]]);
//# sourceMappingURL=main.99b4dada9561c9ef94a4.bundle.js.map