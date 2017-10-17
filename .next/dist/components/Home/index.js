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

            return _react2.default.createElement('div', null, _react2.default.createElement(_Header2.default, {
                title: 'react-next\u670D\u52A1\u7AEF\u6E32\u67D3',
                linkTo: '/search',
                bgColor: bgClass,
                imgUrl: '/static/home/search.svg'
            }), _react2.default.createElement('div', { className: 'style_div' }, _react2.default.createElement('ul', { className: 'style_ul' }, navMain.map(function (elem, index) {
                return _react2.default.createElement(_Nav2.default, {
                    key: index,
                    title: elem.text,
                    index: index,
                    handleClick: function handleClick() {
                        return _this2.handleClick();
                    }
                });
            }))), _react2.default.createElement(_Special2.default, null));
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