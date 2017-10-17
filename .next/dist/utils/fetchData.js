'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//封装好的get和post接口，调用方法情况action文件
var fetchData = _axios2.default.create({
    baseURL: 'https://www.easy-mock.com/mock/593611b991470c0ac101d474', //设置默认api路径
    timeout: 10000, //设置超时时间
    headers: {
        'X-Custom-Header': 'foobar'
    }
});

exports.default = fetchData;