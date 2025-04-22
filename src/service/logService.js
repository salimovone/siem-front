import api from "./api";

export const logService = async () => {
    try {
        const response = await api.get("/agent/event-logs/")
        return response.data;
    } catch (error) {
        throw error;
    }
}