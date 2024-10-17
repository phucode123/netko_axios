import { api } from "./axiosRequest";


const loginData = async (data: object) => {
    console.log(data);
    try {
        const response = await api.post('/users', data);
        console.log("login:  " + response);
        return response
    } catch (error) {
        console.log("loi trong login: " + error);
    }
}

const getToDos = async () => {
    try {
        const response = await api.get('/todolist');
        console.log("get:  " + response);
        return response
    } catch (error) {
        console.log("loi trong get list: " + error);
    }
}
const addToDo = async (data:object) => {
    try {
        const response = await api.post('/todolist',data);
        console.log("get:  " + response);
        return response
    } catch (error) {
        console.log("loi trong get list: " + error);
    }
}

export { loginData , getToDos,addToDo}