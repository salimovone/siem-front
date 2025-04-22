import api from "./api";

export const defaultGetService = async (url="") => {
    try {
        const response = await api.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
}