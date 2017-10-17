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

var _store = require('../redux/store');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Search = require('../components/Search');

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchPage = function (_React$Component) {
    (0, _inherits3.default)(SearchPage, _React$Component);

    function SearchPage() {
        (0, _classCallCheck3.default)(this, SearchPage);

        return (0, _possibleConstructorReturn3.default)(this, (SearchPage.__proto__ || (0, _getPrototypeOf2.default)(SearchPage)).apply(this, arguments));
    }

    (0, _createClass3.default)(SearchPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            //this.timer = this.props.startClock()
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            //clearInterval(this.timer)
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, { title: '\u641C\u7D22\u56FE\u4E66' }, _react2.default.createElement(_Search2.default, null));
        }
    }]);

    return SearchPage;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        //addCount: bindActionCreators(addCount, dispatch),
        //startClock: bindActionCreators(startClock, dispatch)
    };
};

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, null, mapDispatchToProps)(SearchPage);