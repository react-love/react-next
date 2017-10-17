'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _const = require('../../utils/const');

var con = _interopRequireWildcard(_const);

var _nav = require('./styles/nav.scss');

var _nav2 = _interopRequireDefault(_nav);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _navImage;

var navImage = (_navImage = {}, (0, _defineProperty3.default)(_navImage, con.NAV_IMAGE_1, '/static/home/nsyjr.png'), (0, _defineProperty3.default)(_navImage, con.NAV_IMAGE_2, '/static/home/nlswx.png'), (0, _defineProperty3.default)(_navImage, con.NAV_IMAGE_3, '/static/home/nflwx.png'), (0, _defineProperty3.default)(_navImage, con.NAV_IMAGE_4, '/static/home/nyysj.png'), (0, _defineProperty3.default)(_navImage, con.NAV_IMAGE_5, '/static/home/nxxjs.png'), (0, _defineProperty3.default)(_navImage, con.NAV_IMAGE_6, '/static/home/nyssj.png'), (0, _defineProperty3.default)(_navImage, con.NAV_IMAGE_7, '/static/home/nyyjs.png'), (0, _defineProperty3.default)(_navImage, con.NAV_IMAGE_8, '/static/home/nydjk.png'), (0, _defineProperty3.default)(_navImage, con.NAV_IMAGE_9, '/static/home/nother.png'), _navImage);
var Nav = function Nav(props) {
    var title = props.title,
        img = props.img,
        index = props.index,
        handleClick = props.handleClick;

    return [_react2.default.createElement(_head2.default, { key: 'NavHead' }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _nav2.default } })), _react2.default.createElement('li', { className: 'style_li', onClick: handleClick, key: 'NavLi' }, _react2.default.createElement('img', { src: navImage[index + 1], className: 'style_img' }), _react2.default.createElement('span', { className: 'style_span' }, title))];
};

exports.default = Nav;