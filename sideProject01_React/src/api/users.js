import SignUp from "../pages/SignUp";
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
    },
    signUp : async (userId, userPwd, userName, email) => {
        try {
            const requestBody = { userId, userPwd, userName, email };
            const response = await axios.post(API_ENDPOINTS.USER.SIGNUP, requestBody);
            return response.data;
        } catch (error) {
            console.error("회원가입 실패", error);
            throw error;
        }
    },
    update : async (userNo, userName, email) => {
        try {
            const requestBody = { userNo, userName, email };
            const response = await axios.patch(API_ENDPOINTS.USER.UPDATE, requestBody);
            return response.data;
        } catch (error) {
            console.error("회원정보 수정 실패", error);
            throw error;
        }  
    }
};