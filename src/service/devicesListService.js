import api from "./api";

export const devicesList = async () => {
    try {
        const response = await api.get("/agent/device/list/");
        return response.data;
    } catch (error) {
        throw error;
    }
}