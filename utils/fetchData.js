import axios from 'axios'

//封装好的get和post接口，调用方法情况action文件
const fetchData = axios.create({
    baseURL: 'http://www.easy-mock.com/mock/59db2b2a47bc3811aa7c7250/fictions', //设置默认api路径
    timeout: 50000, //设置超时时间
    headers: {
        'X-Custom-Header': 'foobar'
    }
})

export default fetchData