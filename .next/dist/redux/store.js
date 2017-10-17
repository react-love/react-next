'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initStore = exports.getNav = exports.reducer = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _redux = require('redux');

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _fetchData = require('../utils/fetchData');

var _fetchData2 = _interopRequireDefault(_fetchData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var initialState = {
    navMain: [],
    hotData: [{ id: 1, text: '会计从业' }, { id: 2, text: 'c语言程序设计' }, { id: 3, text: '高等数学' }, { id: 4, text: 'JavaScript' }, { id: 5, text: '网页设计' }, { id: 6, text: 'Photoshop' }, { id: 7, text: '英语四级' }, { id: 8, text: '线性代数' }, { id: 9, text: '公务员考试' }]

    // reducer
};var reducer = exports.reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case "RECEIVE_NAV":
            return (0, _extends3.default)({}, state, {
                navMain: action.navMain
            });
        default:
            return state;
    }
};

// actions
var receiveNav = function receiveNav(response) {
    return {
        type: 'RECEIVE_NAV',
        navMain: response.data
    };
};
var getNav = exports.getNav = function getNav() {
    return function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch, getState) {
            var response;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            _context.next = 3;
                            return _fetchData2.default.get('/book/navigation');

                        case 3:
                            response = _context.sent;
                            _context.next = 6;
                            return dispatch(receiveNav(response.data));

                        case 6:
                            _context.next = 11;
                            break;

                        case 8:
                            _context.prev = 8;
                            _context.t0 = _context['catch'](0);

                            console.log('error: ', _context.t0);

                        case 11:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this, [[0, 8]]);
        }));

        return function (_x2, _x3) {
            return _ref.apply(this, arguments);
        };
    }();
};

var initStore = exports.initStore = function initStore() {
    var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

    return (0, _redux.createStore)(reducer, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default)));
};