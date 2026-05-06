import { api } from "./api";

export const apiService = {
    async getMeals() {
            try {
                const response = await api.get('/public/meals');
                const data = response.data.data;
                return data;
            } catch (error) {
                console.error(error.message);
            }
    
        },
}