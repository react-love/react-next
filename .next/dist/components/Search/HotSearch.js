'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HotSearch = function HotSearch(props) {
    var hotText = props.hotText,
        hotClick = props.hotClick,
        currentHot = props.currentHot;

    return _react2.default.createElement('a', {
        onClick: hotClick,
        style: { color: currentHot === hotText ? '#398cee' : '' },
        className: 'jsx-4290528160' + ' ' + 'style_span'
    }, hotText, _react2.default.createElement(_style2.default, {
        styleId: '4290528160',
        css: ['.style_span.jsx-4290528160{display:inline-block;background:#f4f4f4;padding:0.41667rem 0.833rem;margin-right:1rem;margin-bottom:0.833rem;color:#444;font-size:1rem;}']
    }));
};

exports.default = HotSearch;