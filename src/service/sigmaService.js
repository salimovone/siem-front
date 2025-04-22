import api from "./api";

class SigmaService {
    async getSigmaData() {
        try {
            const response = await api.get("/agent/sigma-rules//");
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}
export const sigmaService = new SigmaService();