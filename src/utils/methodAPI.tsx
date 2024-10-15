import {api} from "./axiosRequest";

const fetchUserData = async (token: any) => {
    try {
        const response = await api.get('auth/me', {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        console.log(response);
        return response.data
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
};

const loginData = async (data: object) => {
    console.log(data);
    try {
        const response = await api.post('/auth/login', data);
        console.log("login:  " + response);
        return response
    } catch (error) {
        console.log("loi trong login: " + error);
    }
}

const refreshToken = async () => {
    //auth/refresh
    let refreshToken = localStorage.getItem('refreshToken');
    // console.log(refreshToken);
    try {
        const response = await api.post('/auth/refresh', {
            refreshToken: refreshToken,
            expiresInMins: 30,
        });
        console.log(response);
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        return response
    } catch (error) {
        console.log("loi refresh token: " + error);
    }
}

export { fetchUserData, loginData, refreshToken }