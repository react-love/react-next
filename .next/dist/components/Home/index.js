'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Nav = require('./Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _Special = require('./Special');

var _Special2 = _interopRequireDefault(_Special);

var _store = require('../../redux/store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/yongyuehuang/WebstormProjects/react-next/components/Home/index.js';


var Home = function (_React$Component) {
    (0, _inherits3.default)(Home, _React$Component);

    function Home(props) {
        (0, _classCallCheck3.default)(this, Home);

        return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this, props));
    }

    (0, _createClass3.default)(Home, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _props$navMain = this.props.navMain,
                navMain = _props$navMain === undefined ? [] : _props$navMain;

            if (navMain.length == 0) {
                this.props.getNav();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var bgClass = { background: '#00bb9c' };
            var _props$navMain2 = this.props.navMain,
                navMain = _props$navMain2 === undefined ? [] : _props$navMain2;

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, _react2.default.createElement(_Header2.default, {
                title: 'react-next\u670D\u52A1\u7AEF\u6E32\u67D3',
                linkTo: '/search',
                bgColor: bgClass,
                imgUrl: '/static/home/search.svg',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }), _react2.default.createElement('div', { className: 'style_div', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement('ul', { className: 'style_ul', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, navMain.map(function (elem, index) {
                return _react2.default.createElement(_Nav2.default, {
                    key: index,
                    title: elem.text,
                    index: index,
                    handleClick: function handleClick() {
                        return _this2.handleClick();
                    },
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 35
                    }
                });
            }))), _react2.default.createElement(_Special2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }));
        }
    }]);

    return Home;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(_ref) {
    var navMain = _ref.navMain;
    return { navMain: navMain };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        getNav: (0, _redux.bindActionCreators)(_store.getNav, dispatch)
    };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSG9tZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbm5lY3QiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJIZWFkZXIiLCJOYXYiLCJTcGVjaWFsIiwiZ2V0TmF2IiwiSG9tZSIsInByb3BzIiwibmF2TWFpbiIsImxlbmd0aCIsImJnQ2xhc3MiLCJiYWNrZ3JvdW5kIiwibWFwIiwiZWxlbSIsImluZGV4IiwidGV4dCIsImhhbmRsZUNsaWNrIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFTOzs7Ozs7O0lBRUgsQTtrQ0FDRjs7a0JBQUEsQUFBWSxPQUFPOzRDQUFBOztpSUFBQSxBQUNULEFBQ1Q7Ozs7OzZDQUNvQjtpQ0FDTSxLQUROLEFBQ1csTUFEWCxBQUNUO2dCQURTLEFBQ1QseUNBRFMsQUFDRCxLQUNoQjs7Z0JBQUksUUFBQSxBQUFRLFVBQVosQUFBc0IsR0FBRyxBQUNyQjtxQkFBQSxBQUFLLE1BQUwsQUFBVyxBQUNkO0FBQ0o7Ozs7aUNBQ1E7eUJBQ0w7O2dCQUFJLFVBQVUsRUFBRSxZQURYLEFBQ0wsQUFBYyxBQUFjO2tDQUNKLEtBRm5CLEFBRXdCLE1BRnhCLEFBRUk7Z0JBRkosQUFFSSwwQ0FGSixBQUVZLEtBQ2pCOzttQ0FDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUM7dUJBQUQsQUFDVSxBQUNOO3dCQUZKLEFBRVcsQUFDUDt5QkFISixBQUdhLEFBQ1Q7d0JBSko7OzhCQUFBO2dDQURKLEFBQ0ksQUFNQTtBQU5BO0FBQ0ksZ0NBS0osY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxRQUFJLFdBQUosQUFBYzs4QkFBZDtnQ0FBQSxBQUVRO0FBRlI7dUJBRVEsQUFBUSxJQUFJLFVBQUEsQUFBQyxNQUFELEFBQU8sT0FBVSxBQUN6Qjt1Q0FDSSxBQUFDO3lCQUFELEFBQ1MsQUFDTDsyQkFBTyxLQUZYLEFBRWdCLEFBQ1o7MkJBSEosQUFHVyxBQUNQO2lDQUFhLHVCQUFBOytCQUFNLE9BQU4sQUFBTSxBQUFLO0FBSjVCOztrQ0FBQTtvQ0FESixBQUNJLEFBT1A7QUFQTztBQUNJLGlCQURKO0FBWnhCLEFBT0ksQUFDSSxBQUVRLEFBYVosa0NBQUEsQUFBQzs7OEJBQUQ7Z0NBeEJSLEFBQ0ksQUF1QkksQUFHWDtBQUhXO0FBQUE7Ozs7O0VBckNHLGdCQUFNLEE7O0FBMEN6QixJQUFNLGtCQUFrQixTQUFsQixBQUFrQixzQkFBQTtRQUFBLEFBQUcsZUFBSCxBQUFHO1dBQWUsRUFBRSxTQUFwQixBQUFrQjtBQUExQzs7QUFFQSxJQUFNLHFCQUFxQixTQUFyQixBQUFxQixtQkFBQSxBQUFDLFVBQWEsQUFDckM7O2dCQUNZLEFBQW1CLDhDQUQvQixBQUFPLEFBQ0ssQUFBMkIsQUFFMUM7QUFIVSxBQUNIO0FBRlIsQUFLQTtrQkFBZSx5QkFBQSxBQUFRLGlCQUFSLEFBQXlCLG9CQUF4QyxBQUFlLEFBQTZDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95b25neXVlaHVhbmcvV2Vic3Rvcm1Qcm9qZWN0cy9yZWFjdC1uZXh0In0=