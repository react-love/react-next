'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _special = require('./styles/special.scss');

var _special2 = _interopRequireDefault(_special);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Special = function Special() {
    return _react2.default.createElement('div', { className: 'style_main' }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _special2.default } })), _react2.default.createElement('div', { className: 'style_div' }, _react2.default.createElement('div', { className: 'style_left' }, _react2.default.createElement('img', { src: '/static/home/zht1.jpg', className: 'style_img' })), _react2.default.createElement('div', { className: 'style_right' }, _react2.default.createElement('img', { src: '/static/home/zht2.jpg', className: 'style_img' }))));
};
exports.default = Special;