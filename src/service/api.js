import axios from "axios"

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true // refresh token cookie-da bo‘lsa, bu kerak
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token")
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

let isRefreshing = false
let failedQueue = []

const processQueue = (error, token = null) => {
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error)
        } else {
            prom.resolve(token)
        }
    })
    failedQueue = []
}

api.interceptors.response.use(
    response => response,
    async (error) => {
        const originalRequest = error.config

        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            if (isRefreshing) {
                return new Promise(function (resolve, reject) {
                    failedQueue.push({ resolve, reject })
                }).then(token => {
                    originalRequest.headers.Authorization = `Bearer ${token}`
                    return api(originalRequest)
                }).catch(err => {
                    return Promise.reject(err)
                })
            }

            originalRequest._retry = true
            isRefreshing = true

            try {
                const refreshToken = localStorage.getItem("refresh")
                const res = await axios.post(
                    `${import.meta.env.VITE_API_BASE_URL}/token/refresh/`,
                    { refresh: refreshToken },
                    // { withCredentials: true } // cookie yuboriladi // httpOnly cookie bo‘lsa, bu kerak
                )

                const newAccessToken = res.data.access
                const newRefreshToken = res.data.refresh
                localStorage.setItem("token", newAccessToken)
                localStorage.setItem("refresh", newRefreshToken)

                api.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`
                processQueue(null, newToken)
                return api(originalRequest)
            } catch (err) {
                processQueue(err, null)
                localStorage.removeItem("token")
                localStorage.removeItem("refresh")
                window.location.href = "/"
                return Promise.reject(err)
            } finally {
                isRefreshing = false
            }
        }

        return Promise.reject(error)
    }
)

export default api
