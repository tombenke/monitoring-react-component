'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./Monitoring.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Monitoring = function (_Component) {
    _inherits(Monitoring, _Component);

    function Monitoring() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Monitoring);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Monitoring.__proto__ || Object.getPrototypeOf(Monitoring)).call.apply(_ref, [this].concat(args))), _this), _this.refreshServerStatus = function (e) {
            e.preventDefault();
            console.log('Will refresh server status.', _this.props);
            _this.props.getMonitoringIsAlive();
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Monitoring, [{
        key: 'render',
        value: function render() {
            if (this.props.getMonitoringIsAliveState === 'IDLE') {
                if (this.props.isAlive) {
                    return _react2.default.createElement(
                        'span',
                        null,
                        _react2.default.createElement(
                            'button',
                            { type: 'button', className: 'MonitoringAlive', onClick: this.refreshServerStatus },
                            'Server is ALIVE (Click to Refresh)'
                        )
                    );
                } else {
                    return _react2.default.createElement(
                        'span',
                        null,
                        _react2.default.createElement(
                            'button',
                            { type: 'button', className: 'MonitoringNotAlive', onClick: this.refreshServerStatus },
                            'Server is NOT ALIVE (Click to Refresh)'
                        )
                    );
                }
            } else {
                return _react2.default.createElement(
                    'span',
                    { className: 'MonitoringFetching' },
                    'Fetching Server Status...'
                );
            }
        }
    }]);

    return Monitoring;
}(_react.Component);

exports.default = Monitoring;