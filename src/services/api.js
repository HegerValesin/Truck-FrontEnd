import axios from 'axios';


const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

//ajustado .env
export default api;