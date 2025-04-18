import api from "./api";

export const loginService = async (userData) => {
    try {
        const response = await api.post("/auth/login/", userData)
        return response.data;
    } catch (error) {
        throw error;
    }
}