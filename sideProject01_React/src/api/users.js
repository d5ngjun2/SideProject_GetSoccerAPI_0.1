import { API_ENDPOINTS } from "./config";
import axios from "axios";

export const userService = {
    login : async (userId, userPwd) => {
        try {
            const requestBody = { userId, userPwd };
            const response = await axios.post(API_ENDPOINTS.USER.LOGIN, requestBody);
            return response.data;
        } catch (error) {
            console.error("로그인 실패", error);
            throw error;
        }
    }
};