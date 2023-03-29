import axios from "axios"

const token = localStorage.getItem('IToken')

console.log(token, 'from outside in the axiosConfig')
const axiosRequest = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    headers: {
        'Authorization': token
    }
})

export default axiosRequest