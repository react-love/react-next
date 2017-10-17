'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _header = require('./styles/header.scss');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {
    var currentHot = props.currentHot;

    return _react2.default.createElement('div', { className: 'style_body' }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _header2.default } })), _react2.default.createElement('div', { className: 'style_main' }, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', { className: 'style_a' }, _react2.default.createElement('img', { src: '/static/search/back_search.png', className: 'style_a_img' }))), _react2.default.createElement('div', { className: 'style_div_content' }, _react2.default.createElement('img', { src: '/static/search/search_1.png', className: 'style_div_img' }), _react2.default.createElement('input', { type: 'text',
        placeholder: '\u641C\u7D22\u4E66\u540D',
        className: 'style_div_input',
        value: currentHot,
        onChange: function onChange(event) {
            props.upDateValue(event.target.value);
        }
    })), _react2.default.createElement(_link2.default, { href: '/search' }, _react2.default.createElement('a', { className: 'style_right_a' }, '\u641C\u7D22'))));
};

exports.default = Header;