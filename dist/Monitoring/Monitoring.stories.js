'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _Monitoring = require('./Monitoring');

var _Monitoring2 = _interopRequireDefault(_Monitoring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Monitoring', module).add('FETCHING', function () {
    return _react2.default.createElement(_Monitoring2.default, { getMonitoringIsAliveState: 'FETCHING', isAlive: false });
});
(0, _react3.storiesOf)('Monitoring', module).add('FETCHING', function () {
    return _react2.default.createElement(_Monitoring2.default, { getMonitoringIsAliveState: 'FETCHING', isAlive: true });
});
(0, _react3.storiesOf)('Monitoring', module).add('IDLE, isAlive: false', function () {
    return _react2.default.createElement(_Monitoring2.default, { getMonitoringIsAliveState: 'IDLE', isAlive: false });
});
(0, _react3.storiesOf)('Monitoring', module).add('IDLE, isAlive: true', function () {
    return _react2.default.createElement(_Monitoring2.default, { getMonitoringIsAliveState: 'IDLE', isAlive: true });
});