import axios from "axios"

const token = localStorage.getItem('IToken')

const axiosRequest = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    headers: {
        'Authorization': token
    }
})

axiosRequest.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if(error?.response?.data?.message === 'Invalid token'){
            localStorage.removeItem('IToken')
            window.location.href = '/login'
            console.log('found man')
        }
    }
);

export default axiosRequest