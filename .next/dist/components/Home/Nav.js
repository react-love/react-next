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

var _navImage,
    _jsxFileName = '/Users/yongyuehuang/WebstormProjects/react-next/components/Home/Nav.js';

var navImage = (_navImage = {}, (0, _defineProperty3.default)(_navImage, con.NAV_IMAGE_1, '/static/home/nsyjr.png'), (0, _defineProperty3.default)(_navImage, con.NAV_IMAGE_2, '/static/home/nlswx.png'), (0, _defineProperty3.default)(_navImage, con.NAV_IMAGE_3, '/static/home/nflwx.png'), (0, _defineProperty3.default)(_navImage, con.NAV_IMAGE_4, '/static/home/nyysj.png'), (0, _defineProperty3.default)(_navImage, con.NAV_IMAGE_5, '/static/home/nxxjs.png'), (0, _defineProperty3.default)(_navImage, con.NAV_IMAGE_6, '/static/home/nyssj.png'), (0, _defineProperty3.default)(_navImage, con.NAV_IMAGE_7, '/static/home/nyyjs.png'), (0, _defineProperty3.default)(_navImage, con.NAV_IMAGE_8, '/static/home/nydjk.png'), (0, _defineProperty3.default)(_navImage, con.NAV_IMAGE_9, '/static/home/nother.png'), _navImage);
var Nav = function Nav(props) {
    var title = props.title,
        img = props.img,
        index = props.index,
        handleClick = props.handleClick;

    return [_react2.default.createElement(_head2.default, { key: 'NavHead', __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _nav2.default }, __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    })), _react2.default.createElement('li', { className: 'style_li', onClick: handleClick, key: 'NavLi', __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }, _react2.default.createElement('img', { src: navImage[index + 1], className: 'style_img', __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }), _react2.default.createElement('span', { className: 'style_span', __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    }, title))];
};
Nav.propTypes = {
    title: _propTypes2.default.string,
    img: _propTypes2.default.string,
    index: _propTypes2.default.number,
    handleClick: _propTypes2.default.func
};
exports.default = Nav;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSG9tZS9OYXYuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJIZWFkIiwiY29uIiwibmF2U3R5bGUiLCJuYXZJbWFnZSIsIk5BVl9JTUFHRV8xIiwiTkFWX0lNQUdFXzIiLCJOQVZfSU1BR0VfMyIsIk5BVl9JTUFHRV80IiwiTkFWX0lNQUdFXzUiLCJOQVZfSU1BR0VfNiIsIk5BVl9JTUFHRV83IiwiTkFWX0lNQUdFXzgiLCJOQVZfSU1BR0VfOSIsIk5hdiIsInByb3BzIiwidGl0bGUiLCJpbWciLCJpbmRleCIsImhhbmRsZUNsaWNrIiwiX19odG1sIiwicHJvcFR5cGVzIiwic3RyaW5nIiwibnVtYmVyIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87O0lBQVAsQUFBWTs7QUFDWixBQUFPLEFBQWM7Ozs7Ozs7Ozs7O0FBRXJCLElBQU0scUVBQ0QsSUFEQyxBQUNHLGFBREgsQUFDaUIsb0VBQ2xCLElBRkMsQUFFRyxhQUZILEFBRWlCLG9FQUNsQixJQUhDLEFBR0csYUFISCxBQUdpQixvRUFDbEIsSUFKQyxBQUlHLGFBSkgsQUFJaUIsb0VBQ2xCLElBTEMsQUFLRyxhQUxILEFBS2lCLG9FQUNsQixJQU5DLEFBTUcsYUFOSCxBQU1pQixvRUFDbEIsSUFQQyxBQU9HLGFBUEgsQUFPaUIsb0VBQ2xCLElBUkMsQUFRRyxhQVJILEFBUWlCLG9FQUNsQixJQVRDLEFBU0csYUFUSCxBQVNpQiw0QkFUdkI7QUFXQSxJQUFNLE1BQU0sU0FBTixBQUFNLElBQUEsQUFBQyxPQUFVO1FBQUEsQUFDWCxRQURXLEFBQ3dCLE1BRHhCLEFBQ1g7UUFEVyxBQUNKLE1BREksQUFDd0IsTUFEeEIsQUFDSjtRQURJLEFBQ0MsUUFERCxBQUN3QixNQUR4QixBQUNDO1FBREQsQUFDUSxjQURSLEFBQ3dCLE1BRHhCLEFBQ1EsQUFDM0I7OzRCQUNJLEFBQUMsZ0NBQUssS0FBTjtzQkFBQTt3QkFBQSxBQUFzQjtBQUF0QjtLQUFBLDJDQUE2Qix5QkFBeUIsRUFBaEMsQUFBZ0MsQUFBQyxBQUFRO3NCQUF6Qzt3QkFEbkIsQUFDSCxBQUFzQjtBQUFBO09BRG5CLGtCQUVILGNBQUEsUUFBSSxXQUFKLEFBQWMsWUFBVyxTQUF6QixBQUFrQyxhQUFhLEtBQS9DO3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtLQUFBLHlDQUNTLEtBQUssU0FBUyxRQUFuQixBQUFVLEFBQWUsSUFBSSxXQUE3QixBQUF1QztzQkFBdkM7d0JBREosQUFDSSxBQUNBO0FBREE7d0JBQ0EsY0FBQSxVQUFNLFdBQU4sQUFBZ0I7c0JBQWhCO3dCQUFBLEFBQThCO0FBQTlCO09BSlIsQUFBTyxBQUVILEFBRUksQUFHWDtBQVREO0FBVUEsSUFBQSxBQUFJO1dBQ08sb0JBREssQUFDSyxBQUNqQjtTQUFLLG9CQUZPLEFBRUcsQUFDZjtXQUFPLG9CQUhLLEFBR0ssQUFDakI7aUJBQWEsb0JBSmpCLEFBQWdCLEFBSVcsQUFFM0I7QUFOZ0IsQUFDWjtrQkFLSixBQUFlIiwiZmlsZSI6Ik5hdi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveW9uZ3l1ZWh1YW5nL1dlYnN0b3JtUHJvamVjdHMvcmVhY3QtbmV4dCJ9