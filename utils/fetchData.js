import axios from 'axios'

//封装好的get和post接口，调用方法情况action文件
const fetchData = axios.create({
    baseURL: 'http://localhost:3005', //设置默认api路径
    timeout: 10000, //设置超时时间
    headers: {
        'X-Custom-Header': 'value'
    }
})

export default fetchData