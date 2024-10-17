import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000',
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
        return error
    })
}

export { useAxiosInterceptor, api }


