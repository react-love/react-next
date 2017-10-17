'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _header = require('./styles/header.scss');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {
    var title = props.title,
        imgUrl = props.imgUrl,
        linkTo = props.linkTo,
        bgColor = props.bgColor,
        handleClick = props.handleClick;

    return _react2.default.createElement('header', { className: 'header', style: bgColor }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _header2.default } })), title, _react2.default.createElement(_link2.default, { href: linkTo }, _react2.default.createElement('a', { className: 'a_link', onClick: function onClick() {
            return handleClick('left');
        } }, _react2.default.createElement('img', { src: imgUrl || false, className: 'a_img' }))));
};

exports.default = Header;