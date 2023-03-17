import axios from "axios"

const token = localStorage.getItem('IToken')

const axiosRequest = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        'Authorization': token
    }
})

export default axiosRequest