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

var _jsxFileName = '/Users/yongyuehuang/WebstormProjects/react-next/components/Home/Header.js';


var Header = function Header(props) {
    var title = props.title,
        imgUrl = props.imgUrl,
        linkTo = props.linkTo,
        bgColor = props.bgColor,
        handleClick = props.handleClick;

    return _react2.default.createElement('header', { className: 'header', style: bgColor, __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _header2.default }, __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    })), title, _react2.default.createElement(_link2.default, { href: linkTo, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _react2.default.createElement('a', { className: 'a_link', onClick: function onClick() {
            return handleClick('left');
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement('img', { src: imgUrl || false, className: 'a_img', __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }))));
};
Header.propTypes = {
    title: _propTypes2.default.string,
    imgUrl: _propTypes2.default.string,
    linkTo: _propTypes2.default.string,
    bgColor: _propTypes2.default.object
};
exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSG9tZS9IZWFkZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiSGVhZCIsIlByb3BUeXBlcyIsImhlYWRlclN0eWxlIiwiSGVhZGVyIiwicHJvcHMiLCJ0aXRsZSIsImltZ1VybCIsImxpbmtUbyIsImJnQ29sb3IiLCJoYW5kbGVDbGljayIsIl9faHRtbCIsInByb3BUeXBlcyIsInN0cmluZyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBaUI7Ozs7Ozs7OztBQUV4QixJQUFNLFNBQVMsU0FBVCxBQUFTLE9BQUEsQUFBQyxPQUFVO1FBQUEsQUFDZCxRQURjLEFBQ2tDLE1BRGxDLEFBQ2Q7UUFEYyxBQUNQLFNBRE8sQUFDa0MsTUFEbEMsQUFDUDtRQURPLEFBQ0MsU0FERCxBQUNrQyxNQURsQyxBQUNDO1FBREQsQUFDUyxVQURULEFBQ2tDLE1BRGxDLEFBQ1M7UUFEVCxBQUNrQixjQURsQixBQUNrQyxNQURsQyxBQUNrQixBQUN4Qzs7MkJBQ0ksY0FBQSxZQUFRLFdBQVIsQUFBa0IsVUFBUyxPQUEzQixBQUFrQztzQkFBbEM7d0JBQUEsQUFDSTtBQURKO0tBQUEsa0JBQ0ksQUFBQzs7c0JBQUQ7d0JBQUEsQUFBTTtBQUFOO0FBQUEsZ0RBQWEseUJBQXlCLEVBQWhDLEFBQWdDLEFBQUMsQUFBUTtzQkFBekM7d0JBRFYsQUFDSSxBQUFNLEFBQ0w7QUFESztTQURWLEFBR0ksdUJBQUEsQUFBQyxnQ0FBSyxNQUFOLEFBQVk7c0JBQVo7d0JBQUEsQUFDSTtBQURKO3VCQUNJLGNBQUEsT0FBRyxXQUFILEFBQWEsVUFBUyxTQUFTLG1CQUFBO21CQUFNLFlBQU4sQUFBTSxBQUFZO0FBQWpEO3NCQUFBO3dCQUFBLEFBQTBEO0FBQTFEOzhDQUErRCxLQUFLLFVBQVYsQUFBb0IsT0FBTyxXQUEzQixBQUFxQztzQkFBckM7d0JBTHRFLEFBQ0ksQUFHSSxBQUNJLEFBQTBELEFBSXpFO0FBSnlFOztBQVAxRTtBQVlBLE9BQUEsQUFBTztXQUNJLG9CQURRLEFBQ0UsQUFDakI7WUFBUSxvQkFGTyxBQUVHLEFBQ2xCO1lBQVEsb0JBSE8sQUFHRyxBQUNsQjthQUFTLG9CQUpiLEFBQW1CLEFBSUksQUFFdkI7QUFObUIsQUFDZjtrQkFLSixBQUFlIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveW9uZ3l1ZWh1YW5nL1dlYnN0b3JtUHJvamVjdHMvcmVhY3QtbmV4dCJ9