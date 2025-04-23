import api from "./api";

// API bazaviy URL
const BASE_URL = "/agent/sigma-rules/";

// Sigma qoidalar ro'yxatini olish
export const getRules = async () => {
    try {
        const response = await api.get(BASE_URL);
        return response.data; // Qoidalar ro'yxatini qaytaradi
    } catch (error) {
        console.error("Error fetching sigma rules:", error);
        throw error;
    }
};

// Sigma qoidani o'chirish
export const deleteRule = async (ruleId) => {
    try {
        const response = await api.delete(`${BASE_URL}${ruleId}/`);
        return response.data; // O'chirilgan qoidaning ma'lumotlarini qaytaradi
    } catch (error) {
        console.error(`Error deleting sigma rule with ID ${ruleId}:`, error);
        throw error;
    }
};

// Sigma qoidani yangilash
export const updateRule = async (ruleId, updatedData) => {
    try {
        const response = await api.put(`${BASE_URL}${ruleId}/`, updatedData);
        return response.data; // Yangilangan qoidaning ma'lumotlarini qaytaradi
    } catch (error) {
        console.error(`Error updating sigma rule with ID ${ruleId}:`, error);
        throw error;
    }
};

// Yangi sigma qoidani yaratish (fayl bilan birga)
export const createRule = async (newRuleData) => {
    try {
        const formData = new FormData();
        formData.append("name", newRuleData.name);
        formData.append("is_active", newRuleData.is_active);
        formData.append("file", newRuleData.file);

        const response = await api.post(BASE_URL, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data; // Yaratilgan qoidaning ma'lumotlarini qaytaradi
    } catch (error) {
        console.error("Error creating sigma rule:", error);
        throw error;
    }
};