import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
})

api.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem("token")
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

api.interceptors.response.use(
    response => response,
    (error) => {
        
        if (error.response && error.response.status === 401) {
            console.error("Unauthorized access - redirecting to login")
        }
        return Promise.reject(error)
    }
)

export default api