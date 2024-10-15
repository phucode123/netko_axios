import axios from 'axios'
import { refreshToken } from './methodAPI';

const api = axios.create({
    baseURL: 'https://dummyjson.com',
    timeout: 10000,
})
let requestCount = 0;
const useAxiosInterceptor = (setLoading: (loading: boolean) => void) => {
    api.interceptors.request.use(function (config) {
        requestCount++;
        setLoading(true)
        return config;
    }, function (error) {
        setLoading(false)
        console.log("loi khi gui request: " + error.message);
        return error.message;
    })

    api.interceptors.response.use(function (config) {
        requestCount--;
        if (requestCount === 0) setLoading(false);
        return config
    }, async function (error) {
        setLoading(false);
        requestCount--;
        if (requestCount === 0) setLoading(false);
        if (error.status == 500 && error.response.data.message == 'invalid token') {
            console.log("loi 500: " + error.response.data.message);
            refreshToken();
        }
        else if (error.status == 401 && error.response.data.message == 'Refresh token required' || error.response.data.message == "Token Expired!") {
            console.log("Loi 401: " + error.response.data.message);
            let res: any = refreshToken();
            console.log(res);
        }
        else if (error.status == 403 && error.response.data.message == "Invalid refresh token") {
            console.log("Loi 403: " + error.response.data.message);
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken')
        }
        else {
            console.log("loi khi nhan response! hãy kiểm tra");
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken')
        }
        return error
    })
}

export { useAxiosInterceptor, api }


