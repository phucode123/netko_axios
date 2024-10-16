// import axios from 'axios'
// // import { refreshToken } from './methodAPI';

// const api = axios.create({
//     // baseURL: 'https://dummyjson.com',
//     // baseURL: 'https://ttcs-delta.vercel.app/api/',
//     timeout: 10000,
// })
// let requestCount = 0;

// const useAxiosInterceptor = (setLoading: (loading: boolean) => void) => {
//     api.interceptors.request.use(function (config) {
//         requestCount++;
//         setLoading(true)
//         console.log('gui request');
//         return config;
//     }, function (error) {
//         setLoading(false)
//         console.log("loi khi gui request: " + error.message);
//         return error.message;
//     })

//     api.interceptors.response.use(function (config) {
//         console.log('nhan response');
//         requestCount--;
//         if (requestCount === 0) setLoading(false);
//         return config
//     }, async function (error) {
//         console.log('nhan response that bai');
//         setLoading(false);
//         return error
//     })
// }

// export { useAxiosInterceptor, api }


export{}