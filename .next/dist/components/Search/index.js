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

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _HotSearch = require('./HotSearch');

var _HotSearch2 = _interopRequireDefault(_HotSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Search = function (_React$Component) {
    (0, _inherits3.default)(Search, _React$Component);

    function Search(props) {
        (0, _classCallCheck3.default)(this, Search);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Search.__proto__ || (0, _getPrototypeOf2.default)(Search)).call(this, props));

        _this.state = {
            currentHot: ''
        };
        _this.hotClick = _this.hotClick.bind(_this);
        _this.upDateValue = _this.upDateValue.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Search, [{
        key: 'upDateValue',
        value: function upDateValue(value) {
            this.setState({ currentHot: value });
        }
    }, {
        key: 'hotClick',
        value: function hotClick(text) {
            this.setState(function () {
                return { currentHot: text };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var currentHot = this.state.currentHot;
            var _props$hotData = this.props.hotData,
                hotData = _props$hotData === undefined ? [] : _props$hotData;

            return _react2.default.createElement('div', { style: { height: '100vh' }, className: 'jsx-4038448718'
            }, _react2.default.createElement(_Header2.default, { currentHot: currentHot,
                upDateValue: this.upDateValue
            }), _react2.default.createElement('div', {
                className: 'jsx-4038448718'
            }, _react2.default.createElement('p', {
                className: 'jsx-4038448718' + ' ' + 'search-hot-title'
            }, _react2.default.createElement('i', {
                className: 'jsx-4038448718' + ' ' + 'fa fa-fire'
            }), _react2.default.createElement('span', {
                className: 'jsx-4038448718'
            }, '\u70ED\u95E8\u641C\u7D22')), _react2.default.createElement('p', {
                className: 'jsx-4038448718' + ' ' + 'style_div_p'
            }, hotData.map(function (elem, index) {
                return _react2.default.createElement(_HotSearch2.default, {
                    key: index,
                    hotText: elem.text,
                    hotClick: function hotClick() {
                        return _this2.hotClick(elem.text);
                    },
                    currentHot: currentHot
                });
            }))), _react2.default.createElement(_style2.default, {
                styleId: '4038448718',
                css: ['.style_div_p.jsx-4038448718{padding:0.833rem 1.25rem;}', '.search-hot-title.jsx-4038448718{padding:0.833rem 1.25rem 0 1.25rem;font-size:1.2rem;}', '.search-hot-title.jsx-4038448718 i.jsx-4038448718{color:#646464;}', '.search-hot-title.jsx-4038448718 span.jsx-4038448718{margin-left:0.5rem;color:#646464;}']
            }));
        }
    }]);

    return Search;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(_ref) {
    var hotData = _ref.hotData;
    return { hotData: hotData };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Search);